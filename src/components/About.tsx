import Section from "./Section";
import "./styles/About.css";

const About = () => {
  return (
    <Section id="about" ariaLabelledBy="about-heading">
      <h2 id="about-heading" className="section__title">
        About
      </h2>
      <p className="section__lead">
        I am a Computer Engineering student at Pimpri Chinchwad College of Engineering
        (PCCOE), Pune. I enjoy building modern web applications, AI-powered tools, and
        responsive user experiences.
      </p>
      <p className="section__text">
        My interests include full-stack development, problem solving, cloud technologies,
        and creating impactful products that solve real-world problems. I focus on writing
        maintainable code, shipping reliable features, and learning continuously through
        projects, competitions, and industry events.
      </p>
    </Section>
  );
};

export default About;
