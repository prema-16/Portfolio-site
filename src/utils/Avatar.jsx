import React from 'react';
import { motion } from 'framer-motion';

const Avatar = ({ size = 'md', animated = true }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-12 h-12 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-20 h-20 text-2xl',
  };

  const variants = animated ? {
    hover: { scale: 1.1, rotate: 5 },
    initial: { scale: 1 },
  } : {};

  return (
    <motion.div
      className={`
        ${sizeClasses[size]}
        rounded-full
        bg-gradient-to-br from-accent via-[#FF8F3d] to-[#111111]
        flex items-center justify-center
        font-bold text-white
        border border-white/10
        shadow-lg shadow-black/50
        cursor-pointer
        relative overflow-hidden
      `}
      whileHover={animated ? 'hover' : {}}
      initial={animated ? 'initial' : {}}
      variants={variants}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background glow */}
      {animated && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
      )}

      {/* Avatar text */}
      <span className="relative z-10 font-black tracking-wider">PL</span>
    </motion.div>
  );
};

export default Avatar;
