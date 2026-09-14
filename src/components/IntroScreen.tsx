import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion, type Variants } from 'framer-motion';
import logoImg from '../assets/hero.png';

interface IntroScreenProps {
  onComplete: () => void;
  durationMs?: number;
}

// Bespoke Futuristic "A" Glyph representing AI, Accessibility & Innovation
const FuturisticA: React.FC<{ isStandout?: boolean; className?: string }> = ({
  isStandout = true,
  className = '',
}) => {
  return (
    <span className={`relative inline-flex items-center justify-center w-[0.85em] h-[1.15em] mx-[0.03em] align-middle ${className}`}>
      <svg
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible drop-shadow-[0_0_14px_rgba(14,165,233,0.8)]"
      >
        <defs>
          <linearGradient id="aStemGradCinematic" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="45%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#0EA5E9" />
          </linearGradient>
          <linearGradient id="aBeamGradCinematic" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0EA5E9" />
            <stop offset="50%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
          <filter id="glowFilter" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Futuristic Apex Legs */}
        <path
          d="M 5 43 L 20 5 L 35 43"
          stroke="url(#aStemGradCinematic)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* High-tech Geometric Floating Crossbar with Circuit Nodes */}
        <line
          x1="11"
          y1="29"
          x2="29"
          y2="29"
          stroke="url(#aBeamGradCinematic)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Standout Neural/Accessibility Beacon Orb */}
        {isStandout && (
          <g filter="url(#glowFilter)">
            <circle cx="20" cy="18" r="3.6" fill="#0EA5E9" />
            <circle cx="20" cy="18" r="1.8" fill="#FFFFFF" />
          </g>
        )}
      </svg>

      {/* Standout dynamic energy pulse */}
      {isStandout && (
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute inset-0 bg-cyanAccent/30 rounded-full blur-md -z-10 pointer-events-none"
        />
      )}
    </span>
  );
};

