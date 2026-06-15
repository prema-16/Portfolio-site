import React from 'react';
import { motion } from 'framer-motion';

const HackerElements = () => {
  const hackerTexts = [
    'SYSTEM_BREACH',
    'FIREWALL DOWN',
    'ACCESS GRANTED',
    'UPLOADING FILES',
    'DECRYPTING...',
    'SOCKET_OPEN',
    'PAYLOAD_READY',
    'NETWORK_SCAN',
    'VIRUS_DETECTED',
    '0101_1010',
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hackerTexts.map((text, index) => (
        <motion.div
          key={index}
          className="absolute text-xs font-mono font-bold"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: ['#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'][
              Math.floor(Math.random() * 4)
            ],
            textShadow: `0 0 10px currentColor`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 1.5],
            y: [0, -200],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            delay: index * 0.2,
            repeat: Infinity,
            repeatDelay: 8,
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
};

export default HackerElements;
