import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CodeBlock = ({ code = '', speed = 50 }) => {
  const [displayCode, setDisplayCode] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < code.length) {
        setDisplayCode(code.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [code, speed]);

  return (
    <motion.pre
      className="bg-dark-secondary/50 border border-cyan-500/30 rounded p-4 overflow-x-auto text-xs font-mono text-cyan-400 backdrop-blur"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <code className="text-cyan-300">{displayCode}</code>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-pink-500"
      >
        █
      </motion.span>
    </motion.pre>
  );
};

export default CodeBlock;
