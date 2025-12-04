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
              
              <div className="-mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu */}
          <div className={`md:hidden absolute top-20 left-0 w-full bg-brand-black border-b border-white/10 transition-all duration-300 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-center text-gray-300 hover:text-brand-accent hover:bg-white/5 font-display tracking-widest border-b border-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </nav>
      );
    };
    
    export default Navbar;