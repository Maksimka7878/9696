import React, { useState, useEffect, useRef } from 'react';
import { WHY_VISIT_IMAGES } from '../constants';
import { MousePointerClick } from 'lucide-react';

const WhyVisit: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const section = sectionRef.current;
      
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      const viewportHeight = window.innerHeight;

      // Calculate scroll progress within the section
      const scrollTop = window.scrollY;
      const distance = scrollTop - sectionTop;
      const maxDistance = sectionHeight - viewportHeight;

      let progress = 0;
      if (distance >= 0 && maxDistance > 0) {
        progress = distance / maxDistance;
      } else if (distance < 0) {
        progress = 0;
      } else if (distance > maxDistance) {
        progress = 1;
      }

      // Map progress to active index (0 to total-1)
      const total = WHY_VISIT_IMAGES.length;
      // We clamp the index so the last image stays visible at the end of the scroll
      const index = Math.min(Math.floor(progress * total), total - 1);
      
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the visual state of a card based on its index relative to the active (scroll-driven) index
  const getCardStyle = (index: number) => {
    // If the card index is less than activeIndex, it has been "scrolled past" -> Fly it out
    if (index < activeIndex) {
      return {
        zIndex: 50 + index, // Keep order
        className: 'transition-all duration-700 ease-in',
        style: {
          transform: 'translate(120%, -20%) rotate(25deg) scale(1.1)',
          opacity: 0
        }
      };
    }

    // If the card is the current active one
    if (index === activeIndex) {
      return {
        zIndex: 50,
        className: 'transition-all duration-500 ease-out',
        style: {
          transform: 'translate(0, 0) rotate(-2deg) scale(1)',
          opacity: 1
        }
      };
    }

    // If the card is next in line (waiting in stack)
    const diff = index - activeIndex;
    
    // Calculate stack effect
    const rotate = diff * 4; // 4, 8, 12 degrees
    const translateX = diff * -10; // -10, -20 px
    const translateY = diff * 10; // 10, 20 px
    const scale = 1 - (diff * 0.05); // 0.95, 0.9

    return {
      zIndex: 50 - diff,
      className: 'transition-all duration-700 ease-out',
      style: {
        transform: `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg) scale(${scale})`,
        opacity: Math.max(0, 1 - diff * 0.2) // Fade out distant cards
      }
    };
  };

  return (
    // Height set to 400vh to allow enough scroll distance to flip through photos
    <section ref={sectionRef} className="relative h-[400vh] bg-[#1a052a]">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Background Atmosphere - Nebula Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#1a052a] to-[#0f0518] z-0"></div>
          {/* Abstract shape */}
          <div className="absolute top-[30%] left-[-10%] w-[90%] h-[60%] bg-gradient-to-r from-brand-accent/20 via-purple-600/10 to-transparent blur-[80px] rounded-[100%] rotate-12 animate-pulse-fast"></div>
          {/* Stardust */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: The Scroll-Driven Photo Stack */}
            <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center md:justify-start perspective-1000">
              {WHY_VISIT_IMAGES.map((img, index) => {
                const cardState = getCardStyle(index);
                
                return (
                  <div
                    key={img.id}
                    className={`absolute w-72 h-96 md:w-80 md:h-[420px] bg-white p-3 pb-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-sm border border-gray-200 ${cardState.className}`}
                    style={{ 
                      zIndex: cardState.zIndex,
                      ...cardState.style
                    }}
                  >
                    {/* Photo Content */}
                    <div className="w-full h-full overflow-hidden bg-gray-900 relative group">
                      <div className="absolute inset-0 bg-brand-accent/10 z-10 mix-blend-overlay"></div>
                      <img 
                        src={img.url} 
                        alt={img.caption} 
                        className="w-full h-full object-cover filter contrast-110" 
                      />
                    </div>

                    {/* Caption (Polaroid Style) */}
                    <div className="absolute bottom-3 left-0 w-full text-center">
                      <h3 className="font-display font-bold text-2xl text-gray-800 uppercase tracking-widest">{img.caption}</h3>
                      <p className="text-[10px] text-gray-500 font-sans tracking-widest mt-1">GRIMERKA96 • TOUR 2024</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT SIDE: Text Content */}
            <div className="text-center md:text-left z-30 relative">
              <div className="inline-block px-4 py-1 mb-6 border border-brand-accent/30 rounded-full bg-brand-accent/10 backdrop-blur-md">
                  <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">Визуальная Эстетика</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[0.9] drop-shadow-xl">
                ПОЧЕМУ СТОИТ <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">ПОСЕТИТЬ</span><br/>
                НАШЕ ШОУ
              </h2>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-lg mx-auto md:mx-0 font-light tracking-wide border-l-2 border-brand-accent pl-6">
                Симфоническое шоу "GRIMERKA96" — это не просто концерт. Это визуальное путешествие. 
                Каждый удар барабана синхронизирован со вспышкой света, создавая 
                эффект полного погружения, который вы никогда не забудете.
              </p>
              
              {/* Scroll Indicator */}
              <div className="flex items-center gap-3 text-gray-500 animate-pulse justify-center md:justify-start">
                  <MousePointerClick className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-[0.2em]">Листайте вниз для просмотра</span>
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start mt-8">
                 <button 
                    onClick={() => document.getElementById('tour')?.scrollIntoView({behavior: 'smooth'})}
                    className="px-10 py-4 bg-white text-brand-black rounded-lg font-bold font-display tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:bg-gray-200 transition-all duration-300 hover:-translate-y-1"
                 >
                   Купить билет
                 </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVisit;