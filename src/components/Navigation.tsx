import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'products', label: 'Productos' },
    { id: 'women', label: 'Mujer' },
    { id: 'men', label: 'Hombre' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group transition-transform hover:scale-105"
            aria-label="Ir a inicio"
          >
            <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
            <span className="text-2xl tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
              Lumière
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground'
                }`}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-in fade-in slide-in-from-bottom-1 duration-300" />
                )}
              </button>
            ))}
          </div>

          {/* Cart Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative" aria-label="Carrito de compras">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-accent flex items-center justify-center text-xs">
                0
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border animate-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 transition-colors ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
                }`}
                aria-label={`Ir a ${item.label}`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="outline" className="w-full" aria-label="Carrito de compras">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Carrito (0)
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
