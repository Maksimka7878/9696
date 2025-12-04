import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { NAV_ITEMS } from '../constants';
    
    const Navbar: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [scrolled, setScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const scrollToTop = (e: React.MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    
      return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_20px_rgba(139,92,246,0.2)]' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a href="#" onClick={scrollToTop} className="flex-shrink-0 flex items-center gap-3 group cursor-pointer leading-none">
                <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center drop-shadow-[0_0_18px_rgba(255,255,255,0.4)]">
                  <img 
                    src="/header-drum.svg" 
                    alt="Voloshin drum logo" 
                    className="h-12 w-12 object-contain brightness-125 contrast-110" 
                  />
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <div className="bg-[#9f1e4f] flex items-center py-1.5 px-4">
                    <span className="font-display font-bold text-xl tracking-tight text-yellow-400 leading-none inline-block translate-y-[4px] transform">ГРИМЕРКА</span>
                  </div>
                  <span className="font-display font-bold text-lg tracking-tight text-yellow-300">96</span>
                </div>
              </a>
              
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-8">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="font-display text-sm font-medium text-gray-300 hover:text-brand-accent transition-colors tracking-widest hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="-mr-2 flex md:hidden relative z-50">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-full text-white hover:text-brand-accent transition-all duration-300 focus:outline-none hover:rotate-90"
                >
                  {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu Overlay */}
          <div 
            className={`md:hidden fixed inset-0 z-40 bg-brand-black/95 backdrop-blur-xl transition-all duration-500 ease-in-out ${
              isOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-full'
            }`}
          >
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="flex flex-col items-center justify-center h-full space-y-8 p-8">
              {NAV_ITEMS.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-4xl font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-brand-accent hover:to-purple-400 transition-all duration-500 transform ${
                    isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Decorative line at bottom */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent rounded-full"></div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;