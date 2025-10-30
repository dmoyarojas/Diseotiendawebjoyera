import { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ProductGrid } from './components/ProductGrid';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Mock product data
  const products: Product[] = [
    {
      id: 'P001',
      name: 'Anillo Eternidad Diamante',
      price: 3500,
      image: 'https://images.unsplash.com/photo-1610217434551-36981d619c3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmluZyUyMGRpYW1vbmR8ZW58MXx8fHwxNzYxODAzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Oro Blanco 18K',
      description: 'Elegante anillo de eternidad con diamantes redondos engastados. Perfecto para ocasiones especiales o como símbolo de amor eterno.',
      isNew: true
    },
    {
      id: 'P002',
      name: 'Collar Perla Elegante',
      price: 2800,
      discount: 15,
      image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuZWNrbGFjZSUyMGdvbGR8ZW58MXx8fHwxNzYxODAzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Oro Amarillo 14K',
      description: 'Collar con cadena delicada de oro amarillo y perlas cultivadas. Un clásico atemporal que complementa cualquier atuendo elegante.'
    },
    {
      id: 'P003',
      name: 'Aretes Pendientes Luxury',
      price: 2200,
      image: 'https://images.unsplash.com/photo-1761479268064-c43b8240b237?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBlYXJyaW5ncyUyMGpld2Vscnl8ZW58MXx8fHwxNzYxNzMwNDg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Oro Rosa 18K',
      description: 'Aretes pendientes con diseño moderno y sofisticado. Acabado en oro rosa con detalles brillantes que capturan la luz.',
      isNew: true
    },
    {
      id: 'P004',
      name: 'Pulsera Eslabones Oro',
      price: 1850,
      image: 'https://images.unsplash.com/photo-1655707063513-a08dad26440e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwYnJhY2VsZXQlMjBqZXdlbHJ5fGVufDF8fHx8MTc2MTcyNTIyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Oro Amarillo 14K',
      description: 'Pulsera de eslabones entrelazados con acabado pulido. Diseño versátil que se adapta a cualquier ocasión.'
    },
    {
      id: 'P005',
      name: 'Reloj Clásico Premium',
      price: 4200,
      discount: 20,
      image: 'https://images.unsplash.com/photo-1742631193849-acc045ea5890?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3YXRjaCUyMGVsZWdhbnR8ZW58MXx8fHwxNzYxNzQxNjE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'men',
      material: 'Acero Inoxidable',
      description: 'Reloj clásico con movimiento automático suizo. Caja de acero inoxidable con correa de cuero genuino.',
      isNew: true
    },
    {
      id: 'P006',
      name: 'Pendiente Diamante Solitario',
      price: 3200,
      image: 'https://images.unsplash.com/photo-1674329042475-de1a95b4ca62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWFtb25kJTIwcGVuZGFudCUyMGpld2Vscnl8ZW58MXx8fHwxNzYxODAzMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Platino 950',
      description: 'Pendiente solitario con diamante central de corte brillante. Montado en platino para máxima durabilidad y brillo.'
    },
    {
      id: 'P007',
      name: 'Set Joyería Completo',
      price: 5800,
      discount: 25,
      image: 'https://images.unsplash.com/photo-1602752250015-52934bc45613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBqZXdlbHJ5JTIwZ29sZCUyMGRpYW1vbmR8ZW58MXx8fHwxNzYxODAzMDE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'women',
      material: 'Oro Blanco 18K',
      description: 'Set completo de joyería incluyendo collar, aretes y pulsera. Diseño coordinado con diamantes y oro blanco.'
    },
    {
      id: 'P008',
      name: 'Gemelos Lujo Ejecutivo',
      price: 980,
      image: 'https://images.unsplash.com/photo-1602752250055-5ebb552fc3ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBuZWNrbGFjZSUyMGdvbGR8ZW58MXx8fHwxNzYxODAzMDE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'men',
      material: 'Plata 925',
      description: 'Gemelos elegantes para camisas de vestir. Acabado en plata con detalles grabados a mano.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (sectionId === 'products' || sectionId === 'women' || sectionId === 'men') {
      const element = document.getElementById('products-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section === 'home' ? 'hero-section' : 'products-section');
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
      
      <main>
        <div id="hero-section">
          <Hero onExplore={() => scrollToSection('products')} />
        </div>
        
        <About />
        
        <div id="products-section">
          <ProductGrid products={products} />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
