import { useState, useEffect } from 'react';
import { Search, Calendar, User, Tag, ChevronRight } from 'lucide-react';
import { loadAllBlogPosts, searchBlogPosts, getCategories, filterByCategory, BlogPost } from '@/lib/blog-loader';
import BlogPostDetail from '@/components/BlogPostDetail';

/**
 * Página de Blog - Listado de artículos
 * 
 * Características:
 * - Carga automática de artículos Markdown
 * - Búsqueda en tiempo real
 * - Filtrado por categoría
 * - Vista de artículo individual
 * - SEO optimizado
 */
export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar artículos al montar el componente
  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        const loadedPosts = await loadAllBlogPosts();
        setPosts(loadedPosts);
        setFilteredPosts(loadedPosts);
        setCategories(getCategories(loadedPosts));
        setError(null);
      } catch (err) {
        console.error('Error loading blog posts:', err);
        setError('Error al cargar los artículos del blog');
        setPosts([]);
        setFilteredPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  // Filtrar artículos cuando cambia la búsqueda o categoría
  useEffect(() => {
    let result = posts;

    // Filtrar por categoría
    if (selectedCategory) {
      result = filterByCategory(result, selectedCategory);
    }

    // Filtrar por búsqueda
    if (searchQuery) {
      result = searchBlogPosts(result, searchQuery);
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, posts]);

  // Si hay un artículo seleccionado, mostrar su vista detallada
  if (selectedPost) {
    return <BlogPostDetail post={selectedPost} onBack={() => setSelectedPost(null)} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header del Blog */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container">
          <h1 className="text-5xl font-bold mb-4">Blog Jurídico</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Artículos, guías y análisis sobre Derecho Penal. Mantente informado sobre tus derechos legales.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Filtros */}
            <aside className="lg:col-span-1">
              {/* Búsqueda */}
              <div className="mb-8">
                <label className="block text-sm font-semibold text-primary mb-3">
                  Buscar Artículos
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-sm focus:outline-none focus:border-accent"
                  />
                </div>
              </div>

              {/* Categorías */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-primary mb-4">Categorías</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-3 py-2 rounded-sm transition-colors ${
                      selectedCategory === null
                        ? 'bg-accent text-accent-foreground'
                        : 'hover:bg-muted'
                    }`}
                  >
                    Todos ({posts.length})
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-sm transition-colors ${
                        selectedCategory === category
                          ? 'bg-accent text-accent-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      {category} ({posts.filter(p => p.category === category).length})
                    </button>
                  ))}
                </div>
              </div>

              {/* Información */}
              <div className="bg-muted p-4 rounded-sm">
                <h3 className="font-semibold text-primary mb-2">Información</h3>
                <p className="text-sm text-muted-foreground">
                  Todos nuestros artículos están escritos por especialistas en Derecho Penal con amplia experiencia.
                </p>
              </div>
            </aside>

            {/* Artículos */}
            <main className="lg:col-span-3">
              {isLoading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Cargando artículos...</p>
                </div>
              ) : error ? (
                <div className="bg-red-50 border border-red-200 rounded-sm p-4 text-red-800">
                  <p>{error}</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    No se encontraron artículos que coincidan con tu búsqueda.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory(null);
                    }}
                    className="text-accent hover:underline"
                  >
                    Ver todos los artículos
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {filteredPosts.map(post => (
                    <article
                      key={post.id}
                      className="border border-border rounded-sm p-6 hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => setSelectedPost(post)}
                    >
                      {/* Categoría y Fecha */}
                      <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                        <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={16} />
                          {post.author}
                        </div>
                      </div>

                      {/* Título */}
                      <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors">
                        {post.title}
                      </h2>

                      {/* Extracto */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      {/* Etiquetas */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground"
                          >
                            <Tag size={12} />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Pie */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        <div className="flex items-center gap-2 text-accent">
                          <span>Leer más</span>
                          <ChevronRight size={16} />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {/* Paginación o resumen */}
              {filteredPosts.length > 0 && (
                <div className="mt-12 text-center text-muted-foreground">
                  <p>Mostrando {filteredPosts.length} de {posts.length} artículos</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
