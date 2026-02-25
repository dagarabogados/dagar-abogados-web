import { Shield, AlertCircle, Heart, DollarSign, Pill, Clock } from 'lucide-react';

const specialties = [
  {
    id: 'juicio-rapido',
    title: 'Juicio Rápido',
    icon: Clock,
    description: 'Defensa especializada en procedimientos de juicio rápido. Representación ágil y efectiva en delitos menores.',
    keywords: ['juicio rápido', 'procedimiento rápido', 'delitos menores'],
    content: 'Los juicios rápidos son procedimientos acelerados para delitos de menor gravedad. Nuestro equipo tiene amplia experiencia en estos procedimientos y sabe cómo actuar rápidamente para proteger tus derechos.'
  },
  {
    id: 'violencia-genero',
    title: 'Violencia de Género',
    icon: Heart,
    description: 'Defensa integral en casos de violencia de género, denuncias falsas y órdenes de alejamiento.',
    keywords: ['violencia de género', 'denuncia falsa', 'orden de alejamiento'],
    content: 'Nos especializamos en la defensa de personas acusadas de violencia de género. Sabemos que estas acusaciones son graves y ofrecemos una defensa rigurosa y especializada.'
  },
  {
    id: 'delitos-economicos',
    title: 'Delitos Económicos',
    icon: DollarSign,
    description: 'Defensa en estafas, blanqueo de capitales, fraude y otros delitos económicos complejos.',
    keywords: ['estafa', 'blanqueo capitales', 'fraude económico'],
    content: 'Los delitos económicos requieren una defensa especializada. Nuestro equipo entiende la complejidad de estos casos y sabe cómo construir una estrategia de defensa efectiva.'
  },
  {
    id: 'trafico-drogas',
    title: 'Tráfico de Drogas',
    icon: Pill,
    description: 'Representación legal en delitos de tráfico de drogas, cultivo y posesión con intención de tráfico.',
    keywords: ['tráfico drogas', 'cultivo marihuana', 'posesión drogas'],
    content: 'Los delitos de tráfico de drogas conllevan penas graves. Ofrecemos una defensa especializada para minimizar las consecuencias legales.'
  },
  {
    id: 'asistencia-detenido',
    title: 'Asistencia al Detenido 24/7',
    icon: AlertCircle,
    description: 'Asistencia inmediata en comisaría, protección de derechos fundamentales y representación desde el primer momento.',
    keywords: ['asistencia detenido', 'comisaría', 'derechos detenido'],
    content: 'Si eres detenido, tienes derecho a un abogado. Estamos disponibles 24/7 para asistirte desde el primer momento y proteger tus derechos fundamentales.'
  },
  {
    id: 'defensa-penal-general',
    title: 'Defensa Penal General',
    icon: Shield,
    description: 'Defensa integral en todos los tipos de delitos penales, desde lo más leve hasta lo más grave.',
    keywords: ['defensa penal', 'abogado penal', 'delito penal'],
    content: 'Ofrecemos defensa integral en todos los tipos de delitos penales. Nuestro equipo tiene experiencia en casos de toda complejidad.'
  }
];

export default function SpecialtyLanding() {
  return (
    <section id="especialidades" className="py-24 bg-primary text-primary-foreground">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Nuestras Especialidades</p>
          <h2 className="text-5xl font-bold text-primary-foreground mb-6">
            Defensa Especializada por Tipo de Delito
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Cada tipo de delito requiere una estrategia de defensa diferente. Nuestro equipo se especializa en todas las áreas del derecho penal.
          </p>
        </div>

        {/* Grid de Especialidades */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;
            return (
              <div
                key={specialty.id}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-sm border border-white/20 hover:border-accent transition-all duration-300 hover:shadow-lg group"
              >
                {/* Icono */}
                <div className="mb-6">
                  <Icon size={40} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-semibold text-primary-foreground mb-4">
                  {specialty.title}
                </h3>

                {/* Descripción */}
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Contenido */}
                <p className="text-primary-foreground/80 text-sm mb-6 leading-relaxed">
                  {specialty.content}
                </p>

                {/* Keywords (ocultas para SEO) */}
                <div className="hidden">
                  {specialty.keywords.map((kw, i) => (
                    <span key={i}>{kw}</span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors font-semibold"
                >
                  Consultar ahora →
                </a>
              </div>
            );
          })}
        </div>

        {/* Información Adicional */}
        <div className="mt-20 pt-12 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-accent mb-2">24/7</p>
              <p className="text-lg opacity-90">Disponibilidad Total</p>
              <p className="text-sm opacity-75 mt-2">Asistencia inmediata en emergencias legales</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">100%</p>
              <p className="text-lg opacity-90">Confidencialidad</p>
              <p className="text-sm opacity-75 mt-2">Máxima discreción en todos nuestros casos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-accent mb-2">10+</p>
              <p className="text-lg opacity-90">Años de Experiencia</p>
              <p className="text-sm opacity-75 mt-2">Defensa exitosa en cientos de casos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
