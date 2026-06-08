import { profile, heroTech } from "../data/profile";
import Section from "./Section";
import "./styles/Hero.css";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

const Hero = () => {
  return (
    <Section id="hero" className="hero-section" ariaLabelledBy="hero-heading">
      <div className="hero">
        <div className="hero__image" aria-hidden="true">
          <div className="hero__avatar">
            <span>{profile.initials}</span>
          </div>
        </div>

        <div className="hero__content">
          <p className="hero__eyebrow">Software Engineer Portfolio</p>
          <h1 id="hero-heading" className="hero__name">
            {profile.name}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__tagline">{profile.tagline}</p>
          <p className="hero__summary">{profile.summary}</p>

          <div className="hero__tech" aria-label="Key technologies">
            {heroTech.map((tech) => (
              <span key={tech} className="badge">
                {tech}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View Projects
            </a>
            <a
              href={profile.resume}
              className="btn btn--secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>

          <div className="hero__links">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub aria-hidden="true" /> GitHub <MdArrowOutward aria-hidden="true" />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn aria-hidden="true" /> LinkedIn <MdArrowOutward aria-hidden="true" />
            </a>
            <a href={`mailto:${profile.email}`}>
              Email <MdArrowOutward aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
