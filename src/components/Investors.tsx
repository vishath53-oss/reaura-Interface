import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Handshake, HeartPulse, GraduationCap, Globe2, Landmark, ArrowRight, Settings2, Users, ChevronDown } from 'lucide-react';

const Investors: React.FC = () => {
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
    <section id="investors" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purpleAccent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-80 pointer-events-none" />

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
              Potential Investors & Supporters
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Partnering to Build a <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              More Accessible Future
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-lg leading-relaxed">
            Reaura is an assistive technology project designed to support deaf, non-speaking, and physically challenged users through voice commands, hand gestures, and Morse-based text input. We are seeking potential investors, organizations, and supporters who believe in inclusive technology and accessible digital interaction.
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 mb-16 items-start [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden px-4 md:px-0"
        >
          {categories.map((category, idx) => {
            const isOpen = expandedIndex === idx;

            return (
              <motion.div 
                key={idx}
                variants={itemVariants}
                layout
                onClick={() => setExpandedIndex(isOpen ? null : idx)}
                className="flex-none w-[85vw] md:w-[45vw] lg:w-[350px] snap-center p-8 rounded-3xl bg-card border border-borderLight shadow-lg hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer overflow-hidden"
              >
                <motion.div layout className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div className={`w-16 h-16 rounded-2xl ${category.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                      {category.icon}
                    </div>
                    <motion.div 
                      animate={{ rotate: isOpen ? 180 : 0 }} 
                      transition={{ duration: 0.3 }}
                      className="w-8 h-8 rounded-full bg-borderLight/30 flex items-center justify-center shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-bodyText" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-mainHeading leading-snug pr-2">{category.title}</h3>
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
                      <ul className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            <span className="text-bodyText text-sm leading-relaxed">{item}</span>
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
          className="mb-24"
        >
          {/* Visual: Support -> Development -> Impact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-px bg-borderLight -translate-y-1/2 -z-10"></div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-6 rounded-3xl border border-borderLight shadow-sm w-48">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Handshake className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-bold text-mainHeading">Support</h4>
            </motion.div>

            <ArrowRight className="w-8 h-8 text-primary opacity-50 rotate-90 md:rotate-0" />

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-6 rounded-3xl border border-borderLight shadow-sm w-48">
              <div className="w-14 h-14 rounded-full bg-purpleAccent/10 flex items-center justify-center mb-4">
                <Settings2 className="w-7 h-7 text-purpleAccent" />
              </div>
              <h4 className="font-bold text-mainHeading">Development</h4>
            </motion.div>

            <ArrowRight className="w-8 h-8 text-primary opacity-50 rotate-90 md:rotate-0" />

            <motion.div variants={itemVariants} className="flex flex-col items-center text-center bg-card p-6 rounded-3xl border border-borderLight shadow-sm w-48">
              <div className="w-14 h-14 rounded-full bg-cyanAccent/10 flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-cyanAccent" />
              </div>
              <h4 className="font-bold text-mainHeading">User Impact</h4>
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
          <div className="w-full mt-8 border-t border-borderLight pt-16">
            <h3 className="text-xl md:text-2xl font-bold text-mainHeading mb-8">
              “Together, we can make digital interaction more accessible for everyone.”
            </h3>
            <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reaurainterface@gmail.com', '_blank')} className="inline-flex w-fit items-center gap-3 px-10 py-5 mx-auto rounded-full bg-gradient-to-r from-primary to-purpleAccent text-white font-bold text-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
              Partner With Reaura <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Investors;
