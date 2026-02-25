import { ArrowLeft, Calendar, User, Clock, Share2 } from 'lucide-react';
import { BlogPost, getRelatedPosts, loadAllBlogPosts } from '@/lib/blog-loader';
import { useEffect, useState } from 'react';

interface BlogPostDetailProps {
  post: BlogPost;
  onBack: () => void;
}

/**
 * Componente para mostrar un artículo de blog individual
 * 
 * Características:
 * - Renderiza contenido Markdown como HTML
 * - Muestra metadatos del artículo
 * - Artículos relacionados
 * - Botones de compartir
 * - SEO optimizado
 */
export default function BlogPostDetail({ post, onBack }: BlogPostDetailProps) {
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  // Cargar artículos relacionados
  useEffect(() => {
    const loadRelated = async () => {
      try {
        const posts = await loadAllBlogPosts();
        setAllPosts(posts);
        const related = getRelatedPosts(post, posts, 3);
        setRelatedPosts(related);
      } catch (error) {
        console.error('Error loading related posts:', error);
      }
    };

    loadRelated();
  }, [post]);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `${post.title} - Dagar Abogados`;

    const shareUrls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  return (
    <article className="min-h-screen bg-background">
      {/* Botón Volver */}
      <div className="bg-muted border-b border-border sticky top-0 z-40">
        <div className="container py-3">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-accent hover:text-primary transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al Blog
          </button>
        </div>
      </div>

      {/* Header del Artículo */}
      <section className="bg-primary text-primary-foreground py-12">
        <div className="container max-w-3xl">
          <div className="mb-6">
            <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Metadatos */}
          <div className="flex flex-wrap gap-6 text-sm opacity-90">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>
                {new Date(post.date).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-12">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Contenido */}
            <div className="lg:col-span-3">
              {/* Imagen del artículo */}
              {post.image && (
                <div className="mb-8 rounded-sm overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                  />
                </div>
              )}

              {/* Contenido HTML */}
              <div className="prose prose-sm max-w-none mb-12">
                <div
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: post.htmlContent || post.content
                  }}
                />
              </div>

              {/* Etiquetas */}
              <div className="border-t border-border pt-8 mb-8">
                <h3 className="text-sm font-semibold text-primary mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Compartir */}
              <div className="border-t border-border pt-8">
                <h3 className="text-sm font-semibold text-primary mb-4 flex items-center gap-2">
                  <Share2 size={18} />
                  Compartir Artículo
                </h3>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleShare('twitter')}
                    className="px-4 py-2 bg-blue-500 text-white rounded-sm hover:bg-blue-600 transition-colors text-sm font-semibold"
                  >
                    Twitter
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700 transition-colors text-sm font-semibold"
                  >
                    Facebook
                  </button>
                  <button
                    onClick={() => handleShare('whatsapp')}
                    className="px-4 py-2 bg-green-500 text-white rounded-sm hover:bg-green-600 transition-colors text-sm font-semibold"
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="px-4 py-2 bg-blue-700 text-white rounded-sm hover:bg-blue-800 transition-colors text-sm font-semibold"
                  >
                    LinkedIn
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* CTA */}
              <div className="bg-primary text-primary-foreground p-6 rounded-sm mb-8">
                <h3 className="font-semibold mb-3">¿Necesitas Asesoramiento?</h3>
                <p className="text-sm opacity-90 mb-4">
                  Contacta con nuestros especialistas en Derecho Penal.
                </p>
                <a
                  href="#contacto"
                  className="block w-full bg-accent text-accent-foreground py-2 rounded-sm text-center font-semibold hover:opacity-90 transition-opacity"
                >
                  Contactar Ahora
                </a>
              </div>

              {/* Artículos Relacionados */}
              {relatedPosts.length > 0 && (
                <div className="bg-muted p-6 rounded-sm">
                  <h3 className="font-semibold text-primary mb-4">Artículos Relacionados</h3>
                  <div className="space-y-4">
                    {relatedPosts.map(relatedPost => (
                      <div
                        key={relatedPost.id}
                        className="pb-4 border-b border-border last:border-b-0 cursor-pointer hover:text-accent transition-colors"
                        onClick={() => {
                          // Aquí iría la navegación al artículo relacionado
                          window.scrollTo(0, 0);
                        }}
                      >
                        <p className="text-sm font-semibold text-primary hover:text-accent">
                          {relatedPost.title}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(relatedPost.date).toLocaleDateString('es-ES', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="bg-primary text-primary-foreground py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">¿Tienes una Consulta Legal?</h2>
          <p className="text-lg opacity-90 mb-8">
            Nuestro equipo de especialistas en Derecho Penal está disponible 24/7 para ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+34617447309"
              className="px-6 py-3 bg-accent text-accent-foreground rounded-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Llamar Ahora
            </a>
            <a
              href="https://wa.me/34617447309"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-accent text-accent rounded-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
