import { useEffect, useState } from "react";
import { profile } from "../data/profile";

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
};

const CACHE_KEY = "github_repos_cache";
const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

type CachePayload = {
  timestamp: number;
  repos: GitHubRepo[];
};

function readCache(): GitHubRepo[] | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachePayload;
    if (Date.now() - parsed.timestamp > CACHE_TTL) return null;
    return parsed.repos;
  } catch {
    return null;
  }
}

function writeCache(repos: GitHubRepo[]) {
  try {
    const payload: CachePayload = { timestamp: Date.now(), repos };
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload));
  } catch {
    // ignore quota errors
  }
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cached = readCache();
    if (cached) {
      setRepos(cached);
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${profile.githubUsername}/repos?sort=updated&per_page=12`,
          {
            signal: controller.signal,
            headers: { Accept: "application/vnd.github+json" },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = (await response.json()) as GitHubRepo[];
        const sorted = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);

        writeCache(sorted);
        setRepos(sorted);
        setError(null);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError("Unable to load GitHub repositories right now.");
        }
      } finally {
        setLoading(false);
      }
    }

    void fetchRepos();
    return () => controller.abort();
  }, []);

  return { repos, loading, error };
}
