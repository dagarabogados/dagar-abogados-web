/**
 * Schema Markup para SEO
 * Proporciona datos estructurados a Google para mejorar el posicionamiento
 */

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Dagar Abogados",
    "image": "https://dagarabogados.es/images/logo-dagar.png",
    "description": "Abogados penalistas especializados en Derecho Penal en El Ejido y Almería. Asistencia 24/7 a detenidos, defensa en juicios rápidos y asesoramiento jurídico integral.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Fragata, nº4",
      "addressLocality": "El Ejido",
      "addressRegion": "Almería",
      "postalCode": "04700",
      "addressCountry": "ES"
    },
    "telephone": "+34617447309",
    "email": "info@dagarabogados.es",
    "url": "https://dagarabogados.es",
    "areaServed": ["El Ejido", "Almería", "España"],
    "priceRange": "$$",
    "serviceType": "Abogado Penalista"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LegalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Servicios de Derecho Penal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Dagar Abogados",
      "telephone": "+34617447309"
    },
    "areaServed": ["El Ejido", "Almería", "España"],
    "availableLanguage": ["es"],
    "serviceType": [
      "Defensa Penal",
      "Asistencia a Detenidos",
      "Juicio Rápido",
      "Violencia de Género",
      "Delitos Económicos",
      "Tráfico de Drogas"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Qué debo hacer si me detienen en El Ejido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Si te detienen, tienes derecho a guardar silencio y a solicitar la presencia de un abogado. Contacta con nosotros inmediatamente. Nuestro equipo está disponible 24/7 para asistirte desde el primer momento."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuál es el coste de una defensa penal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Los costes varían según la complejidad del caso. Ofrecemos consultas iniciales gratuitas para evaluar tu situación y proporcionarte un presupuesto personalizado."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo tarda un juicio penal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La duración depende del tipo de delito y la complejidad del caso. Los juicios rápidos pueden resolverse en semanas, mientras que casos más complejos pueden tardar meses o años."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Inicio",
        "item": "https://dagarabogados.es"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Servicios",
        "item": "https://dagarabogados.es#servicios"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Contacto",
        "item": "https://dagarabogados.es#contacto"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function SchemaMarkup() {
  return (
    <>
      <LocalBusinessSchema />
      <LegalServiceSchema />
      <FAQSchema />
      <BreadcrumbSchema />
    </>
  );
}
