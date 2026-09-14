import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, HeartPulse, GraduationCap, Globe2, Landmark, ArrowRight, Settings2, Users, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const Investors: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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

  const categories = [
    {
      title: "Assistive Technology Investors",
      icon: <Handshake className="w-8 h-8 text-primary" />,
      color: "bg-primary/10 border-primary/20",
      items: [
        "Investors focused on accessibility and inclusive innovation",
        "Support for developing affordable assistive computer interfaces"
      ]
    },
    {
      title: "Healthcare & Rehab Organizations",
      icon: <HeartPulse className="w-8 h-8 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20",
      items: [
        "Rehabilitation centers",
        "Assistive technology providers",
        "Organizations supporting people with physical disabilities"
      ]
    },
    {
      title: "Special Education Institutions",
      icon: <GraduationCap className="w-8 h-8 text-cyanAccent" />,
      color: "bg-cyanAccent/10 border-cyanAccent/20",
      items: [
        "Schools for deaf and hard-of-hearing students",
        "Special education institutions",
        "Inclusive learning centers"
      ]
    },
    {
      title: "NGOs & Disability Support Foundations",
      icon: <Globe2 className="w-8 h-8 text-primary" />,
      color: "bg-primary/10 border-primary/20",
      items: [
        "Organizations working for disability inclusion",
        "Foundations supporting communication and accessibility",
        "Social-impact technology programs"
      ]
    },
    {
      title: "Government & Social-Impact Programs",
      icon: <Landmark className="w-8 h-8 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20",
      items: [
        "Government accessibility initiatives",
        "Digital inclusion programs",
        "Innovation and social-impact funding schemes"
      ]
    }
  ];


  return (
    <section id="investors" className="relative py-12 sm:py-16 md:py-24 pb-16 sm:pb-24 md:pb-32 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-primary/5 rounded-full blur-[100px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purpleAccent/5 rounded-full blur-[90px] sm:blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-8 sm:mb-12"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4 max-w-full">
            <span className="inline-flex items-center justify-center flex-wrap px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-primary uppercase shadow-sm text-center">
              Potential Investors & Supporters
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6 leading-tight">
            Partnering to Build a <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              More Accessible Future
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
            Reaura is an assistive technology project designed to support deaf, non-speaking, and physically challenged users through voice commands, hand gestures, and Morse-based text input. We are seeking potential investors, organizations, and supporters who believe in inclusive technology and accessible digital interaction.
          </motion.p>
        </motion.div>

        {/* Left / Right Scroll Controls */}
        <div className="flex items-center justify-between mb-4 px-2">
          <span className="text-xs font-semibold text-mutedText flex items-center gap-1.5 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Scroll to explore cards
          </span>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-borderLight shadow-sm hover:shadow-md hover:border-primary/40 text-mainHeading flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-mainHeading" />
            </button>
            <button 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-borderLight shadow-sm hover:shadow-md hover:border-primary/40 text-mainHeading flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-mainHeading" />
            </button>
          </div>
        </div>

        {/* Categories Horizontal Scroll Carousel */}
        <motion.div 
          ref={scrollRef}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex overflow-x-auto gap-4 sm:gap-6 pb-6 pt-2 mb-12 sm:mb-16 md:mb-20 items-start w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden scroll-smooth px-1"
        >
          {categories.map((category, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                layout
                whileHover={{ y: -4, scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
                className="w-[270px] sm:w-[295px] md:w-[310px] shrink-0 p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-card border border-borderLight shadow-md hover:shadow-xl hover:border-primary/40 transition-all duration-300 group flex flex-col cursor-pointer overflow-hidden select-none"
              >
                <motion.div layout className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${category.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {React.cloneElement(category.icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                    </div>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-borderLight/30 flex items-center justify-center shrink-0 mt-1"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-bodyText" />
                    </motion.div>
                  </div>
                  <div className="min-h-[48px] sm:min-h-[56px] flex items-center">
                    <h3 className="text-base sm:text-lg font-bold text-mainHeading leading-snug pr-1 group-hover:text-primary transition-colors">{category.title}</h3>
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
                      <ul className="space-y-2.5 pt-2 border-t border-borderLight/40">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-bodyText text-xs sm:text-sm leading-relaxed">{item}</span>
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

        {/* Visual Pipeline & Goals */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          {/* Visual: Support -> Development -> Impact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 sm:mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-borderLight -translate-y-1/2 -z-10"></div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-borderLight shadow-sm w-44 sm:w-48">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <Handshake className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <h4 className="font-bold text-mainHeading text-sm sm:text-base">Support</h4>
            </motion.div>

            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-50 rotate-90 md:rotate-0 shrink-0" />

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-borderLight shadow-sm w-44 sm:w-48">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purpleAccent/10 flex items-center justify-center mb-3 sm:mb-4">
                <Settings2 className="w-6 h-6 sm:w-7 sm:h-7 text-purpleAccent" />
              </div>
              <h4 className="font-bold text-mainHeading text-sm sm:text-base">Development</h4>
            </motion.div>

            <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-primary opacity-50 rotate-90 md:rotate-0 shrink-0" />

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-borderLight shadow-sm w-44 sm:w-48">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-cyanAccent/10 flex items-center justify-center mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-7 sm:h-7 text-cyanAccent" />
              </div>
              <h4 className="font-bold text-mainHeading text-sm sm:text-base">User Impact</h4>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="text-center"
        >
          <div className="w-full mt-4 sm:mt-8 border-t border-borderLight pt-10 sm:pt-16">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainHeading mb-6 sm:mb-8 px-2">
              “Together, we can make digital interaction more accessible for everyone.”
            </h3>
            <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reaurainterface@gmail.com', '_blank')} className="inline-flex w-fit items-center gap-2.5 sm:gap-3 px-8 sm:px-10 py-4 sm:py-5 mx-auto rounded-full bg-gradient-to-r from-primary to-purpleAccent text-white font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              Partner With Reaura <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Investors;
