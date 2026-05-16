import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../../context/CartContext';
import { ShoppingCart, Check } from 'lucide-react';
import './AddToCartToast.css';

const AddToCartToast = () => {
  const { lastAdded, setIsCartOpen } = useCart();
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!lastAdded) return;

    // Show toast
    setItem(lastAdded);
    setVisible(true);

    // Auto-hide after 3s
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timerRef.current);
  }, [lastAdded]);

  if (!item) return null;

  return (
    <div className={`add-toast ${visible ? 'add-toast--in' : 'add-toast--out'}`}>
      {/* Product thumbnail */}
      <div className="add-toast__img-wrap">
        <img src={item.image} alt={item.name} className="add-toast__img" />
        <span className="add-toast__check">
          <Check size={11} strokeWidth={3} />
        </span>
      </div>

      {/* Text */}
      <div className="add-toast__body">
        <p className="add-toast__label">Added to cart</p>
        <p className="add-toast__name">{item.name}</p>
      </div>

      {/* CTA */}
      <button
        className="add-toast__cta"
        onClick={() => {
          setVisible(false);
          setIsCartOpen(true);
        }}
      >
        <ShoppingCart size={14} />
        View
      </button>
    </div>
  );
};

export default AddToCartToast;
