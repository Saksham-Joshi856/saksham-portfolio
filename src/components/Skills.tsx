import { skillGroups } from "../data/skills";
import Section from "./Section";
import "./styles/Skills.css";
import { Reveal, RevealList, RevealItem } from "./Reveal";
import { motion } from "framer-motion";
import { DecryptedText } from "./FuturisticText";

const Skills = () => {
  return (
    <Section id="skills" ariaLabelledBy="skills-heading">
      <Reveal>
        <h2 id="skills-heading" className="section__title">
          <DecryptedText text="Skills" speed={50} maxIterations={12} />
        </h2>
        <p className="section__lead">
          Technologies and tools I use to build production-ready applications.
        </p>
      </Reveal>
      <div className="skills-grid">
        <RevealList staggerDelay={0.15}>
          {skillGroups.map((group) => (
            <RevealItem key={group.category}>
              <motion.article
                className="skills-card"
                whileHover={{
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px -10px rgba(94, 234, 212, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ perspective: 1000 }}
              >
                <h3>
                  <DecryptedText text={group.category} speed={40} maxIterations={10} />
                </h3>
                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>
                      <span className="badge badge--muted">{skill}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Skills;
