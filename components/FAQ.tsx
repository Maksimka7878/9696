
import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { ChevronDown, ChevronRight, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#1f0d2e] relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-md">
             <span className="text-brand-accent text-xs font-semibold tracking-[0.3em] uppercase flex items-center gap-2">
               <HelpCircle className="w-3 h-3" /> FAQ
             </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white uppercase drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
            Вопрос - <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">Ответ</span>
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={item.id}
                className={`group relative rounded-xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-brand-gray/20 border-brand-accent/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]' : 'bg-brand-gray/5 border-white/5 hover:bg-brand-gray/10 hover:border-white/10'}`}
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className={`font-medium text-lg pr-8 transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {item.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-accent text-white border-brand-accent' : 'bg-white/5 text-gray-400 border-white/10 group-hover:border-brand-accent/50 group-hover:text-white'}`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </div>
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                    <div className="pt-4">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
