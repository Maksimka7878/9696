import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#1a0a2b] relative overflow-hidden min-h-screen flex items-center">
      
      {/* Background Grid & Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1a0a2b] via-transparent to-[#1a0a2b]"></div>

      {/* Floating Drum Elements (Simulated 3D) */}
      <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] opacity-20 animate-float-slow pointer-events-none mix-blend-screen hidden md:block">
         <img src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-full blur-[2px] transform rotate-12" alt="Drum Element" />
      </div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] opacity-10 animate-float-slower pointer-events-none mix-blend-screen hidden md:block">
         <img src="https://images.unsplash.com/photo-1524230659092-07f99a75c013?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover rounded-full blur-[4px] transform -rotate-12" alt="Drum Element" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Typography & Text */}
          <div className="space-y-10 relative z-20">
            <div className="relative">
               <span className="absolute -top-12 left-0 text-[80px] md:text-[120px] font-display font-semibold text-white/5 leading-none select-none -z-10 animate-pulse">NOISE</span>
               <h2 className="text-5xl md:text-7xl font-display font-semibold text-white leading-[0.9]">
                БОЛЬШЕ ЧЕМ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400 drop-shadow-[0_0_20px_rgba(139,92,246,0.6)]">ПРОСТО ШУМ</span>
              </h2>
            </div>
            
            <div className="h-1 w-32 bg-brand-accent shadow-[0_0_15px_rgba(139,92,246,0.8)]"></div>
            
            <div className="text-gray-300 text-lg md:text-xl font-light leading-relaxed space-y-6">
              <p>
                Grimerka96 — это индустриальный ритм, выкованный в 96-м. Мы не играем музыку, мы создаем <strong className="text-white font-semibold">звуковую архитектуру</strong>.
              </p>
              <p>
                Эксперименты с металлоломом переросли в шоу мирового уровня. Синхронная точность, визуальный спектакль и нефильтрованный адреналин.
              </p>
            </div>

            {/* HUD Statistics */}
            <div className="grid grid-cols-3 gap-4 border border-white/10 bg-white/5 p-6 rounded-xl backdrop-blur-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-brand-accent/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
               
               <div className="relative text-center border-r border-white/10">
                  <div className="text-3xl md:text-4xl font-display font-semibold text-white">04</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-accent mt-1">Участников</div>
               </div>
               <div className="relative text-center border-r border-white/10">
                  <div className="text-3xl md:text-4xl font-display font-semibold text-white">120+</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-accent mt-1">Концертов</div>
               </div>
               <div className="relative text-center">
                  <div className="text-3xl md:text-4xl font-display font-semibold text-white">∞</div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-accent mt-1">Энергии</div>
               </div>
            </div>
          </div>
          
          {/* Right Column: Visual Composition */}
          <div className="relative h-[500px] md:h-[600px] w-full perspective-1000 mt-12 lg:mt-0">
             
             {/* Center Image (Main Band) */}
             <div className="absolute inset-4 md:inset-12 z-20 bg-brand-black border border-white/10 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden group">
                <div className="absolute inset-0 bg-brand-accent/20 z-10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <img 
                  src="/image/preview.png" 
                  alt="Band Performance" 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700" 
                />
                
                {/* Overlay UI elements */}
                <div className="absolute top-4 right-4 flex gap-1">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                   <span className="text-[10px] text-white font-mono uppercase">Live Feed</span>
                </div>
                <div className="absolute bottom-4 left-4 border border-white/50 px-2 py-1">
                   <span className="text-[10px] text-white font-display uppercase tracking-widest">Grimerka96_CAM_01</span>
                </div>
             </div>

             {/* Floating Drum Snare (Top Left) */}
             <div className="absolute top-[-20px] left-[-20px] md:top-0 md:left-0 w-32 h-32 md:w-48 md:h-48 z-30 animate-float-slow drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=400&auto=format&fit=crop" 
                   className="w-full h-full object-cover rounded-full border-2 border-brand-accent/30"
                   style={{ clipPath: 'circle(50%)' }}
                   alt="Snare"
                 />
                 <div className="absolute -bottom-6 -right-6 text-brand-accent font-mono text-xs bg-black px-2 py-1 border border-brand-accent">SNARE.WAV</div>
             </div>

             {/* Floating Cymbal/Detail (Bottom Right) */}
             <div className="absolute bottom-[-20px] right-[-20px] md:bottom-0 md:right-0 w-40 h-40 md:w-56 md:h-56 z-10 animate-float-slower drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
                 <img 
                   src="https://images.unsplash.com/photo-1485550409059-9afb054cada4?q=80&w=400&auto=format&fit=crop" 
                   className="w-full h-full object-cover rounded-full border-2 border-white/20 filter sepia-[.5] hue-rotate-180"
                   style={{ clipPath: 'circle(50%)' }}
                   alt="Cymbal"
                 />
             </div>

             {/* Decorative Circles */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-dashed border-brand-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;