import { profile, heroTech } from "../data/profile";
import Section from "./Section";
import "./styles/Hero.css";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Reveal } from "./Reveal";
import { DecryptedText, TypingText } from "./FuturisticText";
import { Magnetic } from "./Magnet";

const Hero = () => {
  return (
    <Section id="hero" className="hero-section" ariaLabelledBy="hero-heading">
      <div className="hero">
        <Reveal direction="down" delay={0.2} blur={false}>
          <div className="hero__image" aria-hidden="true">
            <div className="hero__avatar">
              <span>{profile.initials}</span>
            </div>
          </div>
        </Reveal>

        <div className="hero__content">
          <Reveal delay={0.6}>
            <p className="hero__eyebrow">
              <TypingText text="Software Engineer Portfolio" delay={0.6} />
            </p>
            <h1 id="hero-heading" className="hero__name">
              <DecryptedText text={profile.name} speed={50} maxIterations={15} />
            </h1>
          </Reveal>
          
          <Reveal delay={0.9}>
            <p className="hero__role">
              <TypingText text={profile.role} delay={0.9} speed={0.03} />
            </p>
          </Reveal>
          
          <Reveal delay={1.2}>
            <p className="hero__tagline">{profile.tagline}</p>
          </Reveal>
          
          <Reveal delay={1.5}>
            <p className="hero__summary">{profile.summary}</p>
          </Reveal>

          <Reveal delay={1.8}>
            <div className="hero__tech" aria-label="Key technologies">
              {heroTech.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2.1}>
            <div className="hero__actions">
              <Magnetic strength={0.2}>
                <a href="#projects" className="btn btn--primary">
                  View Projects
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={profile.resume}
                  className="btn btn--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Magnetic>
            </div>
          </Reveal>

          <Reveal delay={2.4}>
            <div className="hero__links">
              <Magnetic strength={0.3}>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub aria-hidden="true" /> GitHub <MdArrowOutward aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedinIn aria-hidden="true" /> LinkedIn <MdArrowOutward aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href={profile.leetcodeUrl} target="_blank" rel="noopener noreferrer">
                  <SiLeetcode aria-hidden="true" /> LeetCode <MdArrowOutward aria-hidden="true" />
                </a>
              </Magnetic>
              <Magnetic strength={0.3}>
                <a href={`mailto:${profile.email}`}>
                  Email <MdArrowOutward aria-hidden="true" />
                </a>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
