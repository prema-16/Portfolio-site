import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedGradientBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.0005;

      // Create smooth gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Dynamic colors based on time
      const hue1 = (time * 30 + 200) % 360;
      const hue2 = (time * 25 + 240) % 360;
      const hue3 = (time * 20 + 280) % 360;

      gradient.addColorStop(0, `hsl(${hue1}, 100%, 10%)`);
      gradient.addColorStop(0.5, `hsl(${hue2}, 80%, 8%)`);
      gradient.addColorStop(1, `hsl(${hue3}, 100%, 6%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Add subtle radial glows
      const glowX = Math.sin(time * 0.5) * (canvas.width * 0.3) + canvas.width * 0.5;
      const glowY = Math.cos(time * 0.3) * (canvas.height * 0.3) + canvas.height * 0.5;

      const radialGradient1 = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, 600);
      radialGradient1.addColorStop(0, 'rgba(6, 182, 212, 0.15)');
      radialGradient1.addColorStop(0.5, 'rgba(6, 182, 212, 0.05)');
      radialGradient1.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.fillStyle = radialGradient1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Second glow for color variety
      const glowX2 = Math.cos(time * 0.6) * (canvas.width * 0.25) + canvas.width * 0.3;
      const glowY2 = Math.sin(time * 0.4) * (canvas.height * 0.25) + canvas.height * 0.3;

      const radialGradient2 = ctx.createRadialGradient(glowX2, glowY2, 0, glowX2, glowY2, 500);
      radialGradient2.addColorStop(0, 'rgba(168, 85, 247, 0.12)');
      radialGradient2.addColorStop(0.5, 'rgba(168, 85, 247, 0.04)');
      radialGradient2.addColorStop(1, 'rgba(168, 85, 247, 0)');

      ctx.fillStyle = radialGradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default AnimatedGradientBG;
