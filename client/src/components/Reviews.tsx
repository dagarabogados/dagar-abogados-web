import { Star } from 'lucide-react';
import TestimonialsCarousel from './TestimonialsCarousel';

const reviews = [
  {
    name: 'Juan García López',
    city: 'El Ejido',
    rating: 5,
    text: 'Excelente atención y defensa. El equipo de Dagar Abogados fue profesional y dedicado. Lograron mi absolución en un caso complejo. Totalmente recomendados.',
    date: 'Enero 2024'
  },
  {
    name: 'María Rodríguez Pérez',
    city: 'Almería',
    rating: 5,
    text: 'Muy satisfecha con los servicios. Desde el primer contacto hasta la resolución del caso, todo fue transparente y profesional. Gracias por vuestra ayuda.',
    date: 'Diciembre 2023'
  },
  {
    name: 'Carlos Martínez Sánchez',
    city: 'El Ejido',
    rating: 5,
    text: 'Disponibilidad 24/7 que realmente funciona. Me contactaron inmediatamente cuando los necesité. Defensa estratégica y resultados excelentes.',
    date: 'Noviembre 2023'
  },
  {
    name: 'Ana Fernández González',
    city: 'Almería',
    rating: 5,
    text: 'Profesionales de confianza. Explicaron cada paso del proceso de manera clara. Resultado favorable en mi caso. Muy recomendable.',
    date: 'Octubre 2023'
  },
  {
    name: 'David López Ruiz',
    city: 'El Ejido',
    rating: 5,
    text: 'Equipo altamente especializado. Conocimiento profundo del derecho penal. Lograron demostrar mi inocencia. Gracias infinitas.',
    date: 'Septiembre 2023'
  },
  {
    name: 'Isabel Moreno Castro',
    city: 'Almería',
    rating: 5,
    text: 'Trato humano y profesional. Entendieron mi situación y actuaron rápidamente. Resultado más que satisfactorio. Los recomiendo sin dudarlo.',
    date: 'Agosto 2023'
  }
];

export default function Reviews() {
  return (
    <section id="resenas" className="py-24 bg-background">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Opiniones de Clientes</p>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Reseñas y Testimonios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros clientes hablan por nosotros. Aquí encontrarás opiniones reales de personas que confiaron en nuestros servicios.
          </p>
        </div>

        {/* Carrusel de Testimonios */}
        <TestimonialsCarousel testimonials={reviews} />

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas defensa legal especializada? Contáctanos hoy.
          </p>
          <a href="#contacto" className="btn-primary">
            Contacta con Nosotros
          </a>
        </div>
      </div>
    </section>
  );
}
