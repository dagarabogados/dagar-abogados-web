import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import SuccessCases from '@/components/SuccessCases';
import Reviews from '@/components/Reviews';
import SpecialtyLanding from '@/components/SpecialtyLanding';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SchemaMarkup from '@/components/SchemaMarkup';
import OrganizationSchema from '@/components/OrganizationSchema';

/**
 * Página Principal - Dagar Abogados
 * 
 * Diseño: Minimalismo Sofisticado
 * - Tipografía como protagonista (Lora para títulos, Poppins para cuerpo)
 * - Espacios generosos y whitespace abundante
 * - Paleta limitada: Azul marino (#1a3a52), Crema (#f5f1e8), Dorado (#b8956a)
 * - Funcionalidad pura: cada elemento tiene propósito claro
 * 
 * Secciones:
 * 1. Header - Navegación fija con logo
 * 2. Hero - Presentación principal con CTA
 * 3. Servicios - Grid de 6 servicios especializados
 * 4. Casos de Éxito - Historial de victorias legales
 * 5. Reseñas - Testimonios de clientes satisfechos
 * 6. FAQ - Preguntas frecuentes optimizadas para SEO
 * 7. Contacto - Formulario + información de contacto
 * 8. Footer - Enlaces y datos legales
 * 9. WhatsApp - Botón flotante 24/7
 */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SchemaMarkup />
      <OrganizationSchema />
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <SuccessCases />
        <Reviews />
        <SpecialtyLanding />
        <Blog />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
