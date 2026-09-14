
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyanAccent/15 rounded-full blur-[120px] -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] -z-10 mix-blend-multiply pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-purpleAccent/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div
            className="flex flex-col items-start text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-borderLight backdrop-blur-md mb-8 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium tracking-wide text-mainHeading uppercase">
                Reaura — AI-Powered Multimodal Interface
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 text-mainHeading tracking-tight"
            >
              Reimagining the Way <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent via-primary to-purpleAccent bg-[length:200%_auto] animate-gradient">
                Humans Interact
              </span> <br/>
              with Computers.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-bodyText mb-10 max-w-xl leading-relaxed"
            >
              One intelligent interface. Three powerful ways to interact. Reaura transforms voice commands, hand gestures, and Morse input into meaningful computer actions.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a href="#about" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <span className="relative z-10">Explore Reaura</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purpleAccent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              
              <a href="#solutions" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-card text-mainHeading font-medium rounded-full border border-borderLight backdrop-blur-md transition-all hover:bg-white hover:border-primary shadow-sm">
                <Play className="w-5 h-5 text-primary" />
                <span>See How It Works</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Design */}
            <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" as const }}
            className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
          >
            {/* The Laptop Mockup */}
            <motion.div 
              className="relative w-full max-w-[500px] z-10"
              variants={floatingVariants}
              animate="animate"
            >
              <div className="relative aspect-video bg-mainHeading rounded-lg border-[6px] border-slate-800 shadow-[0_20px_50px_rgba(59,130,246,0.15)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent mix-blend-overlay" />
                
                {/* Screen Content - Abstract representation of the interface */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-mainHeading">
                   {/* Central Reaura Core */}
                   <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-cyanAccent to-primary p-[2px] animate-pulse shadow-[0_0_40px_rgba(6,182,212,0.4)]">
                      <div className="w-full h-full rounded-full bg-mainHeading flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyanAccent/20 to-primary/20" />
                        <Sparkles className="w-8 h-8 text-white relative z-10" />
                      </div>
                   </div>
                </div>

                {/* Webcam dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
              </div>
              {/* Desktop Monitor Stand */}
              <div className="flex flex-col items-center">
                {/* Stand Neck */}
                <div className="w-12 h-10 bg-gradient-to-b from-slate-700 to-slate-300 shadow-inner" />
                {/* Stand Base */}
                <div className="w-48 h-3 bg-slate-200 rounded-t-lg shadow-[0_10px_20px_rgba(0,0,0,0.2)] border-b-2 border-slate-400" />
              </div>

              {/* Floating Interaction Cards */}
              {/* Voice Card */}
              <motion.div 
                className="absolute -left-12 top-10 p-4 rounded-2xl flex items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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

              {/* Gesture Card */}
              <motion.div 
                className="absolute -right-16 top-1/2 -translate-y-1/2 p-4 rounded-2xl flex items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="w-10 h-10 rounded-full bg-cyanAccent/10 flex items-center justify-center">
                  <Hand className="w-5 h-5 text-cyanAccent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-mainHeading">Air Mouse</p>
                  <p className="text-xs text-mutedText mt-1 font-medium">Tracking active</p>
                </div>
              </motion.div>

              {/* Morse Card */}
              <motion.div 
                className="absolute -left-8 bottom-12 p-4 rounded-2xl flex items-center gap-4 z-20 shadow-xl border border-borderLight bg-card/90 backdrop-blur-xl"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              >
                <div className="w-10 h-10 rounded-full bg-purpleAccent/10 flex items-center justify-center">
                  <Type className="w-5 h-5 text-purpleAccent" />
                </div>
                <div>
                  <p className="text-sm font-bold text-mainHeading">Morse</p>
                  <p className="text-xs text-purpleAccent font-mono mt-1 font-bold tracking-widest">... --- ...</p>
                </div>
              </motion.div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 overflow-visible pointer-events-none">
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
          </motion.div>

        </div>
      </div>
      
      {/* Global styles for custom animations that don't fit directly in tailwind config without editing */}
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
