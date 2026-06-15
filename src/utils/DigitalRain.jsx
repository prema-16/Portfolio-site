import React, { useEffect, useRef } from 'react';

const DigitalRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const chars = '01アイウエオカキクケコサシスセソタチツテト'.split('');
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(0).map(() => Math.floor(Math.random() * canvas.height));

    let frameCount = 0;

    const animate = () => {
      frameCount++;

      // Only draw every 3 frames for performance
      if (frameCount % 3 !== 0) {
        requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = 'rgba(5, 8, 22, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.font = '16px Space Mono';

      for (let i = 0; i < columns; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 20;
        const y = drops[i] * 20;

        // Vary opacity
        const opacity = Math.random() > 0.5 ? 0.6 : 0.2;
        ctx.fillStyle = `rgba(6, 182, 212, ${opacity})`;
        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }

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
      className="fixed inset-0 pointer-events-none z-0 opacity-30"
    />
  );
};

export default DigitalRain;
