import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroScreen from './components/IntroScreen';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import ProblemSolving from './components/ProblemSolving';
import Services from './components/Services';
import Workflow from './components/Workflow';
import MarketOverview from './components/MarketOverview';
import MarketValue from './components/MarketValue';
import Investors from './components/Investors';
import Solution from './components/Solution';
import CaseStudy from './components/CaseStudy';
import Team from './components/Team';
import { ArrowRight } from 'lucide-react';
import logoImg from './assets/hero.png';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Solutions', href: '#solutions' },
    { label: 'Features', href: '#features' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroScreen onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen w-full relative bg-surface/50 text-bodyText selection:bg-primary/20 selection:text-mainHeading overflow-x-hidden">
        {/* Navigation */}
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-borderLight py-3 sm:py-4' : 'bg-transparent py-4 sm:py-6'} top-0 left-0`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="flex items-center justify-between">
              <a 
                href="#home" 
                className="flex items-center gap-2.5 sm:gap-3 cursor-pointer group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-card border border-borderLight shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                  <img src={logoImg} alt="Reaura Logo" className="w-7 h-7 sm:w-8 sm:h-8 object-contain" />
                </div>
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-mainHeading group-hover:text-primary transition-colors">Reaura</span>
              </a>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((item) => (
                  <a 
                    key={item.href} 
                    href={item.href}
                    className="text-sm font-medium text-mainHeading hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                ))}
                <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reaurainterface@gmail.com', '_blank')} className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-purpleAccent text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 border border-transparent">
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="md:hidden p-2 rounded-xl bg-card/80 hover:bg-surface text-mainHeading transition-colors border border-borderLight/80 shadow-sm"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 backdrop-blur-xl border-b border-borderLight shadow-lg overflow-hidden"
              >
                <div className="px-6 py-5 flex flex-col gap-3">
                  {navLinks.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-2 text-base font-semibold text-mainHeading hover:text-primary transition-colors flex items-center justify-between"
                    >
                      {item.label}
                      <ArrowRight className="w-4 h-4 text-primary/60" />
                    </a>
                  ))}
                  <div className="pt-3 border-t border-borderLight">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reaurainterface@gmail.com', '_blank');
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-primary to-purpleAccent text-white text-sm font-medium shadow-md"
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Website Content */}
        <main className="p-3 sm:p-4 md:p-8 space-y-6 sm:space-y-8 md:space-y-12">
          
          {/* Hero Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Hero />
            </div>
          </section>

          {/* Problem Solving / About Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <ProblemSolving />
            </div>
          </section>

          {/* Solution Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Solution />
            </div>
          </section>

          {/* Services Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Services />
            </div>
          </section>

          {/* Workflow Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Workflow />
            </div>
          </section>

          {/* Market Overview Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <MarketOverview />
            </div>
          </section>

          {/* Market Value Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <MarketValue />
            </div>
          </section>

          {/* Investors Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Investors />
            </div>
          </section>

          {/* Case Study Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <CaseStudy />
            </div>
          </section>

          {/* Team Section */}
          <section className="relative rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-borderLight/80 shadow-xl bg-card/65 backdrop-blur-sm">
            <AnimatedBackground />
            <div className="relative z-10">
              <Team />
            </div>
          </section>
        </main>

        {/* Footer */}
        <div className="p-3 sm:p-4 md:p-8 pt-0">
          <footer className="relative bg-surface/75 backdrop-blur-sm rounded-[24px] sm:rounded-[32px] md:rounded-[40px] shadow-xl py-8 sm:py-12 border border-borderLight overflow-hidden">
            <AnimatedBackground />
            <div className="absolute top-0 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-cyanAccent/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-purpleAccent/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6">
                <div className="w-8 h-8 rounded-lg bg-card border border-borderLight shadow-sm flex items-center justify-center overflow-hidden">
                    <img src={logoImg} alt="Reaura Logo" className="w-6 h-6 object-contain" />
                </div>
                <span className="text-xl font-bold text-mainHeading">Reaura</span>
              </div>
              <p className="text-mutedText mb-6 sm:mb-8 text-xs sm:text-sm max-w-md mx-auto px-2">
                Redefining human-computer interaction with AI-powered multimodal accessibility.
              </p>
              <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-bodyText font-medium">
                <a href="mailto:reaurainterface@gmail.com" className="hover:text-primary transition-colors">email:reaurainterface@gmail.com</a>
              </div>
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-borderLight text-xs sm:text-sm text-mutedText">
                © {new Date().getFullYear()} Reaura. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
