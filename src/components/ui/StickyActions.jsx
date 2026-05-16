import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ShoppingBag } from 'lucide-react';
import './StickyActions.css';

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (roughly 500px)
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to handle initial scroll position
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-actions-container ${isVisible ? 'visible' : ''}`}>
      <div className="sticky-actions-glass">
        <Link to="/consultation" className="sticky-btn sticky-btn-primary">
          <Calendar size={16} />
          <span>Consultation</span>
        </Link>
        <div className="sticky-divider"></div>
        <Link to="/shop" className="sticky-btn sticky-btn-outline">
          <ShoppingBag size={16} />
          <span>Shop Items</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyActions;
