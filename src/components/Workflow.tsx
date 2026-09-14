import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Hand, MoreHorizontal, Laptop, ArrowDown } from 'lucide-react';
import logoImg from '../assets/hero.png';

const Workflow: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const inputs = [
    {
      icon: <Mic className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />,
      title: "Voice Assistant",
      desc: "Speak naturally.",
      bg: "bg-primary/10",
      border: "hover:border-primary"
    },
    {
      icon: <Hand className="w-5 sm:w-6 h-5 sm:h-6 text-cyanAccent" />,
      title: "Air Mouse",
      desc: "Move your hand.",
      bg: "bg-cyanAccent/10",
      border: "hover:border-cyanAccent"
    },
    {
      icon: <MoreHorizontal className="w-5 sm:w-6 h-5 sm:h-6 text-purpleAccent" />,
      title: "Morse Keyboard",
      desc: "Tap dots to create Morse code.",
      bg: "bg-purpleAccent/10",
      border: "hover:border-purpleAccent"
    }
  ];

  return (
    <section id="workflow" className="relative py-12 sm:py-16 md:py-24 bg-background/80 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[90px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-cyanAccent/5 rounded-full blur-[80px] sm:blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6">
            One Interface. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-primary">
              Three Ways to Interact.
            </span>
          </h2>
          <p className="text-bodyText text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
            Choose the interaction method that works best for you. Reaura transforms your input into meaningful computer actions through an intelligent, unified system.
          </p>
        </motion.div>

        {/* Workflow Diagram */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-6 sm:gap-8 lg:gap-0"
        >
          
          {/* Desktop SVG Connectors */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <style>
              {`
                .flow-path {
                  stroke-dasharray: 8 8;
                  animation: flow 1s linear infinite;
                }
                @keyframes flow {
                  to { stroke-dashoffset: -16; }
                }
              `}
            </style>
            <svg width="100%" height="100%" preserveAspectRatio="none" className="opacity-60">
              {/* Left to Center Connections */}
              <path d="M 280 15% C 400 15%, 400 50%, 50% 50%" stroke="#3B82F6" strokeWidth="2" fill="none" className="flow-path" />
              <path d="M 280 50% L 50% 50%" stroke="#06B6D4" strokeWidth="2" fill="none" className="flow-path" />
              <path d="M 280 85% C 400 85%, 400 50%, 50% 50%" stroke="#A855F7" strokeWidth="2" fill="none" className="flow-path" />
              
              {/* Center to Right Connection */}
              <path d="M 50% 50% L calc(100% - 280px) 50%" stroke="#3B82F6" strokeWidth="2" fill="none" className="flow-path" />
            </svg>
          </div>

          {/* 1. Inputs */}
          <motion.div variants={itemVariants} className="w-full max-w-md lg:max-w-none lg:w-[280px] flex flex-col gap-3 sm:gap-4 relative z-10">
            <h4 className="text-xs sm:text-sm font-bold text-mutedText uppercase tracking-wider mb-1 sm:mb-2 text-center lg:text-left">Step 1: Choose Input</h4>
            {inputs.map((input, idx) => (
              <div 
                key={idx} 
                className={`p-3.5 sm:p-4 rounded-2xl bg-card border border-borderLight shadow-sm flex items-center gap-3.5 sm:gap-4 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer ${input.border}`}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${input.bg} flex items-center justify-center shrink-0`}>
                  {input.icon}
                </div>
                <div>
                  <h5 className="font-bold text-mainHeading text-xs sm:text-sm">{input.title}</h5>
                  <p className="text-[11px] sm:text-xs text-bodyText">{input.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Arrow Down */}
          <motion.div variants={itemVariants} className="lg:hidden text-primary my-1">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.div>

          {/* 2. AI Processing Node */}
          <motion.div variants={itemVariants} className="w-full max-w-md lg:max-w-none lg:w-auto flex flex-col items-center relative z-10">
            <h4 className="text-xs sm:text-sm font-bold text-mutedText uppercase tracking-wider mb-4 sm:mb-6 text-center">Step 2: AI Processing</h4>
            
            <div className="relative flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40">
              {/* Pulse rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-[ping_3s_ease-in-out_infinite]" />
              <div className="absolute inset-0 rounded-full border-2 border-cyanAccent/30 animate-[ping_3s_ease-in-out_infinite_1.5s]" />
              
              {/* Center Node */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-card border-2 border-primary shadow-[0_0_40px_rgba(59,130,246,0.3)] flex flex-col items-center justify-center relative z-10 bg-gradient-to-b from-card to-primary/5 hover:scale-105 transition-transform duration-500">
                <img src={logoImg} alt="Reaura AI" className="w-8 h-8 sm:w-12 sm:h-12 object-contain mb-1" />
                <span className="text-[10px] sm:text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-primary">Reaura AI</span>
              </div>
            </div>

            <p className="text-xs text-bodyText text-center max-w-[200px] mt-4 sm:mt-6">
              Interprets input and converts it into meaningful instructions.
            </p>
          </motion.div>

          {/* Mobile Arrow Down */}
          <motion.div variants={itemVariants} className="lg:hidden text-primary my-1">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </motion.div>

          {/* 3. Computer Action */}
          <motion.div variants={itemVariants} className="w-full max-w-md lg:max-w-none lg:w-[280px] relative z-10">
            <h4 className="text-xs sm:text-sm font-bold text-mutedText uppercase tracking-wider mb-4 sm:mb-6 text-center lg:text-right">Step 3: Execution</h4>
            
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-card border border-borderLight flex flex-col items-center justify-center text-center shadow-lg group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-cyanAccent/10 to-primary/10 flex items-center justify-center mb-4 sm:mb-6 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                <Laptop className="w-7 h-7 sm:w-10 sm:h-10 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-mainHeading mb-2 sm:mb-3">Computer Action</h3>
              <p className="text-bodyText text-xs sm:text-sm leading-relaxed">
                The system executes the requested action, enabling natural and flexible computer interaction.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Workflow;
