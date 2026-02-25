/**
 * Blog Loader - Sistema para cargar y parsear artículos Markdown
 * 
 * Este módulo permite cargar automáticamente archivos Markdown de la carpeta /public/blog/
 * y convertirlos en objetos JavaScript con metadatos y contenido.
 */

/**
 * Interfaz para los metadatos del artículo (frontmatter)
 */
export interface BlogPostMetadata {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  readTime: string;
}

/**
 * Interfaz para un artículo de blog completo
 */
export interface BlogPost extends BlogPostMetadata {
  content: string;
  htmlContent?: string;
}

/**
 * Parsear frontmatter YAML de un archivo Markdown
 * El frontmatter está entre --- al inicio del archivo
 */
function parseFrontmatter(content: string): { metadata: BlogPostMetadata; body: string } {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    throw new Error('No frontmatter found in markdown file');
  }

  const [, frontmatterStr, body] = match;
  const metadata = parseFrontmatterYAML(frontmatterStr);

  return { metadata, body };
}

/**
 * Parsear YAML simple (sin usar una librería externa)
 */
function parseFrontmatterYAML(yaml: string): BlogPostMetadata {
  const lines = yaml.split('\n').filter(line => line.trim());
  const metadata: any = {};

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();

    // Remover comillas
    let cleanValue: any = value.replace(/^["']|["']$/g, '');

    // Parsear arrays (tags)
    if (key.trim() === 'tags' && cleanValue.startsWith('[')) {
      cleanValue = cleanValue
        .replace(/[\[\]]/g, '')
        .split(',')
        .map((tag: string) => tag.trim().replace(/["']/g, ''));
    }

    // Parsear números
    if (key.trim() === 'id') {
      cleanValue = parseInt(cleanValue);
    }

    metadata[key.trim()] = cleanValue;
  }

  return metadata as BlogPostMetadata;
}

/**
 * Convertir Markdown a HTML simple (sin usar marked)
 * Soporta: headings, bold, italic, links, listas, tablas
 */
export function markdownToHtml(markdown: string): string {
  let html = markdown;

  // Headings
  html = html.replace(/^### (.*?)$/gm, '<h3 class="text-lg font-semibold mt-6 mb-3">$1</h3>');
  html = html.replace(/^## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>');
  html = html.replace(/^# (.*?)$/gm, '<h1 class="text-3xl font-bold mt-10 mb-5">$1</h1>');

  // Bold
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/__(.+?)__/g, '<strong class="font-semibold">$1</strong>');

  // Italic
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>');
  html = html.replace(/_(.+?)_/g, '<em class="italic">$1</em>');

  // Links
  html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-accent hover:underline">$1</a>');

  // Code inline
  html = html.replace(/`(.*?)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>');

  // Listas no ordenadas
  html = html.replace(/^\- (.*?)$/gm, '<li class="ml-6 mb-2">$1</li>');
  html = html.replace(/(<li.*?<\/li>)/m, '<ul class="list-disc">$1</ul>');

  // Listas ordenadas
  html = html.replace(/^\d+\. (.*?)$/gm, '<li class="ml-6 mb-2">$1</li>');

  // Párrafos
  html = html
    .split('\n\n')
    .map(para => {
      if (!para.match(/^<[h|u|l|o|t]/)) {
        return `<p class="mb-4 leading-relaxed">${para}</p>`;
      }
      return para;
    })
    .join('\n');

  // Blockquotes
  html = html.replace(/^> (.*?)$/gm, '<blockquote class="border-l-4 border-accent pl-4 italic my-4">$1</blockquote>');

  // Líneas horizontales
  html = html.replace(/^---$/gm, '<hr class="my-8 border-border" />');

  return html;
}

/**
 * Cargar un archivo Markdown desde la URL pública
 */
async function loadMarkdownFile(filename: string): Promise<string> {
  try {
    const response = await fetch(`/blog/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}: ${response.statusText}`);
    }
    return await response.text();
  } catch (error) {
    console.error(`Error loading markdown file ${filename}:`, error);
    throw error;
  }
}

/**
 * Cargar un artículo de blog específico
 */
export async function loadBlogPost(filename: string): Promise<BlogPost> {
  const content = await loadMarkdownFile(filename);
  const { metadata, body } = parseFrontmatter(content);
  const htmlContent = markdownToHtml(body);

  return {
    ...metadata,
    content: body,
    htmlContent
  };
}

/**
 * Cargar todos los artículos de blog disponibles
 * Nota: Esta función requiere que los archivos estén listados en un archivo index.json
 */
export async function loadAllBlogPosts(): Promise<BlogPost[]> {
  try {
    // Cargar el índice de archivos
    const indexResponse = await fetch('/blog/index.json');
    if (!indexResponse.ok) {
      console.warn('Blog index not found, using fallback list');
      // Fallback: lista manual de archivos
      return loadFallbackBlogPosts();
    }

    const files: string[] = await indexResponse.json();
    const posts = await Promise.all(
      files.map(filename => loadBlogPost(filename))
    );

    // Ordenar por fecha descendente
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return loadFallbackBlogPosts();
  }
}

/**
 * Cargar artículos usando lista fallback
 * Esto se usa si no hay un archivo index.json
 */
async function loadFallbackBlogPosts(): Promise<BlogPost[]> {
  const files = [
    '01-que-hacer-si-detienen-a-mi-hijo.md',
    '02-juicio-rapido-alcoholemia.md',
    '03-conducir-sin-carnet-consecuencias.md',
    '04-denuncia-falsa-violencia-genero.md',
    '05-delito-estafa-penas-defensa.md',
    '06-blanqueo-capitales-defensa.md',
    '07-trafico-drogas-penas-defensa.md',
    '08-asistencia-comisaria-derechos.md',
    '09-orden-alejamiento-impugnacion.md',
    '10-impago-pensiones-delito.md'
  ];

  try {
    const posts = await Promise.all(
      files.map(filename => 
        loadBlogPost(filename).catch(error => {
          console.warn(`Could not load ${filename}:`, error);
          return null;
        })
      )
    );

    return posts.filter((post): post is BlogPost => post !== null);
  } catch (error) {
    console.error('Error loading fallback blog posts:', error);
    return [];
  }
}

/**
 * Cargar un artículo por slug
 */
export async function loadBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await loadAllBlogPosts();
    return posts.find(post => post.slug === slug) || null;
  } catch (error) {
    console.error(`Error loading blog post with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Filtrar artículos por categoría
 */
export function filterByCategory(posts: BlogPost[], category: string): BlogPost[] {
  return posts.filter(post => post.category === category);
}

/**
 * Filtrar artículos por etiqueta
 */
export function filterByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => post.tags.includes(tag));
}

/**
 * Buscar artículos por término
 */
export function searchBlogPosts(posts: BlogPost[], query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return posts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.content.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Obtener todas las categorías únicas
 */
export function getCategories(posts: BlogPost[]): string[] {
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories).sort();
}

/**
 * Obtener todas las etiquetas únicas
 */
export function getTags(posts: BlogPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Obtener artículos relacionados
 */
export function getRelatedPosts(post: BlogPost, allPosts: BlogPost[], limit: number = 3): BlogPost[] {
  return allPosts
    .filter((p: BlogPost) => p.id !== post.id)
    .filter((p: BlogPost) => 
      p.category === post.category || 
      p.tags.some((tag: string) => post.tags.includes(tag))
    )
    .slice(0, limit);
}

/**
 * Obtener artículos recientes
 */
export function getRecentPosts(posts: BlogPost[], limit: number = 5): BlogPost[] {
  return posts.slice(0, limit);
}
