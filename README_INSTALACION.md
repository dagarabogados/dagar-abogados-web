# Dagar Abogados - Guía de Instalación y Personalización

## 📋 Descripción

Página web profesional para el despacho de abogados **Dagar Abogados**, especializado en Derecho Penal en El Ejido y Almería. Diseño minimalista sofisticado con optimización SEO local.

## 🎨 Diseño

**Filosofía de Diseño**: Minimalismo Sofisticado
- **Tipografía**: Lora (serif) para títulos, Poppins (sans-serif) para cuerpo
- **Colores**: Azul marino profundo (#1a3a52), Crema cálida (#f5f1e8), Dorado mate (#b8956a)
- **Espacios**: Generosos y funcionales
- **Interactividad**: Transiciones suaves y hover effects elegantes

## 📁 Estructura de Archivos

```
dagar-abogados-web/
├── client/
│   ├── public/
│   │   ├── images/
│   │   │   └── logo-dagar.png          # Tu logotipo
│   │   ├── robots.txt                  # SEO - Instrucciones para buscadores
│   │   └── sitemap.xml                 # SEO - Mapa del sitio
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx              # Navegación principal
│   │   │   ├── Hero.tsx                # Sección principal
│   │   │   ├── Services.tsx            # Servicios ofrecidos
│   │   │   ├── SuccessCases.tsx        # Casos de éxito
│   │   │   ├── Reviews.tsx             # Reseñas de clientes
│   │   │   ├── FAQ.tsx                 # Preguntas frecuentes
│   │   │   ├── ContactForm.tsx         # Formulario de contacto
│   │   │   ├── Footer.tsx              # Pie de página
│   │   │   └── WhatsAppButton.tsx      # Botón flotante WhatsApp
│   │   ├── pages/
│   │   │   └── Home.tsx                # Página principal
│   │   ├── App.tsx                     # Aplicación principal
│   │   └── index.css                   # Estilos globales y paleta de colores
│   └── index.html                      # HTML principal con metadatos SEO
├── package.json                        # Dependencias del proyecto
└── README_INSTALACION.md               # Este archivo
```

## 🚀 Instalación

### Requisitos Previos
- Node.js 18+ 
- pnpm (gestor de paquetes)

### Pasos de Instalación

1. **Navegar al directorio del proyecto**:
```bash
cd dagar-abogados-web
```

2. **Instalar dependencias**:
```bash
pnpm install
```

3. **Iniciar servidor de desarrollo**:
```bash
pnpm dev
```

4. **Acceder a la página**:
Abre tu navegador en `http://localhost:3000`

## ✏️ Personalización

### 1. Cambiar Información de Contacto

**Archivo**: `client/src/components/WhatsAppButton.tsx`
```typescript
const phoneNumber = '34600000000'; // Reemplazar con tu número
const message = 'Hola, me gustaría consultar sobre servicios legales en derecho penal.';
```

**Archivo**: `client/src/components/Footer.tsx`
```typescript
<a href="tel:+34600000000">+34 600 000 000</a>
<a href="mailto:info@dagarabogados.es">info@dagarabogados.es</a>
```

**Archivo**: `client/src/components/ContactForm.tsx`
```typescript
<a href="https://wa.me/34600000000?text=...">
```

### 2. Cambiar Casos de Éxito

**Archivo**: `client/src/components/SuccessCases.tsx`

Edita el array `cases` con tus propios casos:
```typescript
const cases = [
  {
    title: 'Tu Caso de Éxito',
    description: 'Descripción del caso...',
    outcome: 'Resultado obtenido',
    year: '2024'
  },
  // Más casos...
];
```

### 3. Cambiar Reseñas

**Archivo**: `client/src/components/Reviews.tsx`

Edita el array `reviews` con testimonios reales:
```typescript
const reviews = [
  {
    name: 'Nombre del Cliente',
    city: 'Ciudad',
    rating: 5,
    text: 'Testimonio del cliente...',
    date: 'Mes Año'
  },
  // Más reseñas...
];
```

### 4. Cambiar Preguntas Frecuentes (FAQ)

**Archivo**: `client/src/components/FAQ.tsx`

Edita el array `faqs` con tus preguntas:
```typescript
const faqs = [
  {
    question: '¿Tu pregunta?',
    answer: 'Tu respuesta...'
  },
  // Más preguntas...
];
```

### 5. Cambiar Servicios

**Archivo**: `client/src/components/Services.tsx`

Edita el array `services`:
```typescript
const services = [
  {
    icon: Shield,
    title: 'Tu Servicio',
    description: 'Descripción del servicio...'
  },
  // Más servicios...
];
```

### 6. Cambiar Logo

1. Reemplaza `/client/public/images/logo-dagar.png` con tu logotipo
2. El logo se mostrará automáticamente en el header

### 7. Cambiar Paleta de Colores

**Archivo**: `client/src/index.css`

Modifica las variables de color en la sección `:root`:
```css
:root {
  --primary: #1a3a52; /* Azul marino */
  --accent: #b8956a; /* Dorado */
  --background: #f5f1e8; /* Crema */
  /* ... más colores ... */
}
```

### 8. Cambiar Textos Principales

**Hero Section** - `client/src/components/Hero.tsx`:
```typescript
<h1>Tu Título Principal</h1>
<p>Tu descripción...</p>
```

**Metadatos SEO** - `client/index.html`:
```html
<meta name="description" content="Tu descripción para Google..." />
<meta name="keywords" content="tus palabras clave..." />
```

## 📱 Secciones de la Página

### 1. **Header (Navegación)**
- Logo de la empresa
- Menú de navegación (Desktop y Mobile)
- Enlaces a todas las secciones

### 2. **Hero (Portada)**
- Título principal
- Subtítulo y descripción
- Botones de CTA (Llamada a la Acción)
- Estadísticas destacadas

### 3. **Servicios**
- 6 servicios especializados en Derecho Penal
- Iconos descriptivos
- Efectos hover elegantes

### 4. **Casos de Éxito**
- Presentación de casos ganados
- Resultados obtenidos
- Años de experiencia

### 5. **Reseñas**
- Testimonios de clientes satisfechos
- Valoraciones de 5 estrellas
- Información del cliente

### 6. **FAQ (Preguntas Frecuentes)**
- Acordeón expandible
- Preguntas optimizadas para SEO
- Respuestas detalladas

### 7. **Contacto**
- Formulario de contacto
- Información de contacto (teléfono, email, ubicación)
- Botón de WhatsApp integrado

### 8. **Footer**
- Enlaces rápidos
- Información legal
- Derechos de autor

### 9. **Botón WhatsApp Flotante**
- Disponible 24/7
- Animación pulse suave
- Mensaje predefinido

## 🔍 Optimización SEO

### Palabras Clave Principales
- Abogados penalistas El Ejido
- Abogado penal Almería
- Derecho penal El Ejido
- Defensa legal especializada
- Asistencia al detenido

### Archivos SEO Incluidos
- **robots.txt**: Instrucciones para buscadores
- **sitemap.xml**: Mapa del sitio para indexación
- **Metadatos en HTML**: Descripción, palabras clave, Open Graph

### Recomendaciones Adicionales
1. Registra tu sitio en Google Search Console
2. Configura Google My Business para El Ejido y Almería
3. Crea contenido de blog regularmente
4. Obtén backlinks de sitios relacionados con derecho
5. Mantén la página actualizada con casos nuevos

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Iniciar servidor de desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Previsualizar build de producción
pnpm preview

# Verificar tipos TypeScript
pnpm check

# Formatear código
pnpm format
```

## 📦 Despliegue

### Opción 1: Manus (Recomendado)
La página está lista para desplegar en Manus con soporte para dominio personalizado.

### Opción 2: Otros Proveedores
- **Vercel**: Soporta React y despliegue automático
- **Netlify**: Despliegue simple desde Git
- **GitHub Pages**: Opción gratuita
- **Tu propio servidor**: Sigue las instrucciones de build

### Pasos para Desplegar

1. Ejecuta `pnpm build` para generar los archivos de producción
2. Los archivos compilados estarán en `/dist`
3. Sube estos archivos a tu servidor web

## 📝 Notas Importantes

1. **Número de WhatsApp**: Actualiza el número en `WhatsAppButton.tsx` y `ContactForm.tsx`
2. **Email de Contacto**: Cambia el email en `Footer.tsx` y `ContactForm.tsx`
3. **Ubicación**: Actualiza "El Ejido, Almería" en los componentes relevantes
4. **Formulario de Contacto**: El formulario actual es un placeholder. Para funcionalidad real, integra con un servicio como Formspree, EmailJS o tu propio backend
5. **Imágenes**: Puedes añadir más imágenes en `/client/public/images/` y referenciarlas en los componentes

## 🎯 Próximos Pasos Recomendados

1. **Añadir más imágenes**: Reemplaza placeholders con fotos reales
2. **Integrar formulario**: Conecta el formulario a un servicio de email
3. **Añadir blog**: Crea una sección de artículos para SEO
4. **Analytics**: Configura Google Analytics para seguimiento
5. **Certificado SSL**: Asegúrate de que tu dominio tenga HTTPS

## 📞 Soporte

Para preguntas sobre la instalación o personalización, consulta la documentación del proyecto o contacta con tu proveedor de hosting.

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2024  
**Licencia**: Uso privado para Dagar Abogados
