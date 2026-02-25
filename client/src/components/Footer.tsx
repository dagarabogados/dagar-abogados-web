import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Información de Contacto */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Teléfono</p>
                  <a href="tel:+34600000000" className="hover:text-accent transition-colors">
                    +34 617 447 309
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:info@dagarabogados.es" className="hover:text-accent transition-colors">
                    info@dagarabogados.es
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Ubicación</p>
                  <p>Calle Fragata, nº4, El Ejido, Almería</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-accent transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-accent transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-accent transition-colors">
                  Casos de Éxito
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          {/* Información Legal */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-accent">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Términos de Servicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Aviso Legal
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea Divisora */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-80">
            &copy; {currentYear} Dagar Abogados. Todos los derechos reservados. | Especialistas en Derecho Penal en El Ejido y Almería
          </p>
        </div>
      </div>
    </footer>
  );
}
