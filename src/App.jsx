import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Consultation from './pages/Consultation';
import About from './pages/About';
import Cart from './pages/Cart';

import { CartProvider } from './context/CartContext';
import WhatsAppFAB from './components/ui/WhatsAppFAB';
import StickyActions from './components/ui/StickyActions';
import GuidedTour from './components/ui/GuidedTour';
import AddToCartToast from './components/ui/AddToCartToast';
import ScrollToTop from './components/ui/ScrollToTop';
import CartDrawer from './components/ui/CartDrawer';
import SplashScreen from './components/ui/SplashScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  return (
    <CartProvider>
      <AnimatePresence mode="wait">
        {isLoading && <SplashScreen key="splash" finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div className="app-container" style={{ display: isLoading ? 'none' : 'block' }}>
        <ScrollToTop />
        <Navbar />
        <CartDrawer />
        
        <main>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/:productId" element={<ProductDetail />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </AnimatePresence>
        </main>
        
        <Footer />
        <WhatsAppFAB />
        <StickyActions />
        <GuidedTour />
        <AddToCartToast />
      </div>
    </CartProvider>
  );
}

export default App;
