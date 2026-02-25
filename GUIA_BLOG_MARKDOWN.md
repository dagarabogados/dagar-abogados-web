# 📝 Guía de Blog Editable con Markdown

Tu página web incluye un sistema de blog completamente editable mediante archivos Markdown. No necesitas tocar código, solo editar archivos de texto.

## 🎯 Cómo Funciona

El sistema de blog carga automáticamente todos los archivos Markdown de la carpeta `/client/public/blog/` y los convierte en artículos web con:

- ✅ Búsqueda en tiempo real
- ✅ Filtrado por categoría
- ✅ Etiquetas
- ✅ Artículos relacionados
- ✅ Botones de compartir
- ✅ SEO optimizado

## 📂 Estructura de Carpetas

```
client/
└── public/
    └── blog/
        ├── 01-que-hacer-si-detienen-a-mi-hijo.md
        ├── 02-juicio-rapido-alcoholemia.md
        └── ... más artículos
```

## ✍️ Crear un Nuevo Artículo

### Paso 1: Crear el Archivo

1. Crea un nuevo archivo en `/client/public/blog/`
2. Nombra el archivo con este formato: `NN-titulo-del-articulo.md`
   - `NN` = número secuencial (01, 02, 03, etc.)
   - Usa guiones para separar palabras
   - Extensión: `.md`

Ejemplo: `03-delito-estafa-penas-defensa.md`

### Paso 2: Añadir Metadatos (Frontmatter)

Al inicio del archivo, añade los metadatos entre `---`:

```markdown
---
id: 3
title: "Delito de Estafa: Penas y Defensa"
slug: "delito-estafa-penas-defensa"
excerpt: "Guía completa sobre el delito de estafa, penas aplicables y estrategias de defensa legal."
author: "Dagar Abogados"
date: "2024-01-15"
category: "Delitos Económicos"
tags: ["estafa", "fraude", "delitos económicos"]
image: "/blog/estafa.jpg"
readTime: "8 min"
---
```

### Explicación de Metadatos

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `id` | Número único del artículo | `3` |
| `title` | Título del artículo | `"Delito de Estafa: Penas y Defensa"` |
| `slug` | URL amigable (sin espacios ni caracteres especiales) | `"delito-estafa-penas-defensa"` |
| `excerpt` | Resumen corto (aparece en listado) | `"Guía completa sobre..."` |
| `author` | Autor del artículo | `"Dagar Abogados"` |
| `date` | Fecha de publicación (YYYY-MM-DD) | `"2024-01-15"` |
| `category` | Categoría del artículo | `"Delitos Económicos"` |
| `tags` | Etiquetas separadas por comas | `["estafa", "fraude"]` |
| `image` | Ruta de la imagen (opcional) | `"/blog/estafa.jpg"` |
| `readTime` | Tiempo estimado de lectura | `"8 min"` |

### Paso 3: Escribir el Contenido

Después del segundo `---`, escribe tu contenido en Markdown:

```markdown
# Título Principal

Este es el contenido de tu artículo.

## Subtítulo

Puedes usar **negrita**, *cursiva*, `código`, etc.

### Subtítulo Menor

- Lista 1
- Lista 2
- Lista 3

1. Elemento numerado
2. Elemento numerado

[Enlace](https://ejemplo.com)

> Cita o destacado importante
```

## 📝 Sintaxis Markdown

### Encabezados

```markdown
# Encabezado 1 (H1)
## Encabezado 2 (H2)
### Encabezado 3 (H3)
```

### Énfasis

```markdown
**Texto en negrita**
*Texto en cursiva*
***Texto en negrita y cursiva***
```

### Listas

```markdown
- Elemento 1
- Elemento 2
  - Subelemento
  - Subelemento

1. Primer elemento
2. Segundo elemento
3. Tercer elemento
```

### Enlaces

```markdown
[Texto del enlace](https://ejemplo.com)
```

### Código

```markdown
Código inline: `console.log('Hola')`

Bloque de código:
```
function ejemplo() {
  return 'Hola';
}
```
```

### Citas

```markdown
> Esta es una cita importante
> Puede tener varias líneas
```

### Tablas

```markdown
| Encabezado 1 | Encabezado 2 |
|-------------|-------------|
| Celda 1     | Celda 2     |
| Celda 3     | Celda 4     |
```

### Línea Horizontal

```markdown
---
```

## 📋 Categorías Disponibles

Usa estas categorías en tus artículos:

- Derechos del Detenido
- Delitos de Tráfico
- Delitos Económicos
- Violencia de Género
- Delitos Sexuales
- Tráfico de Drogas
- Procedimiento Penal
- Recursos y Apelaciones

## 🏷️ Etiquetas Recomendadas

Usa etiquetas relevantes para mejorar SEO:

- detenido
- alcoholemia
- conducción
- estafa
- fraude
- violencia
- drogas
- juicio
- defensa
- abogado
- derecho
- penal

## 🖼️ Imágenes

### Cómo Añadir Imágenes

1. Coloca las imágenes en `/client/public/blog/`
2. Referencia en el metadato `image`:

```yaml
image: "/blog/nombre-imagen.jpg"
```

3. O dentro del contenido:

```markdown
![Descripción de la imagen](/blog/nombre-imagen.jpg)
```

### Formatos Soportados

- JPG/JPEG
- PNG
- WebP
- GIF

### Tamaño Recomendado

- Ancho: 1200px
- Alto: 600-800px
- Tamaño: < 500KB

