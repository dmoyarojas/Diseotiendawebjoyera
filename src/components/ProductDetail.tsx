import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingCart, Heart, Sparkles, Shield, Truck, RotateCcw } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Product } from './ProductCard';
import { useState } from 'react';

interface ProductDetailProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetail({ product, isOpen, onClose }: ProductDetailProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const finalPrice = product.discount 
    ? product.price - (product.price * product.discount / 100)
    : product.price;

  const features = [
    { icon: Shield, text: 'Garantía de por vida' },
    { icon: Truck, text: 'Envío gratis' },
    { icon: RotateCcw, text: 'Devoluciones fáciles' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-detail-title"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white transition-all hover:scale-110"
                aria-label="Cerrar"
              >
                <X className="h-6 w-6" />
              </button>

              <div className="grid md:grid-cols-2 gap-0 overflow-y-auto max-h-[90vh]">
                {/* Image Section */}
                <div className="relative bg-secondary">
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

                  <div className="aspect-square relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col">
                  <div className="flex-1">
                    <div className="mb-4">
                      <span className="text-sm text-muted-foreground uppercase tracking-wider">
                        {product.material}
                      </span>
                    </div>

                    <h2 
                      id="product-detail-title"
                      className="text-3xl sm:text-4xl mb-4"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {product.name}
                    </h2>

                    {/* Price */}
                    <div className="flex items-baseline gap-3 mb-6">
                      <span className="text-4xl text-primary">
                        ${finalPrice.toLocaleString()}
                      </span>
                      {product.discount && (
                        <span className="text-xl text-muted-foreground line-through">
                          ${product.price.toLocaleString()}
                        </span>
                      )}
                    </div>

                    <Separator className="my-6" />

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="mb-3">Descripción</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Specifications */}
                    <div className="mb-6">
                      <h3 className="mb-3">Especificaciones</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Material:</span>
                          <span>{product.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Categoría:</span>
                          <span className="capitalize">{product.category === 'women' ? 'Mujer' : 'Hombre'}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">SKU:</span>
                          <span>{product.id}</span>
                        </div>
                      </div>
                    </div>

                    <Separator className="my-6" />

                    {/* Features */}
                    <div className="grid grid-cols-1 gap-3 mb-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <feature.icon className="h-5 w-5 text-primary" />
                          <span className="text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="space-y-3 pt-6 border-t border-border">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-sm">Cantidad:</span>
                      <div className="flex items-center border border-border rounded-lg">
                        <button
                          onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                          className="px-4 py-2 hover:bg-secondary transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          -
                        </button>
                        <span className="px-4 py-2 min-w-[3rem] text-center border-x border-border">
                          {selectedQuantity}
                        </span>
                        <button
                          onClick={() => setSelectedQuantity(selectedQuantity + 1)}
                          className="px-4 py-2 hover:bg-secondary transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <Button 
                      size="lg" 
                      className="w-full group"
                      aria-label="Adquirir producto"
                    >
                      <Sparkles className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
                      Adquirir
                    </Button>

                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        size="lg" 
                        variant="outline"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart logic
                        }}
                        aria-label="Agregar al carrito"
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Al Carrito
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        onClick={() => setIsFavorite(!isFavorite)}
                        className={isFavorite ? 'text-destructive border-destructive' : ''}
                        aria-label={isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
                      >
                        <Heart 
                          className="h-5 w-5 mr-2" 
                          fill={isFavorite ? 'currentColor' : 'none'}
                        />
                        {isFavorite ? 'En Favoritos' : 'Favoritos'}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
