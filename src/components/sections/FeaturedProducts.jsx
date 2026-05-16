import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import ProductCard from '../ui/ProductCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  const revealRef = useScrollReveal();
  
  // Show only 4 items on home page
  const featuredProducts = productsData.slice(0, 4);

  return (
    <section className="section bg-cream" ref={revealRef}>
      <div className="container">
        <div className="reveal-child featured-header">
          <h2 className="featured-title">
            Curated Puja Samagri & Gems
          </h2>
          <p className="featured-subtitle">
            Authentic, energized spiritual items carefully selected for your daily practices and divine connection.
          </p>
        </div>
        
        <div className="featured-grid">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="reveal-child" style={{ transitionDelay: `${0.2 + (index * 0.1)}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        
        <div className="reveal-child featured-cta">
          <Link to="/shop" className="featured-link">
            <span>View Full Collection</span>
            <span className="featured-link-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
