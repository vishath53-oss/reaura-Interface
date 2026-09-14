import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Hand, 
  EyeOff, 
  Compass, 
  Layers, 
  Keyboard 
} from 'lucide-react';

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const userGroups = [
    {
      title: "People with Physical Disabilities",
      desc: "Users with motor challenges who find traditional mouse and keyboard interaction difficult.",
      icon: <Users className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Deaf and Hard-of-Hearing Users",
      desc: "Benefit from gesture-based and visual interaction tools that do not rely on voice.",
      icon: <Hand className="w-5 sm:w-6 h-5 sm:h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    },
    {
      title: "Blind and Visually Impaired Users",
      desc: "Need accessible, non-visual ways to interact with computers and digital technology.",
      icon: <EyeOff className="w-5 sm:w-6 h-5 sm:h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    }
  ];

  const valuePoints = [
    {
      title: "Universal Design",
      desc: "Designed to serve different accessibility needs through one platform.",
      icon: <Compass className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Three Input Modes in One System",
      desc: "Voice Assistant, Air Mouse, and Morse Keyboard work together.",
      icon: <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-purpleAccent" />,
      color: "bg-purpleAccent/10 border-purpleAccent/20"
    },
    {
      title: "Better Digital Communication",
      desc: "Morse Keyboard enables text-based computer interaction.",
      icon: <Keyboard className="w-5 sm:w-6 h-5 sm:h-6 text-cyanAccent" />,
      color: "bg-cyanAccent/10 border-cyanAccent/20"
    }
  ];

  return (
    <section id="market-overview" className="relative py-12 sm:py-16 md:py-24 bg-transparent overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/5 rounded-full blur-[80px] sm:blur-[100px] -translate-x-1/2 opacity-80 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-purpleAccent/5 rounded-full blur-[80px] sm:blur-[100px] translate-x-1/2 opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4 max-w-full">
            <span className="px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[11px] sm:text-xs font-bold tracking-wider sm:tracking-widest text-primary uppercase shadow-sm">
              Market Value
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6">
            Creating Technology <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">
              for Every Ability
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-sm sm:text-base md:text-xl font-medium leading-relaxed italic px-2 sm:px-0">
            “How many people need Reaura, and how much value can it provide?”
          </motion.p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 relative mb-12 sm:mb-16 md:mb-24">
          
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-borderLight to-transparent -translate-x-1/2"></div>
          
          {/* Left Side: Who Needs Reaura */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col space-y-4 sm:space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-bold text-mainHeading mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs sm:text-sm font-bold shrink-0">1</div>
              <span>Who Needs Reaura?</span>
            </motion.h3>
            
            <div className="flex flex-col gap-4 sm:gap-5 flex-1">
              {userGroups.map((group, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.025, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-4 sm:p-5 rounded-2xl bg-card border border-borderLight shadow-md hover:shadow-xl hover:border-primary/40 active:border-primary/50 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 relative group lg:min-h-[120px] lg:h-[120px] cursor-pointer select-none overflow-hidden"
                >
                  {/* Glowing ambient ring while touched/hovered */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Decorative connection node */}
                  <div className="hidden lg:block absolute top-1/2 -right-12 w-12 h-px bg-borderLight opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                  </div>

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${group.color} border flex items-center justify-center shrink-0 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 relative z-10`}>
                    {group.icon}
                  </div>
                  <div className="min-w-0 flex-1 relative z-10">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-mainHeading mb-1 group-hover:text-primary transition-colors">{group.title}</h4>
                    <p className="text-bodyText text-xs sm:text-sm leading-relaxed">{group.desc}</p>
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
            className="flex flex-col space-y-4 sm:space-y-6"
          >
            <motion.h3 variants={itemVariants} className="text-lg sm:text-xl md:text-2xl font-bold text-mainHeading mb-4 sm:mb-6 flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purpleAccent/20 flex items-center justify-center text-purpleAccent text-xs sm:text-sm font-bold shrink-0">2</div>
              <span>Value We Provide</span>
            </motion.h3>
            
            <div className="flex flex-col gap-4 sm:gap-5 flex-1">
              {valuePoints.map((point, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ scale: 1.025, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="p-4 sm:p-5 rounded-2xl bg-card border border-borderLight shadow-md hover:shadow-xl hover:border-purpleAccent/40 active:border-purpleAccent/50 transition-all duration-300 flex items-center gap-3.5 sm:gap-4 relative group lg:min-h-[120px] lg:h-[120px] cursor-pointer select-none overflow-hidden"
                >
                  {/* Glowing ambient ring while touched/hovered */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purpleAccent/5 via-purpleAccent/10 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Decorative connection node */}
                  <div className="hidden lg:block absolute top-1/2 -left-12 w-12 h-px bg-borderLight opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-purpleAccent animate-pulse" />
                  </div>

                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${point.color} border flex items-center justify-center shrink-0 group-hover:scale-110 group-active:scale-110 transition-transform duration-300 relative z-10`}>
                    {point.icon}
                  </div>
                  <div className="min-w-0 flex-1 relative z-10">
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-mainHeading mb-1 group-hover:text-purpleAccent transition-colors">{point.title}</h4>
                    <p className="text-bodyText text-xs sm:text-sm leading-relaxed">{point.desc}</p>
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
          className="w-full mt-4 sm:mt-8 border-b border-borderLight pb-8 sm:pb-12 md:pb-16 text-center"
        >
          <div className="w-full mx-auto px-2 sm:px-4">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-mainHeading leading-relaxed">
              “Reaura makes computer interaction more accessible, flexible, and inclusive.”
            </h3>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MarketOverview;
