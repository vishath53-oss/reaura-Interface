import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Hand, Type, MousePointerClick } from 'lucide-react';
import VoiceAssistantModal from './VoiceAssistantModal';
import AirMouseModal from './AirMouseModal';
import MorseKeyboardModal from './MorseKeyboardModal';

const Solution: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="solutions" className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background/80 via-surface/80 to-background/80 overflow-hidden flex items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyanAccent/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] sm:blur-[150px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purpleAccent/10 rounded-full blur-[90px] sm:blur-[150px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full">
        {/* 3. What Makes Reaura Different */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-mainHeading mb-4 sm:mb-6">What Makes Reaura Different?</h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-10">
              <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-card/80 border border-borderLight text-xs sm:text-sm md:text-base text-bodyText font-medium shadow-sm text-center max-w-full">
                Multiple Input Methods
              </span>
              <ArrowRight className="w-5 h-5 text-primary rotate-90 sm:rotate-0 shrink-0" />
              <span className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-gradient-to-r from-primary/10 to-purpleAccent/10 border border-primary/30 text-xs sm:text-sm md:text-base text-mainHeading font-bold shadow-sm text-center max-w-full">
                One AI-Powered Multimodal Interface
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto pb-8 sm:pb-12 md:pb-16 items-start">
            {[
              { icon: <Hand className="text-cyanAccent w-7 h-7 sm:w-8 sm:h-8" />, title: "Built-in Air Mouse", desc: "Camera-based hand gesture recognition" },
              { icon: <Mic className="text-primary w-7 h-7 sm:w-8 sm:h-8" />, title: "Voice Assistant", desc: "Seamless computer control" },
              { icon: <Type className="text-purpleAccent w-7 h-7 sm:w-8 sm:h-8" />, title: "Morse Keyboard", desc: "Alternative text input" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  if (feature.title === "Voice Assistant") {
                    setActiveModal('voice-assistant');
                  } else if (feature.title === "Built-in Air Mouse") {
                    setActiveModal('air-mouse');
                  } else if (feature.title === "Morse Keyboard") {
                    setActiveModal('morse-keyboard');
                  }
                }}
                className={`p-6 sm:p-8 md:p-9 rounded-2xl sm:rounded-3xl bg-card/85 backdrop-blur-sm border border-borderLight hover:bg-card hover:border-primary/50 transition-all duration-300 text-center group cursor-pointer shadow-md hover:shadow-2xl relative overflow-hidden flex flex-col justify-between select-none ${idx === 1 ? 'md:mt-8 lg:mt-12' : ''}`}
              >
                {/* Touch indicator badge */}
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] sm:text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                  <MousePointerClick className="w-3 h-3 sm:w-3.5 sm:h-3.5 animate-pulse" />
                  <span>Tap to see</span>
                </div>

                {/* Ambient glow on touch/hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-purpleAccent/5 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="pt-2">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-active:scale-105 transition-transform duration-300 shadow-sm group-hover:bg-primary/20 border border-primary/20 group-hover:border-primary/40 relative z-10">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold text-mainHeading mb-2 sm:mb-3 group-hover:text-primary transition-colors relative z-10">{feature.title}</h4>
                  <p className="text-sm sm:text-base text-bodyText group-hover:text-mainHeading transition-colors relative z-10 leading-relaxed">{feature.desc}</p>
                </div>

                {/* Bottom View Demo CTA */}
                <div className="mt-5 sm:mt-6 pt-3.5 border-t border-borderLight/60 flex items-center justify-center gap-1.5 text-xs font-semibold text-primary group-hover:text-primary transition-colors relative z-10">
                  <span>Touch to view details</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.p variants={itemVariants} className="text-center text-xs sm:text-sm text-mutedText mt-2 sm:mt-4 max-w-2xl mx-auto px-1 sm:px-0">
            Reaura brings these multiple input methods into one unified system, complementing existing accessibility technologies to provide a more inclusive and flexible experience.
          </motion.p>
        </motion.div>
      </div>

      <VoiceAssistantModal 
        isOpen={activeModal === 'voice-assistant'} 
        onClose={() => setActiveModal(null)} 
      />

      <AirMouseModal 
        isOpen={activeModal === 'air-mouse'} 
        onClose={() => setActiveModal(null)} 
      />

      <MorseKeyboardModal 
        isOpen={activeModal === 'morse-keyboard'} 
        onClose={() => setActiveModal(null)} 
      />
    </section>
  );
};

export default Solution;
