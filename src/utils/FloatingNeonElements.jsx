import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingNeonElements = () => {
  const elements = [
    { id: 1, x: '10%', y: '20%', color: 'from-cyan-500 to-cyan-600', delay: 0 },
    { id: 2, x: '90%', y: '30%', color: 'from-pink-500 to-pink-600', delay: 0.5 },
    { id: 3, x: '20%', y: '70%', color: 'from-purple-500 to-purple-600', delay: 1 },
    { id: 4, x: '85%', y: '80%', color: 'from-blue-500 to-blue-600', delay: 1.5 },
    { id: 5, x: '50%', y: '10%', color: 'from-cyan-500 to-pink-500', delay: 2 },
    { id: 6, x: '15%', y: '50%', color: 'from-pink-500 to-purple-500', delay: 2.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute w-96 h-96 rounded-full bg-gradient-to-br ${element.color} blur-3xl`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingNeonElements;
