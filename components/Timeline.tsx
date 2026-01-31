import React, { useEffect, useRef, useState } from 'react';
import { TIMELINE_DATA } from '../constants';
import { Disc, Music, Radio, Mic2, Award, BookOpen, Star } from 'lucide-react';

const Timeline: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Icon mapping helper
  const getIconForYear = (index: number) => {
    const icons = [Mic2, Music, Disc, Star, Radio, Disc, Mic2, Disc, Star, Award, Radio, BookOpen];
    const Icon = icons[index % icons.length];
    return <Icon className="w-5 h-5 text-white" />;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate overall progress of the section crossing the viewport
      // Start counting when top of section hits middle of screen
      const startOffset = windowHeight * 0.8;
      const totalHeight = rect.height;
      const scrolled = Math.max(0, startOffset - rect.top);
      const progress = Math.min(1, scrolled / totalHeight);

      setScrollProgress(progress);

      // Determine which items are visible
      const newVisibleItems: number[] = [];
      const items = container.querySelectorAll('.timeline-item');

      items.forEach((item, index) => {
        const itemRect = item.getBoundingClientRect();
        // Item is visible if its top is above the bottom 20% of the screen
        if (itemRect.top < windowHeight * 0.85) {
          newVisibleItems.push(index);
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="timeline" className="bg-[#1a0a2b] py-32 overflow-hidden relative min-h-screen">
      <style>{`
        .active-cable-max {
          max-height: calc(100% - 64px);
        }
        @media (min-width: 768px) {
          .active-cable-max {
            max-height: calc(100% - 16px);
          }
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Moving spotlights */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>
      </div>

      <div ref={containerRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="text-center mb-24 relative">
          <div className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-md">
            <span className="text-brand-accent text-xs font-semibold tracking-[0.3em] uppercase animate-pulse">Live History</span>
          </div>
          <h2
            className="text-5xl md:text-7xl font-display font-semibold text-white mb-6 uppercase tracking-tight cursor-pointer group select-none active:scale-95 transition-transform duration-100"
            onClick={() => {
              // Procedural Kick Drum Sound using Web Audio API
              const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
              const oscillator = audioCtx.createOscillator();
              const gainNode = audioCtx.createGain();

              oscillator.connect(gainNode);
              gainNode.connect(audioCtx.destination);

              // Low frequency sine wave for kick
              oscillator.type = 'sine';

              // Frequency sweep for "thump"
              oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
              oscillator.frequency.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

              // Volume envelope
              gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
              gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);

              oscillator.start();
              oscillator.stop(audioCtx.currentTime + 0.5);
            }}
          >
            Путь <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)] group-hover:brightness-125 transition-all">Громкости</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg flex items-center justify-center gap-2">
            <span className="text-brand-accent animate-pulse">●</span> Нажми на заголовок, чтобы услышать ритм
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg mt-2">
            От гаражных джемов до стадионных гимнов. Хронология звука.
          </p>
        </div>

        {/* --- MAIN TIMELINE STRUCTURE --- */}
        <div className="relative">

          {/* CENTRAL CABLE (Background Gray) */}
          <div className="absolute left-[1.75rem] md:left-1/2 top-0 bottom-0 w-0.5 md:w-2 bg-white/10 rounded-full transform md:-translate-x-1/2 z-0"></div>

          {/* ACTIVE CABLE (Glowing Purple) */}
          <div
            className="absolute left-[1.75rem] md:left-1/2 top-0 w-0.5 md:w-2 bg-brand-accent rounded-full transform md:-translate-x-1/2 transition-all duration-100 ease-out shadow-[0_0_20px_rgba(139,92,246,0.8)] z-10 active-cable-max"
            style={{
              height: `${scrollProgress * 100}%`
            }}
          >
            {/* The "Head" of the cable */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full shadow-[0_0_15px_white] md:shadow-[0_0_20px_white] z-50"></div>
          </div>

          <div className="space-y-12 md:space-y-24 pb-24">
            {TIMELINE_DATA.map((item, index) => {
              const isVisible = visibleItems.includes(index);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`timeline-item relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* SPACE FILLER for opposite side */}
                  <div className="hidden md:block w-1/2"></div>

                  {/* CENTRAL NODE (The "Jack Input") */}
                  <div className="absolute left-[0.75rem] md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 md:w-12 md:h-12 z-20 flex items-center justify-center">
                    {/* Outer Ring */}
                    <div className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ${isVisible ? 'border-brand-accent scale-100 opacity-100 bg-brand-black' : 'border-gray-700 scale-0 opacity-0 bg-transparent'}`}></div>

                    {/* Inner Pulse */}
                    <div className={`absolute inset-0 rounded-full bg-brand-accent/30 blur-md transition-all duration-1000 ${isVisible ? 'opacity-100 scale-150 animate-pulse' : 'opacity-0 scale-50'}`}></div>

                    {/* Icon Container */}
                    <div className={`relative z-10 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all duration-500 ${isVisible ? 'bg-brand-accent rotate-0' : 'bg-gray-800 -rotate-180'}`}>
                      {getIconForYear(index)}
                    </div>
                  </div>

                  {/* CONTENT CARD */}
                  <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                    <div
                      className={`
                        relative group
                        bg-[#13071F] border border-white/5 p-6 md:p-8 rounded-2xl
                        transition-all duration-700 transform
                        hover:bg-brand-accent/5 hover:border-brand-accent/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]
                        ${isVisible
                          ? 'opacity-100 translate-y-0 translate-x-0'
                          : `opacity-0 translate-y-10 ${isEven ? 'md:-translate-x-10' : 'md:translate-x-10'}`
                        }
                      `}
                    >
                      {/* Decorative "Flight Case" Corners */}
                      <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t border-l border-white/20 rounded-tl-lg group-hover:border-brand-accent transition-colors"></div>
                      <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b border-r border-white/20 rounded-br-lg group-hover:border-brand-accent transition-colors"></div>

                      {/* Year Badge */}
                      <div className={`inline-block mb-3 px-3 py-1 bg-white/5 rounded border border-white/10 text-brand-accent font-display font-semibold text-xl md:text-2xl shadow-inner group-hover:text-white group-hover:bg-brand-accent transition-all duration-300 ${isEven ? 'md:ml-auto' : ''}`}>
                        {item.year}
                      </div>

                      {/* Description */}
                      <h3 className="text-gray-200 text-lg md:text-xl font-light leading-relaxed group-hover:text-white transition-colors">
                        {item.description}
                      </h3>

                      {/* Connector Line (Mobile only visual) */}
                      <div className="md:hidden absolute left-[-1.75rem] top-6 w-6 h-[2px] bg-brand-accent/50"></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Bottom Connector Fade */}
          <div className="absolute bottom-0 left-[1.75rem] md:left-1/2 w-0.5 md:w-2 h-24 bg-gradient-to-t from-[#1a0a2b] to-transparent transform md:-translate-x-1/2 z-20"></div>

          {/* FINAL NODE (Завершающий кружок) */}
          <div className="absolute left-[0.75rem] md:left-1/2 bottom-0 transform md:-translate-x-1/2 -translate-y-8 md:translate-y-0 w-10 h-10 md:w-12 md:h-12 z-40 flex items-center justify-center">
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-brand-accent scale-100 opacity-100 bg-brand-black"></div>

            {/* Inner Pulse */}
            <div className="absolute inset-0 rounded-full bg-brand-accent/30 blur-md opacity-100 scale-150 animate-pulse"></div>

            {/* Icon Container */}
            <div className="relative z-10 w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-brand-accent">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Timeline;