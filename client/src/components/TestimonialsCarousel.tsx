import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * TestimonialsCarousel - Carrusel de testimonios
 * 
 * Características:
 * - Carrusel automático que se mueve cada 5 segundos
 * - Navegación manual con botones
 * - Indicadores de posición
 * - Animaciones suaves
 * - Responsive (1 en móvil, 2 en tablet, 3 en desktop)
 * - Pausable al pasar el mouse
 */

interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  date: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Detectar tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-play del carrusel
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, testimonials.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, testimonials.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, testimonials.length - itemsPerView) : prev - 1));
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    const maxIndex = Math.max(0, testimonials.length - itemsPerView);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    setIsAutoPlay(false);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);
  const totalDots = Math.max(1, testimonials.length - itemsPerView + 1);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Carrusel */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={currentIndex + index}
              className="bg-card p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300 hover:border-accent animate-fade-in"
            >
              {/* Estrellas */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Texto de Testimonial */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Información del Cliente */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.city} • {testimonial.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de Navegación */}
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary transition-colors"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary transition-colors"
        aria-label="Siguiente"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de Posición */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-accent w-8'
                : 'bg-border w-2 hover:bg-muted-foreground'
            }`}
            aria-label={`Ir a testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Información de Posición */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, testimonials.length)} de {testimonials.length}
      </p>
    </div>
  );
}
