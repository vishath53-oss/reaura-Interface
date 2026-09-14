import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ear, MessageSquareOff, EyeOff, HeartHandshake, CheckCircle2, ChevronDown } from 'lucide-react';

const MarketValue: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

  const cards = [
    {
      title: "Deaf Users",
      icon: <Ear className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10",
      border: "border-primary/20",
      items: [
        "Supports non-audio-based computer interaction",
        "Enables interaction through hand gestures and Morse input",
        "Reduces dependence on spoken communication"
      ]
    },
    {
      title: "Non-Speaking Users",
      icon: <MessageSquareOff className="w-8 h-8 text-pinkAccent" />,
      bg: "bg-pinkAccent/10",
      border: "border-pinkAccent/20",
      items: [
        "Provides alternative text-input methods",
        "Allows communication through Morse-based typing",
        "Helps users interact without voice commands"
      ]
    },
    {
      title: "Blind and Visually Impaired Users",
      icon: <EyeOff className="w-8 h-8 text-purpleAccent" />,
      bg: "bg-purpleAccent/10",
      border: "border-purpleAccent/20",
      items: [
        "Access alternative computer interaction through voice commands and other non-visual input methods",
        "Reaura aims to support users who experience difficulties with traditional visual interfaces",
        "Supports more flexible and independent digital access"
      ]
    },
    {
      title: "Assistive Technology Organizations",
      icon: <HeartHandshake className="w-8 h-8 text-primary" />,
      bg: "bg-primary/10",
      border: "border-primary/20",
      items: [
        "Useful for special education institutions",
        "Rehabilitation and accessibility centers",
        "NGOs and organizations supporting disabled users"
      ]
    }
  ];

  return (
    <section id="market-value" className="relative py-12 sm:py-16 md:py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-pink-50 rounded-full blur-[100px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-50 rounded-full blur-[80px] sm:blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4">
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest text-primary uppercase shadow-sm">
              Target User
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6">
            Creating a More Accessible <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              Digital World
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            Reaura is designed to make computer interaction easier and more inclusive for people who face difficulties using traditional keyboards, mice, or voice-based systems. It provides alternative ways to communicate, control computers, and access digital technology.
          </motion.p>
        </motion.div>

        {/* Market Value Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-20 lg:mb-24 items-start"
        >
          {cards.map((card, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                layout
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
                className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-card border border-borderLight shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer overflow-hidden"
              >
                <motion.div layout className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between items-center">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {React.cloneElement(card.icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-borderLight/30 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-bodyText" />
                    </motion.div>
                  </div>
                  <div className="min-h-[32px] sm:min-h-[40px] md:min-h-[56px] flex items-center">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainHeading pr-2">{card.title}</h3>
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-3 sm:space-y-4 pt-2 border-t border-borderLight/40">
                        {card.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm md:text-base">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-bodyText leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Key Value Proposition Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full mt-4 sm:mt-8 border-b border-borderLight pb-10 sm:pb-16 text-center"
        >
          <div className="w-full mx-auto px-2 sm:px-4">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-mainHeading leading-relaxed">
              “Reaura gives every user a more flexible way to communicate, control, and connect with technology.”
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketValue;
