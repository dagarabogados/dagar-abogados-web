# 📝 Guía Completa: Añadir Artículos al Blog mediante Markdown

## ¿Cómo Funciona el Sistema de Blog?

Tu página web tiene un sistema de blog completamente automatizado que carga artículos desde archivos Markdown. **No necesitas tocar código** para añadir nuevos artículos.

## Estructura de Carpetas

```
client/
└── public/
    └── blog/
        ├── 01-que-hacer-si-detienen-a-mi-hijo.md
        ├── 02-juicio-rapido-alcoholemia.md
        └── ... más artículos ...
```

Todos los artículos están en la carpeta `/client/public/blog/`

## Cómo Crear un Nuevo Artículo

### Paso 1: Crear el Archivo

1. Abre la carpeta `client/public/blog/`
2. Crea un nuevo archivo con el nombre: `XX-titulo-del-articulo.md`
   - Reemplaza `XX` con el número siguiente (ej: 03, 04, 05...)
   - El título debe estar en minúsculas y separado por guiones

**Ejemplo:** `03-delito-de-estafa-defensa.md`

### Paso 2: Estructura del Archivo Markdown

Cada artículo debe tener esta estructura:

```markdown
---
title: "Título del Artículo"
excerpt: "Resumen breve del artículo (máximo 150 caracteres)"
category: "Categoría"
date: "2024-01-26"
author: "Nombre del Autor"
tags: ["palabra-clave-1", "palabra-clave-2", "palabra-clave-3"]
---

# Título del Artículo

Aquí va el contenido del artículo en Markdown...

## Subtítulo

Más contenido...

### Sub-subtítulo

Contenido adicional...
```

### Paso 3: Metadatos (Frontmatter)

Los metadatos van entre `---` al inicio del archivo:

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| `title` | Título del artículo | "Delito de Estafa: Penas y Defensa" |
| `excerpt` | Resumen breve (máx 150 caracteres) | "Guía completa sobre el delito de estafa..." |
| `category` | Categoría del artículo | "Delitos Económicos", "Tráfico", "Urgencias" |
| `date` | Fecha de publicación (YYYY-MM-DD) | "2024-01-26" |
| `author` | Nombre del autor | "Dagar Abogados" |
| `tags` | Palabras clave para SEO (array) | ["estafa", "defensa", "delito"] |

### Paso 4: Contenido en Markdown

El contenido del artículo usa sintaxis Markdown estándar:

```markdown
# Encabezado 1 (Título Principal)

## Encabezado 2 (Subtítulo)

### Encabezado 3 (Sub-subtítulo)

Párrafo normal de texto.

**Texto en negrita** para énfasis.

*Texto en cursiva* para énfasis suave.

- Elemento de lista
- Otro elemento
- Tercer elemento

1. Primer elemento numerado
2. Segundo elemento
3. Tercer elemento

> Cita o destacado importante

[Enlace a página](https://ejemplo.com)

`código en línea`

```código en bloque```
```

## Ejemplo Completo

Crea un archivo `03-delito-de-estafa-defensa.md`:

```markdown
---
title: "Delito de Estafa: Penas y Estrategia de Defensa"
excerpt: "Análisis completo del delito de estafa, penas aplicables y mejores estrategias de defensa legal."
category: "Delitos Económicos"
date: "2024-01-26"
author: "Dagar Abogados"
tags: ["estafa", "defensa penal", "delito económico", "penas"]
---

# Delito de Estafa: Penas y Estrategia de Defensa

La estafa es uno de los delitos más comunes en España. En este artículo te explicamos qué es, qué penas conlleva y cómo defenderte.

## ¿Qué es la Estafa?

La estafa es engañar a alguien para obtener un beneficio económico. Según el Código Penal español, es un delito grave.

### Elementos Clave

1. **Engaño**: Debe haber un engaño deliberado
2. **Beneficio**: El autor obtiene un beneficio económico
3. **Perjuicio**: La víctima sufre un perjuicio patrimonial

## Penas por Estafa

Las penas varían según la cantidad defraudada:

- **Hasta 400€**: Multa de 1 a 3 meses
- **400€ a 3.600€**: Prisión de 1 a 3 meses o multa
- **Más de 3.600€**: Prisión de 1 a 3 años

## Defensa Legal

> **Consejo Importante**: Si eres acusado de estafa, busca asesoramiento legal inmediatamente.

Nuestro equipo puede ayudarte a:

- Analizar las pruebas en tu contra
- Demostrar que no hubo engaño
- Negociar una reducción de penas
- Preparar tu defensa en juicio

## Contacta con Nosotros

¿Necesitas defensa legal especializada? [Contacta con Dagar Abogados](tel:+34617447309)
```

## Categorías Disponibles

Usa estas categorías para clasificar tus artículos:

- **Urgencias** — Asistencia 24/7, derechos del detenido
- **Tráfico** — Alcoholemia, conducir sin carnet
- **Violencia de Género** — Denuncias falsas, órdenes de alejamiento
- **Delitos Económicos** — Estafa, blanqueo, fraude
- **Drogas** — Tráfico, cultivo
- **Procedimiento** — Juicio rápido, duración de procesos
- **Familia** — Impago de pensiones

## Palabras Clave para SEO

Usa palabras clave relevantes en los tags. Ejemplos:

