import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const EnhancedMouseTracker = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Framer Motion spring values for ultra-smooth lagging cursor physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      if (!isVisible) setIsVisible(true);

      // Detect hover over interactive elements
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';

      setIsHovered(isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Cinematic ambient cursor background glow */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full blur-3xl opacity-20 hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 200 : 120,
          height: isHovered ? 200 : 120,
          background: 'radial-gradient(circle, rgba(255,107,0,0.4) 0%, transparent 70%)',
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      />

      {/* Sleek outer trailing ring */}
      <motion.div
        className="fixed pointer-events-none z-50 rounded-full border hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          borderColor: isHovered ? '#FFFFFF' : 'rgba(255, 107, 0, 0.4)',
          backgroundColor: isHovered ? 'rgba(255, 107, 0, 0.05)' : 'rgba(255, 107, 0, 0)',
        }}
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      />

      {/* Core active pointer dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(255, 107, 0, 0.8)',
        }}
        animate={{
          scale: isHovered ? 1.8 : 1.0,
          backgroundColor: isHovered ? '#FFFFFF' : '#FF6B00',
        }}
        transition={{ duration: 0.15 }}
        className="fixed pointer-events-none z-50 w-2 h-2 rounded-full bg-[#FF6B00] hidden md:block"
      />
    </>
  );
};

export default EnhancedMouseTracker;
