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
  material: string;
  description: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

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
              ${finalPrice.toLocaleString()}
            </span>
            {product.discount && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.price.toLocaleString()}
              </span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full group/button"
          onClick={(e) => {
            e.stopPropagation();
            // Add to cart logic here
          }}
          aria-label={`Agregar ${product.name} al carrito`}
        >
          <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/button:scale-110" />
          Agregar al Carrito
        </Button>
      </div>
    </motion.div>
  );
}
