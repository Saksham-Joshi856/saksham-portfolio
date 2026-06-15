import { achievements } from "../data/achievements";
import Section from "./Section";
import "./styles/Achievements.css";
import { Reveal, RevealList, RevealItem } from "./Reveal";
import { motion } from "framer-motion";

const Achievements = () => {
  return (
    <Section id="achievements" ariaLabelledBy="achievements-heading">
      <Reveal>
        <h2 id="achievements-heading" className="section__title">
          Achievements
        </h2>
      </Reveal>
      <div className="achievements-grid">
        <RevealList staggerDelay={0.1}>
          {achievements.map((item) => (
            <RevealItem key={item.title}>
              <motion.article
                className="achievement-card"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="achievement-card__top">
                  <h3>{item.title}</h3>
                  <span className="badge">{item.year}</span>
                </div>
                <p className="achievement-card__subtitle">{item.subtitle}</p>
                <p>{item.description}</p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Achievements;
