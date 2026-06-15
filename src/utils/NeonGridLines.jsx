import React, { useEffect, useRef } from 'react';

const NeonGridLines = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let time = 0;

    const animate = () => {
      time += 0.005;

      // Clear with fade effect
      ctx.fillStyle = 'rgba(5, 8, 22, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw horizontal neon lines
      for (let i = 0; i < 20; i++) {
        const y = (i * canvas.height) / 20 + Math.sin(time + i * 0.5) * 20;

        const gradient = ctx.createLinearGradient(0, y, canvas.width, y);
        gradient.addColorStop(0, 'rgba(6, 182, 212, 0)');
        gradient.addColorStop(0.3, 'rgba(6, 182, 212, 0.3)');
        gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.6)');
        gradient.addColorStop(0.7, 'rgba(6, 182, 212, 0.3)');
        gradient.addColorStop(1, 'rgba(6, 182, 212, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw vertical neon lines
      for (let i = 0; i < 20; i++) {
        const x = (i * canvas.width) / 20 + Math.cos(time + i * 0.5) * 20;

        const gradient = ctx.createLinearGradient(x, 0, x, canvas.height);
        gradient.addColorStop(0, 'rgba(236, 72, 153, 0)');
        gradient.addColorStop(0.3, 'rgba(236, 72, 153, 0.2)');
        gradient.addColorStop(0.5, 'rgba(236, 72, 153, 0.4)');
        gradient.addColorStop(0.7, 'rgba(236, 72, 153, 0.2)');
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
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

export default NeonGridLines;
