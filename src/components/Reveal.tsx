import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  staggerChildren?: number;
  direction?: "up" | "down" | "left" | "right";
  blur?: boolean;
}

export const Reveal = ({
  children,
  width = "100%",
  delay = 0,
  staggerChildren,
  direction = "up",
  blur = true,
}: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  const directions = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  if (shouldReduceMotion) {
    return <div style={{ width }}>{children}</div>;
  }

  return (
    <motion.div
      style={{ width, position: "relative" }}
      variants={{
        hidden: {
          opacity: 0,
          ...directions[direction],
          scale: 0.98,
          filter: blur ? "blur(10px)" : "none",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.8, // Ultra-slow duration
            ease: [0.22, 1, 0.36, 1],
            delay,
            staggerChildren: staggerChildren,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </motion.div>
  );
};

export const RevealList = ({
  children,
  staggerDelay = 0.1,
  delay = 0,
}: {
  children: ReactNode;
  staggerDelay?: number;
  delay?: number;
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      style={{ display: "contents" }}
    >
      {children}
    </motion.div>
  );
};

export const RevealItem = ({
  children,
  blur = true,
}: {
  children: ReactNode;
  blur?: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
          scale: 0.98,
          filter: blur ? "blur(8px)" : "none",
        },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          transition: {
            duration: 1.5, // Cinematic duration for items
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      style={{ display: "contents" }}
    >
      {children}
    </motion.div>
  );
};
