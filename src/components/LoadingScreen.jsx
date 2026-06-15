import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const intervals = [];
    let currentProgress = 0;

    const interval1 = setTimeout(() => setProgress(20), 200);
    const interval2 = setTimeout(() => setProgress(40), 800);
    const interval3 = setTimeout(() => setProgress(60), 1500);
    const interval4 = setTimeout(() => setProgress(80), 2200);
    const interval5 = setTimeout(() => setProgress(100), 2800);

    const completeTimeout = setTimeout(() => {
      setIsComplete(true);
      onLoadingComplete?.();
    }, 3500);

    return () => {
      clearTimeout(interval1);
      clearTimeout(interval2);
      clearTimeout(interval3);
      clearTimeout(interval4);
      clearTimeout(interval5);
      clearTimeout(completeTimeout);
    };
  }, [onLoadingComplete]);

  if (isComplete) {
    return null;
  }

  return (
    <motion.div
      className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50 pointer-events-none"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-neon-purple/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo Circle */}
        <motion.div
          className="w-24 h-24 rounded-full border-2 border-transparent"
          style={{
            background: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4)',
            backgroundClip: 'padding-box',
            borderImage: 'linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4) 1',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        >
          <div className="w-full h-full rounded-full flex items-center justify-center text-white font-bold text-2xl">
            P
          </div>
        </motion.div>

        {/* Text */}
        <div className="text-center">
          <motion.h2
            className="text-2xl font-bold gradient-text mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Premanand Londhe
          </motion.h2>
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1 bg-dark-secondary rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Progress Text */}
        <motion.p
          className="text-white/40 text-xs font-mono"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {progress}%
        </motion.p>
      </div>

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: ['#3b82f6', '#8b5cf6', '#06b6d4'][i % 3],
            left: `${20 + i * 15}%`,
            top: '30%',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </motion.div>
  );
};

export default LoadingScreen;
