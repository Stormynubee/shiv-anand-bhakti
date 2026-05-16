import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = ({ finishLoading }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Sequence the animations
    const timer1 = setTimeout(() => setStage(1), 500); // Show Om
    const timer2 = setTimeout(() => setStage(2), 1500); // Show text
    const timer3 = setTimeout(() => {
      finishLoading(); // Unmount
    }, 2800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [finishLoading]);

  return (
    <motion.div 
      className="splash-screen"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: -50, 
        scale: 1.05,
        filter: 'blur(10px)',
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
    >
      <div className="splash-content">
        <div className="splash-mandala"></div>
        <motion.div 
          className="splash-om"
          initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
          animate={{ 
            opacity: stage >= 1 ? 1 : 0, 
            scale: stage >= 1 ? 1 : 0.5,
            rotate: stage >= 1 ? 0 : -45
          }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
        >
          ॐ
        </motion.div>
        
        <motion.div 
          className="splash-text-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: stage >= 2 ? 1 : 0, 
            y: stage >= 2 ? 0 : 20 
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="splash-title">Shiv Anand Bhakti</h1>
          <p className="splash-subtitle">Sanatana Dharma Ki Seva Mein</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SplashScreen;
