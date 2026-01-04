import React, { useState, useEffect, useRef } from 'react';
import type { ImageMetadata } from 'astro';

interface Slide {
  image: string | ImageMetadata;
  alt?: string;
  subtitle?: string;
}

interface CarouselProps {
  slides: Slide[];
  className?: string;
  autoplayInterval?: number;
  showDots?: boolean;
  showArrows?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
  slides,
  className = "",
  autoplayInterval = 5000,
  showDots = true,
  showArrows = true,
}) => {
  const [activeId, setActiveId] = useState<number>(0);
  const [auto, setAuto] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const autoPlay = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (auto) {
          setActiveId((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }
      }, autoplayInterval);
    };

    autoPlay();

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [auto, activeId, autoplayInterval, slides.length]);

  const handleDotClick = (index: number) => {
    setAuto(false);
    setActiveId(index);
    setTimeout(() => {
      setAuto(true);
    }, autoplayInterval);
  };

  const handlePrevClick = () => {
    setAuto(false);
    const newActiveId = activeId === 0 ? slides.length - 1 : activeId - 1;
    setActiveId(newActiveId);
    setTimeout(() => {
      setAuto(true);
    }, autoplayInterval);
  };

  const handleNextClick = () => {
    setAuto(false);
    const newActiveId = activeId === slides.length - 1 ? 0 : activeId + 1;
    setActiveId(newActiveId);
    setTimeout(() => {
      setAuto(true);
    }, autoplayInterval);
  };

  const getImageSrc = (image: string | ImageMetadata): string => {
    if (typeof image === 'string') {
      return image;
    }
    return image.src;
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden w-full h-full">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => {
            const isActive = activeId === index;
            
            return (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={getImageSrc(slide.image)}
                  alt={slide.alt || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                {slide.subtitle && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8">
                    <p className="text-white text-xl md:text-2xl font-medium text-center">
                      {slide.subtitle}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showArrows && (
          <>
            <button
              onClick={handlePrevClick}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-20"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              onClick={handleNextClick}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-300 z-20"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </>
        )}

        {showDots && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeId === index
                    ? 'bg-white w-8 h-3'
                    : 'bg-white/50 hover:bg-white/80 w-3 h-3'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

