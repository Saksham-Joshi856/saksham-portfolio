import { education } from "../data/education";
import Section from "./Section";
import "./styles/Education.css";
import { Reveal, RevealList, RevealItem } from "./Reveal";

const Education = () => {
  return (
    <Section id="education" ariaLabelledBy="education-heading">
      <Reveal>
        <h2 id="education-heading" className="section__title">
          Education
        </h2>
      </Reveal>
      <div className="education-list">
        <RevealList staggerDelay={0.2}>
          {education.map((item) => (
            <RevealItem key={item.degree}>
              <article className="education-card">
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
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Education;
