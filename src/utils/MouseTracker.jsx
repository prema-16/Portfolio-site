import React, { useEffect, useRef } from 'react';

const MouseTracker = () => {
  const cursorRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-50 w-40 h-40 rounded-full blur-2xl opacity-20"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-3 h-3 rounded-full"
        style={{
          background: '#3b82f6',
          boxShadow: '0 0 10px #3b82f6, 0 0 20px rgba(59, 130, 246, 0.5)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default MouseTracker;
