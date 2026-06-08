import { experience } from "../data/experience";
import Section from "./Section";
import "./styles/Experience.css";

const Experience = () => {
  return (
    <Section id="experience" ariaLabelledBy="experience-heading">
      <h2 id="experience-heading" className="section__title">
        Experience
      </h2>
      <div className="timeline">
        {experience.map((item) => (
          <article key={`${item.title}-${item.organization}`} className="timeline__item">
            <div className="timeline__meta">
              <span className="timeline__period">{item.period}</span>
            </div>
            <div className="timeline__body">
              <h3>{item.title}</h3>
              <p className="timeline__org">{item.organization}</p>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
