import { projects } from "../data/projects";
import Section from "./Section";
import "./styles/Projects.css";
import { FaGithub } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

const Projects = () => {
  return (
    <Section id="projects" ariaLabelledBy="projects-heading">
      <h2 id="projects-heading" className="section__title">
        Featured Projects
      </h2>
      <p className="section__lead">
        Production-focused work demonstrating full-stack development, AI integration, and
        real-world problem solving.
      </p>

      <div className="projects-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <div className="project-card__image">
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            </div>

            <div className="project-card__content">
              <h3>{project.title}</h3>
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
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
