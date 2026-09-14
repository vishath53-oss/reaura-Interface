import React from 'react';
import { motion } from 'framer-motion';
import { MousePointerClick, Hand, Users } from 'lucide-react';
import accessibilityUserImg from '../assets/accessibility-user.png';

const WheelchairIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <circle cx="13" cy="5" r="2.5" />
    <path d="M14 7h-2c-1.1 0-2 .9-2 2v6h5.5l1.8 4h3.2l-2-4.5H12V9h2v-2z" />
    <path d="M10.8 18c-1.9 0-3.4-1.5-3.4-3.4 0-1.7 1.2-3.1 2.8-3.3l-1.3-1.8C6.6 10.1 5 12.2 5 14.6 5 17.8 7.6 20.4 10.8 20.4c2.2 0 4.1-1.2 5.1-3l-2.1-1.1c-.6 1-1.7 1.7-3 1.7z" />
  </svg>
);

const ProblemSolving: React.FC = () => {
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
    <section id="about" className="relative py-12 sm:py-16 md:py-24 bg-gradient-to-b from-background/80 via-surface/80 to-background/80 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-cyanAccent/15 to-transparent pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-primary/15 rounded-full blur-[100px] sm:blur-[150px] mix-blend-multiply pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-purpleAccent/10 rounded-full blur-[90px] sm:blur-[150px] mix-blend-multiply pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4 max-w-full">
            <span className="px-3.5 py-1.5 rounded-full bg-card border border-borderLight text-[11px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-primary uppercase shadow-sm">
              The Challenge
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight text-mainHeading leading-tight">
            Making Computer Interaction <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purpleAccent">More Accessible</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-bodyText leading-relaxed max-w-3xl mx-auto px-1 sm:px-0">
            Traditional computer interfaces are not designed for every user. Reaura explores a more flexible way to interact with digital systems.
          </motion.p>
        </motion.div>

        {/* 1. Main Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-20 md:mb-28">
          {/* Left: Keyboard Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-borderLight group max-w-lg mx-auto lg:max-w-none w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 opacity-80" />
            <img
              src={accessibilityUserImg}
              alt="Person using assistive technology to control a computer"
              className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-card/90 backdrop-blur-md flex items-center justify-center border border-borderLight shadow-sm shrink-0">
                <MousePointerClick className="w-4 h-4 sm:w-5 sm:h-5 text-mainHeading" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-mainHeading backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card/80 border border-borderLight shadow-sm">
                Assistive Technology in Use
              </span>
            </div>
          </motion.div>

          {/* Right: Problem Cards */}
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {[
              {
                title: "Difficulty with Traditional Input",
                desc: "People with physical disabilities may struggle to use conventional keyboards and mice.",
                icon: <WheelchairIcon className="w-5 sm:w-6 h-5 sm:h-6 text-primary" />
              },
              {
                title: "Limited Hand & Motor Movement",
                desc: "Restricted hand or motor movement can make traditional computer interaction difficult.",
                icon: <Hand className="w-5 sm:w-6 h-5 sm:h-6 text-cyanAccent" />
              },
              {
                title: "Need for Hands-Free Control",
                desc: "Users may need alternative ways to interact with computers without depending entirely on physical input devices.",
                icon: <Users className="w-5 sm:w-6 h-5 sm:h-6 text-purpleAccent" />
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card/60 backdrop-blur-sm border border-borderLight hover:bg-card hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {item.icon}
                </div>
                <div className="relative z-10 min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-mainHeading mb-1.5 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-bodyText leading-relaxed text-xs sm:text-sm group-hover:text-mainHeading transition-colors">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSolving;
