
import React, { useState } from 'react';
import { Copy, Check, Ticket } from 'lucide-react';

const Reward: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const promoCode = "AWARD";

  const handleCopy = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-32 bg-brand-black overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative bg-brand-gray/10 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl overflow-hidden group hover:border-brand-accent/30 transition-all duration-500">
          
          {/* Decorative Shine */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-brand-accent/20 to-transparent blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            
            {/* Visual Icon/Badge - Vinyl Record Style */}
            <div className="flex-shrink-0 relative">
               <div className="w-40 h-40 md:w-48 md:h-48 relative z-10 group-hover:scale-105 transition-transform duration-500">
                  {/* Spinning Vinyl Record */}
                  <div className="w-full h-full rounded-full bg-[#111] shadow-[0_0_40px_rgba(139,92,246,0.3)] flex items-center justify-center animate-[spin_4s_linear_infinite] overflow-hidden border-2 border-gray-800 relative">
                      
                      {/* Grooves Texture */}
                      <div className="absolute inset-0 rounded-full opacity-60" 
                           style={{ background: 'repeating-radial-gradient(#1a1a1a 0, #1a1a1a 2px, #2a2a2a 3px, #1a1a1a 4px)' }}>
                      </div>
                      
                      {/* Light Reflection (Sheen) */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full pointer-events-none"></div>

                      {/* Center Label */}
                      <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-accent rounded-full flex items-center justify-center shadow-lg relative z-20 border-[6px] border-[#111]">
                          {/* Number 96 inside label */}
                          <span className="text-white text-2xl md:text-3xl font-display font-bold drop-shadow-md">96</span>
                      </div>

                      {/* Center Hole */}
                      <div className="absolute w-1.5 h-1.5 bg-black rounded-full z-30"></div>
                  </div>
               </div>
               {/* Back Glow */}
               <div className="absolute inset-0 bg-brand-accent/40 blur-[50px] z-0 animate-pulse"></div>
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-grow">
              <div className="inline-block px-3 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5">
                 <span className="text-brand-accent text-xs font-bold tracking-[0.2em] uppercase">Secret Bonus</span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                ФИНАЛЬНЫЙ <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-400">ТРОФЕЙ</span>
              </h2>
              
              <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 font-light leading-relaxed">
                Спасибо, что прошли этот путь с нами. Забирайте свою награду — <span className="text-white font-medium">скидку 5%</span> на любой билет.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                 {/* Promo Code Box */}
                 <div 
                   onClick={handleCopy}
                   className="flex items-center gap-4 px-6 py-4 bg-black/40 border border-brand-accent/30 rounded-xl cursor-pointer hover:bg-brand-accent/10 transition-colors w-full sm:w-auto group/code"
                 >
                    <div className="text-left">
                       <span className="block text-[10px] text-gray-500 uppercase tracking-widest">Промокод</span>
                       <span className="font-mono text-2xl font-bold text-white tracking-widest">{promoCode}</span>
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 text-gray-400 group-hover/code:text-white group-hover/code:bg-brand-accent transition-all">
                       {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </div>
                 </div>

                 {/* Action Button */}
                 <button 
                   onClick={() => document.getElementById('tour')?.scrollIntoView({behavior: 'smooth'})}
                   className="w-full sm:w-auto px-8 py-4 bg-brand-accent text-white font-bold font-display uppercase tracking-widest rounded-xl hover:bg-brand-accentHover hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-2"
                 >
                   <Ticket className="w-5 h-5" />
                   Купить
                 </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Reward;
