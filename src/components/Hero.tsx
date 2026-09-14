import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Hand, Type, ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section id="home" className="relative flex items-center justify-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:py-24">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-cyanAccent/15 rounded-full blur-[90px] sm:blur-[120px] -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] sm:blur-[150px] -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[280px] sm:w-[400px] h-[280px] sm:h-[400px] bg-purpleAccent/10 rounded-full blur-[80px] sm:blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-borderLight backdrop-blur-md mb-6 sm:mb-8 shadow-sm max-w-full">
              <Sparkles className="w-4 h-4 text-primary shrink-0" />
              <span className="text-[11px] sm:text-xs md:text-sm font-medium tracking-wide text-mainHeading uppercase">
                Reaura — AI-Powered Multimodal Interface
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.18] sm:leading-tight mb-4 sm:mb-6 text-mainHeading tracking-tight"
            >
              Reimagining the Way <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent via-primary to-purpleAccent bg-[length:200%_auto] animate-gradient">
                Humans Interact
              </span>{' '}
              <br className="hidden sm:inline" />
              with Computers.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl text-bodyText mb-6 sm:mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              One intelligent interface. Three powerful ways to interact. Reaura transforms voice commands, hand gestures, and Morse input into meaningful computer actions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full sm:w-auto">
              <a href="#about" className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-white text-sm sm:text-base font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <span className="relative z-10">Explore Reaura</span>
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purpleAccent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a href="#solutions" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-card text-mainHeading text-sm sm:text-base font-medium rounded-full border border-borderLight backdrop-blur-md transition-all hover:bg-white hover:border-primary shadow-sm">
                <Play className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                <span>See How It Works</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
            className="relative w-full flex flex-col items-center justify-center mt-2 lg:mt-0"
          >
            {/* The Laptop / Monitor Mockup Container */}
            <motion.div 
              className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] z-10 mx-auto"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative aspect-video bg-mainHeading rounded-lg sm:rounded-xl border-[4px] sm:border-[6px] border-slate-800 shadow-[0_15px_40px_rgba(59,130,246,0.18)] overflow-hidden w-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />
                
                {/* Screen Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-mainHeading">
                   {/* Central Reaura Core */}
                   <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-cyanAccent to-primary p-[2px] animate-pulse shadow-[0_0_35px_rgba(6,182,212,0.4)]">
                      <div className="w-full h-full rounded-full bg-mainHeading flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/20 to-primary/20" />
                        <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white relative z-10" />
                      </div>
                   </div>
                </div>

                {/* Webcam dot */}
                <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>

              {/* Desktop Monitor Stand */}
              <div className="flex flex-col items-center">
                <div className="w-8 sm:w-12 h-6 sm:h-10 bg-gradient-to-b from-slate-700 to-slate-300 shadow-inner" />
                <div className="w-32 sm:w-48 h-2.5 sm:h-3 bg-slate-200 rounded-t-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-b-2 border-slate-400" />
              </div>

              {/* Desktop Floating Interaction Cards (Absolute on large screens) */}
              {/* Voice Card (Desktop) */}
              <motion.div 
                className="hidden lg:flex absolute -left-12 top-10 p-4 rounded-2xl items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-mainHeading">Voice</p>
                  <div className="flex gap-1 mt-1">
                    {[1,2,3,4,5].map((i) => (
                      <motion.div 
                        key={i}
                        className="w-1 bg-primary rounded-full"
                        animate={{ height: ['4px', '16px', '4px'] }}
                        transition={{ duration: 1, repeat: Infinity, delay: i * 0.1 }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Gesture Card (Desktop) */}
              <motion.div 
                className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 p-4 rounded-2xl items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-cyanAccent/10 flex items-center justify-center shrink-0">
                  <Hand className="w-5 h-5 text-cyanAccent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-mainHeading">Air Mouse</p>
                  <p className="text-xs text-mutedText mt-1 font-medium">Tracking active</p>
                </div>
              </motion.div>

              {/* Morse Card (Desktop) */}
              <motion.div 
                className="hidden lg:flex absolute -left-8 bottom-12 p-4 rounded-2xl items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="w-10 h-10 rounded-full bg-purpleAccent/10 flex items-center justify-center shrink-0">
                  <Type className="w-5 h-5 text-purpleAccent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-mainHeading">Morse</p>
                  <p className="text-xs text-purpleAccent font-mono mt-1 font-bold tracking-widest">... --- ...</p>
                </div>
              </motion.div>

              {/* Connecting Lines (Desktop only) */}
              <svg className="hidden lg:block absolute inset-0 w-full h-full -z-10 overflow-visible pointer-events-none">
                <path 
                  d="M-20,60 Q100,60 250,150" 
                  fill="none" 
                  stroke="rgba(59,130,246,0.4)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_20s_linear_infinite]"
                />
                <path 
                  d="M520,250 Q400,250 250,150" 
                  fill="none" 
                  stroke="rgba(6,182,212,0.4)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_20s_linear_infinite]"
                />
                <path 
                  d="M-10,400 Q100,400 250,150" 
                  fill="none" 
                  stroke="rgba(168,85,247,0.4)" 
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  className="animate-[dash_20s_linear_infinite]"
                />
              </svg>
            </motion.div>

            {/* Mobile & Tablet Interactive Feature Cards (Clean responsive vertical stack/grid without overlapping) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full max-w-lg mt-5 px-1 lg:hidden">
              {/* Mobile Voice Card */}
              <div className="p-3 sm:p-3.5 rounded-xl flex items-center gap-3 shadow-md border border-borderLight bg-card/95 backdrop-blur-xl">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mic className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-mainHeading">Voice Assistant</p>
                  <p className="text-[11px] text-mutedText truncate">Hands-free speech commands</p>
                </div>
              </div>

              {/* Mobile Air Mouse Card */}
              <div className="p-3 sm:p-3.5 rounded-xl flex items-center gap-3 shadow-md border border-borderLight bg-card/95 backdrop-blur-xl">
                <div className="w-9 h-9 rounded-full bg-cyanAccent/10 flex items-center justify-center shrink-0">
                  <Hand className="w-4 h-4 text-cyanAccent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-mainHeading">Air Mouse</p>
                  <p className="text-[11px] text-cyanAccent font-medium truncate">Touchless hand gestures</p>
                </div>
              </div>

              {/* Mobile Morse Card */}
              <div className="p-3 sm:p-3.5 rounded-xl flex items-center gap-3 shadow-md border border-borderLight bg-card/95 backdrop-blur-xl">
                <div className="w-9 h-9 rounded-full bg-purpleAccent/10 flex items-center justify-center shrink-0">
                  <Type className="w-4 h-4 text-purpleAccent" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-sm font-bold text-mainHeading">Morse Keyboard</p>
                  <p className="text-[11px] text-purpleAccent font-mono font-bold tracking-wider truncate">... --- ...</p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
      
      {/* Animation styles */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
