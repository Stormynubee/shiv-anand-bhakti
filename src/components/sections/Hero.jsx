import { Link } from 'react-router-dom';
import { Calendar, ShoppingBag } from 'lucide-react';
import Button from '../ui/Button';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Hero.css';

const Hero = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="hero-section" ref={revealRef}>
      <div className="container hero-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="reveal-child hero-badge-wrapper">
            <span className="hero-badge">
              ✦ Spiritual Heritage
            </span>
          </div>
          
          <h1 className="reveal-child hero-title">
            Sanatana <span className="font-light">Dharma</span><br />
            <span className="text-saffron" style={{ fontStyle: 'italic', fontWeight: 400 }}>ki Seva Mein</span>
          </h1>
          
          <p className="reveal-child hero-subtitle">
            Experience authentic Vedic rituals, personalized consultations, and curated sacred items to elevate your spiritual journey.
          </p>
          
          <div className="reveal-child hero-floating-indicator">
            <span className="indicator-text">✦ Begin Your Journey ✦</span>
            <span className="indicator-arrow">↓</span>
          </div>
          
          <div className="reveal-child hero-actions">
            <Link to="/consultation" className="hero-btn-link" id="hero-consult-btn">
              <Button variant="primary" size="lg" className="attention-pulse">
                <Calendar size={18} style={{ marginRight: '8px' }} />
                Book Consultation
              </Button>
            </Link>
            <Link to="/shop" className="hero-btn-link" id="hero-shop-btn">
              <Button variant="outline" size="lg">
                <ShoppingBag size={18} style={{ marginRight: '8px' }} />
                Explore Shop
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="reveal-child hero-image-wrapper">
          <div className="hero-image-bg"></div>
          <div className="hero-image">
            <img src="/images/hero-pandit.jpg" alt="Gurudev Pt. Shiwanand Ji — Astrologer" />
          </div>
          
          {/* Floating Trust Badge */}
          <div className="hero-floating-badge">
            <div className="hero-badge-inner">
              <div className="hero-badge-icon">
                <span>✓</span>
              </div>
              <div>
                <p className="hero-badge-name">Pt. Shiwanand Tiwari</p>
                <p className="hero-badge-role">Renowned Vedic Scholar & Astrologer</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
