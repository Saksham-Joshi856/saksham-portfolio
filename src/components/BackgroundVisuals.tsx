import { useEffect, useRef } from "react";

export const BackgroundVisuals = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (blobRef.current) {
        const { clientX, clientY } = e;
        blobRef.current.style.left = `${clientX}px`;
        blobRef.current.style.top = `${clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Animated Noise Texture Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Futuristic Grid Background */}
      <div className="grid-background" aria-hidden="true" />

      {/* Mouse-following Radial Gradient Blob */}
      <div ref={blobRef} className="mouse-blob" aria-hidden="true" />

      {/* Static Ambient Gradients */}
      <div className="ambient-gradient ambient-gradient--1" aria-hidden="true" />
      <div className="ambient-gradient ambient-gradient--2" aria-hidden="true" />
    </>
  );
};
