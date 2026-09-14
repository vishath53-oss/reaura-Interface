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
    <section id="case-study" className="relative py-24 bg-transparent overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-pink-100/60 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4">
            <span className="px-4 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-bold tracking-widest text-pink-600 uppercase shadow-sm">
              Case Study
            </span>
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold text-mainHeading tracking-tight mb-6">
            Understanding Real{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Accessibility Needs
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-bodyText text-lg leading-relaxed">
            As part of our research for Reaura, we visited two special education institutions to understand the challenges, learning methods, communication needs, and technological interests of students with disabilities.
          </motion.p>
        </motion.div>

        {/* Advisor Profile — above workflow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center gap-8 p-8 rounded-3xl border border-pink-200 bg-gradient-to-r from-pink-50 via-white to-purple-50 shadow-sm mb-10"
        >
          <div className="shrink-0">
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-[0_0_0_4px_rgba(236,72,153,0.25)] ring-2 ring-pink-300">
              <img src={advisorImg} alt="Case Study Advisor" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">Case Study Advisor</span>
            <h4 className="text-xl font-extrabold text-mainHeading mt-1 mb-2">Bala Nithika P</h4>
            <p className="text-bodyText text-sm leading-relaxed max-w-2xl">
              "Advised and contributed to the Reaura case study by sharing observations and insights related to accessibility, special education, communication, and inclusive technology."
            </p>
          </div>
          <a
            href="https://balanithikasjce.blogspot.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-pink-200 text-sm font-semibold text-pink-600 hover:bg-pink-50 hover:shadow-md transition-all duration-300 group"
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
          className="flex flex-wrap items-center justify-center gap-2 md:gap-0 mb-20"
        >
          {flowSteps.map((step, idx) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-200">
                  {step.icon}
                </div>
                <span className="text-xs font-semibold text-mainHeading text-center max-w-[80px]">{step.label}</span>
              </div>
              {idx < flowSteps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-pink-300 mx-2 md:mx-4 shrink-0 mb-4" />
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {/* Card 1 */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="p-8 rounded-3xl border border-pink-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_40px_rgba(236,72,153,0.12)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-pink-100 border border-pink-200 flex items-center justify-center">
                <EyeOff className="w-5 h-5 text-pink-600" />
              </div>
              <span className="text-xs font-bold tracking-widest text-pink-600 uppercase">Est. 1888</span>
            </div>
            <h3 className="text-xl font-extrabold text-mainHeading mb-1 leading-tight">
              Anne Jane Askwith School for the Visually Impaired
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 mb-6" />
            <ul className="space-y-4">
              {school1Points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-bodyText text-sm leading-relaxed">
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
            className="p-8 rounded-3xl border border-purple-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-[0_20px_40px_rgba(168,85,247,0.12)] transition-all duration-300 group"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center">
                <Ear className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-xs font-bold tracking-widest text-purple-600 uppercase">Est. 1895</span>
            </div>
            <h3 className="text-xl font-extrabold text-mainHeading mb-1 leading-tight">
              The Florence Swainson Higher Secondary School for Deaf
            </h3>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 mb-6" />
            <ul className="space-y-4">
              {school2Points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-bodyText text-sm leading-relaxed">
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
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-10">
            <span className="px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-600 uppercase shadow-sm">
              Key Insights
            </span>
            <h3 className="text-3xl font-extrabold text-mainHeading mt-4">What We Learned From the Visit</h3>
          </motion.div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {insights.map((insight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className={`${insight.bg} p-6 rounded-3xl border border-pink-100 flex-shrink-0 min-w-[85vw] md:min-w-[320px] snap-center hover:shadow-[0_15px_30px_rgba(236,72,153,0.12)] transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm border border-pink-100 flex items-center justify-center mb-4">
                  {insight.icon}
                </div>
                <h4 className="text-lg font-bold text-mainHeading mb-2">{insight.title}</h4>
                <p className="text-bodyText text-sm leading-relaxed">{insight.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Source label */}
        <p className="text-center text-xs text-mutedText mt-6">
          Source: <a href="https://balanithikasjce.blogspot.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:underline">Report on Visits to Special Education Institutions</a>
        </p>

      </div>
    </section>
  );
};

export default CaseStudy;
