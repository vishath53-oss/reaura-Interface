import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Hand, MoreHorizontal, CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const services = [
    {
      icon: <Mic className="w-6 sm:w-8 h-6 sm:h-8 text-primary" />,
      title: "Voice Assistant",
      desc: "Control your computer using natural voice commands. Speak, command, and interact with your digital environment hands-free.",
      features: [
        "Natural language voice commands",
        "Hands-free computer control",
        "Speech recognition",
        "Accessible interaction"
      ],
      iconBg: "bg-primary/10",
      accent: "from-primary to-cyanAccent",
      shadow: "hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]",
      textColor: "text-primary"
    },
    {
      icon: <Hand className="w-6 sm:w-8 h-6 sm:h-8 text-cyanAccent" />,
      title: "Air Mouse",
      desc: "Turn hand movements into computer actions. Navigate, move the cursor, and interact with your screen without a physical mouse.",
      features: [
        "Hand gesture recognition",
        "Touchless cursor control",
        "Click and scroll gestures",
        "Camera-based interaction"
      ],
      iconBg: "bg-cyanAccent/10",
      accent: "from-cyanAccent to-primary",
      shadow: "hover:shadow-[0_20px_40px_rgba(6,182,212,0.15)]",
      textColor: "text-cyanAccent"
    },
    {
      icon: <MoreHorizontal className="w-6 sm:w-8 h-6 sm:h-8 text-purpleAccent" />,
      title: "Morse Keyboard",
      desc: "Type using Morse code through an accessible input system designed to support alternative text entry and hands-free interaction.",
      features: [
        "Tap dots to create Morse code.",
        "Audio feedback",
        "Accessible typing",
        "Alternative computer input"
      ],
      iconBg: "bg-purpleAccent/10",
      accent: "from-purpleAccent to-primary",
      shadow: "hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]",
      textColor: "text-purpleAccent"
    }
  ];

  return (
    <section id="features" className="relative py-12 sm:py-16 md:py-24 bg-background/80 overflow-hidden">
      {/* Background Gradients & Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-cyanAccent/10 rounded-full blur-[90px] sm:blur-[120px] -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-purpleAccent/10 rounded-full blur-[80px] sm:blur-[100px] translate-y-1/3 -translate-x-1/4 opacity-70 pointer-events-none" />

      {/* Flowing Waves (Abstract - Hidden on small mobile to avoid horizontal scroll) */}
      <div className="hidden sm:block absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyanAccent/20 to-transparent opacity-50 transform rotate-3 pointer-events-none" />
      <div className="hidden sm:block absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purpleAccent/20 to-transparent opacity-50 transform -rotate-2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6">
            Three Ways to Interact. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-primary">
              One Intelligent Interface.
            </span>
          </h2>
          <p className="text-bodyText text-sm sm:text-base md:text-lg leading-relaxed px-1 sm:px-0">
            Reaura brings together voice commands, hand gestures, and Morse-based text input to make computer interaction more natural, accessible, and flexible.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className={`bg-card/80 backdrop-blur-xl border border-borderLight rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8 transition-all duration-300 ${service.shadow} group relative overflow-hidden flex flex-col h-full ${idx === 2 ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              {/* Card Top Border Accent */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.accent} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${service.iconBg} flex items-center justify-center mb-5 sm:mb-8 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainHeading mb-2 sm:mb-4">{service.title}</h3>
              <p className="text-bodyText text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                {service.desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2.5 sm:space-y-3 mb-2">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-bodyText">
                    <CheckCircle2 className={`w-4 sm:w-5 h-4 sm:h-5 ${service.textColor} shrink-0 mt-0.5`} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
