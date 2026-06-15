import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TerminalCode = () => {
  const [code, setCode] = useState('');
  const codeLines = [
    '> Initializing System...',
    '> Loading Portfolio Data...',
    '> Accessing Skill Database...',
    '> Compiling Projects...',
    '$ npm run build',
    '> Build Successful [████████████] 100%',
    '> System Ready',
    '> Welcome, Guest User',
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentChar = 0;

    const interval = setInterval(() => {
      if (currentIndex < codeLines.length) {
        const currentLine = codeLines[currentIndex];
        if (currentChar < currentLine.length) {
          setCode((prev) => prev + currentLine[currentChar]);
          currentChar++;
        } else {
          setCode((prev) => prev + '\n');
          currentIndex++;
          currentChar = 0;
        }
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed bottom-4 right-4 w-80 bg-dark-secondary/80 backdrop-blur border border-cyan-500/30 rounded-lg p-4 font-mono text-xs text-cyan-400 shadow-neon z-20 pointer-events-none"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3 }}
    >
      <div className="flex gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
      </div>
      <motion.div
        className="whitespace-pre-wrap overflow-hidden h-32"
        animate={{ opacity: [0.7, 1] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      >
        {code}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="text-cyan-400"
        >
          █
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default TerminalCode;
