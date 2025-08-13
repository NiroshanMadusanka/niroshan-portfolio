import React from "react";
import { motion } from "framer-motion";

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  ...props
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 50 };
      case "down":
        return { opacity: 0, y: -50 };
      case "left":
        return { opacity: 0, x: 50 };
      case "right":
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getAnimatePosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 };
      case "left":
      case "right":
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  return (
    <motion.section
      initial={getInitialPosition()}
      whileInView={getAnimatePosition()}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
