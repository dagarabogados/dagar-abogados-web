/**
 * OrganizationSchema Component
 * 
 * Implementa Schema Markup para la organización (Dagar Abogados)
 * Mejora la visibilidad en búsquedas locales y generales
 * 
 * Información incluida:
 * - Nombre y descripción de la empresa
 * - Ubicación (El Ejido, Almería)
 * - Teléfono y email
 * - Horario de atención
 * - Logo
 * - Redes sociales
 * - Calificación y reseñas
 */

export default function OrganizationSchema() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Dagar Abogados',
    description: 'Despacho de abogados especializado en Derecho Penal en El Ejido y Almería. Defensa especializada, asistencia 24/7 a detenidos, juicios rápidos.',
    url: 'https://dagarabogados.es',
    logo: 'https://dagarabogados.es/logo.png',
    image: 'https://dagarabogados.es/logo.png',
    telephone: '+34 617 447 309',
    email: 'info@dagarabogados.es',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Calle Fragata, nº4',
      addressLocality: 'El Ejido',
      addressRegion: 'Almería',
      postalCode: '04700',
      addressCountry: 'ES'
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'El Ejido'
      },
      {
        '@type': 'City',
        name: 'Almería'
      },
      {
        '@type': 'Country',
        name: 'España'
      }
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+34 617 447 309',
      email: 'info@dagarabogados.es',
      availableLanguage: ['es', 'en']
    },
    sameAs: [
      'https://www.facebook.com/dagarabogados',
      'https://www.instagram.com/dagarabogados',
      'https://www.linkedin.com/company/dagarabogados',
      'https://www.google.com/maps/place/Dagar+Abogados'
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema, null, 2)
      }}
    />
  );
}
