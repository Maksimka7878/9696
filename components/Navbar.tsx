import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

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
    <>
      {/* Mobile Menu Overlay - вынесен за пределы nav */}
      <div
        className={`md:hidden fixed inset-0 z-[200] bg-brand-black transition-all duration-500 ease-in-out overflow-y-auto ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
      >
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-accent/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Close Button inside overlay */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-full text-white hover:text-brand-accent transition-all duration-300 focus:outline-none z-10"
        >
          <X className="h-8 w-8" />
        </button>

        <div className="flex flex-col items-center justify-center h-full space-y-6 p-8 relative">
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block text-2xl font-display font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 hover:from-brand-accent hover:to-purple-400 transition-all duration-500 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Contacts Info */}
          <div className={`mt-8 text-center transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex flex-col gap-3 items-center">

              <a href="mailto:Drumgrim96@mail.ru" className="text-gray-400 hover:text-brand-accent transition-colors font-sans text-xs uppercase tracking-widest">
                Drumgrim96@mail.ru
              </a>
            </div>
          </div>
        </div>

        {/* Decorative line at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[150] transition-all duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md border-b border-white/5 shadow-[0_0_20px_rgba(139,92,246,0.2)]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between md:justify-center h-16 md:h-20 relative">

            {/* Mobile Logo */}
            <a href="#hero" className="md:hidden">
              <span className="font-display font-semibold text-lg tracking-widest text-white">ГЛАВНАЯ</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-display text-sm font-semibold text-gray-300 hover:text-brand-accent transition-colors tracking-widest hover:drop-shadow-[0_0_5px_rgba(139,92,246,0.8)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Burger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-full text-white hover:text-brand-accent transition-all duration-300 focus:outline-none"
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;