/**
 * FAQSchema Component
 * 
 * Implementa Schema Markup (JSON-LD) para la sección de FAQ
 * Permite que Google muestre las preguntas en rich snippets
 * 
 * Beneficios:
 * - Aparición en posición cero (featured snippets)
 * - Rich snippets con preguntas y respuestas
 * - Mejor CTR desde resultados de búsqueda
 * - Mejora del posicionamiento SEO
 */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  // Crear el objeto de Schema Markup para FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema, null, 2)
      }}
    />
  );
}
