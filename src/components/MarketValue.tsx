import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Ear, MessageSquareOff, EyeOff, HeartHandshake, CheckCircle2, ChevronDown } from 'lucide-react';

const MarketValue: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax offsets: left column moves up, right column moves down relative to scroll
  const yLeft = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-40, 40]);
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
    <section ref={sectionRef} id="market-value" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pink-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest text-primary uppercase shadow-sm">
              Target User
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Creating a More Accessible <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              Digital World
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-lg leading-relaxed">
            Reaura is designed to make computer interaction easier and more inclusive for people who face difficulties using traditional keyboards, mice, or voice-based systems. It provides alternative ways to communicate, control computers, and access digital technology.
          </motion.p>
        </motion.div>

        {/* Market Value Cards Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-24 items-start"
        >
          {cards.map((card, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                layout
                style={{ y: idx % 2 === 0 ? yLeft : yRight }}
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
                className="p-8 rounded-3xl bg-card border border-borderLight shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer overflow-hidden"
              >
                <motion.div layout className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <div className={`w-16 h-16 rounded-2xl ${card.bg} border ${card.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {card.icon}
                    </div>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-borderLight/30 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-bodyText" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-mainHeading pr-2">{card.title}</h3>
                </motion.div>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: "auto", opacity: 1, marginTop: 24 }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-4">
                        {card.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
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
          className="w-full mt-8 border-b border-borderLight pb-16 text-center"
        >
          <div className="w-full mx-auto px-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-mainHeading leading-relaxed">
              “Reaura gives every user a more flexible way to communicate, control, and connect with technology.”
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketValue;
