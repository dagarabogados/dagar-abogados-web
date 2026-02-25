export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="min-h-screen bg-primary text-primary-foreground flex items-center justify-center py-20">
      <div className="container text-center max-w-2xl">
        {/* Subtítulo */}
        <p className="text-accent font-semibold mb-4 text-lg">Defensa Legal Especializada</p>

        {/* Título Principal */}
        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight text-primary-foreground">
          Expertos en Derecho Penal
        </h1>

        {/* Línea Divisora */}
        <div className="h-1 bg-accent w-24 mx-auto mb-8"></div>

        {/* Descripción */}
        <p className="text-xl md:text-2xl mb-12 leading-relaxed opacity-95">
          Representación legal profesional y especializada en Derecho Penal en El Ejido y Almería. Asistencia 24/7 a detenidos, defensa en juicios y asesoramiento jurídico integral. Asistencia en toda España.
        </p>

        {/* Botones CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contacto')}
            className="px-8 py-4 bg-accent text-primary font-semibold rounded-sm hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Contactar Ahora
          </button>
          <button
            onClick={() => scrollToSection('servicios')}
            className="px-8 py-4 border-2 border-accent text-accent font-semibold rounded-sm hover:bg-accent hover:text-primary transition-all duration-300"
          >
            Ver Servicios
          </button>
        </div>

        {/* Información Destacada */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/20">
          <p className="text-sm opacity-80 mb-6">Disponible 24/7 para emergencias legales</p>
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-accent mb-2">10+</p>
              <p className="text-sm opacity-80">Años de Experiencia</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">500+</p>
              <p className="text-sm opacity-80">Casos Exitosos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-accent mb-2">98%</p>
              <p className="text-sm opacity-80">Satisfacción de Clientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
