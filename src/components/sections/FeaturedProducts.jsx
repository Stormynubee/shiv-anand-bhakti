import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';
import ProductCard from '../ui/ProductCard';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/MotionWrappers';
import './FeaturedProducts.css';

const FeaturedProducts = () => {
  // Show only 4 items on home page
  const featuredProducts = productsData.slice(0, 4);

  return (
    <section className="section bg-cream">
      <div className="container">
        <FadeIn>
          <div className="featured-header">
            <h2 className="featured-title">
              Sacred Offerings for Your Devotion
            </h2>
            <p className="featured-subtitle">
              Authentic, energized spiritual items carefully selected to deepen your daily practices and divine connection.
            </p>
          </div>
        </FadeIn>
        
        <StaggerContainer staggerDelay={0.15}>
          <div className="featured-grid">
            {featuredProducts.map((product) => (
              <StaggerItem key={product.id}>
                <ProductCard product={product} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
        
        <FadeIn delay={0.4}>
          <div className="featured-cta">
            <Link to="/shop" className="featured-link">
              <span>View Full Collection</span>
              <span className="featured-link-arrow">→</span>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProducts;
