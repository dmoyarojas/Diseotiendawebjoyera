import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Sparkles } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export function Hero({ onExplore }: HeroProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 251, 247, 0.3), rgba(255, 251, 247, 0.9)), url('https://images.unsplash.com/photo-1759683730016-1c3c6e526cfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwc3RvcmUlMjBsdXh1cnl8ZW58MXx8fHwxNzYxODAzMDIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-accent/20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-2 text-primary">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="text-sm tracking-widest uppercase">Colección Exclusiva</span>
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Elegancia que
            <br />
            <span className="text-primary">Brilla Eternamente</span>
          </h1>
          
          <p className="text-lg sm:text-xl max-w-2xl mx-auto text-muted-foreground">
            Descubre nuestra selección curada de joyería fina. Cada pieza cuenta una historia de
            artesanía excepcional y diseño atemporal.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              onClick={onExplore}
              className="group transition-all hover:scale-105"
              aria-label="Explorar colección"
            >
              Explorar Colección
              <Sparkles className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="transition-all hover:scale-105"
              aria-label="Ver ofertas especiales"
            >
              Ver Ofertas Especiales
            </Button>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-10 hidden lg:block"
        >
          <Sparkles className="h-12 w-12 text-primary/30" />
        </motion.div>
        
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-1/4 right-10 hidden lg:block"
        >
          <Sparkles className="h-16 w-16 text-accent/30" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
