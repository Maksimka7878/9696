import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#15071f]">
      
      {/* === SPOTLIGHTS BACKGROUND === */}
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5b2e8d] via-[#1a0f2f] to-[#12051d] opacity-95 z-0"></div>
      
      {/* Left Spotlight Beam */}
      <div className="absolute top-[-20%] left-[0] md:left-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/40 via-brand-accent/30 to-transparent blur-[60px] md:blur-[90px] rotate-[-25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-screen"></div>
      
      {/* Right Spotlight Beam */}
      <div className="absolute top-[-20%] right-[0] md:right-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/35 via-purple-400/25 to-transparent blur-[60px] md:blur-[90px] rotate-[25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-screen" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles (Dust in light) */}
      <div className="absolute inset-0 z-0 opacity-60 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse-fast mix-blend-screen"></div>
      
      {/* Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30vh] bg-gradient-to-t from-brand-accent/40 to-transparent blur-[110px] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 animate-fadeIn">
            <span className="text-brand-accent uppercase tracking-[0.5em] text-sm md:text-base font-semibold drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
              Drum Percussion Show
            </span>
        </div>

        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-6 md:gap-10 mb-6 animate-scale-in">
          <h1 className="text-4xl md:text-[5rem] font-display font-semibold leading-none tracking-tight drop-shadow-2xl flex flex-row items-center gap-2 md:gap-4">
            <div className="bg-[#9f1e4f] flex items-center py-2 md:py-4 px-4 md:px-6">
              <span className="text-yellow-400 text-3xl md:text-[4rem] tracking-tight leading-none inline-block translate-y-[4px] md:translate-y-[6px] transform">ГРИМЕРКА</span>
            </div>
            <span className="text-yellow-300 text-2xl md:text-[3.5rem] tracking-tight">96</span>
          </h1>

          <img 
            src="/voloshin-logo.svg" 
            alt="Voloshin logo" 
            className="w-32 md:w-64 lg:w-72 drop-shadow-[0_0_25px_rgba(0,0,0,0.35)]" 
          />
        </div>

        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Завораживающее симфо-мультимедиа шоу, объединившее в себе бессмертные ритмы
          уличной культуры и уникальный аудио-визуальный опыт.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-12 py-5 bg-brand-accent rounded-full font-semibold font-display tracking-widest uppercase text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:bg-brand-accentHover transition-all duration-300 transform hover:-translate-y-1"
            >
              КУПИТЬ БИЛЕТ
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;