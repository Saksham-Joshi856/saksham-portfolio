import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import "./styles/ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top scroll position
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`scroll-to-top ${isVisible ? "scroll-to-top--visible" : ""}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="btn btn--primary scroll-to-top__btn"
        aria-label="Scroll to top"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
};

export default ScrollToTop;
