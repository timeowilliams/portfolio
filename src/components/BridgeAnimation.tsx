'use client';

import { useEffect, useRef } from 'react';

export function BridgeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with higher resolution for retina displays
    const scale = window.devicePixelRatio || 1;
    canvas.width = 1000 * scale; // Increased width
    canvas.height = 240 * scale; // Adjusted height
    ctx.scale(scale, scale);

    // Animation variables
    let animationFrame: number;
    let time = 0;
    const bridgeColor = '#8B8682'; // Warm gray for concrete/stone
    const bridgeShadowColor = '#6B6662'; // Darker shade for depth

    // Draw bridge
    const drawBridge = (ctx: CanvasRenderingContext2D, time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const startX = 30; // Start closer to edge
      const endX = canvas.width / scale - 30; // End closer to edge
      const bridgeWidth = endX - startX;
      const maxHeight = 65; // Slightly reduced height
      const baseY = 150; // Moved up slightly

      // Faster bridge movement
      const bridgeMovement = Math.sin(time * 1.2) * 1.5; // Increased speed, reduced amplitude

      // Draw main arch with shadow
      ctx.beginPath();
      ctx.moveTo(startX, baseY + 2);
      
      // Shadow arch
      ctx.bezierCurveTo(
        startX + bridgeWidth * 0.25, baseY - maxHeight + bridgeMovement + 2,
        startX + bridgeWidth * 0.75, baseY - maxHeight + bridgeMovement + 2,
        endX, baseY + 2
      );
      ctx.strokeStyle = bridgeShadowColor;
      ctx.lineWidth = 16; // Thicker shadow
      ctx.lineCap = 'round';
      ctx.stroke();

      // Main arch
      ctx.beginPath();
      ctx.moveTo(startX, baseY);
      ctx.bezierCurveTo(
        startX + bridgeWidth * 0.25, baseY - maxHeight + bridgeMovement,
        startX + bridgeWidth * 0.75, baseY - maxHeight + bridgeMovement,
        endX, baseY
      );
      ctx.strokeStyle = bridgeColor;
      ctx.lineWidth = 14; // Thicker bridge
      ctx.lineCap = 'round';
      ctx.stroke();

      // Support lines with shadows
      const numSupports = 10; // More supports
      for (let i = 1; i < numSupports; i++) {
        const x = startX + (bridgeWidth * i) / numSupports;
        const archY = baseY - Math.sin((i / numSupports) * Math.PI) * maxHeight + bridgeMovement;
        
        // Support shadow
        ctx.beginPath();
        ctx.moveTo(x + 1, archY + 1);
        ctx.lineTo(x + 1, baseY + 21);
        ctx.strokeStyle = bridgeShadowColor + '80';
        ctx.lineWidth = 4;
        ctx.stroke();

        // Support line
        ctx.beginPath();
        ctx.moveTo(x, archY);
        ctx.lineTo(x, baseY + 20);
        ctx.strokeStyle = bridgeColor + '80';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      // Water effect
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / scale);
      
      // Faster water movement
      const waveAmplitude = 5; // Slightly reduced amplitude
      const waveFrequency = 0.02;
      
      for (let x = 0; x <= canvas.width / scale; x += 8) { // More detailed waves
        const y = baseY + 40 + 
          Math.sin(x * waveFrequency + time * 1.5) * waveAmplitude + // Faster water movement
          Math.sin(x * waveFrequency * 0.5 + time * 1.8) * waveAmplitude * 0.5;
        ctx.lineTo(x, y);
      }
      
      ctx.lineTo(canvas.width / scale, canvas.height / scale);
      ctx.lineTo(0, canvas.height / scale);
      
      // Gradient for water
      const gradient = ctx.createLinearGradient(0, baseY, 0, canvas.height / scale);
      gradient.addColorStop(0, 'rgba(0, 100, 255, 0.12)');
      gradient.addColorStop(1, 'rgba(0, 100, 255, 0.06)');
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Continuous animation loop with faster time increment
    const animate = () => {
      time += 0.03; // Faster time progression
      drawBridge(ctx, time);
      animationFrame = requestAnimationFrame(animate);
    };

    // Start animation
    animate();

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
      className="w-full max-w-4xl mx-auto h-[160px]" // Adjusted height
      style={{ 
        maxWidth: '1000px', // Increased max-width
        filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))'
      }}
    />
  );
} 