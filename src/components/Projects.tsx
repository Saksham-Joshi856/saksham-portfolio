import { projects } from "../data/projects";
import Section from "./Section";
import "./styles/Projects.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import { Reveal, RevealList, RevealItem } from "./Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { DecryptedText } from "./FuturisticText";
import { useRef } from "react";

const ProjectImage = ({ src, alt }: { src: string; alt: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  return (
    <div ref={ref} className="project-card__image" style={{ overflow: "hidden" }}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ scale }}
      />
    </div>
  );
};

const Projects = () => {
  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <Reveal>
        <h2 id="projects-heading" className="section__title">
          <DecryptedText text="Featured Projects" speed={50} maxIterations={15} />
        </h2>
        <p className="section__lead">
          Production-focused work demonstrating full-stack development, AI integration, and
          real-world problem solving.
        </p>
      </Reveal>

      <div className="projects-grid">
        <RevealList staggerDelay={0.3}>
          {projects.map((project) => (
            <RevealItem key={project.title}>
              <motion.article
                className="project-card"
                whileHover={{
                  y: -12,
                  rotateX: 2,
                  rotateY: -2,
                  boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                style={{ perspective: 1000 }}
              >
                <ProjectImage src={project.image} alt={project.title} />

                <div className="project-card__content">
                  <h3>
                    <DecryptedText text={project.title} speed={40} maxIterations={10} />
                  </h3>
                  <p className="project-card__desc">{project.description}</p>

                  <div className="project-card__block">
                    <h4>Problem Solved</h4>
                    <p>{project.problem}</p>
                  </div>

                  <div className="project-card__block">
                    <h4>Key Features</h4>
                    <ul>
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  {project.impact && (
                    <div className="project-card__block">
                      <h4>Impact</h4>
                      <p>{project.impact}</p>
                    </div>
                  )}

                  <div className="project-card__tags">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="badge badge--muted">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-card__links">
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      <MdArrowOutward aria-hidden="true" /> Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--secondary btn--sm"
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealList>
      </div>
    </Section>
  );
};

export default Projects;
