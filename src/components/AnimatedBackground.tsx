import React, { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
  className?: string;
  particleCount?: number;
  showOrbits?: boolean;
  showGrid?: boolean;
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  className = '',
  particleCount,
  showOrbits = true,
  showGrid = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isReducedMotion = mediaQuery.matches;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth || 800);
    let height = (canvas.height = container.clientHeight || 600);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width && entry.contentRect.height) {
          width = canvas.width = entry.contentRect.width;
          height = canvas.height = entry.contentRect.height;
        }
      }
    });

    resizeObserver.observe(container);

    // Responsive particle count based on container width
    const isMobile = window.innerWidth < 768;
    const defaultCount = isMobile ? 16 : 28;
    const totalParticles = particleCount ?? defaultCount;

    // Palette matching Reaura brand: Soft Blue (#0EA5E9), Lavender/Purple (#8B5CF6), Indigo (#4F46E5), Soft Pink (#EC4899)
    const colors = [
      { r: 14, g: 165, b: 233 },   // Cyan / Sky
      { r: 139, g: 92, b: 246 },  // Purple / Lavender
      { r: 79, g: 70, b: 229 },   // Indigo
      { r: 236, g: 72, b: 153 },   // Soft Pink
    ];

    interface Particle {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: { r: number; g: number; b: number };
      alpha: number;
      baseAlpha: number;
      pulseAngle: number;
      pulseSpeed: number;
    }

    const particles: Particle[] = Array.from({ length: totalParticles }, () => {
      const col = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.0 + 1.2,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        color: col,
        alpha: Math.random() * 0.5 + 0.3,
        baseAlpha: Math.random() * 0.5 + 0.3,
        pulseAngle: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      };
    });

    let mouse = { x: -1000, y: -1000, isActive: false, radius: isMobile ? 90 : 140 };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if ('clientX' in e) {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      mouse.x = clientX - rect.left;
      mouse.y = clientY - rect.top;
      mouse.isActive = true;
    };

    const handlePointerLeave = () => {
      mouse.isActive = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchstart', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerLeave, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave, { passive: true });

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      time += 0.008;

      // 1. Draw Slow-moving Orbital Wave Curves inside this section
      if (showOrbits) {
        ctx.lineWidth = 1.2;
        const waveCount = 3;

        for (let i = 0; i < waveCount; i++) {
          ctx.beginPath();
          const grad = ctx.createLinearGradient(0, 0, width, height);
          
          if (i === 0) {
            grad.addColorStop(0, 'rgba(14, 165, 233, 0)');
            grad.addColorStop(0.3, 'rgba(14, 165, 233, 0.22)');
            grad.addColorStop(0.7, 'rgba(139, 92, 246, 0.24)');
            grad.addColorStop(1, 'rgba(236, 72, 153, 0)');
          } else if (i === 1) {
            grad.addColorStop(0, 'rgba(139, 92, 246, 0)');
            grad.addColorStop(0.4, 'rgba(79, 70, 229, 0.18)');
            grad.addColorStop(0.8, 'rgba(14, 165, 233, 0.20)');
            grad.addColorStop(1, 'rgba(14, 165, 233, 0)');
          } else {
            grad.addColorStop(0, 'rgba(236, 72, 153, 0)');
            grad.addColorStop(0.5, 'rgba(236, 72, 153, 0.16)');
            grad.addColorStop(1, 'rgba(139, 92, 246, 0)');
          }

          ctx.strokeStyle = grad;
          const yOffset = (i - 1) * (height * 0.28) + height * 0.5;
          const waveAmp = 40 + i * 15;
          const freq = 0.002 + i * 0.0006;
          const phaseShift = time * (1 + i * 0.35);

          ctx.moveTo(0, yOffset + Math.sin(phaseShift) * waveAmp);

          for (let x = 0; x <= width; x += 25) {
            let touchWaveOffset = 0;
            if (mouse.isActive) {
              const dx = x - mouse.x;
              const distToMouse = Math.abs(dx);
              if (distToMouse < mouse.radius * 1.5) {
                touchWaveOffset = Math.sin((1 - distToMouse / (mouse.radius * 1.5)) * Math.PI) * 12;
              }
            }
            const y = yOffset + Math.sin(phaseShift + x * freq) * waveAmp + Math.cos(phaseShift * 0.6 + x * 0.001) * (waveAmp * 0.4) + touchWaveOffset;
            ctx.lineTo(x, y);
          }
          ctx.stroke();
        }
      }

      // 2. Touch aura pulse if active
      if (mouse.isActive && mouse.x >= 0 && mouse.x <= width && mouse.y >= 0 && mouse.y <= height) {
        const auraGrad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        auraGrad.addColorStop(0, 'rgba(14, 165, 233, 0.18)');
        auraGrad.addColorStop(0.5, 'rgba(139, 92, 246, 0.10)');
        auraGrad.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 3. Update and Render Local Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!isReducedMotion) {
          // Interactive touch force
          if (mouse.isActive) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius) * 0.8;
              p.vx += (dx / dist) * force * 0.35;
              p.vy += (dy / dist) * force * 0.35;
            }
          }

          // Damping to keep movement smooth
          p.vx *= 0.98;
          p.vy *= 0.98;

          // Natural minimum drift
          if (Math.abs(p.vx) < 0.1) p.vx += (Math.random() - 0.5) * 0.05;
          if (Math.abs(p.vy) < 0.1) p.vy += (Math.random() - 0.5) * 0.05;

          p.x += p.vx;
          p.y += p.vy;

          // Wrap within local container
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          p.pulseAngle += p.pulseSpeed;
        }

        const dynamicAlpha = p.baseAlpha * (0.8 + Math.sin(p.pulseAngle) * 0.25);

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${dynamicAlpha})`;
        ctx.shadowBlur = p.radius * 3.5;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.7)`;
        ctx.fill();
      }

      // 4. Render Subtle Connecting Lines
      ctx.shadowBlur = 0;
      const maxDistance = isMobile ? 80 : 115;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            let lineAlpha = (1 - dist / maxDistance) * 0.24;

            // Brighten connecting lines near touch
            if (mouse.isActive) {
              const midX = (p1.x + p2.x) / 2;
              const midY = (p1.y + p2.y) / 2;
              const distToTouch = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
              if (distToTouch < mouse.radius) {
                lineAlpha *= 1.8;
              }
            }

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      if (!isReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchstart', handlePointerMove);
      window.removeEventListener('touchend', handlePointerLeave);
      window.removeEventListener('mouseleave', handlePointerLeave);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [particleCount, showOrbits]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* Fine Futuristic Micro-Grid Lines */}
      {showGrid && (
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e912_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e912_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_90%_90%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" 
        />
      )}

      {/* Ambient Soft Blue, Purple & Pink Glow Accents */}
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-cyanAccent/12 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-purpleAccent/12 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-pinkAccent/10 blur-3xl pointer-events-none" />

      {/* Dynamic 2D Particle & Orbital Curve Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};

export default AnimatedBackground;
