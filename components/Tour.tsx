import React from 'react';
import { TOUR_DATES } from '../constants';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

const Tour: React.FC = () => {
  return (
    <section id="tour" className="py-24 bg-brand-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            ТУР <span className="text-brand-accent drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">2024</span>
          </h2>
          <p className="text-gray-400">Почувствуй энергию вживую.</p>
        </div>

        <div className="space-y-4">
          {TOUR_DATES.map((show) => (
            <div 
              key={show.id}
              className="group relative bg-brand-gray/10 border border-white/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between transition-all duration-300 hover:bg-brand-accent/5 hover:border-brand-accent/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]"
            >
              <div className="flex items-center gap-6 w-full md:w-auto mb-4 md:mb-0">
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-brand-black border border-white/10 group-hover:border-brand-accent transition-colors rounded-full md:rounded-none">
                  <span className="text-xs text-gray-400 uppercase">{show.date.split(' ')[1]}</span>
                  <span className="text-xl font-bold text-white font-display">{show.date.split(' ')[0]}</span>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {show.city}
                  </h3>
                  <p className="text-gray-500 flex items-center gap-1 text-sm mt-1 group-hover:text-brand-accent transition-colors">
                    <MapPin className="w-3 h-3" /> {show.venue}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto flex items-center justify-end">
                {show.soldOut ? (
                  <span className="px-4 py-2 bg-red-900/10 text-red-500 text-sm font-bold tracking-widest border border-red-900/30 cursor-not-allowed w-full md:w-auto text-center rounded">
                    SOLD OUT
                  </span>
                ) : (
                  <button className="px-6 py-2 bg-white/5 text-white border border-white/20 font-bold tracking-widest hover:bg-brand-accent hover:border-brand-accent transition-all flex items-center justify-center gap-2 group-hover:gap-4 duration-300 w-full md:w-auto rounded hover:shadow-[0_0_15px_rgba(139,92,246,0.4)]">
                    БИЛЕТЫ <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tour;