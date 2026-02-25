# 🏛️ Dagar Abogados - Página Web Profesional

Página web moderna, elegante y optimizada para SEO de un despacho de abogados especializado en Derecho Penal.

## 📋 Características

✅ **Diseño Minimalista Sofisticado** - Tipografía elegante, espacios generosos, paleta de colores premium  
✅ **Optimización SEO Completa** - Metadatos, Schema Markup, Blog, Landing Pages temáticas  
✅ **Formulario de Contacto con EmailJS** - Recibe notificaciones por correo automáticamente  
✅ **Botón WhatsApp Flotante** - Contacto inmediato 24/7  
✅ **Sección de Blog** - 10 artículos optimizados para palabras clave  
✅ **Landing Pages Temáticas** - Especialidades por tipo de delito  
✅ **FAQ Expandida** - 20+ preguntas frecuentes para SEO  
✅ **Casos de Éxito** - Muestra tus victorias legales  
✅ **Reseñas de Clientes** - Testimonios de satisfacción  
✅ **Responsive Design** - Se ve perfecto en móvil, tablet y desktop  
✅ **Velocidad Optimizada** - Carga rápida en todo el mundo  
✅ **HTTPS/SSL** - Seguridad garantizada  

## 🎯 Palabras Clave Objetivo

- Abogado penal El Ejido
- Abogado penal Almería
- Abogado penalista 24 horas
- Asistencia al detenido 24h
- Juicio rápido
- Violencia de género
- Delitos económicos
- Tráfico de drogas
- Y muchas más...

## 📁 Estructura del Proyecto

```
dagar-abogados-web/
├── client/
│   ├── public/
│   │   ├── images/          # Imágenes estáticas
│   │   ├── robots.txt       # Para buscadores
│   │   └── sitemap.xml      # Mapa del sitio
│   ├── src/
│   │   ├── components/      # Componentes React reutilizables
│   │   ├── pages/           # Páginas principales
│   │   ├── lib/             # Utilidades (emailjs-config.ts)
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Punto de entrada
│   │   └── index.css        # Estilos globales
│   └── index.html           # HTML principal
├── GUIA_INSTALACION.md      # Guía completa de instalación
├── INSTALACION_HOSTING_RAPIDA.md  # Guía rápida para cPanel
├── EMAILJS_SETUP.md         # Configuración de EmailJS
├── SEO_STRATEGY.md          # Estrategia SEO detallada
├── SEO_CHECKLIST.md         # Checklist de optimizaciones
└── package.json             # Dependencias del proyecto
```

## 🚀 Instalación Rápida

### Opción 1: Publicar en Manus (Recomendado)

1. En el panel de Manus, haz clic en **"Publish"**
2. Selecciona **"Publish to Manus"**
3. Tu sitio estará disponible en `https://dagar-abogados.manus.space`
4. Para conectar tu dominio personalizado, ve a **Settings → Domains**

### Opción 2: Instalar en Hosting Tradicional

1. Lee la guía: `INSTALACION_HOSTING_RAPIDA.md`
2. Descarga los archivos compilados
3. Sube a tu hosting vía cPanel
4. Configura `.htaccess` y SSL

### Opción 3: Desplegar en Vercel/Netlify

1. Sube tu código a GitHub
2. Conecta tu repositorio en Vercel o Netlify
3. ¡Listo! Se despliega automáticamente

Para instrucciones detalladas, lee: `GUIA_INSTALACION.md`

## ⚙️ Configuración

### 1. Configurar EmailJS (Importante)

Para que el formulario de contacto envíe emails:

1. Lee: `EMAILJS_SETUP.md`
2. Crea una cuenta en https://www.emailjs.com/
3. Obtén tus credenciales
4. Actualiza `client/src/lib/emailjs-config.ts`

### 2. Personalizar Contenido

Edita estos archivos para personalizar tu página:

- `client/src/components/Hero.tsx` - Sección principal
- `client/src/components/Services.tsx` - Servicios
- `client/src/components/SuccessCases.tsx` - Casos de éxito
- `client/src/components/Reviews.tsx` - Reseñas
- `client/src/components/FAQ.tsx` - Preguntas frecuentes
- `client/src/components/Blog.tsx` - Artículos del blog

### 3. Actualizar Información de Contacto

Busca y reemplaza:
- `+34 617 447 309` - Tu teléfono
- `info@dagarabogados.es` - Tu email
- `Calle Fragata, nº4, El Ejido, Almería` - Tu dirección

### 4. Cambiar Colores

