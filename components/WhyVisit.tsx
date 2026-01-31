import React, { useState, useEffect, useRef } from 'react';
import { WHY_VISIT_IMAGES } from '../constants';
import { MousePointerClick, ChevronLeft, ChevronRight } from 'lucide-react';

const WhyVisit: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Mobile swipe state
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart !== null) {
      setSwipeOffset(e.targetTouches[0].clientX - touchStart);
    }
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0);
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentCardIndex < WHY_VISIT_IMAGES.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    if (isRightSwipe && currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }

    setSwipeOffset(0);
    setTouchStart(null);
    setTouchEnd(null);
  };

  const handleNext = () => {
    if (currentCardIndex < WHY_VISIT_IMAGES.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

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
    <>
      {/* MOBILE VERSION - Swipeable stack */}
      <section className="md:hidden py-24 bg-[#1f0d2e] relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#1a052a] to-[#0f0518] z-0"></div>
          <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Text Content */}
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-1 mb-6 border border-brand-accent/30 rounded-full bg-brand-accent/10 backdrop-blur-md">
              <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">Визуальная Эстетика</span>
            </div>
            <h2 className="text-4xl font-display font-semibold text-white mb-6 leading-tight drop-shadow-xl">
              ПОЧЕМУ СТОИТ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">ПОСЕТИТЬ</span><br />
              НАШЕ ШОУ
            </h2>
            <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-lg mx-auto font-light">
              Барабанное шоу "GRIMERKA96" — это не просто концерт. Это визуальное путешествие.
              Каждый удар барабана синхронизирован со вспышкой света, создавая
              эффект полного погружения, который вы никогда не забудете.
            </p>
          </div>

          {/* Swipeable Photo Stack */}
          <div className="relative h-[480px] w-full flex items-center justify-center mb-8 perspective-1000">
            {WHY_VISIT_IMAGES.map((img, index) => {
              const isActive = index === currentCardIndex;
              const isPrev = index < currentCardIndex;
              const diff = index - currentCardIndex;

              let transform = '';
              let opacity = 0;
              let zIndex = 0;

              if (isPrev) {
                transform = 'translateX(-150%) rotate(-20deg)';
                opacity = 0;
                zIndex = index;
              } else if (isActive) {
                transform = `translateX(${swipeOffset}px) rotate(${swipeOffset / 20}deg)`;
                opacity = 1;
                zIndex = 50;
              } else {
                const stackOffset = diff * 8;
                const stackRotate = diff * 3;
                transform = `translateX(-${stackOffset}px) translateY(${stackOffset}px) rotate(${stackRotate}deg) scale(${1 - diff * 0.05})`;
                opacity = Math.max(0, 1 - diff * 0.3);
                zIndex = 50 - diff;
              }

              return (
                <div
                  key={img.id}
                  className="absolute w-72 h-[420px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-sm border border-gray-200 flex flex-col overflow-hidden transition-all duration-500 ease-out touch-none"
                  style={{
                    transform,
                    opacity,
                    zIndex
                  }}
                  onTouchStart={isActive ? handleTouchStart : undefined}
                  onTouchMove={isActive ? handleTouchMove : undefined}
                  onTouchEnd={isActive ? handleTouchEnd : undefined}
                >
                  <div className="w-full flex-1 overflow-hidden bg-white relative px-3 pt-3">
                    <div className="w-full h-full overflow-hidden bg-gray-900 relative rounded-sm">
                      <div className="absolute inset-0 bg-brand-accent/10 z-10 mix-blend-overlay"></div>
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover filter contrast-110"
                      />
                    </div>
                  </div>
                  <div className="px-4 py-4 text-center bg-white flex-shrink-0">
                    <h3 className="font-display font-semibold text-xl text-gray-800 uppercase tracking-widest leading-tight">{img.caption}</h3>
                    <p className="text-[10px] text-gray-500 font-sans tracking-widest mt-1">ГРИМЕРКА96 • ТУР 2024</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={handlePrev}
              disabled={currentCardIndex === 0}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-accent transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <span className="text-white font-mono text-sm">
              {currentCardIndex + 1} / {WHY_VISIT_IMAGES.length}
            </span>
            <button
              onClick={handleNext}
              disabled={currentCardIndex === WHY_VISIT_IMAGES.length - 1}
              className="p-3 rounded-full bg-white/10 border border-white/20 text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-brand-accent transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swipe hint */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm animate-pulse">← Смахните влево или вправо →</p>
          </div>

          <div className="flex justify-center">
            <a
              href="https://nn.kassir.ru/koncert/barabannoe-shou-valeriya-voloshina"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-brand-accent text-white rounded-lg font-semibold font-display tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-brand-accentHover transition-all duration-300"
            >
              Купить билет
            </a>
          </div>
        </div>
      </section>

      {/* DESKTOP VERSION - Scroll-driven stack */}
      <section ref={sectionRef} className="hidden md:block relative h-[400vh] bg-[#1f0d2e]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">

          {/* Background Atmosphere - Nebula Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-[#1a052a] to-[#0f0518] z-0"></div>
            <div className="absolute top-[30%] left-[-10%] w-[90%] h-[60%] bg-gradient-to-r from-brand-accent/20 via-purple-600/10 to-transparent blur-[80px] rounded-[100%] rotate-12 animate-pulse-fast"></div>
            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

              {/* LEFT SIDE: The Scroll-Driven Photo Stack */}
              <div className="relative h-[500px] w-full flex items-center justify-start perspective-1000">
                {WHY_VISIT_IMAGES.map((img, index) => {
                  const cardState = getCardStyle(index);

                  return (
                    <div
                      key={img.id}
                      className={`absolute w-80 h-[420px] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)] rounded-sm border border-gray-200 flex flex-col overflow-hidden ${cardState.className}`}
                      style={{
                        zIndex: cardState.zIndex,
                        ...cardState.style
                      }}
                    >
                      <div className="w-full flex-1 overflow-hidden bg-white relative group px-3 pt-3">
                        <div className="w-full h-full overflow-hidden bg-gray-900 relative rounded-sm">
                          <div className="absolute inset-0 bg-brand-accent/10 z-10 mix-blend-overlay"></div>
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover filter contrast-110"
                          />
                        </div>
                      </div>
                      <div className="px-4 py-4 text-center bg-white flex-shrink-0">
                        <h3 className="font-display font-semibold text-2xl text-gray-800 uppercase tracking-widest leading-tight">{img.caption}</h3>
                        <p className="text-[10px] text-gray-500 font-sans tracking-widest mt-1">ГРИМЕРКА96 • ТУР 2024</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* RIGHT SIDE: Text Content */}
              <div className="text-left z-30 relative">
                <div className="inline-block px-4 py-1 mb-6 border border-brand-accent/30 rounded-full bg-brand-accent/10 backdrop-blur-md">
                  <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">Визуальная Эстетика</span>
                </div>
                <h2 className="text-7xl font-display font-semibold text-white mb-8 leading-[0.9] drop-shadow-xl">
                  ПОЧЕМУ СТОИТ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">ПОСЕТИТЬ</span><br />
                  НАШЕ ШОУ
                </h2>
                <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-lg font-light tracking-wide border-l-2 border-brand-accent pl-6">
                  Барабанное шоу "GRIMERKA96" — это не просто концерт. Это визуальное путешествие.
                  Каждый удар барабана синхронизирован со вспышкой света, создавая
                  эффект полного погружения, который вы никогда не забудете.
                </p>

                <div className="flex items-center gap-3 text-gray-500 animate-pulse mb-8">
                  <MousePointerClick className="w-5 h-5" />
                  <span className="text-xs uppercase tracking-[0.2em]">Листайте вниз для просмотра</span>
                </div>

                <a
                  href="https://nn.kassir.ru/koncert/barabannoe-shou-valeriya-voloshina"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-10 py-4 bg-brand-accent text-white rounded-lg font-semibold font-display tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:bg-brand-accentHover transition-all duration-300 hover:-translate-y-1"
                >
                  Купить билет
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyVisit;