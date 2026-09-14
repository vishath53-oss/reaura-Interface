import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Hand, Keyboard, Layers } from 'lucide-react';

const Accessibility: React.FC = () => {
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

  const benefits = [
    {
      title: "Flexible Interaction",
      desc: "Explore different ways to control a computer according to the task and user's preference.",
      icon: <Hand className="w-6 h-6 text-pink-500" />,
      bg: "bg-pink-100",
      border: "border-pink-200",
      shadow: "hover:shadow-[0_15px_30px_rgba(236,72,153,0.15)]"
    },
    {
      title: "Hands-Free Possibilities",
      desc: "Voice and gesture-based interaction can reduce dependence on physical input devices in suitable situations.",
      icon: <Mic className="w-6 h-6 text-rose-500" />,
      bg: "bg-rose-100",
      border: "border-rose-200",
      shadow: "hover:shadow-[0_15px_30px_rgba(244,63,94,0.15)]"
    },
    {
      title: "Alternative Text Input",
      desc: "Morse Keyboard provides an additional method for entering text using dots and dashes.",
      icon: <Keyboard className="w-6 h-6 text-purple-500" />,
      bg: "bg-purple-100",
      border: "border-purple-200",
      shadow: "hover:shadow-[0_15px_30px_rgba(168,85,247,0.15)]"
    },
    {
      title: "Unified Experience",
      desc: "Bring multiple interaction methods together within one Reaura system.",
      icon: <Layers className="w-6 h-6 text-fuchsia-500" />,
      bg: "bg-fuchsia-100",
      border: "border-fuchsia-200",
      shadow: "hover:shadow-[0_15px_30px_rgba(217,70,239,0.15)]"
    }
  ];


  return (
    <section id="accessibility" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background Gradients & Waves */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purpleAccent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-80 pointer-events-none" />
      
      {/* Flowing background waves (subtle parallax) */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-200 to-transparent opacity-50 transform rotate-3" 
      />

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
            <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold tracking-widest text-pink-600 uppercase shadow-sm">
              Accessibility & Benefits
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Technology That Adapts <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              to the Way You Interact.
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-lg leading-relaxed">
            Reaura explores flexible computer interaction by bringing voice commands, hand gestures, and Morse-based text input together in one unified system.
          </motion.p>
        </motion.div>



        {/* Benefits Grid */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 lg:gap-8 mb-24 pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {benefits.map((benefit, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-transparent border border-pink-100 transition-all duration-300 ${benefit.shadow} group min-w-[85vw] md:min-w-[400px] snap-center shrink-0`}
            >
              <div className="flex items-start gap-6">
                <div className={`w-14 h-14 rounded-2xl ${benefit.bg} border ${benefit.border} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-mainHeading mb-2">{benefit.title}</h3>
                  <p className="text-bodyText leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Accessibility;
