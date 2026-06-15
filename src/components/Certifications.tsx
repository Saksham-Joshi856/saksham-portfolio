import { certifications } from "../data/certifications";
import Section from "./Section";
import "./styles/Certifications.css";
import { Reveal, RevealList, RevealItem } from "./Reveal";

const Certifications = () => {
  return (
    <Section id="certifications" ariaLabelledBy="certifications-heading">
      <Reveal>
        <h2 id="certifications-heading" className="section__title">
          Certifications & Programs
        </h2>
      </Reveal>
      <div className="cert-grid">
        <RevealList staggerDelay={0.1}>
          {certifications.map((item) => (
            <RevealItem key={item.title}>
              <article className="cert-card">
                <div className="cert-card__top">
                  <h3>{item.title}</h3>
                  <span className="badge">{item.year}</span>
                </div>
                <p className="cert-card__issuer">{item.issuer}</p>
                <p>{item.description}</p>
              </article>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Certifications;
