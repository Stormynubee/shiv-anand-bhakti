import React from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ShoppingCart } from 'lucide-react';
import Button from '../components/ui/Button';
import PageTransition from '../components/layout/PageTransition';
import './Cart.css';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const handleCheckoutViaWhatsApp = () => {
    if (cartItems.length === 0) return;
    let message = "Hari Om Panditji!%0A%0AI would like to place an order from your website:%0A%0A";
    cartItems.forEach((item, index) => {
      message += `*${index + 1}.* ${item.name}%0AQty: ${item.quantity} | Price: ₹${item.price * item.quantity}%0A%0A`;
    });
    message += `*Total Amount: ₹${getCartTotal()}*%0A%0A`;
    message += "Please share the payment details (UPI/Account) and let me know the shipping process.";
    window.open(`https://wa.me/917978887477?text=${message}`, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <PageTransition>
        <div className="page-wrapper bg-neutral">
          <div className="container cart-empty-wrapper">
            <ShoppingBag size={64} className="cart-empty-icon" />
            <h1 className="cart-empty-title">Your Cart is Empty</h1>
            <p className="cart-empty-text">Looks like you haven't added any sacred items to your cart yet.</p>
            <Link to="/shop">
              <Button size="lg">Explore The Sacred Collection</Button>
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="page-wrapper bg-neutral">
        <div className="container">
          <h1 className="cart-page-title">Your Sacred Cart</h1>
          
          <div className="cart-layout">
            {/* Cart Items List */}
            <div className="cart-items-section">
              <div className="cart-table-card">
                <div className="cart-table-header">
                  <div className="cart-th-product">Product</div>
                  <div className="cart-th">Price</div>
                  <div className="cart-th">Quantity</div>
                  <div className="cart-th-right">Total</div>
                </div>
                
                <ul className="cart-items-list">
                  {cartItems.map((item) => (
                    <li key={item.id} className="cart-row">
                      <div className="cart-row-product">
                        <div className="cart-row-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                          <Link to={`/shop/${item.id}`} className="cart-row-name">{item.name}</Link>
                          <p className="cart-row-category">{item.category.replace('-', ' ')}</p>
                          <div className="cart-row-mobile-price">₹{item.price}</div>
                        </div>
                      </div>
                      
                      <div className="cart-row-price">₹{item.price}</div>
                      
                      <div className="cart-row-qty-wrapper">
                        <div className="cart-row-qty">
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>
                            <Minus size={14} />
                          </button>
                          <span>{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus size={14} />
                          </button>
                        </div>
                        <button className="cart-row-remove-mobile" onClick={() => removeFromCart(item.id)}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                      
                      <div className="cart-row-total">
                        <span>₹{item.price * item.quantity}</span>
                        <button className="cart-row-remove" onClick={() => removeFromCart(item.id)} title="Remove item">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="cart-bottom-actions">
                <Link to="/shop" className="cart-continue-link">
                  <span>←</span> Continue Shopping
                </Link>
                <button onClick={clearCart} className="cart-clear-btn">Clear Cart</button>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="cart-summary-col">
              <div className="cart-summary-card">
                <h3 className="cart-summary-title">
                  <ShoppingCart size={18} /> Order Summary
                </h3>
                
                <div className="cart-summary-rows">
                  <div className="cart-summary-row">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>₹{getCartTotal()}</span>
                  </div>
                  <div className="cart-summary-row">
                    <span>Shipping</span>
                    <span className="cart-shipping-note">Calculated on WhatsApp</span>
                  </div>
                </div>
                
                <div className="cart-summary-total-row">
                  <span className="cart-summary-total-label">Estimated Total</span>
                  <span className="cart-summary-total-value">₹{getCartTotal()}</span>
                </div>
                
                <Button className="w-full" size="lg" onClick={handleCheckoutViaWhatsApp}>
                  Proceed to Checkout
                </Button>
                
                <div className="cart-whatsapp-info">
                  <div className="cart-whatsapp-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h4 className="cart-whatsapp-heading">WhatsApp Checkout</h4>
                    <p className="cart-whatsapp-text">Your order details will be sent directly to Panditji's WhatsApp for personalized processing and secure payment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </PageTransition>
  );
};

export default Cart;
