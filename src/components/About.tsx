import Section from "./Section";
import "./styles/About.css";
import { Reveal } from "./Reveal";
import { DecryptedText, MaskText } from "./FuturisticText";

const About = () => {
  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <Reveal>
        <h2 id="about-heading" className="section__title">
          <DecryptedText text="About" speed={60} maxIterations={12} />
        </h2>
      </Reveal>
      <div className="section__content">
        <MaskText delay={0.3}>
          <p className="section__lead">
            I am a Computer Engineering student at Pimpri Chinchwad College of Engineering
            (PCCOE), Pune. I enjoy building modern web applications, AI-powered tools, and
            responsive user experiences.
          </p>
        </MaskText>
        <MaskText delay={0.6}>
          <p className="section__text">
            My interests include full-stack development, problem solving, cloud technologies,
            and creating impactful products that solve real-world problems. I focus on writing
            maintainable code, shipping reliable features, and learning continuously through
            projects, competitions, and industry events.
          </p>
        </MaskText>
      </div>
    </Section>
  );
};

export default About;
