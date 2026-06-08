import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const clickHandlersRef = useRef<
    Array<{ container: HTMLDivElement; handler: () => void }>
  >([]);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (!ScrollTrigger.isTouch) return;

    clickHandlersRef.current = [];
    containerRef.current.forEach((container) => {
      if (!container) return;
      container.classList.remove("what-noTouch");
      const handler = () => handleClick(container);
      container.addEventListener("click", handler);
      clickHandlersRef.current.push({ container, handler });
    });

    return () => {
      clickHandlersRef.current.forEach(({ container, handler }) => {
        container.removeEventListener("click", handler);
      });
      clickHandlersRef.current = [];
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2" aria-hidden="true">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
            role="button"
            tabIndex={0}
            aria-expanded="false"
          >
            <div className="what-border1" aria-hidden="true">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner" aria-hidden="true"></div>

            <div className="what-content-in">
              <h3>FULL STACK DEVELOPMENT</h3>
              <h4>Building Scalable Web Applications</h4>
              <p>
                Full-stack developer creating responsive web applications with modern technologies.
                I focus on clean code, user experience, and scalable architectures from frontend to backend.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React.js</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">MongoDB</div>
                <div className="what-tags">Express.js</div>
                <div className="what-tags">Tailwind CSS</div>
                <div className="what-tags">Git and GitHub</div>
                <div className="what-tags">REST APIs</div>
              </div>
              <div className="what-arrow" aria-hidden="true"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
            role="button"
            tabIndex={0}
            aria-expanded="false"
          >
            <div className="what-border1" aria-hidden="true">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner" aria-hidden="true"></div>
            <div className="what-content-in">
              <h3>AI and MODERN TECH</h3>
              <h4>AI-Powered Solutions and Innovation</h4>
              <p>
                Building AI-powered tools and applications that solve real-world problems.
                Experienced with LLMs, API integrations, and creating intelligent systems that enhance user experience.
              </p>
              <h5>Skillset and tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">OpenRouter API</div>
                <div className="what-tags">LLMs and AI</div>
                <div className="what-tags">Framer Motion</div>
                <div className="what-tags">Vite</div>
                <div className="what-tags">Cloud and Deployment</div>
              </div>
              <div className="what-arrow" aria-hidden="true"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  const isActive = container.classList.toggle("what-content-active");
  container.setAttribute("aria-expanded", String(isActive));
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
        sibling.setAttribute("aria-expanded", "false");
      }
    });
  }
}
