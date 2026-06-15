import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GlitchEffect = ({ children, className = '' }) => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 100);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className={`relative ${className}`}
      animate={glitch ? { x: [0, -2, 2, -2, 0] } : { x: 0 }}
      transition={{ duration: 0.1 }}
    >
      {/* Original text */}
      <div>{children}</div>

      {/* Glitch layers */}
      {glitch && (
        <>
          <motion.div
            className="absolute inset-0 text-pink-500 opacity-80"
            style={{
              clipPath: `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`,
            }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute inset-0 text-cyan-500 opacity-60"
            style={{
              clipPath: `inset(${Math.random() * 100}% 0 ${Math.random() * 100}% 0)`,
            }}
          >
            {children}
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default GlitchEffect;
