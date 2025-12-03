import React, { useRef } from 'react';
import { TRACKLIST_DATA } from '../constants';
import { Disc, PlayCircle, BarChart3, ChevronRight, ChevronLeft } from 'lucide-react';

const Tracklist: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350;
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="tracklist" className="relative py-32 bg-[#0a0210] overflow-hidden">
      
      {/* --- Marquee Background --- */}
      <div className="absolute top-[10%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <div className="inline-block animate-[float-slow_20s_linear_infinite]" style={{ animationDuration: '30s' }}>
          <span className="text-[15rem] font-display font-bold uppercase text-white">SETLIST • TRACKLIST • HITS • </span>
          <span className="text-[15rem] font-display font-bold uppercase text-white">SETLIST • TRACKLIST • HITS • </span>
        </div>
      </div>
      
      <div className="absolute bottom-[10%] left-0 w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none">
        <div className="inline-block animate-[float-slower_25s_linear_infinite]" style={{ animationDuration: '35s' }}>
           <span className="text-[15rem] font-display font-bold uppercase text-white">GRIMERKA96 • DRUM SHOW • LIVE • </span>
           <span className="text-[15rem] font-display font-bold uppercase text-white">GRIMERKA96 • DRUM SHOW • LIVE • </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="text-left">
            <div className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-md">
                <span className="text-brand-accent text-xs font-bold tracking-[0.3em] uppercase animate-pulse">Event Music</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 leading-tight">
              ТРЕК-ЛИСТ <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400 drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]">МЕРОПРИЯТИЯ</span>
            </h2>
          </div>
          
          <div className="flex gap-4 mt-8 md:mt-0">
             <button onClick={() => scroll('left')} className="p-4 rounded-full border border-white/10 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 group">
                <ChevronLeft className="w-6 h-6 text-gray-400 group-hover:text-white" />
             </button>
             <button onClick={() => scroll('right')} className="p-4 rounded-full border border-white/10 hover:bg-white/10 hover:border-brand-accent transition-all duration-300 group">
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-white" />
             </button>
          </div>
        </div>

        {/* Scrollable Track Container */}
        <div 
           ref={scrollContainerRef}
           className="flex gap-8 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0"
           style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
           {TRACKLIST_DATA.map((track) => (
             <div 
               key={track.id} 
               className="flex-shrink-0 w-[280px] md:w-[320px] snap-start group relative perspective-1000"
             >
                {/* Card Container */}
                <div className="relative bg-brand-gray/10 rounded-3xl p-4 border border-white/5 transition-all duration-500 hover:bg-brand-gray/20 hover:border-brand-accent/30 hover:-translate-y-4 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] overflow-hidden">
                   
                   {/* Vinyl Disc Animation (Slides out on hover) */}
                   <div className="absolute top-4 right-4 w-[240px] h-[240px] rounded-full bg-black border-4 border-gray-800 flex items-center justify-center transition-transform duration-700 ease-out group-hover:translate-x-[40%] group-hover:rotate-180 opacity-0 group-hover:opacity-100 z-0">
                      <div className="absolute inset-0 rounded-full border border-white/10 opacity-50"></div>
                      <div className="absolute inset-4 rounded-full border border-white/5 opacity-50"></div>
                      <div className="w-1/3 h-1/3 bg-brand-accent rounded-full flex items-center justify-center">
                         <div className="w-2 h-2 bg-black rounded-full"></div>
                      </div>
                   </div>

                   {/* Album Art */}
                   <div className="relative z-10 aspect-square rounded-2xl overflow-hidden shadow-2xl mb-6">
                      <img 
                        src={track.coverUrl} 
                        alt={track.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                      {/* Overlay Icon */}
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px]">
                         <PlayCircle className="w-16 h-16 text-white drop-shadow-[0_0_10px_rgba(0,0,0,0.5)] transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                   </div>

                   {/* Track Info */}
                   <div className="relative z-10 px-2">
                      <div className="flex justify-between items-start mb-2">
                         <h3 className="text-2xl font-display font-bold text-white truncate pr-2 group-hover:text-brand-accent transition-colors">{track.title}</h3>
                         <span className="text-xs font-mono text-gray-500 border border-gray-700 rounded px-1.5 py-0.5 mt-1">{track.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                         <Disc className="w-4 h-4 text-brand-accent/70" />
                         <span className="uppercase tracking-wider">{track.originalArtist}</span>
                      </div>
                      
                      {/* Animated Equalizer Bars (Fake) */}
                      <div className="mt-6 flex items-end gap-1 h-8 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                         {[...Array(15)].map((_, i) => (
                            <div 
                              key={i} 
                              className="w-full bg-brand-accent rounded-t-sm animate-pulse" 
                              style={{ 
                                height: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.1}s`,
                                animationDuration: '0.8s'
                              }}
                            ></div>
                         ))}
                      </div>
                   </div>

                </div>
             </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default Tracklist;