import { useState } from 'react';
import { ProductCard, Product } from './ProductCard';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { ProductDetail } from './ProductDetail';

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'women' | 'men'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="text-4xl sm:text-5xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nuestra Colección
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explora nuestra selección curada de piezas únicas, diseñadas para destacar tu elegancia natural.
          </p>

          {/* Category Filter */}
          <Tabs 
            value={selectedCategory} 
            onValueChange={(value) => setSelectedCategory(value as 'all' | 'women' | 'men')}
            className="inline-block"
          >
            <TabsList className="bg-white shadow-sm">
              <TabsTrigger value="all" className="px-6">
                Todos
              </TabsTrigger>
              <TabsTrigger value="women" className="px-6">
                Mujer
              </TabsTrigger>
              <TabsTrigger value="men" className="px-6">
                Hombre
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No hay productos disponibles en esta categoría.
            </p>
          </div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}
