import { useEffect, useState } from "react";
import { profile } from "../data/profile";

export type LeetCodeStats = {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
};

export function useLeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchStats() {
      try {
        const response = await fetch(
          `https://leetcode-stats-api.herokuapp.com/${profile.leetcode}`,
          { signal: controller.signal }
        );

        if (!response.ok) throw new Error("LeetCode API unavailable");

        const data = await response.json();
        if (data.status !== "success") throw new Error("Invalid LeetCode response");

        setStats({
          totalSolved: data.totalSolved ?? 0,
          easySolved: data.easySolved ?? 0,
          mediumSolved: data.mediumSolved ?? 0,
          hardSolved: data.hardSolved ?? 0,
          ranking: data.ranking ?? 0,
        });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    void fetchStats();
    return () => controller.abort();
  }, []);

  return { stats, loading, error };
}
