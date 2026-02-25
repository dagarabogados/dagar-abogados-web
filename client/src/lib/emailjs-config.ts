/**
 * Configuración de EmailJS
 * 
 * Para usar EmailJS, necesitas:
 * 1. Crear una cuenta en https://www.emailjs.com/
 * 2. Crear un servicio de email (Gmail, Outlook, etc.)
 * 3. Crear una plantilla de email
 * 4. Obtener tus credenciales: Service ID, Template ID, Public Key
 * 
 * INSTRUCCIONES DE CONFIGURACIÓN:
 * 
 * 1. Regístrate en EmailJS (https://www.emailjs.com/)
 * 2. En el dashboard, ve a "Email Services" y añade tu email (Gmail recomendado)
 * 3. Sigue los pasos para conectar tu cuenta de email
 * 4. Ve a "Email Templates" y crea una nueva plantilla con este contenido:
 *    - Subject: Nuevo mensaje de contacto - {{nombre}}
 *    - Content:
 *      Nombre: {{nombre}}
 *      Email: {{email}}
 *      Teléfono: {{telefono}}
 *      Asunto: {{asunto}}
 *      Mensaje: {{mensaje}}
 * 5. Copia tu Service ID, Template ID y Public Key
 * 6. Reemplaza los valores en las constantes de abajo
 * 7. Guarda los cambios y reinicia el servidor
 */

// ⚠️ REEMPLAZA ESTOS VALORES CON TUS CREDENCIALES DE EMAILJS
export const EMAILJS_SERVICE_ID = 'service_xxxxx'; // Reemplaza con tu Service ID
export const EMAILJS_TEMPLATE_ID = 'template_xxxxx'; // Reemplaza con tu Template ID
export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Reemplaza con tu Public Key

// Email donde recibirás los mensajes
export const RECIPIENT_EMAIL = 'info@dagarabogados.es';

// Configuración de validación
export const FORM_VALIDATION = {
  nombre: {
    minLength: 2,
    maxLength: 100,
    required: true
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  telefono: {
    minLength: 9,
    maxLength: 15,
    required: true
  },
  asunto: {
    minLength: 5,
    maxLength: 200,
    required: true
  },
  mensaje: {
    minLength: 10,
    maxLength: 5000,
    required: true
  }
};

/**
 * Función para inicializar EmailJS
 * Debe ser llamada una sola vez cuando la aplicación carga
 */
export const initEmailJS = () => {
  if (!EMAILJS_PUBLIC_KEY || EMAILJS_PUBLIC_KEY === 'xxxxxxxxxxxxxxxx') {
    console.warn('⚠️ EmailJS no está configurado. Por favor, actualiza las credenciales en emailjs-config.ts');
    return false;
  }
  
  // La inicialización de EmailJS se hace automáticamente en el componente ContactForm
  return true;
};

/**
 * Interfaz para los datos del formulario
 */
export interface ContactFormData {
  nombre: string;
  email: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

/**
 * Interfaz para la respuesta de EmailJS
 */
export interface EmailJSResponse {
  status: number;
  text: string;
}
