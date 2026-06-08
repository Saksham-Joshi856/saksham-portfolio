import { useLeetCodeStats } from "../hooks/useLeetCodeStats";
import Section from "./Section";
import "./styles/LeetCodeStats.css";

const LeetCodeStats = () => {
  const { stats, loading, error } = useLeetCodeStats();

  if (loading) return null;
  if (error || !stats) return null;

  return (
    <Section id="leetcode" ariaLabelledBy="leetcode-heading">
      <h2 id="leetcode-heading" className="section__title">
        LeetCode
      </h2>
      <p className="section__lead">Public problem-solving stats from LeetCode.</p>
      <div className="leetcode-grid">
        <div className="stat-card">
          <span className="stat-card__value">{stats.totalSolved}</span>
          <span className="stat-card__label">Problems Solved</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.easySolved}</span>
          <span className="stat-card__label">Easy</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.mediumSolved}</span>
          <span className="stat-card__label">Medium</span>
        </div>
        <div className="stat-card">
          <span className="stat-card__value">{stats.hardSolved}</span>
          <span className="stat-card__label">Hard</span>
        </div>
        {stats.ranking > 0 && (
          <div className="stat-card">
            <span className="stat-card__value">{stats.ranking.toLocaleString()}</span>
            <span className="stat-card__label">Contest Rating</span>
          </div>
        )}
      </div>
    </Section>
  );
};

export default LeetCodeStats;
