import React from 'react';
import { motion } from 'framer-motion';

const CorruptedData = () => {
  const dataBlocks = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {dataBlocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute w-32 h-20 bg-gradient-to-br from-cyan-500/10 to-pink-500/10 border border-cyan-500/30 rounded font-mono text-xs text-cyan-400 p-2 overflow-hidden"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0],
            scale: [0.5, 1, 1, 0.8],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 3,
            delay: block.delay,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <div className="text-pink-400">
            0x{Math.floor(Math.random() * 0xffffff)
              .toString(16)
              .toUpperCase()}
          </div>
          <div className="text-cyan-400 text-xs mt-1">
            {Array.from({ length: 3 }, (_, i) =>
              Math.floor(Math.random() * 0xff)
                .toString(16)
                .padStart(2, '0')
            ).join(' ')}
          </div>
          <div className="text-purple-400 text-xs mt-1">CORRUPTED</div>
        </motion.div>
      ))}
    </div>
  );
};

export default CorruptedData;
