import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQSchema from './FAQSchema';

/**
 * FAQ - Preguntas Frecuentes
 * 
 * Las 5 preguntas más buscadas en Google para Derecho Penal en El Ejido y Almería
 * Optimizadas para SEO y conversión
 */
const faqs = [
  {
    question: '¿Qué debo hacer si me detienen?',
    answer: 'Si te detienen, tienes derechos fundamentales que debes conocer: 1) Derecho a guardar silencio - No estás obligado a declarar. 2) Derecho a un abogado - Solicita uno inmediatamente. 3) Derecho a ser informado - Deben decirte por qué te detienen. 4) Derecho a contactar familia - Puedes avisar a alguien. Lo más importante es contactar con nosotros de inmediato. Disponemos de asistencia 24/7. Nuestro equipo se encargará de proteger tus derechos desde el primer momento. Llama al +34 617 447 309.',
    category: 'Urgencias'
  },
  {
    question: '¿Cuál es la pena por conducir bajo la influencia del alcohol?',
    answer: 'Las penas por alcoholemia varían según el nivel de alcohol en sangre: Tasa 0,25-0,50 mg/l: Multa de 100-600€ y retirada de 2-4 puntos del carnet. Tasa 0,50-1,20 mg/l: Multa de 600-1.000€, retirada de 4-6 puntos y suspensión del carnet de 1-3 meses. Tasa superior a 1,20 mg/l: Prisión de 3-6 meses, multa de 1.000-2.000€, retirada de 6-8 puntos y suspensión del carnet de 3-6 meses. Una defensa especializada puede reducir significativamente estas penas. Contáctanos para analizar tu caso.',
    category: 'Tráfico'
  },
  {
    question: '¿Cómo defenderse de una denuncia falsa?',
    answer: 'Las denuncias falsas son graves pero defendibles. Pasos clave: 1) No hagas declaraciones sin abogado - Todo lo que digas puede usarse en tu contra. 2) Recopila pruebas - Mensajes, testigos, grabaciones, registros. 3) Documenta todo - Fechas, lugares, conversaciones. 4) Busca testigos - Personas que puedan corroborar tu versión. 5) Actúa rápidamente - El tiempo es crucial. Nuestro equipo tiene amplia experiencia defendiendo contra denuncias falsas. Sabemos cómo construir defensas sólidas que demuestren tu inocencia. Contacta con nosotros inmediatamente.',
    category: 'Defensa'
  },
  {
    question: '¿Qué es un juicio rápido y cuánto tiempo tarda?',
    answer: 'Un juicio rápido es un procedimiento acelerado para delitos menores. Características: Procedimiento simplificado - Se celebra en pocas semanas. Resolución rápida - Sentencia inmediata tras el juicio. Menos formalidades - Pero igual protección de derechos. Tiempo típico: Entre 2 a 6 semanas desde la detención. Aunque es más rápido, requiere una defensa estratégica efectiva desde el primer momento. Nuestro equipo tiene amplia experiencia en juicios rápidos. Actuamos rápidamente para proteger tus intereses y lograr el mejor resultado posible.',
    category: 'Procedimiento'
  },
  {
    question: '¿Cuáles son mis derechos como detenido en comisaría?',
    answer: 'Como detenido en comisaría tienes derechos fundamentales protegidos por la ley: 1) Derecho a guardar silencio - No estás obligado a responder preguntas. 2) Derecho a un abogado - Puedes solicitar uno desde el primer momento. 3) Derecho a ser informado - Deben explicarte por qué te detienen y qué cargos hay. 4) Derecho a dignidad - No pueden maltratarte física ni psicológicamente. 5) Derecho a contactar familia - Puedes avisar a alguien en 24 horas. 6) Derecho a asistencia médica - Si la necesitas. Importante: No hagas declaraciones sin abogado. Cualquier declaración sin asesoramiento legal puede perjudicarte gravemente. Contacta con nosotros al +34 617 447 309 para asistencia inmediata.',
    category: 'Derechos'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
    <section id="faq" className="py-24 bg-primary text-primary-foreground">
      <div className="container max-w-4xl">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Preguntas Frecuentes</p>
          <h2 className="text-5xl font-bold text-primary-foreground mb-6">
            FAQ - Derecho Penal
          </h2>
          <p className="text-lg opacity-90">
            Las 5 preguntas más buscadas sobre derechos legales, procedimientos penales y defensa especializada.
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm overflow-hidden hover:border-accent transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left"
              >
                <h3 className="text-lg font-semibold text-primary-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-accent transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Contenido Expandible */}
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-white/20 pt-4">
                  <p className="text-primary-foreground/90 leading-relaxed whitespace-pre-wrap">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Final */}
        <div className="mt-16 text-center">
          <p className="text-lg opacity-90 mb-6">
            ¿Necesitas ayuda legal inmediata?
          </p>
          <a href="#contacto" className="btn-accent">
            Contacta con Nuestros Expertos 24/7
          </a>
        </div>
      </div>
    </section>
    <FAQSchema faqs={faqs} />
    </>
  );
}
