import React, { useRef, useCallback } from 'react';
import { Play } from 'lucide-react';

const ShowAtmosphere: React.FC = () => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    // Start muted for autoplay compatibility, then unmute after play begins
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().then(() => {
          if (videoRef.current) videoRef.current.muted = false;
        }).catch(() => {
          // If unmuted play fails, keep muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play().catch(() => { });
          }
        });
      }
    }, 100);
  }, []);

  return (
    <section className="py-24 bg-[#1f0d2e] relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#1f0d2e] via-[#1a052a] to-[#1f0d2e] opacity-80 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5 backdrop-blur-md">
            <span className="text-brand-accent text-xs font-semibold tracking-[0.3em] uppercase animate-pulse">Видео</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-6 uppercase leading-tight drop-shadow-[0_0_15px_rgba(139,92,246,0.6)]">
            Погрузитесь <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">в атмосферу шоу</span>
          </h2>
        </div>

        {/* Cinematic Screen Container */}
        <div className="relative max-w-5xl mx-auto group perspective-1000">

          {/* Back Glow (Ambilight effect) */}
          <div className={`absolute -inset-4 bg-brand-accent/30 blur-[60px] rounded-[40px] opacity-40 transition-opacity duration-700 animate-pulse ${isPlaying ? 'opacity-20' : 'group-hover:opacity-70'}`}></div>
          <div className={`absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-[32px] blur opacity-30 transition-opacity duration-700 ${isPlaying ? 'opacity-10' : 'group-hover:opacity-60'}`}></div>

          {/* Screen Frame */}
          <div className="relative bg-black rounded-[30px] border border-white/10 shadow-2xl overflow-hidden aspect-video transform transition-transform duration-700 hover:scale-[1.01]">

            {isPlaying ? (
              <video
                ref={videoRef}
                width="100%"
                height="100%"
                controls
                autoPlay
                muted
                playsInline
                preload="metadata"
                poster="/image/preview.webp"
                className="w-full h-full object-cover"
              >
                <source src="/image/video9696.mp4" type="video/mp4" />
                Ваш браузер не поддерживает видео.
              </video>
            ) : (
              <>
                {/* Video Thumbnail / Content */}
                <div className="absolute inset-0">
                  <img
                    src="/image/preview.webp"
                    alt="Гримерка 96 барабанное шоу — видео выступления студии Валерия Волошина"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
                  />
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
                </div>

                {/* Play Button */}
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer"
                  onClick={handlePlay}
                >
                  <div className="relative w-24 h-24 flex items-center justify-center group/btn">
                    {/* Ripple Effect */}
                    <div className="absolute inset-0 bg-brand-accent/30 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-brand-accent/20 rounded-full blur-md transform group-hover/btn:scale-150 transition-transform duration-500"></div>

                    {/* Button Body */}
                    <div className="relative w-20 h-20 bg-white/10 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 group-hover/btn:bg-brand-accent group-hover/btn:border-brand-accent group-hover/btn:scale-110">
                      <Play className="w-8 h-8 text-white ml-1 fill-white" />
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Corner Accents (Cinema Screen markers) - Hide when playing for immersion */}
            {!isPlaying && (
              <>
                <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-white/20 rounded-tl-lg"></div>
                <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-lg"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-white/20 rounded-bl-lg"></div>
                <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-white/20 rounded-br-lg"></div>
              </>
            )}

          </div>

          {/* Floor Reflection */}
          <div className="absolute -bottom-20 left-[5%] right-[5%] h-20 bg-gradient-to-b from-brand-accent/20 to-transparent blur-[40px] transform scale-y-[-1] opacity-50 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default ShowAtmosphere;