export const IntroScreen: React.FC<IntroScreenProps> = ({
  onComplete,
  durationMs = 6200,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Cinematic Phases:
  // 0: Logo reveal & Energy Burst (0.0s - 1.2s)
  // 1: Word 1 "REIMAGINE" (1.2s - 2.3s)
  // 2: Word 2 "ACCESSIBILITY" (2.3s - 3.4s)
  // 3: Word 3 "EMPOWER" (3.4s - 4.5s)
  // 4: Final REAURA master brand reveal (4.5s - 6.2s)
  const [phase, setPhase] = useState<number>(0);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Handle timeline progression (unmodified)
  useEffect(() => {
    if (shouldReduceMotion) {
      onComplete();
      return;
    }

    const t1 = setTimeout(() => setPhase(1), 1200);
    const t2 = setTimeout(() => setPhase(2), 2300);
    const t3 = setTimeout(() => setPhase(3), 3400);
    const t4 = setTimeout(() => setPhase(4), 4500);
    const tEnd = setTimeout(() => onComplete(), durationMs);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(tEnd);
    };
  }, [onComplete, durationMs, shouldReduceMotion]);

  // High-performance AAA Game-Dev Background Engine (3D Particles, Constellation Links, Flowing Energy Waves, Shooting Light Trails)
  useEffect(() => {
    if (shouldReduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // 1. Particle pool with 3D depth and orbital mechanics
    interface Particle3D {
      x: number;
      y: number;
      z: number;
      size: number;
      speedX: number;
      speedY: number;
      speedZ: number;
      color: string;
      baseAlpha: number;
      pulseSpeed: number;
      pulseAngle: number;
    }

    const palette = [
      { r: 79, g: 70, b: 229 },  // Indigo #4F46E5
      { r: 139, g: 92, b: 246 }, // Purple/Lavender #8B5CF6
      { r: 14, g: 165, b: 233 }, // Sky/Cyan #0EA5E9
      { r: 168, g: 85, b: 247 }, // Soft Violet #A855F7
    ];

    const particles: Particle3D[] = Array.from({ length: 80 }, () => {
      const col = palette[Math.floor(Math.random() * palette.length)];
      return {
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 900 + 80,
        size: Math.random() * 2.2 + 1.2,
        speedX: (Math.random() - 0.5) * 0.45,
        speedY: (Math.random() - 0.5) * 0.45,
        speedZ: Math.random() * 0.9 + 0.4,
        color: `${col.r}, ${col.g}, ${col.b}`,
        baseAlpha: Math.random() * 0.5 + 0.35,
        pulseSpeed: Math.random() * 0.03 + 0.015,
        pulseAngle: Math.random() * Math.PI * 2,
      };
    });

    // 2. Shooting Light Trails / High-speed Energy Streamers
    interface LightTrail {
      x: number;
      y: number;
      length: number;
      speed: number;
      angle: number;
      color: string;
      alpha: number;
      width: number;
    }

    const lightTrails: LightTrail[] = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      length: Math.random() * 120 + 80,
      speed: Math.random() * 5 + 4,
      angle: -Math.PI / 4 + (Math.random() - 0.5) * 0.2, // ~45 deg diagonal travel
      color: Math.random() > 0.5 ? '14, 165, 233' : '139, 92, 246',
      alpha: Math.random() * 0.4 + 0.2,
      width: Math.random() * 1.5 + 1,
    }));

    let waveTime = 0;

    const render = () => {
      waveTime += 0.016;
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // --- SECTION A: Multi-layered Flowing Harmonic Energy Waves ---
      for (let waveIndex = 0; waveIndex < 4; waveIndex++) {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, width, height);
        if (waveIndex % 2 === 0) {
          grad.addColorStop(0, 'rgba(79, 70, 229, 0)');
          grad.addColorStop(0.3, 'rgba(14, 165, 233, 0.14)');
          grad.addColorStop(0.7, 'rgba(139, 92, 246, 0.16)');
          grad.addColorStop(1, 'rgba(79, 70, 229, 0)');
        } else {
          grad.addColorStop(0, 'rgba(139, 92, 246, 0)');
          grad.addColorStop(0.4, 'rgba(168, 85, 247, 0.12)');
          grad.addColorStop(0.8, 'rgba(14, 165, 233, 0.15)');
          grad.addColorStop(1, 'rgba(14, 165, 233, 0)');
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = waveIndex % 2 === 0 ? 1.8 : 1.2;

        const baseOffset = (waveIndex - 1.5) * 75;
        const waveFreq = 0.0025 + waveIndex * 0.0008;
        const waveAmp = 45 + waveIndex * 15;
        const waveSpeed = waveTime * (1 + waveIndex * 0.35);

        ctx.moveTo(0, centerY + Math.sin(waveSpeed) * waveAmp + baseOffset);

        for (let x = 0; x <= width; x += 30) {
          const y = centerY + Math.sin(waveSpeed + x * waveFreq) * waveAmp + Math.cos(waveSpeed * 0.7 + x * 0.0015) * (waveAmp * 0.5) + baseOffset;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // --- SECTION B: Shooting Kinetic Light Trails ---
      for (let i = 0; i < lightTrails.length; i++) {
        const trail = lightTrails[i];
        trail.x += Math.cos(trail.angle) * trail.speed;
        trail.y += Math.sin(trail.angle) * trail.speed;

        // Reset if off-screen
        if (trail.x < -150 || trail.x > width + 150 || trail.y < -150 || trail.y > height + 150) {
          trail.x = Math.random() * width + 100;
          trail.y = -50;
          trail.speed = Math.random() * 5 + 4;
          trail.length = Math.random() * 120 + 80;
        }

        const tailX = trail.x - Math.cos(trail.angle) * trail.length;
        const tailY = trail.y - Math.sin(trail.angle) * trail.length;

        const trailGrad = ctx.createLinearGradient(tailX, tailY, trail.x, trail.y);
        trailGrad.addColorStop(0, `rgba(${trail.color}, 0)`);
        trailGrad.addColorStop(0.8, `rgba(${trail.color}, ${trail.alpha * 0.7})`);
        trailGrad.addColorStop(1, `rgba(255, 255, 255, ${trail.alpha})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(trail.x, trail.y);
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = trail.width;
        ctx.lineCap = 'round';
        ctx.stroke();

        // Glowing head of trail
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, trail.width * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${trail.alpha})`;
        ctx.fill();
      }

      // --- SECTION C: 3D Projected Particle Field with Proximity Constellations ---
      const projectedCoords: { x: number; y: number; z: number; color: string; alpha: number }[] = [];
      const fov = 420;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Forward z-axis motion
        p.z -= p.speedZ;
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.z <= 25) {
          p.z = 900;
          p.x = (Math.random() - 0.5) * width * 1.8;
          p.y = (Math.random() - 0.5) * height * 1.8;
        }

        p.pulseAngle += p.pulseSpeed;
        const scale = fov / (fov + p.z);
        const screenX = centerX + p.x * scale;
        const screenY = centerY + p.y * scale;

        if (screenX >= -60 && screenX <= width + 60 && screenY >= -60 && screenY <= height + 60) {
          const radius = p.size * scale * 1.9;
          const dynamicPulse = 0.8 + Math.sin(p.pulseAngle) * 0.25;
          const alpha = Math.min(1, p.baseAlpha * scale * 1.7 * dynamicPulse);

          projectedCoords.push({ x: screenX, y: screenY, z: p.z, color: p.color, alpha });

          // Render glowing particle
          ctx.beginPath();
          ctx.arc(screenX, screenY, Math.max(0.6, radius), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
          ctx.shadowBlur = radius * 4;
          ctx.shadowColor = `rgba(${p.color}, 0.75)`;
          ctx.fill();
        }
      }

      // Render subtle proximity constellation connections (digital neural mesh)
      ctx.shadowBlur = 0;
      const maxConnectDist = 95;
      for (let i = 0; i < projectedCoords.length; i++) {
        for (let j = i + 1; j < projectedCoords.length; j++) {
          const pA = projectedCoords[i];
          const pB = projectedCoords[j];

          const dx = pA.x - pB.x;
          const dy = pA.y - pB.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const lineAlpha = (1 - dist / maxConnectDist) * Math.min(pA.alpha, pB.alpha) * 0.35;
            ctx.beginPath();
            ctx.moveTo(pA.x, pA.y);
            ctx.lineTo(pB.x, pB.y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return null;
  }

  // Interactive subtle mouse parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 24;
    const y = (clientY / window.innerHeight - 0.5) * 24;
    setMousePos({ x, y });
  };

  // Staggered letters container for final REAURA reveal (unmodified)
  const finalLettersContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const finalLetterVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 22,
      scale: 0.8,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: 0.65,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      key="game-intro-screen"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.12,
        filter: 'blur(14px)',
        transition: {
          duration: 0.9,
          ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        },
      }}
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070614] text-white overflow-hidden select-none"
      style={{ perspective: '1400px' }}
      aria-label="Reaura Interactive Game Intro"
      role="status"
    >
      {/* 1. AAA Game-Dev 3D Particle, Energy Waves & Light Trails Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* 2. Cybernetic Holographic Grid Floor with Subtle Parallax Depth */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e512_1px,transparent_1px),linear-gradient(to_bottom,#4f46e512_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_65%_55%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px, 0)`,
        }}
      />

      {/* 3. Deep Atmospheric Ambient Glow Orbs (Unmodified Dark Navy & Purple Atmosphere) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] md:w-[950px] md:h-[950px] rounded-full bg-gradient-to-tr from-primary/25 via-purpleAccent/20 to-cyanAccent/20 blur-[150px] pointer-events-none -z-10" />

      {/* 4. Futuristic Segmented Holographic HUD Rings with Depth */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px, 0)`,
        }}
      >
        {/* Outer Tech Radar Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[420px] h-[420px] md:w-[560px] md:h-[560px] rounded-full border border-primary/25 border-dashed"
        />
        {/* Mid Cyan Segment Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
          className="absolute w-[490px] h-[490px] md:w-[660px] md:h-[660px] rounded-full border border-cyanAccent/20 border-dotted"
        />
        {/* Inner Subtle Precision Circle */}
        <motion.div
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border border-purpleAccent/25"
        />
      </div>

      {/* 5. Animated Digital Circuit Vector Patterns in Corners */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25">
        <defs>
          <linearGradient id="circuitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        {/* Top-Left Cyber Circuit Line */}
        <path
          d="M 20 80 L 120 80 L 180 140 L 320 140"
          stroke="url(#circuitGrad1)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 4"
        />
        <circle cx="20" cy="80" r="3" fill="#0EA5E9" />
        <circle cx="320" cy="140" r="3" fill="#8B5CF6" />

        {/* Bottom-Right Cyber Circuit Line */}
        <path
          d="M 100% 85% L calc(100% - 100px) 85% L calc(100% - 160px) calc(85% - 60px) L calc(100% - 300px) calc(85% - 60px)"
          stroke="url(#circuitGrad1)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 4"
        />
      </svg>

      {/* Main Kinetic Centerpiece Stage (Logo, Words, Custom A - Unmodified) */}
      <div
        className="relative flex flex-col items-center justify-center gap-6 px-6 z-10 text-center max-w-4xl"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* Persistent 3D Logo Reveal with Light Sweeps */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.3,
            rotateY: -45,
            rotateX: 30,
            z: -200,
          }}
          animate={{
            opacity: 1,
            scale: phase === 4 ? 1.08 : 1,
            rotateY: [-45, 10, 0],
            rotateX: [30, -5, 0],
            z: [-200, 20, 0],
          }}
          transition={{
            duration: 1.1,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
          }}
          className="relative mb-2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Pulsing Quantum Energy Halo */}
          <div className="absolute -inset-6 bg-gradient-to-r from-primary via-purpleAccent to-cyanAccent rounded-[36px] blur-2xl opacity-60 animate-pulse pointer-events-none" />

          {/* Glassmorphic Cyber Shield */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-[28px] md:rounded-[34px] bg-[#0F0D28]/85 backdrop-blur-2xl border border-white/25 shadow-[0_0_50px_rgba(79,70,229,0.35),0_0_20px_rgba(14,165,233,0.3)] flex items-center justify-center p-5 md:p-6 overflow-hidden">
            {/* Prismatic Light Sweep */}
            <motion.div
              initial={{ x: '-150%' }}
              animate={{ x: '180%' }}
              transition={{ duration: 1.6, delay: 0.4, ease: 'easeInOut' }}
              className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-cyanAccent/40 to-transparent transform -skew-x-25 pointer-events-none"
            />
            <img
              src={logoImg}
              alt="Reaura"
              className="w-full h-full object-contain filter drop-shadow-[0_0_12px_rgba(139,92,246,0.6)] relative z-10"
              loading="eager"
            />
          </div>
        </motion.div>

        {/* Dynamic Word Sequence & Final Brand Reveal Container */}
        <div className="min-h-[120px] flex items-center justify-center relative w-full">
          <AnimatePresence mode="wait">
            {/* Word 1: REIMAGINE */}
            {phase === 1 && (
              <motion.div
                key="word-reimagine"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.15, y: -20, filter: 'blur(12px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-cyanAccent mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyanAccent animate-ping" />
                  Multimodal Neural Interface
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.25em] bg-gradient-to-r from-white via-cyanAccent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(14,165,233,0.5)]">
                  REIMAGINE
                </h2>
              </motion.div>
            )}

            {/* Word 2: ACCESSIBILITY */}
            {phase === 2 && (
              <motion.div
                key="word-accessibility"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.15, y: -20, filter: 'blur(12px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-purpleAccent mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purpleAccent animate-ping" />
                  Universal Human Potential
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.22em] bg-gradient-to-r from-white via-purpleAccent to-primary bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                  ACCESSIBILITY
                </h2>
              </motion.div>
            )}

            {/* Word 3: EMPOWER */}
            {phase === 3 && (
              <motion.div
                key="word-empower"
                initial={{ opacity: 0, scale: 0.8, y: 20, filter: 'blur(12px)' }}
                animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 1.15, y: -20, filter: 'blur(12px)' }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-xs md:text-sm font-semibold tracking-[0.4em] uppercase text-indigo-300 mb-1.5 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                  Next-Gen Interaction
                </span>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-[0.28em] bg-gradient-to-r from-white via-primary to-cyanAccent bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(79,70,229,0.7)]">
                  EMPOWER
                </h2>
              </motion.div>
            )}

            {/* Phase 4: Final REAURA Master Title & Standout "A"s */}
            {phase === 4 && (
              <motion.div
                key="master-reaura"
                variants={finalLettersContainerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col items-center justify-center"
              >
                {/* Brand Name REAURA */}
                <div className="flex items-center justify-center tracking-[0.26em] md:tracking-[0.4em] pl-[0.26em] md:pl-[0.4em] text-3xl md:text-5xl lg:text-6xl font-black">
                  {/* R */}
                  <motion.span
                    variants={finalLetterVariants}
                    className="bg-gradient-to-b from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent inline-block drop-shadow-[0_2px_18px_rgba(255,255,255,0.4)]"
                  >
                    R
                  </motion.span>

                  {/* E */}
                  <motion.span
                    variants={finalLetterVariants}
                    className="bg-gradient-to-b from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent inline-block drop-shadow-[0_2px_18px_rgba(255,255,255,0.4)]"
                  >
                    E
                  </motion.span>

                  {/* Standout Futuristic A */}
                  <motion.div
                    variants={finalLetterVariants}
                    className="inline-flex items-center justify-center mx-1 relative transform-gpu hover:scale-110 transition-transform"
                  >
                    <FuturisticA isStandout={true} />
                  </motion.div>

                  {/* U */}
                  <motion.span
                    variants={finalLetterVariants}
                    className="bg-gradient-to-b from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent inline-block drop-shadow-[0_2px_18px_rgba(255,255,255,0.4)]"
                  >
                    U
                  </motion.span>

                  {/* R */}
                  <motion.span
                    variants={finalLetterVariants}
                    className="bg-gradient-to-b from-white via-slate-100 to-indigo-200 bg-clip-text text-transparent inline-block drop-shadow-[0_2px_18px_rgba(255,255,255,0.4)]"
                  >
                    R
                  </motion.span>

                  {/* Final Futuristic A */}
                  <motion.div
                    variants={finalLetterVariants}
                    className="inline-flex items-center justify-center mx-1 relative"
                  >
                    <FuturisticA isStandout={false} />
                  </motion.div>
                </div>

                {/* Cyber Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-3 text-xs md:text-sm font-medium tracking-[0.35em] text-slate-400 uppercase"
                >
                  AI-Powered Multimodal Interface
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* High-tech Progress / Energy Bar */}
        <div className="w-48 md:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden relative mt-4">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: durationMs / 1000, ease: 'linear' }}
            className="h-full bg-gradient-to-r from-primary via-purpleAccent to-cyanAccent shadow-[0_0_10px_#0EA5E9]"
          />
        </div>
      </div>

      {/* Discrete Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-6 right-8 text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 hover:text-white transition-colors duration-200 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md"
      >
        Skip <span>→</span>
      </button>
    </motion.div>
  );
};

export default IntroScreen;
