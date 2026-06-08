import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { isTouchDevice, prefersReducedMotion } from "../utils/motion";

const SocialIcons = () => {
  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;

    const social = document.getElementById("social") as HTMLElement | null;
    if (!social) return;

    const spans = Array.from(social.querySelectorAll("span"));
    const rafIds = new Array<number>(spans.length).fill(0);
    const states = spans.map((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      return {
        elem,
        link,
        rect,
        mouseX: rect.width / 2,
        mouseY: rect.height / 2,
        currentX: 0,
        currentY: 0,
      };
    });

    const onMouseMove = (e: MouseEvent) => {
      states.forEach((state) => {
        const x = e.clientX - state.rect.left;
        const y = e.clientY - state.rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          state.mouseX = x;
          state.mouseY = y;
        } else {
          state.mouseX = state.rect.width / 2;
          state.mouseY = state.rect.height / 2;
        }
      });
    };

    states.forEach((state, index) => {
      const updatePosition = () => {
        state.currentX += (state.mouseX - state.currentX) * 0.1;
        state.currentY += (state.mouseY - state.currentY) * 0.1;
        state.link.style.setProperty("--siLeft", `${state.currentX}px`);
        state.link.style.setProperty("--siTop", `${state.currentY}px`);
        rafIds[index] = requestAnimationFrame(updatePosition);
      };
      rafIds[index] = requestAnimationFrame(updatePosition);
    });

    document.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      rafIds.forEach(cancelAnimationFrame);
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://github.com/Saksham-Joshi856"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <FaGithub aria-hidden="true" />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/saksham-joshi-338568349/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href="/Saksham_Joshi_Resume.pdf"
        target="_blank"
        rel="noreferrer"
        aria-label="Open resume PDF"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes aria-hidden="true" />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
