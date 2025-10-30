import { Sparkles, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Separator } from './ui/separator';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'Sobre Nosotros', href: '#' },
      { label: 'Nuestras Tiendas', href: '#' },
      { label: 'Trabaja con Nosotros', href: '#' },
      { label: 'Blog', href: '#' }
    ],
    help: [
      { label: 'Preguntas Frecuentes', href: '#' },
      { label: 'Envíos y Devoluciones', href: '#' },
      { label: 'Guía de Tallas', href: '#' },
      { label: 'Cuidado de Joyas', href: '#' }
    ],
    legal: [
      { label: 'Términos y Condiciones', href: '#' },
      { label: 'Política de Privacidad', href: '#' },
      { label: 'Política de Cookies', href: '#' },
      { label: 'Garantías', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-secondary/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
              <span 
                className="text-2xl tracking-wide"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Lumière
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Creando momentos inolvidables a través de joyería excepcional desde 1995.
              Cada pieza es una obra maestra de elegancia atemporal.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Av. Principal 123, Centro Comercial Luxury Plaza
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">contacto@lumiere.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-4">Compañía</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h3 className="mb-4">Ayuda</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm">
          <div className="max-w-xl mx-auto text-center">
            <h3 
              className="text-2xl mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Suscríbete a Nuestro Newsletter
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Recibe ofertas exclusivas y las últimas novedades directamente en tu correo
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-input-background focus:outline-none focus:ring-2 focus:ring-ring"
                aria-label="Email para newsletter"
              />
              <button 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                aria-label="Suscribirse al newsletter"
              >
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Lumière. Todos los derechos reservados.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 rounded-full hover:bg-secondary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
