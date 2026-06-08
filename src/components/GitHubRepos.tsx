import { useGitHubRepos } from "../hooks/useGitHubRepos";
import { profile } from "../data/profile";
import Section from "./Section";
import "./styles/GitHubRepos.css";
import { FaStar, FaCodeBranch } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const GitHubRepos = () => {
  const { repos, loading, error } = useGitHubRepos();

  return (
    <Section id="github" ariaLabelledBy="github-heading">
      <div className="section__header-row">
        <div>
          <h2 id="github-heading" className="section__title">
            GitHub
          </h2>
          <p className="section__lead">Open-source repositories fetched live from GitHub.</p>
        </div>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--secondary btn--sm"
        >
          View Profile <MdArrowOutward aria-hidden="true" />
        </a>
      </div>

      {loading && <p className="status-text">Loading repositories…</p>}
      {error && <p className="status-text status-text--error">{error}</p>}

      {!loading && !error && (
        <div className="github-grid">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-card"
            >
              <h3>{repo.name}</h3>
              <p>{repo.description ?? "No description provided."}</p>
              <div className="github-card__meta">
                {repo.language && <span className="badge badge--muted">{repo.language}</span>}
                <span>
                  <FaStar aria-hidden="true" /> {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch aria-hidden="true" /> {repo.forks_count}
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </Section>
  );
};

export default GitHubRepos;
