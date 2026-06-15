import React from 'react';
import { motion } from 'framer-motion';

const ProfileImage = () => {
  return (
    <motion.div
      className="relative w-80 h-80 md:w-96 md:h-96"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {/* Glow background */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon-cyan/30 to-pink-500/30 blur-3xl" />

      {/* Animated border with cyan and pink glow */}
      <motion.div
        className="absolute inset-0 rounded-lg"
        style={{
          background: 'conic-gradient(from 0deg, #06b6d4, #ec4899, #06b6d4)',
          padding: '3px',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div className="absolute inset-1 rounded-lg bg-dark-bg" />
      </motion.div>

      {/* Image Container */}
      <div className="absolute inset-3 rounded-lg overflow-hidden flex items-center justify-center bg-dark-secondary/50">
        {/* Placeholder for neon mask image - users should add their image here */}
        <img
          src="/profile-mask.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          onError={(e) => {
            // Fallback to gradient if image not found
            e.target.style.display = 'none';
            e.target.parentElement.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-neon-cyan via-pink-500 to-neon-purple flex items-center justify-center text-center px-4">
                <div>
                  <div class="text-4xl font-bold mb-2" style="background: linear-gradient(135deg, #06b6d4, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                    PREMANAND
                  </div>
                  <div class="text-sm text-neon-cyan/80 font-mono">Full Stack Developer</div>
                </div>
              </div>
            `;
          }}
        />
      </div>

      {/* Corner accent lights */}
      <motion.div
        className="absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full blur-lg"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-500 rounded-full blur-lg"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default ProfileImage;
