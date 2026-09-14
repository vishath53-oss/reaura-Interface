import React from 'react';
import { motion } from 'framer-motion';
import {
  EyeOff, GraduationCap, Ear, Eye, Hand, Cpu, Lightbulb,
  Users, HeartHandshake, ArrowRight, ExternalLink, BookOpen, Wrench
} from 'lucide-react';
import advisorImg from '../assets/advisor_new.jpg';

const CaseStudy: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
  };

  const flowSteps = [
    { label: 'Field Visit', icon: <Users className="w-5 h-5" /> },
    { label: 'User Insights', icon: <Eye className="w-5 h-5" /> },
    { label: 'Design Decisions', icon: <Lightbulb className="w-5 h-5" /> },
    { label: 'Reaura Development', icon: <Cpu className="w-5 h-5" /> },
  ];

  const insights = [
    {
      title: 'Visual Communication Matters',
      desc: 'Deaf and hard-of-hearing users benefit from visual instructions, gestures, and text-based interaction.',
      icon: <Eye className="w-6 h-6 text-pink-500" />,
      bg: 'bg-pink-50',
    },
    {
      title: 'Alternative Input Is Important',
      desc: 'Some users may find traditional keyboards, mice, or voice-based systems difficult to use.',
      icon: <Hand className="w-6 h-6 text-rose-500" />,
      bg: 'bg-rose-50',
    },
    {
      title: 'Technology Can Build Independence',
      desc: 'Accessible computer interfaces can support learning, communication, and daily digital activities.',
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      bg: 'bg-purple-50',
    },
    {
      title: 'User-Centered Design Is Essential',
      desc: 'Reaura should be developed by understanding the real needs, preferences, and feedback of users with disabilities.',
      icon: <HeartHandshake className="w-6 h-6 text-fuchsia-500" />,
      bg: 'bg-fuchsia-50',
    },
  ];

  const school1Points = [
    { icon: <EyeOff className="w-5 h-5 text-pink-500 shrink-0" />, text: 'Supports blind and visually impaired students' },
    { icon: <BookOpen className="w-5 h-5 text-pink-500 shrink-0" />, text: 'Uses Braille and touch-based learning methods' },
    { icon: <Wrench className="w-5 h-5 text-pink-500 shrink-0" />, text: 'Provides tactile, audio, and accessible learning tools' },
    { icon: <HeartHandshake className="w-5 h-5 text-pink-500 shrink-0" />, text: 'Encourages confidence and independence' },
  ];

  const school2Points = [
    { icon: <GraduationCap className="w-5 h-5 text-purple-500 shrink-0" />, text: 'Education from Pre-KG to 12th Standard' },
    { icon: <Eye className="w-5 h-5 text-purple-500 shrink-0" />, text: 'Sign language, visual learning, lip-reading, mirrors, and smart boards' },
    { icon: <Cpu className="w-5 h-5 text-purple-500 shrink-0" />, text: 'Projects in automation, computers, and assistive technology' },
    { icon: <Lightbulb className="w-5 h-5 text-purple-500 shrink-0" />, text: 'Atal Tinkering Lab for creativity, innovation, and hands-on learning' },
  ];

  return (
    <section id="case-study" className="relative py-12 sm:py-16 md:py-24 bg-transparent overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[400px] sm:w-[700px] h-[400px] sm:h-[700px] bg-pink-100/60 rounded-full blur-[100px] sm:blur-[140px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-purple-100/50 rounded-full blur-[90px] sm:blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-10 sm:mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-3 sm:mb-4">
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold tracking-widest text-pink-600 uppercase shadow-sm">
              Case Study
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-mainHeading tracking-tight mb-4 sm:mb-6">
            Understanding Real{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Accessibility Needs
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
            As part of our research for Reaura, we visited two special education institutions to understand the challenges, learning methods, communication needs, and technological interests of students with disabilities.
          </motion.p>
        </motion.div>

        {/* Advisor Profile — above workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-sm mb-10 text-center md:text-left"
        >
          <div className="shrink-0">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_4px_rgba(236,72,153,0.25)] ring-2 ring-pink-300 mx-auto">
              <img src={advisorImg} alt="Case Study Advisor" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-[11px] sm:text-xs font-bold tracking-widest text-pink-600 uppercase">Case Study Advisor</span>
            <h4 className="text-lg sm:text-xl font-extrabold text-mainHeading mt-1 mb-2">Bala Nithika P</h4>
            <p className="text-bodyText text-xs sm:text-sm leading-relaxed max-w-2xl">
              "Advised and contributed to the Reaura case study by sharing observations and insights related to accessibility, special education, communication, and inclusive technology."
            </p>
          </div>
          <a
            href="https://balanithikasjce.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white border border-pink-200 text-xs sm:text-sm font-semibold text-pink-600 hover:bg-pink-50 hover:shadow-md transition-all duration-300 group w-full md:w-auto"
          >
            <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
            Visit Report
          </a>
        </motion.div>

        {/* Visual Flow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-0 mb-12 sm:mb-16 md:mb-20"
        >
          {flowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-1.5 sm:gap-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-200">
                  {React.cloneElement(step.icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-mainHeading text-center max-w-[70px] sm:max-w-[80px] leading-tight">{step.label}</span>
              </div>
              {idx < flowSteps.length - 1 && (
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 mx-1 sm:mx-2 md:mx-4 shrink-0 mb-3 sm:mb-4" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-20"
        >
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-pink-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center shrink-0">
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
              </div>
              <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">Est. 1888</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-mainHeading mb-1 leading-tight">
              Anne Jane Askwith School for the Visually Impaired
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 mb-4 sm:mb-6" />
            <ul className="space-y-3 sm:space-y-4">
              {school1Points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-bodyText text-xs sm:text-sm leading-relaxed">
                  <span className="mt-0.5">{pt.icon}</span>
                  {pt.text}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-purple-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center shrink-0">
                <Ear className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
              </div>
              <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">Est. 1895</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-mainHeading mb-1 leading-tight">
              The Florence Swainson Higher Secondary School for Deaf
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-4 sm:mb-6" />
            <ul className="space-y-3 sm:space-y-4">
              {school2Points.map((pt, i) => (
                <li key={i} className="flex items-start gap-2.5 sm:gap-3 text-bodyText text-xs sm:text-sm leading-relaxed">
                  <span className="mt-0.5">{pt.icon}</span>
                  {pt.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="mb-12 sm:mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-8 sm:mb-10">
            <span className="px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-600 uppercase shadow-sm">
              Key Insights
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-mainHeading mt-3 sm:mt-4">What We Learned From the Visit</h3>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-4 sm:pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${insight.bg} p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-pink-100 flex-shrink-0 min-w-[78vw] sm:min-w-[280px] md:min-w-[320px] snap-center hover:shadow-[0_15px_30px_rgba(236,72,153,0.12)] transition-all duration-300`}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm border border-pink-100 flex items-center justify-center mb-3 sm:mb-4">
                  {insight.icon}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-mainHeading mb-1.5 sm:mb-2">{insight.title}</h4>
                <p className="text-bodyText text-xs sm:text-sm leading-relaxed">{insight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Source label */}
        <p className="text-center text-xs text-mutedText mt-4 sm:mt-6 px-4">
          Source: <a href="https://balanithikasjce.blogspot.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Report on Visits to Special Education Institutions</a>
        </p>

      </div>
    </section>
  );
};

export default CaseStudy;
