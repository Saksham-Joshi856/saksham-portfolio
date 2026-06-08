import { education } from "../data/education";
import Section from "./Section";
import "./styles/Education.css";

const Education = () => {
  return (
    <Section id="education" ariaLabelledBy="education-heading">
      <h2 id="education-heading" className="section__title">
        Education
      </h2>
      <div className="education-list">
        {education.map((item) => (
          <article key={item.degree} className="education-card">
            <div className="education-card__top">
              <div>
                <h3>{item.degree}</h3>
                <p className="education-card__institution">{item.institution}</p>
              </div>
              <div className="education-card__meta">
                <span className="badge">{item.period}</span>
                <span className="badge badge--accent">{item.score}</span>
              </div>
            </div>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Education;
