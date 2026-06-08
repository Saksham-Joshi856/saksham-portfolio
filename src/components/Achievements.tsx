import { achievements } from "../data/achievements";
import Section from "./Section";
import "./styles/Achievements.css";

const Achievements = () => {
  return (
    <Section id="achievements" ariaLabelledBy="achievements-heading">
      <h2 id="achievements-heading" className="section__title">
        Achievements
      </h2>
      <div className="achievements-grid">
        {achievements.map((item) => (
          <article key={item.title} className="achievement-card">
            <div className="achievement-card__top">
              <h3>{item.title}</h3>
              <span className="badge">{item.year}</span>
            </div>
            <p className="achievement-card__subtitle">{item.subtitle}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
