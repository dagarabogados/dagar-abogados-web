import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { 
  EMAILJS_SERVICE_ID, 
  EMAILJS_TEMPLATE_ID, 
  EMAILJS_PUBLIC_KEY,
  RECIPIENT_EMAIL,
  FORM_VALIDATION 
} from '@/lib/emailjs-config';
import { toast } from 'sonner';

/**
 * Componente de Formulario de Contacto con EmailJS
 * 
 * Funcionalidades:
 * - Validación de formulario en tiempo real
 * - Envío de emails a través de EmailJS
 * - Notificaciones visuales de éxito/error
 * - Respuesta automática al cliente
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailJSReady, setEmailJSReady] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Inicializar EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'xxxxxxxxxxxxxxxx') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      setEmailJSReady(true);
    } else {
      console.warn('⚠️ EmailJS no está configurado. Por favor, actualiza las credenciales.');
      setEmailJSReady(false);
    }
  }, []);

  // Validar campo individual
  const validateField = (name: string, value: string): string => {
    const rules = FORM_VALIDATION[name as keyof typeof FORM_VALIDATION] as any;
    
    if (!rules) return '';

    if (rules.required && !value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} es requerido`;
    }

    if (rules.minLength && value.length < rules.minLength) {
      return `${name} debe tener al menos ${rules.minLength} caracteres`;
    }

    if (rules.maxLength && value.length > rules.maxLength) {
      return `${name} no puede exceder ${rules.maxLength} caracteres`;
    }

    if (rules.pattern && !rules.pattern.test(value)) {
      return `${name} no es valido`;
    }

    return '';
  };

  // Manejar cambios en los campos
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validar campo mientras se escribe
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  // Validar todo el formulario
  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar formulario
    if (!validateForm()) {
      toast.error('Por favor, completa todos los campos correctamente.');
      return;
    }

    // Verificar que EmailJS está configurado
    if (!emailJSReady) {
      toast.error('El servicio de email no está configurado. Por favor, intenta más tarde.');
      console.error('EmailJS no está inicializado');
      return;
    }

    setIsSubmitting(true);

    try {
      // Preparar datos para EmailJS
      const templateParams = {
        to_email: RECIPIENT_EMAIL,
        from_name: formData.nombre,
        from_email: formData.email,
        phone: formData.telefono,
        subject: formData.asunto,
        message: formData.mensaje,
        reply_to: formData.email
      };

      // Enviar email
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        // Mostrar mensaje de éxito
        setIsSubmitted(true);
        toast.success('¡Mensaje enviado correctamente! Te contactaremos pronto.');

        // Limpiar formulario
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          asunto: '',
          mensaje: ''
        });
        setErrors({});

        // Resetear mensaje de éxito después de 5 segundos
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error al enviar email:', error);
      toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-4">Ponte en Contacto</p>
          <h2 className="text-5xl font-bold text-primary mb-6">
            Contacta con Nosotros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos disponibles 24/7 para atender tus consultas. Completa el formulario y nos pondremos en contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre completo"
                  className={`w-full px-4 py-3 rounded-sm border transition-colors ${
                    errors.nombre 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-border bg-background hover:border-accent focus:border-accent'
                  } focus:outline-none`}
                />
                {errors.nombre && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.nombre}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className={`w-full px-4 py-3 rounded-sm border transition-colors ${
                    errors.email 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-border bg-background hover:border-accent focus:border-accent'
                  } focus:outline-none`}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.email}
                  </p>
                )}
              </div>

              {/* Teléfono */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="+34 600 000 000"
                  className={`w-full px-4 py-3 rounded-sm border transition-colors ${
                    errors.telefono 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-border bg-background hover:border-accent focus:border-accent'
                  } focus:outline-none`}
                />
                {errors.telefono && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.telefono}
                  </p>
                )}
              </div>

              {/* Asunto */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Asunto *
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  placeholder="Asunto de tu consulta"
                  className={`w-full px-4 py-3 rounded-sm border transition-colors ${
                    errors.asunto 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-border bg-background hover:border-accent focus:border-accent'
                  } focus:outline-none`}
                />
                {errors.asunto && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.asunto}
                  </p>
                )}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-semibold text-primary mb-2">
                  Mensaje *
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos tu situación legal..."
                  rows={6}
                  className={`w-full px-4 py-3 rounded-sm border transition-colors resize-none ${
                    errors.mensaje 
                      ? 'border-red-500 bg-red-50' 
                      : 'border-border bg-background hover:border-accent focus:border-accent'
                  } focus:outline-none`}
                />
                {errors.mensaje && (
                  <p className="text-red-600 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle size={14} /> {errors.mensaje}
                  </p>
                )}
              </div>

              {/* Mensaje de Éxito */}
              {isSubmitted && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-sm flex items-center gap-3">
                  <CheckCircle size={20} className="text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900">¡Mensaje enviado correctamente!</p>
                    <p className="text-green-800 text-sm">Te contactaremos pronto.</p>
                  </div>
                </div>
              )}

              {/* Botón de Envío */}
              <button
                type="submit"
                disabled={isSubmitting || !emailJSReady}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </button>

              {!emailJSReady && (
                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-sm text-yellow-800 text-sm">
                  ⚠️ El servicio de email no está completamente configurado. Por favor, contacta directamente por teléfono o WhatsApp.
                </div>
              )}
            </form>
          </div>

          {/* Información de Contacto */}
          <div className="space-y-8">
            {/* Teléfono */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Phone size={28} className="text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Teléfono</h3>
                <a
                  href="tel:+34617447309"
                  className="text-muted-foreground hover:text-accent transition-colors font-semibold"
                >
                  +34 617 447 309
                </a>
                <p className="text-sm text-muted-foreground mt-1">Disponible 24/7</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail size={28} className="text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Correo Electrónico</h3>
                <a
                  href="mailto:info@dagarabogados.es"
                  className="text-muted-foreground hover:text-accent transition-colors font-semibold"
                >
                  info@dagarabogados.es
                </a>
                <p className="text-sm text-muted-foreground mt-1">Respuesta en 24 horas</p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <MapPin size={28} className="text-accent mt-1" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Ubicación</h3>
                <p className="text-muted-foreground">
                  Calle Fragata, nº4<br />
                  El Ejido, Almería<br />
                  España
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="w-7 h-7 text-accent mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.867 1.33c-1.52.92-2.747 2.26-3.57 3.972C2.997 10.124 2.5 12.046 2.5 14.056c0 .709.057 1.418.169 2.105l-1.8 6.573c-.111.405.029.832.36 1.108.168.14.378.216.595.216.1 0 .201-.01.3-.03l6.573-1.8c.687.112 1.395.169 2.105.169 2.01 0 3.932-.497 5.744-1.479 1.712-1.823 3.052-3.95 3.972-6.47.92-1.52 1.33-4.867 1.33-4.867 0-2.01-.497-3.932-1.479-5.744-1.823-1.712-3.95-3.052-6.47-3.972-1.52-.92-4.867-1.33-4.867-1.33z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">WhatsApp</h3>
                <a
                  href="https://wa.me/34617447309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors font-semibold"
                >
                  +34 617 447 309
                </a>
                <p className="text-sm text-muted-foreground mt-1">Chat inmediato</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
