import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { debounce, prefersReducedMotion } from "../utils/motion";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const reducedMotion = prefersReducedMotion();

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: reducedMotion ? 0.5 : 1.2,
      speed: reducedMotion ? 1 : 1.4,
      effects: !reducedMotion,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const clickHandlers: Array<{ element: HTMLAnchorElement; handler: (e: Event) => void }> =
      [];

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;
      const handler = (e: Event) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          const section = element.getAttribute("data-href");
          if (section) {
            smoother.scrollTo(section, true, "top top");
          }
        }
      };
      element.addEventListener("click", handler);
      clickHandlers.push({ element, handler });
    });

    const onResize = debounce(() => {
      ScrollSmoother.refresh(true);
    }, 200);

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
      smoother?.kill();
    };
  }, []);

  return (
    <>
      <nav className="header" aria-label="Primary navigation">
        <a href="/#" className="navbar-title" data-cursor="disable" aria-label="Home">
          SJ
        </a>
        <a
          href="https://www.linkedin.com/in/saksham-joshi-338568349/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/saksham-joshi-338568349
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="landing-circle1" aria-hidden="true"></div>
      <div className="landing-circle2" aria-hidden="true"></div>
      <div className="nav-fade" aria-hidden="true"></div>
    </>
  );
};

export default Navbar;
