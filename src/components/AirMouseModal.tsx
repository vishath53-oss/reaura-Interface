import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Hand, MousePointer2, Pointer, ArrowUpDown, Accessibility, ArrowRight, Camera, Cpu, Laptop } from 'lucide-react';
import airMouseDemoImg from '../assets/air-mouse-demo.jpg';
import airMouseGesturesImg from '../assets/air-mouse-gestures.png';

interface AirMouseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AirMouseModal: React.FC<AirMouseModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const featuresLeft = [
    {
      icon: <Hand className="w-6 h-6 text-primary" />,
      title: "Hand Tracking",
      desc: "Detect hand movements through a camera",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      icon: <MousePointer2 className="w-6 h-6 text-cyanAccent" />,
      title: "Cursor Control",
      desc: "Move the cursor naturally",
      glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    }
  ];

  const featuresRight = [
    {
      icon: <Pointer className="w-6 h-6 text-purpleAccent" />,
      title: "Gesture Click",
      desc: "Click without a physical mouse",
      glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    },
    {
      icon: <ArrowUpDown className="w-6 h-6 text-primary" />,
      title: "Scroll Control",
      desc: "Scroll up and down with gestures",
      glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    },
    {
      icon: <Accessibility className="w-6 h-6 text-cyanAccent" />,
      title: "Hands-Free",
      desc: "No physical mouse required",
      glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    }
  ];

  const workflow = [
    { name: "Hand Gesture", icon: <Hand className="w-5 h-5 text-gray-400" /> },
    { name: "Camera", icon: <Camera className="w-5 h-5 text-gray-400" /> },
    { name: "Hand Tracking", icon: <Accessibility className="w-5 h-5 text-gray-400" /> },
    { name: "Recognition", icon: <Cpu className="w-5 h-5 text-gray-400" /> },
    { name: "Computer Action", icon: <Laptop className="w-5 h-5 text-gray-400" /> },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/80 backdrop-blur-xl"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[95vw] lg:max-w-7xl max-h-[92vh] lg:h-[90vh] bg-white border border-borderLight rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(6,182,212,0.15)] overflow-y-auto lg:overflow-hidden flex flex-col"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-borderLight flex items-center justify-center text-mutedText hover:text-mainHeading hover:bg-borderLight transition-colors z-30 shadow-sm"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Background Gradients */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyanAccent/5 via-transparent to-purpleAccent/5 pointer-events-none" />

          <div className="flex-1 flex flex-col lg:flex-row min-h-0">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-5/12 p-5 sm:p-6 lg:p-8 flex flex-col relative z-10 border-b lg:border-b-0 lg:border-r border-borderLight overflow-y-auto">
              
              <div className="mb-6 sm:mb-8 pr-8 lg:pr-0">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-mainHeading mb-1 sm:mb-2 tracking-tight">
                  Navigate with
                </h2>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyanAccent to-primary tracking-tight">
                  Hand Gestures
                </h2>
                <p className="text-mutedText mt-2 sm:mt-4 text-xs sm:text-sm font-medium">Intuitive camera-based tracking.</p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 lg:mb-auto">
                {[...featuresLeft, ...featuresRight].map((item, idx) => (
                  <div key={idx} className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm border border-borderLight transition-all duration-300 hover:-translate-y-1 flex flex-col items-start ${item.glow} hover:shadow-lg`}>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-borderLight shadow-sm flex items-center justify-center mb-2.5 sm:mb-3">
                      {item.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-mainHeading mb-0.5 sm:mb-1">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-bodyText leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Workflow Section */}
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-borderLight">
                <h3 className="text-xs sm:text-sm font-medium text-mutedText mb-3 sm:mb-4 uppercase tracking-wider">Simple Workflow</h3>
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-medium">
                  {workflow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg bg-white border border-borderLight shadow-sm">
                        {React.cloneElement(step.icon, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyanAccent" })}
                        <span className="text-mainHeading font-semibold whitespace-nowrap">{step.name}</span>
                      </div>
                      {idx < workflow.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Images Column */}
            <div className="w-full lg:w-7/12 p-5 sm:p-6 lg:p-8 flex flex-col gap-4 bg-gradient-to-b from-surface/50 to-background overflow-y-auto">
              
              {/* Laptop Image (Top) */}
              <div className="min-h-[220px] sm:min-h-[280px] lg:flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-borderLight shadow-lg group bg-white">
                <img 
                  src={airMouseDemoImg} 
                  alt="Air Mouse Demo" 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                  <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/90 backdrop-blur-md border border-borderLight text-mainHeading text-xs sm:text-sm font-semibold shadow-sm">
                    Camera Tracking
                  </span>
                </div>
              </div>

              {/* Gestures Infographic (Bottom) */}
              <div className="min-h-[200px] sm:min-h-[260px] lg:flex-1 relative rounded-2xl sm:rounded-3xl overflow-hidden border border-borderLight shadow-md group bg-white">
                <img 
                  src={airMouseGesturesImg} 
                  alt="Air Mouse Gestures" 
                  className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AirMouseModal;
