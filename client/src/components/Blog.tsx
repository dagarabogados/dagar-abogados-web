import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Qué hacer si detienen a tu hijo: Guía completa',
    slug: 'que-hacer-si-detienen-a-mi-hijo',
    excerpt: 'Conoce tus derechos y los pasos a seguir si tu hijo es detenido. Guía completa sobre asistencia legal inmediata.',
    category: 'Urgencias',
    date: '2024-01-26',
    readTime: '8 min',
    keywords: ['qué hacer si detienen a mi hijo', 'derechos del detenido', 'asistencia legal urgente']
  },
  {
    id: 2,
    title: 'Juicio rápido por alcoholemia: Todo lo que debes saber',
    slug: 'juicio-rapido-alcoholemia',
    excerpt: 'Información completa sobre juicios rápidos por delitos de alcoholemia, penas y estrategias de defensa.',
    category: 'Tráfico',
    date: '2024-01-25',
    readTime: '7 min',
    keywords: ['juicio rápido alcoholemia', 'abogado alcoholemia', 'conducir bajo influencia']
  },
  {
    id: 3,
    title: 'Conducir sin carnet: Consecuencias legales y defensa',
    slug: 'conducir-sin-carnet-consecuencias',
    excerpt: 'Descubre las consecuencias legales de conducir sin carnet y cómo defenderte ante esta acusación.',
    category: 'Tráfico',
    date: '2024-01-24',
    readTime: '6 min',
    keywords: ['conducir sin carnet', 'consecuencias legales', 'delito de tráfico']
  },
  {
    id: 4,
    title: 'Denuncia falsa por violencia de género: Cómo defenderse',
    slug: 'denuncia-falsa-violencia-genero',
    excerpt: 'Estrategias legales para defenderse de denuncias falsas por violencia de género y proteger tus derechos.',
    category: 'Violencia de Género',
    date: '2024-01-23',
    readTime: '9 min',
    keywords: ['denuncia falsa violencia de género', 'defensa legal', 'abogado violencia de género']
  },
  {
    id: 5,
    title: 'Delito de estafa: Penas y estrategia de defensa',
    slug: 'delito-estafa-penas-defensa',
    excerpt: 'Análisis completo del delito de estafa, penas aplicables y mejores estrategias de defensa legal.',
    category: 'Delitos Económicos',
    date: '2024-01-22',
    readTime: '10 min',
    keywords: ['abogado delito estafa', 'defensa por estafa', 'penas por estafa']
  },
  {
    id: 6,
    title: 'Blanqueo de capitales: Delito grave y defensa legal',
    slug: 'blanqueo-capitales-defensa',
    excerpt: 'Información sobre el delito de blanqueo de capitales, penas y opciones de defensa especializada.',
    category: 'Delitos Económicos',
    date: '2024-01-21',
    readTime: '11 min',
    keywords: ['abogado blanqueo capitales', 'delito blanqueo', 'defensa blanqueo capitales']
  },
  {
    id: 7,
    title: 'Tráfico de drogas: Penas y opciones de defensa',
    slug: 'trafico-drogas-penas-defensa',
    excerpt: 'Guía completa sobre delitos de tráfico de drogas, penas aplicables y estrategias de defensa legal.',
    category: 'Drogas',
    date: '2024-01-20',
    readTime: '10 min',
    keywords: ['abogado tráfico drogas', 'pena tráfico drogas', 'cultivo marihuana']
  },
  {
    id: 8,
    title: 'Asistencia en comisaría: Tus derechos como detenido',
    slug: 'asistencia-comisaria-derechos',
    excerpt: 'Conoce tus derechos fundamentales durante la detención y la importancia de la asistencia legal inmediata.',
    category: 'Urgencias',
    date: '2024-01-19',
    readTime: '7 min',
    keywords: ['abogado asistencia comisaría', 'derechos detenido', 'asistencia 24h']
  },
  {
    id: 9,
    title: 'Orden de alejamiento: Cómo impugnarla',
    slug: 'orden-alejamiento-impugnacion',
    excerpt: 'Procedimientos legales para impugnar una orden de alejamiento y proteger tus derechos.',
    category: 'Violencia de Género',
    date: '2024-01-18',
    readTime: '8 min',
    keywords: ['abogado orden alejamiento', 'impugnar orden alejamiento', 'violencia género']
  },
  {
    id: 10,
    title: 'Impago de pensiones: ¿Es delito? Consecuencias',
    slug: 'impago-pensiones-delito',
    excerpt: 'Análisis legal sobre el impago de pensiones, consecuencias penales y opciones de defensa.',
    category: 'Familia',
    date: '2024-01-17',
    readTime: '7 min',
    keywords: ['impago pensiones delito', 'consecuencias impago', 'abogado pensiones']
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Centro de Información Legal</p>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Blog de Derecho Penal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Artículos especializados sobre derecho penal, delitos, procedimientos legales y estrategias de defensa. Información actualizada y de confianza.
          </p>
        </div>

        {/* Grid de Artículos - Solo los primeros 3 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <article
              key={post.id}
              className="bg-card p-8 rounded-sm border border-border hover:shadow-lg transition-all duration-300 hover:border-accent group flex flex-col"
            >
              {/* Categoría y Fecha */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-sm">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(post.date).toLocaleDateString('es-ES')}
                </span>
              </div>

              {/* Título */}
              <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>

              {/* Keywords SEO (ocultas pero presentes) */}
              <div className="hidden">
                {post.keywords.map((kw, i) => (
                  <span key={i}>{kw}</span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <User size={14} />
                  {post.readTime}
                </span>
                <a
                  href={`#blog/${post.slug}`}
                  className="text-accent hover:text-primary transition-colors font-semibold flex items-center gap-2 group/link"
                >
                  Leer más
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Botón para Ver Todos los Artículos */}
        <div className="mt-16 text-center">
          <a
            href="/blog"
            className="inline-block px-8 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity mb-8"
          >
            Ver Todos los Artículos del Blog
          </a>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            ¿Necesitas asesoramiento legal especializado?
          </p>
          <a href="#contacto" className="btn-primary">
            Contacta con Nuestros Expertos
          </a>
        </div>
      </div>
    </section>
  );
}
