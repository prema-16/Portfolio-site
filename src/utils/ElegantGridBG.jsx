import React, { useEffect, useRef } from 'react';

const ElegantGridBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let offset = 0;
    let time = 0;

    const animate = () => {
      time += 0.01;
      offset -= 0.3;

      // Clear with semi-transparent background
      ctx.fillStyle = 'rgba(5, 8, 22, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gridSize = 80;

      // Draw subtle grid with dynamic colors
      ctx.lineWidth = 0.8;

      // Horizontal lines
      for (let y = offset; y < canvas.height + gridSize; y += gridSize) {
        const opacity = 0.08 + Math.sin(y * 0.01 + time) * 0.04;
        ctx.strokeStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Vertical lines with slight wave effect
      for (let x = offset; x < canvas.width + gridSize; x += gridSize) {
        const waveOffset = Math.sin(x * 0.005 + time * 0.5) * 8;
        const opacity = 0.06 + Math.cos(x * 0.01 + time) * 0.04;
        ctx.strokeStyle = `rgba(168, 85, 247, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(x + waveOffset, 0);
        ctx.lineTo(x + waveOffset, canvas.height);
        ctx.stroke();
      }

      // Subtle intersection glows
      ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
      for (let y = offset; y < canvas.height + gridSize; y += gridSize) {
        for (let x = offset; x < canvas.width + gridSize; x += gridSize) {
          const distance = Math.sqrt(
            Math.pow(x - canvas.width / 2, 2) + Math.pow(y - canvas.height / 2, 2)
          );
          const glow = Math.max(0, 1 - distance / 1000);
          ctx.globalAlpha = glow * 0.08;
          ctx.fillRect(x - 2, y - 2, 4, 4);
        }
      }
      ctx.globalAlpha = 1;

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
      className="fixed inset-0 pointer-events-none z-0 opacity-50"
    />
  );
};

export default ElegantGridBG;