```
tags: ["abogado penal el ejido", "juicio rápido", "defensa legal"]
tags: ["alcoholemia", "conducir bajo influencia", "penas"]
tags: ["estafa", "delito económico", "defensa penal"]
```

## Cómo Aparecerá tu Artículo

Una vez que crees el archivo Markdown:

1. **En la página del blog** — Tu artículo aparecerá automáticamente en `/blog`
2. **En el home** — Los 3 primeros artículos aparecerán en la sección "Blog" del home
3. **En búsqueda** — Será indexado por Google para las palabras clave

## Optimización para SEO

Para que tu artículo tenga mejor posicionamiento:

### 1. Elige Palabras Clave Estratégicas

- Usa palabras clave en el título
- Incluye palabras clave en el excerpt
- Añade palabras clave en los tags

### 2. Estructura el Contenido

```markdown
# Palabra Clave Principal

## Subtema con Palabra Clave

### Detalle Específico

Párrafos con explicación...
```

### 3. Longitud Recomendada

- **Mínimo**: 800 palabras
- **Óptimo**: 1.500-2.000 palabras
- **Máximo**: Sin límite (pero mantén coherencia)

### 4. Incluye Listas y Estructuras

```markdown
## Pasos para Defenderse

1. Contacta con un abogado inmediatamente
2. Recopila todas las pruebas
3. Prepara tu defensa
4. Comparece en juicio
```

## Errores Comunes a Evitar

❌ **No hagas esto:**

- No uses caracteres especiales en el nombre del archivo (ej: `ñ`, `á`, `é`)
- No olvides el frontmatter (metadatos entre `---`)
- No dejes campos vacíos en el frontmatter
- No uses categorías que no existan
- No hagas artículos muy cortos (menos de 300 palabras)

✅ **Haz esto:**

- Usa nombres descriptivos para los archivos
- Completa todos los campos del frontmatter
- Usa categorías existentes
- Escribe artículos de calidad y sustancia
- Optimiza para palabras clave relevantes

## Ejemplos de Artículos

### Artículo 1: Urgencias

```markdown
---
title: "Qué Hacer si Detienen a tu Hijo: Guía Completa"
excerpt: "Conoce tus derechos y los pasos a seguir si tu hijo es detenido. Guía completa sobre asistencia legal inmediata."
category: "Urgencias"
date: "2024-01-26"
author: "Dagar Abogados"
tags: ["qué hacer si detienen a mi hijo", "derechos del detenido", "asistencia legal urgente"]
---

# Qué Hacer si Detienen a tu Hijo: Guía Completa

Si tu hijo ha sido detenido, es importante actuar rápidamente...
```

### Artículo 2: Tráfico

```markdown
---
title: "Juicio Rápido por Alcoholemia: Todo lo que Debes Saber"
excerpt: "Información completa sobre juicios rápidos por delitos de alcoholemia, penas y estrategias de defensa."
category: "Tráfico"
date: "2024-01-26"
author: "Dagar Abogados"
tags: ["juicio rápido alcoholemia", "abogado alcoholemia", "conducir bajo influencia"]
---

# Juicio Rápido por Alcoholemia: Todo lo que Debes Saber

Los juicios rápidos por alcoholemia son procedimientos acelerados...
```

## Cómo Verificar que tu Artículo Funciona

1. Guarda el archivo en `client/public/blog/`
2. Espera 2-3 segundos
3. Recarga la página del blog (`/blog`)
4. Tu artículo debe aparecer en el listado

## Solución de Problemas

### "Mi artículo no aparece en el blog"

**Soluciones:**
1. Verifica que el archivo está en `client/public/blog/`
2. Verifica que el nombre del archivo es correcto (sin espacios, con guiones)
3. Verifica que el frontmatter está entre `---`
4. Recarga la página (Ctrl+F5 para limpiar caché)

### "El contenido no se ve bien"

**Soluciones:**
1. Verifica la sintaxis Markdown
2. Asegúrate de que los encabezados usan `#`, `##`, `###`
3. Verifica que las listas usan `-` o números

### "Las palabras clave no funcionan"

**Soluciones:**
1. Usa palabras clave relevantes en el título
2. Usa palabras clave en el excerpt
3. Incluye palabras clave en los tags
4. Usa palabras clave en el contenido (natural, no forzado)

## Próximos Pasos

1. **Crea 5-10 artículos** con palabras clave estratégicas
2. **Optimiza para SEO** — Usa palabras clave en títulos y contenido
3. **Publica regularmente** — 1-2 artículos por semana
4. **Monitorea en Google Search Console** — Ve qué palabras clave generan tráfico

## Checklist para Nuevo Artículo

- [ ] Archivo creado en `client/public/blog/`
- [ ] Nombre del archivo es descriptivo y en minúsculas
- [ ] Frontmatter completo (title, excerpt, category, date, author, tags)
- [ ] Contenido de al menos 800 palabras
- [ ] Encabezados bien estructurados (H1, H2, H3)
- [ ] Palabras clave incluidas naturalmente
- [ ] Enlaces internos (si aplica)
- [ ] Artículo aparece en `/blog`
- [ ] Contenido se ve bien formateado

---

**¡Ahora estás listo para crear artículos de blog profesionales y optimizados para SEO!**
