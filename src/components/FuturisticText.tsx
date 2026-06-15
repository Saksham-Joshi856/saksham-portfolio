import { useState, useEffect, useRef, ReactNode } from "react";
import { motion, useInView, Variants } from "framer-motion";

const GLYPHS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&?@$";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDuration?: number;
  className?: string;
  as?: React.ElementType;
}

export const DecryptedText = ({
  text,
  speed = 40,
  maxIterations = 10,
  sequential = true,
  className = "",
  as: Component = "span",
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && !isAnimating) {
      let iteration = 0;
      let interval: number;

      setIsAnimating(true);

      interval = window.setInterval(() => {
        setDisplayText(() => {
          return text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (sequential) {
                if (index < iteration / maxIterations) return char;
              } else {
                if (iteration > maxIterations) return char;
              }
              return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
            })
            .join("");
        });

        iteration += 1;

        if (iteration > text.length * maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsAnimating(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isInView, text, speed, maxIterations, sequential, isAnimating]);

  return (
    <Component ref={ref} className={className}>
      {displayText || text.split("").map(() => " ").join("")}
    </Component>
  );
};

export const TypingText = ({
  text,
  delay = 0,
  speed = 0.05,
  className = "",
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
}) => {
  const letters = Array.from(text);
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: speed, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 10,
    },
  };

  return (
    <motion.span
      style={{ display: "inline-block" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} style={{ display: "inline-block", whiteSpace: "pre" }}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const MaskText = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) => {
  return (
    <div style={{ overflow: "hidden", position: "relative" }}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay,
          ease: [0.33, 1, 0.68, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};
