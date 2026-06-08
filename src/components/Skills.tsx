import { skillGroups } from "../data/skills";
import Section from "./Section";
import "./styles/Skills.css";

const Skills = () => {
  return (
    <Section id="skills" ariaLabelledBy="skills-heading">
      <h2 id="skills-heading" className="section__title">
        Skills
      </h2>
      <p className="section__lead">
        Technologies and tools I use to build production-ready applications.
      </p>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article key={group.category} className="skills-card">
            <h3>{group.category}</h3>
            <ul>
              {group.skills.map((skill) => (
                <li key={skill}>
                  <span className="badge badge--muted">{skill}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
