import React, { useEffect, useRef } from 'react';

const NeonBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const orbs = [
      {
        x: canvas.width * 0.2,
        y: canvas.height * 0.3,
        vx: 0.15,
        vy: 0.2,
        radius: 350,
        color: '#FF6B00',
        opacity: 0.06,
      },
      {
        x: canvas.width * 0.8,
        y: canvas.height * 0.5,
        vx: -0.1,
        vy: 0.25,
        radius: 400,
        color: '#222222',
        opacity: 0.08,
      },
      {
        x: canvas.width * 0.5,
        y: canvas.height * 0.8,
        vx: 0.2,
        vy: -0.15,
        radius: 450,
        color: '#FF3C00',
        opacity: 0.04,
      },
      {
        x: canvas.width * 0.3,
        y: canvas.height * 0.6,
        vx: -0.15,
        vy: -0.1,
        radius: 300,
        color: '#111111',
        opacity: 0.1,
      },
    ];

    const animate = () => {
      // Dark background clear
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw glowing orbs
      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
          orb.vx *= -1;
        }
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
          orb.vy *= -1;
        }

        // Draw gradient orb with glow
        const gradient = ctx.createRadialGradient(
          orb.x,
          orb.y,
          0,
          orb.x,
          orb.y,
          orb.radius
        );
        gradient.addColorStop(0, orb.color + '25');
        gradient.addColorStop(0.5, orb.color + '0a');
        gradient.addColorStop(1, 'rgba(10,10,10,0)');

        ctx.fillStyle = gradient;
        ctx.globalAlpha = orb.opacity;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fill();
      });

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
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};

export default NeonBackground;
