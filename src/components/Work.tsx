import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    title: "RecruitAI",
    description: "AI-powered resume screening system that screens hundreds of resumes instantly with semantic matching and deep insights.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "OpenRouter API", "Framer Motion"],
    image: "/images/recruitai-screenshot.png",
    liveDemo: "https://resume-matcher-frontend-eight.vercel.app",
    github: "https://github.com/Saksham-Joshi856",
  },
  {
    title: "Maanavta Hitaay",
    description: "NGO website with secure donation integration, instant receipts, and 80G tax benefit support using Razorpay.",
    techStack: ["React.js", "Tailwind CSS", "Razorpay Integration", "Responsive Design", "Node.js Backend"],
    image: "/images/maanavta-screenshot.png",
    liveDemo: "https://maanavtahitaay.org/",
    github: "https://github.com/Saksham-Joshi856",
  },
];

const Work = () => {
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image-wrapper">
                <WorkImage
                  image={project.image}
                  alt={project.title}
                  link={project.liveDemo}
                />
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tech-stack">
                  <span className="tech-label">Tech Stack</span>
                  <div className="tech-tags">
                    {project.techStack.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link demo-link"
                    data-cursor="disable"
                  >
                    <MdArrowOutward /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link github-link"
                    data-cursor="disable"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