Los colores están definidos en `client/src/index.css`. Busca la sección `:root` para cambiar:
- `--primary` - Color azul marino
- `--accent` - Color dorado
- Y otros colores de la paleta

### 5. Cambiar Logo

Reemplaza `client/public/images/logo.png` con tu logo.

## 📱 Desarrollo Local

Para trabajar en tu página localmente:

```bash
# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm run dev

# Construir para producción
pnpm build

# Ver vista previa de producción
pnpm preview
```

El servidor estará disponible en `http://localhost:3000`

## 🔍 SEO

Tu página está completamente optimizada para SEO:

- ✅ Metadatos optimizados
- ✅ Schema Markup (LocalBusiness, LegalService, FAQ)
- ✅ Sitemap.xml y robots.txt
- ✅ URLs amigables
- ✅ Contenido de calidad
- ✅ Blog con artículos optimizados
- ✅ Landing pages temáticas

### Próximos pasos para SEO:

1. Registra tu sitio en Google Search Console
2. Crea una cuenta de Google My Business
3. Obtén backlinks de directorios legales
4. Publica contenido regularmente en el blog
5. Monitorea tus posiciones en Google

Lee: `SEO_STRATEGY.md` y `SEO_CHECKLIST.md` para más detalles.

## 📧 Formulario de Contacto

El formulario está completamente funcional con:

- ✅ Validación en tiempo real
- ✅ Envío de emails vía EmailJS
- ✅ Notificaciones visuales
- ✅ Manejo de errores
- ✅ Respuestas automáticas

Para configurar EmailJS, lee: `EMAILJS_SETUP.md`

## 📞 Contacto Rápido

- **WhatsApp**: Botón flotante en la esquina inferior derecha
- **Teléfono**: +34 617 447 309
- **Email**: info@dagarabogados.es
- **Ubicación**: Calle Fragata, nº4, El Ejido, Almería

## 🛠️ Stack Tecnológico

- **React 19** - Framework de UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Estilos
- **shadcn/ui** - Componentes UI
- **Wouter** - Enrutamiento
- **EmailJS** - Envío de emails
- **Vite** - Bundler
- **Framer Motion** - Animaciones

## 📊 Rendimiento

- ⚡ Carga en < 2 segundos
- 📱 100% responsive
- ♿ Accesibilidad WCAG
- 🔒 HTTPS/SSL seguro
- 🌍 CDN global (si usas Manus)

## 🔐 Seguridad

- ✅ HTTPS/SSL obligatorio
- ✅ Validación de formularios
- ✅ Protección contra XSS
- ✅ Sanitización de datos
- ✅ Backups automáticos (si usas Manus)

## 📝 Licencia

Este proyecto es privado y está diseñado específicamente para Dagar Abogados.

## 🆘 Soporte

### Documentación Incluida

- `GUIA_INSTALACION.md` - Guía completa de instalación
- `INSTALACION_HOSTING_RAPIDA.md` - Guía rápida para cPanel
- `EMAILJS_SETUP.md` - Configuración de EmailJS
- `SEO_STRATEGY.md` - Estrategia SEO
- `SEO_CHECKLIST.md` - Checklist de SEO

### Contacto de Soporte

- **Para Manus**: Contacta con el equipo de Manus
- **Para problemas técnicos**: Revisa la documentación incluida
- **Para cambios de contenido**: Edita los archivos directamente

## ✅ Checklist de Lanzamiento

Antes de publicar, verifica:

- [ ] Todos los textos están correctos
- [ ] Las imágenes se cargan correctamente
- [ ] El formulario de contacto funciona
- [ ] EmailJS está configurado
- [ ] El botón de WhatsApp funciona
- [ ] Los enlaces internos funcionan
- [ ] El sitio se ve bien en móvil
- [ ] El sitio se ve bien en desktop
- [ ] El HTTPS está habilitado
- [ ] El dominio apunta correctamente
- [ ] Los emails se envían correctamente
- [ ] El sitio carga rápido

## 🎯 Próximos Pasos Recomendados

1. **Configura EmailJS** - Sigue `EMAILJS_SETUP.md`
2. **Publica tu sitio** - Elige una opción en `GUIA_INSTALACION.md`
3. **Registra en Google** - Google Search Console y Google My Business
4. **Publica contenido** - Añade artículos al blog regularmente
5. **Monitorea SEO** - Usa Google Analytics y Search Console

---

**¡Tu página web está lista! Sigue los pasos de instalación y estarás en línea en minutos.**
