import React from 'react';
import { motion } from 'framer-motion';

const NeonText = ({ children, className = '', color = 'orange' }) => {
  const colorMap = {
    cyan: 'text-cyan-400 shadow-cyan-500/50',
    pink: 'text-pink-400 shadow-pink-500/50',
    purple: 'text-purple-400 shadow-purple-500/50',
    blue: 'text-blue-400 shadow-blue-500/50',
    orange: 'text-[#FF6B00] shadow-[#FF6B00]/50',
  };

  const getRgb = (c) => {
    if (c === 'cyan') return '6, 182, 212';
    if (c === 'pink') return '236, 72, 153';
    if (c === 'purple') return '139, 92, 246';
    if (c === 'blue') return '59, 130, 246';
    return '255, 107, 0'; // orange
  };

  const rgb = getRgb(color);

  return (
    <motion.span
      className={`${colorMap[color] || colorMap.orange} ${className} relative`}
      style={{
        textShadow: `
          0 0 10px currentColor,
          0 0 20px rgba(${rgb}, 0.4),
          0 0 30px rgba(${rgb}, 0.2)
        `,
      }}
      animate={{
        textShadow: [
          `0 0 10px currentColor, 0 0 20px rgba(${rgb}, 0.4), 0 0 30px rgba(${rgb}, 0.2)`,
          `0 0 15px currentColor, 0 0 30px rgba(${rgb}, 0.6), 0 0 45px rgba(${rgb}, 0.4)`,
          `0 0 10px currentColor, 0 0 20px rgba(${rgb}, 0.4), 0 0 30px rgba(${rgb}, 0.2)`,
        ],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.span>
  );
};

export default NeonText;