## 🔍 SEO en Artículos

### Mejores Prácticas

1. **Título**: Incluye palabras clave principales
2. **Slug**: Descriptivo y con palabras clave
3. **Excerpt**: Resumen atractivo con palabras clave
4. **Encabezados**: Usa H2 y H3 con palabras clave
5. **Enlaces**: Vincula a otros artículos relacionados
6. **Etiquetas**: Usa etiquetas relevantes
7. **Contenido**: Mínimo 500 palabras, máximo 2000

### Ejemplo de Artículo SEO-Friendly

```markdown
---
id: 4
title: "Abogado Penal El Ejido: Defensa Especializada 24/7"
slug: "abogado-penal-el-ejido-defensa"
excerpt: "Abogado penal especializado en El Ejido. Defensa en juicios, asistencia a detenidos 24/7. Contacta con Dagar Abogados."
author: "Dagar Abogados"
date: "2024-01-10"
category: "Procedimiento Penal"
tags: ["abogado penal", "El Ejido", "defensa penal", "asistencia 24h"]
image: "/blog/abogado-el-ejido.jpg"
readTime: "6 min"
---

# Abogado Penal en El Ejido: Tu Defensa Especializada

En El Ejido, contar con un abogado penal especializado es crucial...

## ¿Cuándo Necesitas un Abogado Penal?

- Cuando eres detenido
- Cuando recibes una citación judicial
- Cuando necesitas asesoramiento legal

## Servicios de Defensa Penal

### Asistencia 24/7

Disponible en cualquier momento...
```

## 🔄 Editar un Artículo Existente

1. Abre el archivo `.md` en cualquier editor de texto
2. Modifica el contenido o metadatos
3. Guarda el archivo
4. Los cambios aparecerán automáticamente en la web

## 🗑️ Eliminar un Artículo

1. Simplemente elimina el archivo `.md` de la carpeta `/client/public/blog/`
2. El artículo desaparecerá del blog automáticamente

## 📊 Estadísticas de Artículos

El sistema muestra automáticamente:

- Número total de artículos
- Artículos por categoría
- Tiempo de lectura estimado
- Fecha de publicación
- Autor

## 🚀 Publicar Cambios

### En Manus

1. Edita los archivos `.md`
2. Crea un nuevo checkpoint
3. Publica los cambios

### En Hosting Tradicional

1. Edita los archivos `.md` localmente
2. Compila: `pnpm build`
3. Sube los archivos compilados a tu hosting

### En Vercel/Netlify

1. Edita los archivos `.md`
2. Haz commit y push a GitHub
3. Se despliega automáticamente

## 💡 Consejos Prácticos

### Estructura Recomendada

```markdown
# Título Principal

Introducción breve del tema.

## Sección 1

Contenido detallado.

### Subsección

Más detalles.

## Sección 2

Otro tema importante.

## Conclusión

Resumen y llamada a la acción.
```

### Longitud Ideal

- **Mínimo**: 500 palabras
- **Ideal**: 1000-1500 palabras
- **Máximo**: 2000 palabras

### Frecuencia de Publicación

- Recomendado: 1-2 artículos por semana
- Mínimo: 1 artículo por mes
- Máximo: 5 artículos por semana

## 🐛 Solución de Problemas

### "El artículo no aparece"

**Soluciones:**
1. Verifica que el archivo está en `/client/public/blog/`
2. Comprueba que tiene extensión `.md`
3. Verifica que el frontmatter es correcto
4. Recarga la página

### "El contenido no se renderiza correctamente"

**Soluciones:**
1. Verifica la sintaxis Markdown
2. Asegúrate de que los metadatos están entre `---`
3. Comprueba que no hay caracteres especiales sin escapar
4. Revisa los espacios en blanco

### "Las imágenes no cargan"

**Soluciones:**
1. Verifica que la imagen está en `/client/public/blog/`
2. Comprueba la ruta en el metadato `image`
3. Asegúrate de que el nombre del archivo es correcto
4. Intenta con una ruta absoluta: `/blog/nombre.jpg`

## 📚 Recursos Útiles

### Editores de Markdown

- **VS Code**: https://code.visualstudio.com/ (recomendado)
- **Typora**: https://typora.io/
- **Markdown Editor**: https://markdown-editor.github.io/
- **Obsidian**: https://obsidian.md/

### Validadores

- **Markdown Lint**: https://www.markdownlint.com/
- **Markdown Preview**: https://dillinger.io/

### Generadores

- **Table Generator**: https://www.tablesgenerator.com/markdown_tables
- **Markdown Cheatsheet**: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

## ✅ Checklist para Nuevo Artículo

Antes de publicar un artículo, verifica:

- [ ] Archivo nombrado correctamente (NN-titulo.md)
- [ ] Frontmatter completo y correcto
- [ ] Título descriptivo con palabras clave
- [ ] Slug único y descriptivo
- [ ] Excerpt atractivo (150-160 caracteres)
- [ ] Categoría válida
- [ ] Al menos 3 etiquetas relevantes
- [ ] Contenido mínimo 500 palabras
- [ ] Encabezados bien estructurados
- [ ] Enlaces internos a otros artículos
- [ ] Imagen optimizada (si aplica)
- [ ] Sin errores de ortografía
- [ ] Llamada a la acción (contacto, teléfono)

---

**¡Listo! Ahora puedes crear y editar artículos de blog sin necesidad de tocar código. Simplemente edita archivos Markdown y los cambios aparecerán automáticamente en tu web.**
