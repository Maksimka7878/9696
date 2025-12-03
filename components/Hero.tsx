import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-brand-black">
      
      {/* === SPOTLIGHTS BACKGROUND === */}
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#2e1065] via-[#0f0518] to-black opacity-80 z-0"></div>
      
      {/* Left Spotlight Beam */}
      <div className="absolute top-[-20%] left-[0] md:left-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/20 via-brand-accent/20 to-transparent blur-[50px] md:blur-[80px] rotate-[-25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-overlay"></div>
      
      {/* Right Spotlight Beam */}
      <div className="absolute top-[-20%] right-[0] md:right-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/20 via-purple-500/20 to-transparent blur-[50px] md:blur-[80px] rotate-[25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-overlay" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles (Dust in light) */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse-fast"></div>
      
      {/* Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30vh] bg-gradient-to-t from-brand-accent/20 to-transparent blur-[100px] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-6 animate-fadeIn">
            <span className="text-brand-accent uppercase tracking-[0.5em] text-sm md:text-base font-bold drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
              Drum Percussion Show
            </span>
        </div>

        <h1 className="text-7xl md:text-[10rem] font-display font-bold leading-none tracking-tighter mb-8 drop-shadow-2xl animate-scale-in flex flex-row items-center justify-center gap-0">
          <div className="bg-red-600 px-6 md:px-12 py-3 md:py-6 flex items-center">
            <span className="text-yellow-400 text-5xl md:text-[8rem]">ГРИМЕРКА</span>
          </div>
          <div className="bg-black px-6 md:px-12 py-3 md:py-6 flex items-center">
            <span className="text-yellow-300 text-5xl md:text-[8rem]">96</span>
          </div>
        </h1>

        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          Завораживающее симфо-мультимедиа шоу, объединившее в себе бессмертные ритмы
          уличной культуры и уникальный аудио-визуальный опыт.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('tour')?.scrollIntoView({behavior: 'smooth'})}
              className="px-12 py-5 bg-brand-accent rounded-full font-bold font-display tracking-widest uppercase text-white shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:bg-brand-accentHover transition-all duration-300 transform hover:-translate-y-1"
            >
              КУПИТЬ БИЛЕТ
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;