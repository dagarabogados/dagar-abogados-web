import { Shield, Clock, Users, FileText, AlertCircle, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Shield,
    title: 'Defensa Penal',
    description: 'Representación legal completa en procesos penales, desde la investigación hasta la sentencia.'
  },
  {
    icon: Clock,
    title: 'Asistencia 24/7 a Detenidos',
    description: 'Atención inmediata a detenidos, garantizando el respeto de derechos fundamentales.'
  },
  {
    icon: AlertCircle,
    title: 'Todo tipo de delitos',
    description: 'Especialización en todo tipo de delitos. Delitos leves y delitos más complejos.'
  },
  {
    icon: Users,
    title: 'Acusación particular',
    description: 'Te acompañamos desde la interposición de la denuncia.'
  },
  {
    icon: FileText,
    title: 'Asesoramiento Jurídico',
    description: 'Consultoría legal preventiva para evitar problemas penales.'
  },
  {
    icon: Briefcase,
    title: 'Recursos y Apelaciones',
    description: 'Presentación de recursos y apelaciones ante instancias superiores.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Nuestros Servicios</p>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Servicios Especializados en Derecho Penal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una amplia gama de servicios legales especializados en Derecho Penal, adaptados a tus necesidades específicas.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300 hover:border-accent group"
              >
                <div className="mb-6">
                  <Icon size={40} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Secundario */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas un servicio específico? Contáctanos para una consulta personalizada.
          </p>
          <a href="#contacto" className="btn-primary">
            Solicitar Consulta
          </a>
        </div>
      </div>
    </section>
  );
}
