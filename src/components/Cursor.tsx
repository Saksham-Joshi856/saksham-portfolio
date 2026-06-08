import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import { isTouchDevice, prefersReducedMotion } from "../utils/motion";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouchDevice() || prefersReducedMotion()) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;
    let rafId = 0;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        cursor.style.transform = `translate3d(${cursorPos.x}px, ${cursorPos.y}px, 0)`;
      }
      rafId = requestAnimationFrame(loop);
    };

    document.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    const hoverElements = document.querySelectorAll("[data-cursor]");
    const hoverHandlers: Array<{
      element: HTMLElement;
      onEnter: (e: MouseEvent) => void;
      onLeave: () => void;
    }> = [];

    hoverElements.forEach((item) => {
      const element = item as HTMLElement;

      const onEnter = (e: MouseEvent) => {
        const target = e.currentTarget as HTMLElement;
        const rect = target.getBoundingClientRect();

        if (element.dataset.cursor === "icons") {
          cursor.classList.add("cursor-icons");
          cursor.style.transform = `translate3d(${rect.left}px, ${rect.top}px, 0)`;
          cursor.style.setProperty("--cursorH", `${rect.height}px`);
          hover = true;
        }
        if (element.dataset.cursor === "disable") {
          cursor.classList.add("cursor-disable");
        }
      };

      const onLeave = () => {
        cursor.classList.remove("cursor-disable", "cursor-icons");
        hover = false;
      };

      element.addEventListener("mouseover", onEnter);
      element.addEventListener("mouseout", onLeave);
      hoverHandlers.push({ element, onEnter, onLeave });
    });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      hoverHandlers.forEach(({ element, onEnter, onLeave }) => {
        element.removeEventListener("mouseover", onEnter);
        element.removeEventListener("mouseout", onLeave);
      });
    };
  }, []);

  if (isTouchDevice() || prefersReducedMotion()) {
    return null;
  }

  return <div className="cursor-main" ref={cursorRef} aria-hidden="true"></div>;
};

export default Cursor;
