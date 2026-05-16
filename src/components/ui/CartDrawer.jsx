import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleCheckoutViaWhatsApp = () => {
    if (cartItems.length === 0) return;
    let message = "Hari Om Panditji! I would like to order the following items from your website:%0A%0A";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}%0A`;
    });
    message += `%0A*Total Amount: ₹${getCartTotal()}*%0A%0A`;
    message += "Please let me know how to proceed with payment and shipping details.";
    window.open(`https://wa.me/917978887477?text=${message}`, '_blank');
    setIsCartOpen(false);
  };

  const goToCartPage = () => {
    setIsCartOpen(false);
    navigate('/cart');
  };

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2 className="cart-drawer-title">
            <ShoppingBag className="cart-drawer-title-icon" size={18} />
            Sacred Cart
          </h2>
          <button className="cart-close-btn" onClick={() => setIsCartOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="cart-body">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <ShoppingBag size={48} className="empty-cart-icon" />
              <p className="empty-cart-text">Your sacred cart is empty.</p>
              <Button onClick={() => { setIsCartOpen(false); navigate('/shop'); }} variant="primary" size="sm">
                Explore Shop
              </Button>
            </div>
          ) : (
            <ul className="cart-items-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h4 className="cart-item-title">{item.name}</h4>
                    <p className="cart-item-price">₹{item.price}</p>
                    
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                          <Minus size={14} />
                        </button>
                        <span className="qty">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span className="cart-subtotal-value">₹{getCartTotal()}</span>
            </div>
            <div className="cart-drawer-actions">
              <Button onClick={handleCheckoutViaWhatsApp} variant="primary" className="w-full">
                Checkout via WhatsApp
              </Button>
              <Button onClick={goToCartPage} variant="outline" className="w-full" size="sm">
                View Full Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
