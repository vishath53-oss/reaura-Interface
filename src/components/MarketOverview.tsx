import React from 'react';
import { motion } from 'framer-motion';
import { Ear, MessageSquareOff, EyeOff, Hand, Keyboard, Layers } from 'lucide-react';

const MarketOverview: React.FC = () => {
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

  const userGroups = [
    {
      title: "Deaf & Hard-of-Hearing Users",
      desc: "Need non-audio-based computer interaction.",
      icon: <Ear className="w-6 h-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Non-Speaking Users",
      desc: "Need alternative text-input and communication methods.",
      icon: <MessageSquareOff className="w-6 h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    },
    {
      title: "Blind and Visually Impaired Users",
      desc: "Need accessible, non-visual ways to interact with computers and digital technology.",
      icon: <EyeOff className="w-6 h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    }
  ];

  const valuePoints = [
    {
      title: "Alternative Interaction",
      desc: "Voice, hand gestures, and Morse input in one system.",
      icon: <Hand className="w-6 h-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Improved Accessibility",
      desc: "Reduces dependence on traditional input devices.",
      icon: <Layers className="w-6 h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    },
    {
      title: "Better Digital Communication",
      desc: "Morse Keyboard enables text-based computer interaction.",
      icon: <Keyboard className="w-6 h-6 text-cyanAccent" />,
      color: "bg-cyanAccent/10 border-cyanAccent/20"
    }
  ];

  return (
    <section id="market-overview" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 opacity-80 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-purpleAccent/5 rounded-full blur-[100px] translate-x-1/2 opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold tracking-widest text-primary uppercase shadow-sm">
              Market Value
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Creating Technology <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              for Every Ability
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-xl font-medium leading-relaxed italic">
            “How many people need Reaura, and how much value can it provide?”
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative mb-24">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-borderLight to-transparent -translate-x-1/2"></div>
          
          {/* Left Side: Who Needs Reaura */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-mainHeading mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">1</div>
              Who Needs Reaura?
            </motion.h3>
            
            <div className="space-y-6">
              {userGroups.map((group, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-card border border-borderLight shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 relative group"
                >
                  {/* Decorative connection node */}
                  <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-px bg-borderLight opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary" />
                  </div>

                  <div className={`w-12 h-12 rounded-xl ${group.color} border flex items-center justify-center shrink-0`}>
                    {group.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-mainHeading mb-1">{group.title}</h4>
                    <p className="text-bodyText text-sm leading-relaxed">{group.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Value Provided */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-mainHeading mb-6 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purpleAccent/20 flex items-center justify-center text-purpleAccent text-sm">2</div>
              Value We Provide
            </motion.h3>
            
            <div className="space-y-6">
              {valuePoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="p-6 rounded-2xl bg-card border border-borderLight shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 relative group"
                >
                  {/* Decorative connection node */}
                  <div className="hidden lg:block absolute top-1/2 -left-12 w-12 h-px bg-borderLight opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-purpleAccent" />
                  </div>

                  <div className={`w-12 h-12 rounded-xl ${point.color} border flex items-center justify-center shrink-0`}>
                    {point.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-mainHeading mb-1">{point.title}</h4>
                    <p className="text-bodyText text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Bottom Highlight Statement */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="w-full mt-8 border-b border-borderLight pb-16 text-center"
        >
          <div className="w-full mx-auto px-4">
            <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-mainHeading leading-relaxed">
              “Reaura makes computer interaction more accessible, flexible, and inclusive.”
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketOverview;
