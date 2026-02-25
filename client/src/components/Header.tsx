import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, navigate] = useLocation();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBlogClick = () => {
    navigate('/blog');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border" style={{backgroundColor: '#192437'}}>
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img 
            src="/images/logo-dagar.png" 
            alt="Dagar Abogados" 
            className="h-12 w-auto"
          />
        </div>

        {/* Navegación Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('servicios')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            Servicios
          </button>
          <button 
            onClick={() => scrollToSection('casos')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            Casos de Éxito
          </button>
          <button 
            onClick={() => scrollToSection('resenas')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            Reseñas
          </button>
          <button 
            onClick={handleBlogClick}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            Blog
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-foreground hover:text-accent transition-colors duration-300 font-medium" style={{color: '#f5f1e8'}}
          >
            FAQ
          </button>
          <button 
            onClick={() => scrollToSection('contacto')}
            className="btn-accent"
          >
            Contacto
          </button>
        </nav>

        {/* Botón Menú Mobile */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-card rounded-sm transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-card border-t border-border">
          <div className="container py-4 flex flex-col gap-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('casos')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Casos de Éxito
            </button>
            <button 
              onClick={() => scrollToSection('resenas')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Reseñas
            </button>
            <button 
              onClick={handleBlogClick}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              Blog
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-left text-foreground hover:text-accent transition-colors py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('contacto')}
              className="btn-accent w-full"
            >
              Contacto
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
