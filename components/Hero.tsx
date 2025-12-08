import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen md:h-screen w-full overflow-hidden flex items-center justify-center bg-[#15071f] py-8 md:py-0">
      
      {/* === SPOTLIGHTS BACKGROUND === */}
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#5b2e8d] via-[#1a0f2f] to-[#12051d] opacity-95 z-0"></div>
      
      {/* Left Spotlight Beam */}
      <div className="absolute top-[-20%] left-[0] md:left-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/40 via-brand-accent/30 to-transparent blur-[60px] md:blur-[90px] rotate-[-25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-screen"></div>
      
      {/* Right Spotlight Beam */}
      <div className="absolute top-[-20%] right-[0] md:right-[10%] w-[40vw] md:w-[20vw] h-[150vh] bg-gradient-to-b from-white/35 via-purple-400/25 to-transparent blur-[60px] md:blur-[90px] rotate-[25deg] transform-origin-top z-0 animate-spotlight pointer-events-none mix-blend-screen" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles (Stars) */}
      <div 
        className="absolute inset-0 z-0 opacity-80 animate-pulse-fast mix-blend-screen"
        style={{
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 110px 140px, #fff, rgba(0,0,0,0)), 
            radial-gradient(2px 2px at 200px 50px, #fff, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 150px 220px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 250px 200px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 280px 100px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 320px 150px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 360px 40px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 30px 300px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 180px 350px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 350px 320px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 240px 280px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 80px 250px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 450px 50px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 500px 120px, #eee, rgba(0,0,0,0)),
            radial-gradient(4px 4px at 550px 300px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 600px 200px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 650px 80px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 700px 350px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 750px 150px, #eee, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 400px 450px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 520px 520px, #ddd, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 100px 500px, #fff, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 650px 550px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 300px 580px, #fff, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 400px 300px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 380px 280px, #eee, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 420px 320px, #fff, rgba(0,0,0,0)),
            radial-gradient(1px 1px at 410px 290px, #ddd, rgba(0,0,0,0)),
            radial-gradient(2.5px 2.5px at 390px 330px, #fff, rgba(0,0,0,0)),
            radial-gradient(1.5px 1.5px at 430px 310px, #fff, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 370px 340px, #eee, rgba(0,0,0,0)),
            radial-gradient(3px 3px at 440px 270px, #fff, rgba(0,0,0,0))
          `,
          backgroundSize: '800px 600px',
          backgroundRepeat: 'repeat',
        }}
      ></div>
      
      {/* Floor Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[30vh] bg-gradient-to-t from-brand-accent/40 to-transparent blur-[110px] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        
        <div className="mb-2 md:mb-4 animate-fadeIn">
            <span className="text-brand-accent uppercase tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-sm font-semibold drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
              Drum Percussion Show
            </span>
        </div>

        <div className="mb-2 md:mb-4 animate-fadeIn flex justify-center translate-y-2 md:translate-y-8">
          <img 
            src="/voloshin-logo.svg" 
            alt="Voloshin logo" 
            className="w-56 md:w-80 lg:w-96 xl:w-[28rem] drop-shadow-[0_0_25px_rgba(0,0,0,0.35)]" 
          />
        </div>

        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-2 md:gap-6 mb-2 md:mb-4 animate-scale-in">
          <h1 className="text-4xl md:text-[4rem] lg:text-[4.5rem] font-display font-semibold leading-none tracking-tight drop-shadow-2xl flex flex-row items-center gap-1.5 md:gap-4">
            <div className="bg-[#9f1e4f] flex items-center py-1 md:py-3 px-2.5 md:px-5">
              <span className="text-yellow-400 text-3xl md:text-[3.5rem] lg:text-[3.8rem] tracking-tight leading-none inline-block translate-y-[1px] md:translate-y-[2px] transform">ГРИМЕРКА</span>
            </div>
            <span className="text-yellow-300 text-2xl md:text-[3rem] lg:text-[3.2rem] tracking-tight">96</span>
          </h1>
        </div>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-3 md:mb-6 font-light leading-relaxed drop-shadow-lg animate-fadeIn px-2" style={{ animationDelay: '0.3s' }}>
          Завораживающее симфо-мультимедиа шоу, объединившее в себе бессмертные ритмы
          уличной культуры и уникальный аудио-визуальный опыт.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center animate-fadeIn" style={{ animationDelay: '0.6s' }}>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
              className="px-8 md:px-12 py-3.5 md:py-5 bg-brand-accent rounded-full font-semibold font-display tracking-widest uppercase text-white text-base md:text-base shadow-[0_0_30px_rgba(139,92,246,0.4)] hover:shadow-[0_0_50px_rgba(139,92,246,0.6)] hover:bg-brand-accentHover transition-all duration-300 transform hover:-translate-y-1"
            >
              КУПИТЬ БИЛЕТ
            </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;