'use client';

import { useEffect, useRef } from 'react';

export function BridgeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 600;
    canvas.height = 200;

    // Animation variables
    let animationFrame: number;
    let progress = 0;
    const duration = 3000; // 3 seconds
    let startTime: number | null = null;

    // Draw bridge
    const drawBridge = (ctx: CanvasRenderingContext2D, turbulence: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Bridge arch
      ctx.beginPath();
      ctx.moveTo(50, 150);
      
      // Create turbulent or smooth curve based on progress
      for (let x = 0; x <= canvas.width - 100; x++) {
        const normalY = Math.sin((x / (canvas.width - 100)) * Math.PI) * 50;
        const turbulentY = normalY + (Math.random() - 0.5) * turbulence * 20;
        const y = 150 - (turbulentY * (1 - progress) + normalY * progress);
        
        if (x === 0) {
          ctx.moveTo(x + 50, y);
        } else {
          ctx.lineTo(x + 50, y);
        }
      }

      ctx.strokeStyle = '#556B2F'; // Olive Green
      ctx.lineWidth = 8;
      ctx.stroke();

      // Draw water below
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 20) {
        const waveHeight = 20 * (1 - progress);
        const y = canvas.height - 20 + Math.sin(x / 30 + Date.now() / 1000) * waveHeight;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.fillStyle = `rgba(0, 100, 255, ${0.3 + (1 - progress) * 0.4})`;
      ctx.fill();
    };

    // Animation loop
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      progress = Math.min(elapsed / duration, 1);

      const turbulence = Math.max(0, 1 - progress);
      drawBridge(ctx, turbulence);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    // Start animation
    animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-2xl mx-auto h-[200px]"
      style={{ maxWidth: '600px' }}
    />
  );
} 