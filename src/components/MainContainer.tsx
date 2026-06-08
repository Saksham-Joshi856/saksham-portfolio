import { memo } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import GitHubRepos from "./GitHubRepos";
import LeetCodeStats from "./LeetCodeStats";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Education from "./Education";
import Contact from "./Contact";

const MainContainer = () => {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubRepos />
        <LeetCodeStats />
        <Achievements />
        <Certifications />
        <Education />
        <Contact />
      </main>
    </>
  );
};

export default memo(MainContainer);
