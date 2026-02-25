# Guía de Configuración de EmailJS

## 📧 ¿Qué es EmailJS?

EmailJS es un servicio que permite enviar emails directamente desde tu aplicación web sin necesidad de un servidor backend. Es perfecto para formularios de contacto, notificaciones y más.

## 🚀 Pasos de Configuración

### Paso 1: Crear una Cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" (Registrarse)
3. Completa el formulario con tus datos
4. Verifica tu correo electrónico
5. Inicia sesión en tu cuenta

### Paso 2: Conectar tu Servicio de Email

1. En el dashboard de EmailJS, ve a **"Email Services"**
2. Haz clic en **"Add Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado)
   - Outlook
   - Yahoo
   - SendGrid
   - Otros

#### Si usas Gmail:

1. Selecciona "Gmail" como servicio
2. Haz clic en "Connect Account"
3. Se abrirá una ventana de Google
4. Inicia sesión con tu cuenta de Gmail
5. Autoriza a EmailJS a acceder a tu cuenta
6. Confirma la conexión

**Nota:** Si tienes autenticación de dos factores en Gmail, necesitarás crear una [contraseña de aplicación](https://myaccount.google.com/apppasswords).

### Paso 3: Crear una Plantilla de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Completa los siguientes campos:

#### Template Name (Nombre de la Plantilla)
```
Formulario de Contacto Dagar Abogados
```

#### Subject (Asunto)
```
Nuevo mensaje de contacto - {{nombre}}
```

#### Content (Contenido del Email)
```
Hola,

Has recibido un nuevo mensaje de contacto desde tu página web:

Nombre: {{nombre}}
Email: {{from_email}}
Teléfono: {{phone}}
Asunto: {{subject}}

Mensaje:
{{message}}

---
Este es un mensaje automático del formulario de contacto de tu página web.
Responde directamente a {{from_email}} para contactar con el cliente.
```

4. Haz clic en **"Save"**

### Paso 4: Obtener tus Credenciales

1. Ve a **"Account"** en el menú lateral
2. Copia tu **Public Key** (Clave Pública)
3. Ve a **"Email Services"**
4. Copia tu **Service ID**
5. Ve a **"Email Templates"**
6. Copia tu **Template ID**

### Paso 5: Configurar las Credenciales en tu Página Web

1. Abre el archivo `client/src/lib/emailjs-config.ts`
2. Reemplaza los siguientes valores con tus credenciales:

```typescript
export const EMAILJS_SERVICE_ID = 'service_xxxxx'; // Tu Service ID
export const EMAILJS_TEMPLATE_ID = 'template_xxxxx'; // Tu Template ID
export const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxxx'; // Tu Public Key
```

3. Guarda el archivo

### Paso 6: Reiniciar el Servidor

```bash
pnpm run dev
```

## ✅ Prueba tu Configuración

1. Abre tu página web en el navegador
2. Ve a la sección de "Contacto"
3. Completa el formulario con datos de prueba
4. Haz clic en "Enviar Mensaje"
5. Deberías recibir un email en tu bandeja de entrada

## 🔐 Seguridad

- Tu **Public Key** es segura para usar en el frontend
- Nunca compartas tu **Secret Key** (si la tienes)
- EmailJS maneja la seguridad de tu cuenta de email

## 💰 Planes de EmailJS

EmailJS ofrece un plan gratuito con:
- 200 emails por mes
- Soporte por email
- Acceso a todas las funciones básicas

Para más información sobre planes, visita [https://www.emailjs.com/pricing/](https://www.emailjs.com/pricing/)

## 🐛 Solución de Problemas

### "EmailJS no está configurado"

**Problema:** Ves un mensaje de advertencia en la consola.

**Solución:** Verifica que has reemplazado correctamente las credenciales en `emailjs-config.ts` y que no contienen "xxxxx".

### "Error al enviar email"

**Problema:** El formulario muestra un error al enviar.

**Solución:**
1. Abre la consola del navegador (F12)
2. Busca el mensaje de error
3. Verifica que:
   - Tu Service ID es correcto
   - Tu Template ID es correcto
   - Tu Public Key es correcta
   - Tu cuenta de email está conectada en EmailJS

### "No recibo los emails"

**Problema:** El formulario se envía pero no recibes emails.

**Solución:**
1. Verifica que tu servicio de email está conectado en EmailJS
2. Revisa la carpeta de spam
3. En el dashboard de EmailJS, ve a "Email Logs" para ver el historial de envíos
4. Verifica que el email de destino es correcto en `emailjs-config.ts`

### "Gmail rechaza la conexión"

**Problema:** EmailJS no puede conectarse a tu cuenta de Gmail.

**Solución:**
1. Habilita el acceso de aplicaciones menos seguras en tu cuenta de Google
2. O crea una contraseña de aplicación: https://myaccount.google.com/apppasswords
3. Desconecta y vuelve a conectar el servicio en EmailJS

## 📚 Recursos Útiles

- [Documentación de EmailJS](https://www.emailjs.com/docs/)
- [Ejemplos de Plantillas](https://www.emailjs.com/docs/examples/nodejs/)
- [Guía de Integración](https://www.emailjs.com/docs/sdk/installation/)

## 🎯 Próximos Pasos

1. **Personaliza la plantilla de email** con tu logo y estilos
2. **Añade validación adicional** en el formulario
3. **Configura respuestas automáticas** para los clientes
4. **Monitorea los emails** en el dashboard de EmailJS

## 📞 Soporte

Si necesitas ayuda:
- Contacta con EmailJS: https://www.emailjs.com/contact/
- Revisa la documentación: https://www.emailjs.com/docs/
- Consulta el blog: https://www.emailjs.com/blog/

---

**Nota:** Esta configuración es segura y está lista para producción. Los emails se enviarán a través de los servidores de EmailJS, que están optimizados para entrega confiable.
