import { motion } from 'motion/react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'women' | 'men';
  type: 'anillos' | 'collares' | 'brazaletes' | 'aretes';
  material: string;
  description: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}
//numero
const VENDOR_WHATSAPP_NUMBER = '51919679978';

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

//mnsaje de wasa personalizado
  const getWhatsAppUrl = () => {
    const message = `¡Hola Amora Joyería!💗 Estoy interesad@ en comprar el siguiente producto:
    
    *Artículo:* ${product.name}
    *Precio:* S./${finalPrice.toLocaleString()}
    *Material:* ${product.material}
    
    Por favor, envíame los detalles para completar mi pedido. ¡Gracias!✨`;

    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${VENDOR_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
    >
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {product.isNew && (
          <Badge className="bg-accent text-accent-foreground">Nuevo</Badge>
        )}
        {product.discount && (
          <Badge className="bg-destructive text-destructive-foreground">
            -{product.discount}%
          </Badge>
        )}
      </div>

      {/* Favorite Button */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className={`absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300 hover:scale-110 ${
          isFavorite ? 'text-destructive' : 'text-muted-foreground'
        }`}
        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
      >
        <Heart 
          className="h-5 w-5" 
          fill={isFavorite ? 'currentColor' : 'none'}
        />
      </button>

      {/* Image */}
      <div 
        className="relative aspect-square overflow-hidden bg-secondary cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Quick Actions Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
        >
          <Button
            onClick={() => onViewDetails(product)}
            variant="secondary"
            className="transition-all hover:scale-105"
            aria-label={`Ver detalles de ${product.name}`}
          >
            Ver Detalles
          </Button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-2">
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {product.material}
          </span>
        </div>

        
        
        <h3 
          className="text-xl mb-2 line-clamp-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {product.name}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl text-primary">
              S./{finalPrice.toLocaleString()} PEN
            </span>
            {product.discount && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>

      
        {/* Usamos e.stopPropagation() en el enlace para evitar que abra la vista de detalles */}
        <a 
          href={getWhatsAppUrl()} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()} // Detiene la propagación del clic al div padre (que es onClick={() => onViewDetails...})
          className="w-full block" // Esto asegura que el enlace ocupe todo el ancho de la tarjeta
        >
          {/* El componente Button está ahora DENTRO del enlace <a> */}
          <Button 
            className="w-full group/button"
            // Nota: Ya no necesitamos un onClick aquí, el <a> se encarga de la navegación.
            aria-label={`Comprar ${product.name} por WhatsApp`}
          >
            <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/button:scale-110" />
            Comprar por WhatsApp
          </Button>
        </a>
        
      </div>
    </motion.div>
  );
}
