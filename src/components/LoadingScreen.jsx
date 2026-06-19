import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [stage, setStage] = useState(0);
  // 0 = initial dark
  // 1 = glow appears
  // 2 = diamond traces
  // 3 = P letter blooms
  // 4 = name + subtitle reveal
  // 5 = hold
  // 6 = fade out

  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const t = [
      setTimeout(() => setStage(1), 300),
      setTimeout(() => setStage(2), 700),
      setTimeout(() => setStage(3), 2200),
      setTimeout(() => setStage(4), 3000),
      setTimeout(() => setStage(5), 3800),
      setTimeout(() => setStage(6), 4600),
      setTimeout(() => {
        setIsDone(true);
        onLoadingComplete?.();
      }, 5200),
    ];

    const p = [
      setTimeout(() => setProgress(15), 500),
      setTimeout(() => setProgress(35), 1200),
      setTimeout(() => setProgress(55), 2000),
      setTimeout(() => setProgress(75), 2800),
      setTimeout(() => setProgress(90), 3500),
      setTimeout(() => setProgress(100), 4300),
    ];

    return () => [...t, ...p].forEach(clearTimeout);
  }, []);

  if (isDone) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="loading"
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
        style={{ background: '#080810' }}
        animate={{ opacity: stage === 6 ? 0 : 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut' }}
      >

        {/* ── Ambient background glows ── */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 1 ? 1 : 0 }}
          transition={{ duration: 1.8 }}
          style={{
            background:
              'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,107,0,0.07) 0%, rgba(0,217,255,0.04) 50%, transparent 80%)',
          }}
        />
        {/* Subtle top-left teal */}
        <motion.div
          className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.3 }}
          style={{
            background:
              'radial-gradient(ellipse at top left, rgba(0,217,255,0.06) 0%, transparent 60%)',
          }}
        />
        {/* Subtle bottom-right orange */}
        <motion.div
          className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: stage >= 2 ? 1 : 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          style={{
            background:
              'radial-gradient(ellipse at bottom right, rgba(255,60,0,0.07) 0%, transparent 60%)',
          }}
        />

        {/* ── Logo area ── */}
        <div className="relative flex flex-col items-center gap-10">

          {/* Diamond + P */}
          <div className="relative w-52 h-52 flex items-center justify-center">

            {/* Soft outer ambient halo */}
            <motion.div
              className="absolute rounded-full"
              style={{ width: 220, height: 220 }}
              initial={{ opacity: 0 }}
              animate={
                stage >= 3
                  ? {
                      opacity: [0, 0.6, 0.35],
                      scale: [0.85, 1.1, 1],
                    }
                  : {}
              }
              transition={{ duration: 1.4, ease: 'easeOut' }}
              >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background:
                    'radial-gradient(circle, rgba(255,107,0,0.25) 0%, rgba(255,107,0,0.06) 50%, transparent 75%)',
                  filter: 'blur(18px)',
                }}
              />
            </motion.div>

            {/* SVG Diamond */}
            <svg
              width="200"
              height="200"
              viewBox="-100 -100 200 200"
              className="absolute"
              overflow="visible"
            >
              <defs>
                {/* Gradient for diamond stroke */}
                <linearGradient id="dGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="45%" stopColor="#FF6B00" />
                  <stop offset="100%" stopColor="#FF2D9B" />
                </linearGradient>
                {/* Glow filter */}
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="strongGlow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Outer diamond — traces itself */}
              <motion.polygon
                points="0,-82 71,0 0,82 -71,0"
                fill="none"
                stroke="url(#dGrad)"
                strokeWidth="2.5"
                strokeLinejoin="round"
                filter="url(#glow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={stage >= 2 ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Inner diamond — fades in slightly after */}
              <motion.polygon
                points="0,-60 52,0 0,60 -52,0"
                fill="rgba(255,107,0,0.03)"
                stroke="rgba(255,107,0,0.25)"
                strokeWidth="1"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={stage >= 2 ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 1.6, delay: 0.35, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* Corner glint dots */}
              {[
                [0, -82],
                [71, 0],
                [0, 82],
                [-71, 0],
              ].map(([x, y], i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={y}
                  r={3.5}
                  fill="#FF6B00"
                  filter="url(#strongGlow)"
                  initial={{ opacity: 0, r: 0 }}
                  animate={stage >= 2 ? { opacity: [0, 1, 0.7], r: 3.5 } : {}}
                  transition={{ delay: 1.4 + i * 0.08, duration: 0.5 }}
                />
              ))}

              {/* Scan line across diamond — premium feel */}
              <motion.line
                x1="-60"
                y1="0"
                x2="60"
                y2="0"
                stroke="rgba(0,217,255,0.15)"
                strokeWidth="1"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={stage >= 3 ? { scaleX: 1, opacity: [0, 0.4, 0] } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
                style={{ transformOrigin: 'center' }}
              />
            </svg>

            {/* P letter — blooms from center */}
            <motion.div
              className="relative z-10 select-none"
              initial={{ opacity: 0, scale: 0.3, filter: 'blur(30px)' }}
              animate={
                stage >= 3
                  ? {
                      opacity: 1,
                      scale: 1,
                      filter: 'blur(0px)',
                    }
                  : {}
              }
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                className="font-black text-[4.5rem] leading-none"
                style={{
                  background:
                    'linear-gradient(145deg, #FFFFFF 0%, #FFB86C 55%, #FF6B00 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: 'drop-shadow(0 0 18px rgba(255,107,0,0.9)) drop-shadow(0 0 40px rgba(255,107,0,0.4))',
                }}
              >
                P
              </span>
            </motion.div>

            {/* Ring pulse when P appears */}
            <motion.div
              className="absolute rounded-full border border-[#FF6B00]/30"
              style={{ width: 160, height: 160 }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={stage >= 3 ? { scale: [0.6, 1.4], opacity: [0.6, 0] } : {}}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
            />
            <motion.div
              className="absolute rounded-full border border-[#00D9FF]/20"
              style={{ width: 160, height: 160 }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={stage >= 3 ? { scale: [0.6, 1.8], opacity: [0.4, 0] } : {}}
              transition={{ duration: 1.6, ease: 'easeOut', delay: 0.25 }}
            />
          </div>

          {/* ── Name & subtitle ── */}
          <motion.div
            className="flex flex-col items-center gap-2 text-center"
            initial={{ opacity: 0, y: 24, filter: 'blur(8px)' }}
            animate={
              stage >= 4
                ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                : {}
            }
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              <span className="text-white">Premanand</span>
              <span
                className="ml-2"
                style={{
                  color: '#FF6B00',
                  textShadow:
                    '0 0 18px rgba(255,107,0,0.7), 0 0 40px rgba(255,107,0,0.3)',
                }}
              >
                Londhe
              </span>
            </h1>
            <motion.p
              className="text-white/40 text-xs font-mono tracking-[0.35em] uppercase"
              initial={{ opacity: 0 }}
              animate={stage >= 4 ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.p>
          </motion.div>

          {/* ── Progress bar ── */}
          <div className="flex flex-col items-center gap-2">
            <div
              className="relative overflow-hidden rounded-full"
              style={{ width: 180, height: 2, background: 'rgba(255,255,255,0.07)' }}
            >
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{
                  background:
                    'linear-gradient(to right, #00D9FF, #FF6B00)',
                  boxShadow: '0 0 10px rgba(255,107,0,0.7)',
                }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              {/* Shimmer */}
              {progress < 100 && (
                <motion.div
                  className="absolute top-0 h-full w-16 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to right, transparent, rgba(255,255,255,0.5), transparent)',
                  }}
                  animate={{ left: ['-40px', '200px'] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatDelay: 0.3,
                  }}
                />
              )}
            </div>
            <motion.p
              className="text-[10px] font-mono tracking-widest"
              style={{ color: 'rgba(255,255,255,0.25)' }}
              animate={{ opacity: [0.4, 0.9, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {progress < 100 ? `INITIALIZING ${progress}%` : 'WELCOME'}
            </motion.p>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingScreen;
