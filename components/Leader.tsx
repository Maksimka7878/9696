import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Award, Music, Star, Briefcase, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

const Leader: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const galleryContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Все доступные изображения
  const galleryImages = [
    { src: '/image/2025-12-08%2015.55.24.webp', alt: 'Валерий Волошин на сцене' },
    { src: '/image/2025-12-08%2015.55.31.webp', alt: 'Выступление с группой' },
    { src: '/image/2025-12-08%2015.55.38.webp', alt: 'Концерт Grimerka96' },
    { src: '/image/2025-12-08%2015.55.43.webp', alt: 'Барабанное шоу' },
    { src: '/image/2025-12-08%2015.55.50.webp', alt: 'Выступление на фестивале' },
    { src: '/image/2025-12-08%2015.56.06.webp', alt: 'Работа с известными артистами' },
    { src: '/image/2025-12-08%2015.56.13.webp', alt: 'Концертное выступление' },
    { src: '/image/2025-12-08%2015.56.20.webp', alt: 'Барабанное шоу Валерия Волошина' },
    { src: '/image/2025-12-08%2015.56.24.webp', alt: 'Выступление на сцене' },
    { src: '/image/2025-12-08%2015.56.29.webp', alt: 'Концертное выступление' },
    { src: '/image/2025-12-08%2015.56.39.webp', alt: 'Барабанное шоу' },
    { src: '/image/2025-12-08%2015.56.44.webp', alt: 'Выступление с коллективом' },
    { src: '/image/2025-12-08%2015.56.51.webp', alt: 'Концерт Grimerka96' },
    { src: '/image/2025-12-08%2015.56.55.webp', alt: 'Барабанное шоу' },
    { src: '/image/2025-12-08%2015.57.00.webp', alt: 'Выступление на фестивале' },
    { src: '/image/2025-12-08%2015.57.06.webp', alt: 'Концертное выступление' },
    { src: '/image/2025-12-08%2015.57.11.webp', alt: 'Работа с известными артистами' },
    { src: '/image/2025-12-08%2015.57.16.webp', alt: 'Барабанное шоу Валерия Волошина' },
    { src: '/image/2025-12-08%2015.57.23.webp', alt: 'Выступление на сцене' },
    { src: '/image/2025-12-08%2015.57.27.webp', alt: 'Концертное выступление' },
    { src: '/image/2025-12-08%2015.57.33.webp', alt: 'Барабанное шоу' },
    { src: '/image/2025-12-08%2015.57.37.webp', alt: 'Выступление с группой' },
    { src: '/image/2025-12-08%2015.57.43.webp', alt: 'Концерт Grimerka96' },
  ];

  const openModal = useCallback((index: number) => {
    setSelectedImage(index);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageLoaded(false);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setZoom(1);
    setPosition({ x: 0, y: 0 });
    setImageLoaded(false);
    document.body.style.overflow = 'unset';
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((prev) => Math.min(prev + 0.5, 3));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((prev) => {
      const newZoom = Math.max(prev - 0.5, 1);
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  // Mouse drag для зума
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  }, [zoom, position]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  }, [isDragging, zoom, dragStart]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const nextImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev !== null) {
        return (prev + 1) % galleryImages.length;
      }
      return null;
    });
  }, [galleryImages.length]);

  const prevImage = useCallback(() => {
    setSelectedImage((prev) => {
      if (prev !== null) {
        return (prev - 1 + galleryImages.length) % galleryImages.length;
      }
      return null;
    });
  }, [galleryImages.length]);

  // Touch swipe для мобильных
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (zoom === 1) {
      touchStartX.current = e.touches[0].clientX;
    }
  }, [zoom]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (zoom === 1) {
      touchEndX.current = e.touches[0].clientX;
    }
  }, [zoom]);

  const handleTouchEnd = useCallback(() => {
    if (zoom === 1 && selectedImage !== null) {
      const swipeDistance = touchStartX.current - touchEndX.current;
      const minSwipeDistance = 50;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        if (swipeDistance > 0) {
          nextImage();
        } else {
          prevImage();
        }
      }
    }
  }, [zoom, selectedImage, nextImage, prevImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage !== null) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === '+' || e.key === '=') {
          e.preventDefault();
          handleZoomIn();
        }
        if (e.key === '-' || e.key === '_') {
          e.preventDefault();
          handleZoomOut();
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (selectedImage !== null && e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY < 0) {
          handleZoomIn();
        } else {
          handleZoomOut();
        }
      }
    };

    if (selectedImage !== null) {
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('wheel', handleWheel);
      };
    }
  }, [selectedImage, closeModal, nextImage, prevImage, handleZoomIn, handleZoomOut]);

  // Handle gallery scroll to update progress
  const handleGalleryScroll = useCallback(() => {
    if (galleryContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  }, []);

  // Handle slider change to scroll gallery
  const handleSliderChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setScrollProgress(value);
    if (galleryContainerRef.current) {
      const { scrollWidth, clientWidth } = galleryContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      galleryContainerRef.current.scrollLeft = (value / 100) * maxScroll;
    }
  }, []);
  return (
    <section id="leader" className="py-24 bg-[#1a0a2b] relative overflow-hidden border-t border-white/5">

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Photo/Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 bg-brand-accent/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              <img
                src="/image/VV.webp"
                alt="Валерий Волошин"
                className="w-full h-full object-cover filter contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-700"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-brand-accent/90 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <span className="text-white font-display text-xl tracking-wide">ХУД. РУКОВОДИТЕЛЬ</span>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-brand-accent/50 rounded-tl-3xl"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-accent/50 rounded-br-3xl"></div>
          </div>

          {/* Right Column: Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <div className="inline-block px-3 py-1 mb-4 border border-brand-accent/30 rounded-full bg-brand-accent/5">
                <span className="text-brand-accent text-xs font-semibold tracking-[0.2em] uppercase">Основатель</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                ВАЛЕРИЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">ВОЛОШИН</span>
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Профессиональный барабанщик, действующий музыкант со стажем более 25 лет.
              </p>
            </div>

            <div className="space-y-6 text-gray-400 leading-relaxed">
              <p>
                Высшее образование — <strong className="text-white">Московский Государственный Университет Культуры и Искусства</strong> (2002 г).
              </p>

              <div className="bg-brand-gray/10 border border-white/5 p-6 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Star className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-white font-display text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-brand-accent" />
                  Работа с известными исполнителями:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Вика Цыганова</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Павел Паскаль</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Театр О.Табакова</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Группа "Salut Brass"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Группа "Республика"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Алла Рид</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Ачи Пурцеладзе</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Солисты театра "Градский-Холл"</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full"></span>Участники проекта "Голос"</li>
                </ul>
              </div>

              <p className="italic border-l-4 border-brand-accent pl-4 py-1 bg-gradient-to-r from-brand-accent/5 to-transparent">
                "Вот и родилось Барабанное Шоу Валерия Волошина! Возраст моих участников от 4 до 60 лет, мы часто выступаем в известных клубах, участвуем в Международных Фестивалях."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                <Award className="w-4 h-4 text-brand-accent" />
                <span>25+ лет стажа</span>
              </div>
              <div className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 flex items-center gap-2 text-sm text-gray-300">
                <Music className="w-4 h-4 text-brand-accent" />
                <span>МГИК (2002)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Gallery Section - Horizontal Scroll Style */}
        <div className="mt-16 relative">
          <div className="text-center mb-8">
            <div className="inline-block px-3 py-0.5 mb-3 border border-brand-accent/30 rounded-full bg-brand-accent/5">
              <span className="text-brand-accent text-xs font-semibold tracking-[0.3em] uppercase">Галерея</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-purple-400">ФОТОГАЛЕРЕЯ</span>
            </h3>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Выступления, концерты и мероприятия с участием Валерия Волошина
            </p>
          </div>

          {/* Horizontal Scrollable Gallery */}
          <div
            ref={galleryContainerRef}
            onScroll={handleGalleryScroll}
            className="overflow-x-auto overflow-y-hidden pb-4 -mx-4 px-4 scrollbar-hide"
          >
            <div className="flex items-center gap-4 md:gap-6" style={{ width: 'max-content' }}>
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="group relative flex-shrink-0 w-[280px] md:w-[350px] h-[400px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 hover:border-brand-accent/50 transition-all duration-500 cursor-pointer bg-brand-black/20 hover:shadow-[0_20px_50px_rgba(139,92,246,0.4)] hover:scale-[1.02]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover filter brightness-[0.8] contrast-125 group-hover:brightness-100 transition-all duration-700"
                    loading="lazy"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-accent/10 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                  {/* Zoom Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
                      <ZoomIn className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Active indicator */}
                  {selectedImage === index && (
                    <div className="absolute top-4 right-4 z-30">
                      <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(139,92,246,1)]"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Horizontal Scrollbar/Slider */}
          <div className="mt-8 px-4 max-w-2xl mx-auto">
            <div className="relative">
              {/* Track */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                {/* Progress fill */}
                <div
                  className="h-full bg-gradient-to-r from-brand-accent to-purple-400 rounded-full transition-all duration-150"
                  style={{ width: `${scrollProgress}%` }}
                />
              </div>
              {/* Slider input */}
              <input
                type="range"
                min="0"
                max="100"
                value={scrollProgress}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                aria-label="Прокрутка галереи"
              />
              {/* Thumb indicator */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-brand-accent rounded-full border-2 border-white shadow-[0_0_15px_rgba(139,92,246,0.6)] pointer-events-none transition-all duration-150"
                style={{ left: `calc(${scrollProgress}% - 10px)` }}
              />
            </div>
            <p className="text-gray-500 text-xs tracking-wider uppercase mt-4 text-center">
              ← Листайте или используйте ползунок →
            </p>
          </div>
        </div>

        {/* Modal for Full-Size Image View */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-[200] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={closeModal}
            style={{
              animation: 'fadeIn 0.3s ease-out'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Loading Indicator */}
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-40">
                <div className="w-16 h-16 border-4 border-brand-accent/30 border-t-brand-accent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 md:top-8 md:right-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:rotate-90 hover:scale-110 shadow-lg"
              aria-label="Закрыть"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Zoom Controls */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 z-30 flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                disabled={zoom >= 3}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
                aria-label="Увеличить"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                disabled={zoom <= 1}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
                aria-label="Уменьшить"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              {zoom > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleResetZoom();
                  }}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 shadow-lg"
                  aria-label="Сбросить зум"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Navigation Buttons */}
            {galleryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                    setImageLoaded(false);
                  }}
                  className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
                  aria-label="Предыдущее"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                    setImageLoaded(false);
                  }}
                  className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm"
                  aria-label="Следующее"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image Container */}
            <div
              className="relative max-w-7xl max-h-[85vh] w-full h-full flex items-center justify-center overflow-hidden"
              onClick={(e) => {
                if (zoom === 1) {
                  e.stopPropagation();
                }
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            >
              <div
                className="relative transition-transform duration-300 ease-out"
                style={{
                  transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                }}
              >
                <img
                  ref={imageRef}
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className={`max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setImageLoaded(true)}
                />
              </div>

              {/* Image Info */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-2xl z-20">
                <p className="text-white text-sm font-display uppercase tracking-wider text-center">
                  {galleryImages[selectedImage].alt}
                </p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="h-1 bg-white/20 rounded-full flex-1 max-w-[200px]">
                    <div
                      className="h-full bg-brand-accent rounded-full transition-all duration-300"
                      style={{ width: `${((selectedImage + 1) / galleryImages.length) * 100}%` }}
                    ></div>
                  </div>
                  <p className="text-gray-300 text-xs font-mono">
                    {selectedImage + 1} / {galleryImages.length}
                  </p>
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 max-w-4xl w-full px-4">
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(idx);
                      setImageLoaded(false);
                      setZoom(1);
                      setPosition({ x: 0, y: 0 });
                    }}
                    className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${idx === selectedImage
                      ? 'border-brand-accent scale-110 shadow-[0_0_20px_rgba(139,92,246,0.6)]'
                      : 'border-white/20 hover:border-white/40 hover:scale-105'
                      }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Leader;
