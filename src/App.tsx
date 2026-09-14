import React, { useState } from 'react';
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
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrolled(e.currentTarget.scrollTop > 20);
  };

  return (
    <div 
      className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-surface/80 text-bodyText selection:bg-primary/20 selection:text-mainHeading scroll-smooth"
      onScroll={handleScroll}
    >
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-borderLight py-4' : 'bg-transparent py-6'} top-0 left-0`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-10 h-10 rounded-xl bg-card border border-borderLight shadow-sm flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img src={logoImg} alt="Reaura Logo" className="w-8 h-8 object-contain" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-mainHeading group-hover:text-primary transition-colors">Reaura</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Solutions', 'Features', 'Team'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-mainHeading hover:text-primary transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full rounded-full"></span>
                </a>
              ))}
              <button onClick={() => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=reaurainterface@gmail.com', '_blank')} className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-purpleAccent text-white text-sm font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-0.5 border border-transparent">
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-surface text-mainHeading transition-colors border border-transparent hover:border-borderLight">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <main className="p-4 md:p-8 space-y-8 md:space-y-12">
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Hero /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><ProblemSolving /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Solution /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Services /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Workflow /></div>

        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><MarketOverview /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><MarketValue /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Investors /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><CaseStudy /></div>
        <div className="snap-start min-h-[calc(100vh-2rem)] md:min-h-[calc(100vh-4rem)] rounded-[40px] overflow-hidden border border-borderLight shadow-xl bg-card relative"><Team /></div>
      </main>

      {/* Footer */}
      <div className="snap-start p-4 md:p-8 pt-0">
      <footer className="bg-surface rounded-[40px] shadow-xl py-12 border border-borderLight relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyanAccent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purpleAccent/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-card border border-borderLight shadow-sm flex items-center justify-center overflow-hidden">
                <img src={logoImg} alt="Reaura Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="text-xl font-bold text-mainHeading">Reaura</span>
          </div>
          <p className="text-mutedText mb-8 max-w-md mx-auto">
            Redefining human-computer interaction with AI-powered multimodal accessibility.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-bodyText font-medium">
            <a href="mailto:reaurainterface@gmail.com" className="hover:text-primary transition-colors">email:reaurainterface@gmail.com</a>
          </div>
          <div className="mt-8 pt-8 border-t border-borderLight text-sm text-mutedText">
            © {new Date().getFullYear()} Reaura. All rights reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
