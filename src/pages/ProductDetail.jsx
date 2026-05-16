import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import Button from '../components/ui/Button';
import PageTransition from '../components/layout/PageTransition';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = productsData.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 pb-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-maroon mb-4">Product Not Found</h2>
          <Link to="/shop"><Button>Back to Shop</Button></Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <PageTransition>
      <div className="bg-neutral-dark/30 min-h-screen pt-32 pb-16">
        <div className="container">
          
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-maroon">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/shop" className="hover:text-maroon">Shop</Link>
            <span className="mx-2">/</span>
            <span className="text-maroon font-medium">{product.name}</span>
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              
              {/* Product Image */}
              <div className="bg-gray-50 p-8 flex items-center justify-center min-h-[400px] border-b md:border-b-0 md:border-r border-gray-100 relative">
                {product.badge && (
                  <span className="absolute top-6 left-6 bg-maroon text-white text-xs px-3 py-1 rounded-sm font-medium tracking-wider uppercase">
                    {product.badge}
                  </span>
                )}
                <img src={product.image} alt={product.name} className="max-w-full h-auto max-h-[500px] object-contain drop-shadow-xl" />
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-xs font-bold uppercase tracking-widest text-saffron mb-2 block">
                  {product.category.replace('-', ' ')}
                </span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-maroon mb-2">{product.name}</h1>
                <p className="font-devanagari text-lg text-gray-500 mb-6">{product.nameHi}</p>
                
                <div className="flex items-center mb-6">
                  <div className="flex text-gold text-lg mr-2">
                    {'★'.repeat(Math.floor(product.rating))}
                    {'☆'.repeat(5 - Math.floor(product.rating))}
                  </div>
                  <span className="text-sm text-gray-500">{product.reviews} Reviews</span>
                </div>
                
                <p className="text-3xl font-bold text-gray-900 mb-6">₹{product.price}</p>
                
                <div className="prose prose-sm text-gray-600 mb-8">
                  <p className="leading-relaxed">{product.longDescription}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex border border-gray-200 rounded-md bg-white">
                    <button 
                      className="px-4 py-3 text-gray-500 hover:text-maroon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >-</button>
                    <input 
                      type="number" 
                      className="w-16 text-center border-none focus:ring-0 outline-none font-medium" 
                      value={quantity}
                      readOnly
                    />
                    <button 
                      className="px-4 py-3 text-gray-500 hover:text-maroon"
                      onClick={() => setQuantity(quantity + 1)}
                    >+</button>
                  </div>
                  <Button className="flex-grow" size="lg" onClick={handleAddToCart}>Add to Sacred Cart</Button>
                </div>
                
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-start gap-3 mb-4 text-sm text-gray-600">
                    <span className="text-gold">✓</span>
                    <span><strong>100% Authentic:</strong> Sourced directly and verified.</span>
                  </div>
                  <div className="flex items-start gap-3 mb-4 text-sm text-gray-600">
                    <span className="text-gold">✓</span>
                    <span><strong>Blessed by Panditji:</strong> Energized with Vedic mantras before shipping.</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-gray-600">
                    <span className="text-gold">✓</span>
                    <span><strong>Secure Delivery:</strong> Pan-India traceable shipping.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="font-serif text-2xl font-bold text-maroon mb-6">The Essence & Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {product.benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gold/10">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron mb-4 font-bold">
                    {idx + 1}
                  </div>
                  <h3 className="font-serif font-bold text-lg mb-2">{benefit}</h3>
                  <p className="text-sm text-gray-600">This sacred item is traditionally known to bring this energy into your life when used with devotion.</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};

export default ProductDetail;
