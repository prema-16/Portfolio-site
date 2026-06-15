import React, { useEffect, useRef } from 'react';

const HolographicScan = () => {
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
      time += 0.02;

      // Clear with fade
      ctx.fillStyle = 'rgba(5, 8, 22, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Horizontal scanning line
      const scanY = (Math.sin(time * 2) * canvas.height) / 4 + canvas.height / 2;
      const gradient1 = ctx.createLinearGradient(0, scanY - 20, 0, scanY + 20);
      gradient1.addColorStop(0, 'rgba(6, 182, 212, 0)');
      gradient1.addColorStop(0.5, 'rgba(6, 182, 212, 0.5)');
      gradient1.addColorStop(1, 'rgba(6, 182, 212, 0)');

      ctx.strokeStyle = gradient1;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();

      // Vertical scanning line
      const scanX = (Math.cos(time * 1.5) * canvas.width) / 4 + canvas.width / 2;
      const gradient2 = ctx.createLinearGradient(scanX - 20, 0, scanX + 20, 0);
      gradient2.addColorStop(0, 'rgba(236, 72, 153, 0)');
      gradient2.addColorStop(0.5, 'rgba(236, 72, 153, 0.5)');
      gradient2.addColorStop(1, 'rgba(236, 72, 153, 0)');

      ctx.strokeStyle = gradient2;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(scanX, 0);
      ctx.lineTo(scanX, canvas.height);
      ctx.stroke();

      // Corner scanning boxes
      const boxSize = 100;
      const offset = Math.sin(time) * 30;

      // Top-left
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.3)';
      ctx.lineWidth = 2;
      ctx.strokeRect(20 + offset, 20 + offset, boxSize, boxSize);

      // Top-right
      ctx.strokeStyle = 'rgba(236, 72, 153, 0.3)';
      ctx.strokeRect(canvas.width - 120 - offset, 20 + offset, boxSize, boxSize);

      // Bottom-left
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.strokeRect(20 + offset, canvas.height - 120 - offset, boxSize, boxSize);

      // Bottom-right
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
      ctx.strokeRect(
        canvas.width - 120 - offset,
        canvas.height - 120 - offset,
        boxSize,
        boxSize
      );

      // Center circle scan
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.2)';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 100 + offset * 2, 0, Math.PI * 2);
      ctx.stroke();

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

export default HolographicScan;
