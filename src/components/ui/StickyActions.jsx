import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calendar, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './StickyActions.css';

// Pages where the sticky bar should NOT show (would clutter or interfere)
const HIDDEN_PATHS = ['/cart', '/consultation', '/shop'];

const StickyActions = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { pathname } = useLocation();
  const { isCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hide on specific pages or when cart drawer is open
  const shouldHide = HIDDEN_PATHS.includes(pathname) || isCartOpen;

  return (
    <div className={`sticky-actions-container ${isVisible && !shouldHide ? 'visible' : ''}`}>
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
