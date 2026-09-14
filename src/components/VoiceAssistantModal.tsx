import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mic, LayoutGrid, Keyboard, Search, Bot, ArrowRight, Activity, Brain, Terminal, Laptop } from 'lucide-react';
import voiceImg from '../assets/voice-assistant-light.png';

interface VoiceAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VoiceAssistantModal: React.FC<VoiceAssistantModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const featuresLeft = [
    {
      icon: <Mic className="w-6 h-6 text-primary" />,
      title: "Voice Commands",
      desc: "Speak naturally",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-primary" />,
      title: "App Control",
      desc: "Open and manage applications",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    }
  ];

  const featuresRight = [
    {
      icon: <Keyboard className="w-6 h-6 text-cyanAccent" />,
      title: "Voice Typing",
      desc: "Convert speech into text",
      glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    },
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Search & Navigation",
      desc: "Perform tasks hands-free",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      icon: <Bot className="w-6 h-6 text-purpleAccent" />,
      title: "AI Assistance",
      desc: "Understand and respond to commands",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    }
  ];

  const workflow = [
    { name: "Voice", icon: <Mic className="w-5 h-5 text-gray-400" /> },
    { name: "Speech Recognition", icon: <Activity className="w-5 h-5 text-gray-400" /> },
    { name: "AI", icon: <Brain className="w-5 h-5 text-gray-400" /> },
    { name: "Command", icon: <Terminal className="w-5 h-5 text-gray-400" /> },
    { name: "Computer Action", icon: <Laptop className="w-5 h-5 text-gray-400" /> },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/80 backdrop-blur-xl"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[95vw] lg:max-w-7xl h-[90vh] bg-white border border-borderLight rounded-3xl shadow-[0_20px_60px_rgba(59,130,246,0.15)] overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white border border-borderLight flex items-center justify-center text-mutedText hover:text-mainHeading hover:bg-borderLight transition-colors z-30"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyanAccent/5 via-transparent to-primary/5 pointer-events-none" />

          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-5/12 p-6 lg:p-8 flex flex-col h-full overflow-y-auto relative z-10 border-r border-borderLight">
              
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-mainHeading mb-2 tracking-tight">
                  Interact with
                </h2>
                <h2 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent tracking-tight">
                  Voice Commands
                </h2>
                <p className="text-mutedText mt-4 text-sm font-medium">Fast, hands-free computer control.</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-auto">
                {[...featuresLeft, ...featuresRight].map((item, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl bg-white/50 backdrop-blur-sm border border-borderLight transition-all duration-300 hover:-translate-y-1 flex flex-col items-start ${item.glow} hover:shadow-lg`}>
                    <div className="w-10 h-10 rounded-full bg-white border border-borderLight shadow-sm flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-mainHeading mb-1">{item.title}</h4>
                    <p className="text-xs text-bodyText leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Workflow Section */}
              <div className="mt-6 pt-6 border-t border-borderLight">
                <h3 className="text-sm font-medium text-mutedText mb-4 uppercase tracking-wider">Simple Workflow</h3>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                  {workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-borderLight shadow-sm">
                        {React.cloneElement(step.icon, { className: "w-4 h-4 text-primary" })}
                        <span className="text-mainHeading font-semibold whitespace-nowrap">{step.name}</span>
                      </div>
                      {idx < workflow.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Image Column */}
            <div className="w-full lg:w-7/12 p-6 lg:p-8 flex flex-col h-full min-h-0 bg-gradient-to-b from-surface/50 to-background">
              <div className="flex-1 min-h-[300px] relative rounded-3xl overflow-hidden border border-borderLight shadow-lg group bg-white">
                <img 
                  src={voiceImg} 
                  alt="Voice Assistant Interface" 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <div className="absolute bottom-6 left-6 z-20">
                  <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-borderLight text-mainHeading text-sm font-semibold shadow-sm">
                    Voice Assistant Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default VoiceAssistantModal;
