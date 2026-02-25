# 📋 Guía de Schema Markup - Dagar Abogados

## ¿Qué es Schema Markup?

Schema Markup es código HTML que ayuda a los buscadores (Google, Bing, etc.) a entender mejor el contenido de tu página. Mejora significativamente tu visibilidad en resultados de búsqueda.

## Beneficios de Schema Markup

✅ **Rich Snippets** — Tu página aparece con información adicional (estrellas, preguntas, respuestas)  
✅ **Featured Snippets** — Posición cero en Google (antes del primer resultado)  
✅ **Mejor CTR** — Más clics desde resultados de búsqueda  
✅ **Mejor Posicionamiento** — Google prioriza páginas con Schema Markup  
✅ **Búsqueda Local** — Aparición en mapas y búsquedas locales  

## Schema Markup Implementado

Tu página web incluye dos tipos de Schema Markup:

### 1. FAQSchema - Preguntas Frecuentes

**Ubicación:** `client/src/components/FAQSchema.tsx`

**Tipo:** `FAQPage`

**Beneficios:**
- Las 5 preguntas frecuentes aparecen en rich snippets
- Posibilidad de aparecer en posición cero (featured snippet)
- Mejor CTR desde resultados de búsqueda

**Ejemplo de Rich Snippet:**

```
¿Qué debo hacer si me detienen?
Si te detienen, tienes derechos fundamentales...
```

### 2. OrganizationSchema - Información de la Empresa

**Ubicación:** `client/src/components/OrganizationSchema.tsx`

**Tipo:** `LegalService`

**Información Incluida:**
- Nombre: Dagar Abogados
- Descripción: Especialidad en Derecho Penal
- Ubicación: El Ejido, Almería
- Teléfono: +34 617 447 309
- Email: info@dagarabogados.es
- Horario: 24/7
- Calificación: 4.9/5 (47 reseñas)
- Redes sociales

**Beneficios:**
- Aparición en Google My Business
- Búsquedas locales mejoradas
- Knowledge Panel en Google
- Información de contacto destacada

## Validar Schema Markup

### Herramienta Oficial de Google

1. Ve a: https://validator.schema.org/
2. Copia el HTML de tu página (Ctrl+U)
3. Pega en el validador
4. Verifica que no haya errores

### Google Rich Results Test

1. Ve a: https://search.google.com/test/rich-results
2. Ingresa tu URL: https://tu-dominio.com
3. Google analizará tu página
4. Verifica los rich snippets detectados

### Herramientas Alternativas

- **Structured Data Testing Tool**: https://www.google.com/webmasters/markup-helper/
- **Yoast SEO**: Plugin para WordPress
- **Schema.org Validator**: https://validator.schema.org/

## Cómo Funciona en tu Página

### En Home.tsx

```tsx
<OrganizationSchema />  // Información de la empresa
<SchemaMarkup />        // Schema general
```

### En FAQ.tsx

```tsx
<FAQSchema faqs={faqs} />  // Schema para las 5 preguntas
```

## Estructura del Schema Markup

### FAQSchema

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué debo hacer si me detienen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Si te detienen, tienes derechos fundamentales..."
      }
    }
  ]
}
```

### OrganizationSchema

```json
{
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Dagar Abogados",
  "telephone": "+34 617 447 309",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Fragata, nº4",
    "addressLocality": "El Ejido",
    "addressRegion": "Almería"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "47"
  }
}
```

## Impacto en SEO

### Antes de Schema Markup

```
Dagar Abogados - Expertos en Derecho Penal
https://dagarabogados.es
Representación legal profesional y especializada en Derecho Penal...
```

### Después de Schema Markup

```
Dagar Abogados ⭐⭐⭐⭐⭐ (47 reseñas)
https://dagarabogados.es
+34 617 447 309 | El Ejido, Almería

¿Qué debo hacer si me detienen?
Si te detienen, tienes derechos fundamentales...

¿Cuál es la pena por conducir bajo la influencia del alcohol?
Las penas por alcoholemia varían según el nivel...
```

## Próximos Pasos

### 1. Validar en Google

1. Ve a: https://search.google.com/test/rich-results
2. Ingresa tu URL
3. Verifica que aparezcan los rich snippets

### 2. Enviar a Google Search Console

1. Ve a: https://search.google.com/search-console
2. Añade tu sitio
3. Envía el sitemap
4. Monitorea los rich snippets

### 3. Monitorear Rendimiento

1. En Google Search Console, ve a "Apariencia de búsqueda"
2. Verifica clics en rich snippets
3. Analiza qué preguntas generan más tráfico

### 4. Optimizar Continuamente

- Actualiza las respuestas de FAQ regularmente
- Añade más preguntas frecuentes
- Mejora la calificación agregada
- Actualiza información de contacto

## Tipos de Rich Snippets Posibles

### FAQ Rich Snippet

```
¿Qué debo hacer si me detienen?
Si te detienen, tienes derechos fundamentales...
```

### Knowledge Panel

```
Dagar Abogados
⭐⭐⭐⭐⭐ (47 reseñas)
+34 617 447 309
Calle Fragata, nº4, El Ejido, Almería
```

### Local Business Rich Snippet

```
Dagar Abogados - Despacho de Abogados
⭐⭐⭐⭐⭐ (47 reseñas)
+34 617 447 309 | Abierto 24/7
Calle Fragata, nº4, El Ejido, Almería
```

## Solución de Problemas

### "No se detectan rich snippets"

**Soluciones:**
1. Verifica que el Schema Markup sea válido en validator.schema.org
2. Espera 1-2 semanas a que Google indexe
3. Envía la URL a Google Search Console
4. Verifica que el contenido sea relevante

### "Errores en la validación"

**Soluciones:**
1. Revisa los errores en validator.schema.org
2. Corrige el JSON según los errores
3. Verifica que los campos requeridos estén presentes
4. Valida nuevamente

### "Rich snippets aparecen pero no en búsquedas"

**Soluciones:**
1. Espera a que Google re-indexe (1-2 semanas)
2. Envía la URL a Google Search Console
3. Verifica que el contenido sea único y de calidad
4. Optimiza el contenido para la palabra clave

## Recursos Útiles

- **Schema.org**: https://schema.org/
- **Google Structured Data**: https://developers.google.com/search/docs/guides/intro-structured-data
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **JSON-LD Playground**: https://json-ld.org/playground/

## Checklist de Implementación

- [x] FAQSchema implementado en FAQ.tsx
- [x] OrganizationSchema implementado en Home.tsx
- [x] Componentes creados (FAQSchema.tsx, OrganizationSchema.tsx)
- [ ] Validar en validator.schema.org
- [ ] Validar en Google Rich Results Test
- [ ] Enviar a Google Search Console
- [ ] Monitorear en Search Console
- [ ] Optimizar según resultados

---

**¡Tu página web ahora tiene Schema Markup implementado! Esto mejorará significativamente tu visibilidad en Google.**
