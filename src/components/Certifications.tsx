import { certifications } from "../data/certifications";
import Section from "./Section";
import "./styles/Certifications.css";

const Certifications = () => {
  return (
    <Section id="certifications" ariaLabelledBy="certifications-heading">
      <h2 id="certifications-heading" className="section__title">
        Certifications & Programs
      </h2>
      <div className="cert-grid">
        {certifications.map((item) => (
          <article key={item.title} className="cert-card">
            <div className="cert-card__top">
              <h3>{item.title}</h3>
              <span className="badge">{item.year}</span>
            </div>
            <p className="cert-card__issuer">{item.issuer}</p>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;
