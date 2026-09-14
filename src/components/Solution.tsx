import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mic, Hand, Type } from 'lucide-react';
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
    <section className="relative min-h-screen py-24 bg-gradient-to-b from-background via-surface to-background overflow-hidden flex items-center justify-center">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyanAccent/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] left-[-10%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-purpleAccent/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
        {/* 3. What Makes Reaura Different */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold text-mainHeading mb-6">What Makes Reaura Different?</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mt-10">
              <span className="px-6 py-3 rounded-full bg-card/80 border border-borderLight text-bodyText font-medium shadow-sm">
                Multiple Input Methods
              </span>
              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
              <span className="px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-purpleAccent/10 border border-primary/30 text-mainHeading font-bold shadow-sm">
                One AI-Powered Multimodal Interface
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pb-16">
            {[
              { icon: <Hand className="text-cyanAccent w-8 h-8" />, title: "Built-in Air Mouse", desc: "Camera-based hand gesture recognition" },
              { icon: <Mic className="text-primary w-8 h-8" />, title: "Voice Assistant", desc: "Seamless computer control" },
              { icon: <Type className="text-purpleAccent w-8 h-8" />, title: "Morse Keyboard", desc: "Alternative text input" },
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                onClick={() => {
                  if (feature.title === "Voice Assistant") {
                    setActiveModal('voice-assistant');
                  } else if (feature.title === "Built-in Air Mouse") {
                    setActiveModal('air-mouse');
                  } else if (feature.title === "Morse Keyboard") {
                    setActiveModal('morse-keyboard');
                  }
                }}
                className={`p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-borderLight hover:bg-card hover:border-primary transition-all duration-500 text-center group cursor-pointer hover:-translate-y-4 shadow-sm hover:shadow-xl relative overflow-hidden ${idx === 1 ? 'md:mt-16' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-500 shadow-sm group-hover:bg-primary/20 border border-primary/20 group-hover:border-primary/40 relative z-10">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-mainHeading mb-3 group-hover:text-primary transition-colors relative z-10">{feature.title}</h4>
                <p className="text-bodyText group-hover:text-mainHeading transition-colors relative z-10 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p variants={itemVariants} className="text-center text-sm text-mutedText mt-4 max-w-2xl mx-auto">
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
