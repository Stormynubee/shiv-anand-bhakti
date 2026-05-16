import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Button from './Button';
import { FadeIn } from './MotionWrappers';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <FadeIn distance={20} duration={0.5}>
      <div className="product-card">
        <Link to={`/shop/${product.id}`} className="product-image-container">
          {product.badge && (
            <span className="product-badge">
              {product.badge}
            </span>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-image" 
            loading="lazy"
          />
          <div className="product-overlay"></div>
        </Link>
        
        <div className="product-info">
          <span className="product-category">
            {product.category.replace('-', ' ')}
          </span>
          <Link to={`/shop/${product.id}`}>
            <h3 className="product-title">
              {product.name}
            </h3>
            <p className="product-hindi-name">
              {product.nameHi}
            </p>
          </Link>
          
          <div className="product-footer">
            <span className="product-price">₹{product.price.toLocaleString('en-IN')}</span>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default ProductCard;
