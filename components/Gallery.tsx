import React, { useRef, useState, useEffect } from 'react';
import { GALLERY_ITEMS } from '../constants';
import { Play } from 'lucide-react';

const Gallery: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);

  // Handle Scroll Progress
  // Handle Scroll Progress
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }
          const section = sectionRef.current;
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const viewportHeight = window.innerHeight;

          // Distance scrolled into the section
          const scrollTop = window.scrollY;
          const distance = scrollTop - sectionTop;

          // Total scrollable distance: section height minus one viewport
          const maxDistance = sectionHeight - viewportHeight;

          let progress = 0;
          if (distance >= 0 && maxDistance > 0) {
            progress = distance / maxDistance;
          } else if (distance < 0) {
            progress = 0;
          } else if (distance > maxDistance) {
            progress = 1;
          }

          // Clamp between 0 and 1
          setScrollProgress(Math.min(1, Math.max(0, progress)));
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Measure track width for proper translation with ResizeObserver for robustness
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        // We calculate total width needed to scroll: Track Width - Viewport Width + Padding
        // We add extra padding to ensure the last item is fully visible before unsticking
        const width = trackRef.current.scrollWidth - window.innerWidth + 200;
        setTrackWidth(Math.max(0, width));
      }
    };

    updateWidth();

    // Use ResizeObserver to catch layout changes (like images loading)
    const observer = new ResizeObserver(updateWidth);
    if (trackRef.current) {
      observer.observe(trackRef.current);
    }

    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
      observer.disconnect();
    };
  }, []);

  const xTransform = -1 * scrollProgress * trackWidth;

  return (
    // Height set to 500vh to ensure a long, deliberate scroll lock
    <section ref={sectionRef} id="media" className="relative h-[500vh] bg-[#1a0a2b]">

      {/* Sticky Viewport - This div stays fixed while you scroll through the 500vh of the parent section */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#1a0a2b] perspective-1000">

        {/* === SPOTLIGHTS === */}
        {/* Left Spotlight Beam */}
        <div className="absolute top-[-20%] left-[5%] w-[15vw] h-[120vh] bg-gradient-to-b from-white/40 via-brand-accent/30 to-transparent blur-[50px] rotate-[-20deg] transform-origin-top z-20 pointer-events-none animate-spotlight mix-blend-screen"></div>
        {/* Right Spotlight Beam */}
        <div className="absolute top-[-20%] right-[5%] w-[15vw] h-[120vh] bg-gradient-to-b from-white/40 via-purple-500/30 to-transparent blur-[50px] rotate-[20deg] transform-origin-top z-20 pointer-events-none animate-spotlight mix-blend-screen" style={{ animationDelay: '1.5s' }}></div>

        {/* Floor Reflections for Spotlights */}
        <div className="absolute bottom-0 left-[20%] w-[20vw] h-[10vh] bg-brand-accent/20 blur-[40px] rounded-[100%] z-10"></div>
        <div className="absolute bottom-0 right-[20%] w-[20vw] h-[10vh] bg-purple-500/20 blur-[40px] rounded-[100%] z-10"></div>

        {/* Ambient Back Glow */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-[#1a0b2e] via-[#15071f] to-[#1a0a2b] z-0"></div>

        {/* Header (Fades out on scroll) */}
        <div
          className="absolute top-8 md:top-12 left-0 w-full text-center z-30 transition-opacity duration-500 pointer-events-none px-4"
          style={{ opacity: Math.max(0, 1 - scrollProgress * 5) }}
        >
          <div className="inline-block px-4 py-1 mb-3 md:mb-4 border border-white/20 rounded-full bg-white/5 backdrop-blur">
            <span className="text-brand-accent text-xs font-semibold uppercase tracking-[0.3em]">Галерея</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold text-white leading-tight drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
            Завораживающая атмосфера <br />
            и вайб <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">драм-культуры</span>
          </h2>
        </div>

        {/* Horizontal Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-12 pl-[15vw] pr-[15vw] will-change-transform z-10 pt-32 md:pt-40"
          style={{ transform: `translateX(${xTransform}px)` }}
        >
          {/* Intro Text Card (First item in scroll) */}
          <div className="flex-shrink-0 w-[400px] h-[60vh] flex flex-col justify-center text-left pr-12 border-l-4 border-brand-accent pl-8">
            <h3 className="text-5xl font-display font-semibold text-white mb-6 leading-none">
              ЭНЕРГИЯ <br />В КАЖДОМ <br /><span className="text-brand-accent">КАДРЕ</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              Моменты, когда музыка становится физически ощутимой. Песочное шоу, световые партитуры, эмоции толпы и чистый драйв от ударной энергии.
            </p>
          </div>

          {GALLERY_ITEMS.map((item) => {
            // Determine sizing classes based on 'width' prop
            let sizeClass = 'w-[300px]';
            if (item.width === 'medium') sizeClass = 'w-[500px]';
            if (item.width === 'wide') sizeClass = 'w-[800px]';

            return (
              <div
                key={item.id}
                className={`flex-shrink-0 relative group rounded-[2rem] overflow-hidden h-[60vh] ${sizeClass} shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 transition-transform duration-500 hover:scale-[1.02]`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-[0.8] contrast-125 group-hover:brightness-100 transition-all duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-accent/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                {/* Play Button */}
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
                      <Play className="w-10 h-10 text-white ml-2 fill-white" />
                    </div>
                  </div>
                )}

                {/* Caption */}
                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 mb-3 text-[10px] font-semibold tracking-[0.2em] uppercase text-white bg-brand-accent shadow-[0_0_10px_rgba(139,92,246,0.6)] rounded-sm">
                    {item.type === 'image' ? 'PHOTO' : 'LIVE SET'}
                  </div>
                  <h3 className="text-4xl font-display font-semibold text-white uppercase drop-shadow-lg">{item.title}</h3>
                </div>
              </div>
            );
          })}

          {/* Call to Action (Last item) */}
          <div className="flex-shrink-0 w-[500px] h-[60vh] flex flex-col justify-center items-center bg-brand-gray/10 rounded-[2rem] border border-white/10 backdrop-blur-sm ml-12">
            <h3 className="text-4xl font-display font-semibold text-white mb-8 text-center leading-tight">
              ГОТОВ УВИДЕТЬ <br />ЭТО <span className="text-brand-accent">ВЖИВУЮ?</span>
            </h3>
            <a
              href="https://nn.kassir.ru/koncert/barabannoe-shou-valeriya-voloshina"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 bg-brand-accent text-white font-semibold font-display tracking-widest uppercase rounded-full hover:bg-white hover:text-brand-black transition-all duration-300 shadow-[0_0_30px_rgba(139,92,246,0.5)] transform hover:scale-105"
            >
              Купить Билет
            </a>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-80 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-brand-accent shadow-[0_0_10px_rgba(139,92,246,0.8)] transition-all duration-100 ease-linear"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500 tracking-[0.3em] uppercase animate-pulse">
          Листайте вниз
        </div>

      </div>
    </section>
  );
};

export default Gallery;