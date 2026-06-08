import { lazy, memo, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { debounce } from "../utils/motion";
import { isDesktopView } from "../utils/device";

const TechStack = lazy(() => import("./TechStack"));

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktop, setIsDesktop] = useState(() => isDesktopView());

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsDesktop(isDesktopView());
      void setSplitText();
    }, 250);

    void setSplitText();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container-main">
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Cursor />
      <Navbar />
      <SocialIcons />
      {isDesktop && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktop && children}</Landing>
            <About />
            <WhatIDo />
            <Career />
            <Work />
            {isDesktop && (
              <Suspense fallback={null}>
                <TechStack />
              </Suspense>
            )}
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(MainContainer);
