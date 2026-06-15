import { experience } from "../data/experience";
import Section from "./Section";
import "./styles/Experience.css";
import { Reveal, RevealList, RevealItem } from "./Reveal";
import { DecryptedText } from "./FuturisticText";

const Experience = () => {
  return (
    <Section id="experience" ariaLabelledBy="experience-heading">
      <Reveal>
        <h2 id="experience-heading" className="section__title">
          <DecryptedText text="Experience" speed={50} maxIterations={12} />
        </h2>
      </Reveal>
      <div className="timeline">
        <RevealList staggerDelay={0.6}>
          {experience.map((item) => (
            <RevealItem key={`${item.title}-${item.organization}`}>
              <article className="timeline__item">
                <div className="timeline__meta">
                  <span className="timeline__period">{item.period}</span>
                </div>
                <div className="timeline__body">
                  <h3>
                    <DecryptedText text={item.title} speed={40} maxIterations={10} />
                  </h3>
                  <p className="timeline__org">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Experience;
