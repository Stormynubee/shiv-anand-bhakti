import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, direction = 'up', distance = 20, duration = 0.6 }) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {}
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        ...directions[direction] 
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, staggerDelay = 0.1, delay = 0 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: delay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, direction = 'up', distance = 20 }) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, ...directions[direction] },
        show: { 
          opacity: 1, 
          x: 0, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1]
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const Reveal = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
