import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../ui/Button';
import './Lineage.css';

const Lineage = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="lineage-section section bg-white" ref={revealRef}>
      <div className="container">
        <div className="lineage-grid">
          
          <div className="reveal-child lineage-content">
            <h2 className="lineage-heading">
              The Lineage of Wisdom
            </h2>
            <p className="lineage-text">
              Born into a revered family of Vedic scholars, Pt. Shiwanand Tiwari carries forward a legacy that spans generations. His deep understanding of Sanatana Dharma is not merely learned, but inherited through rigorous parampara (lineage).
            </p>
            <p className="lineage-text">
              With over two decades of experience in Jyotish (Astrology), Vastu, and Karmakanda (Rituals), he offers precise guidance rooted in ancient texts yet applicable to modern challenges.
            </p>
            
            <div className="lineage-stats">
              <div className="lineage-stat">
                <p className="stat-number">20+</p>
                <p className="stat-label">Years Experience</p>
              </div>
              <div className="lineage-stat">
                <p className="stat-number">16K+</p>
                <p className="stat-label">Consultations</p>
              </div>
            </div>
            
            <div className="lineage-cta">
              <Button variant="outline" onClick={() => window.open('https://www.youtube.com/@Gurudevpt.Shiwanandji', '_blank')}>
                Watch on YouTube
              </Button>
            </div>
          </div>
          
          <div className="reveal-child lineage-image-col">
            <div className="lineage-image-card">
              <div className="lineage-image-overlay"></div>
              <img src="/images/gurudev-with-mata.jpg" alt="Gurudev Pt. Shiwanand Ji with Mata Rani" className="lineage-image" />
              <div className="lineage-image-gradient"></div>
              
              <div className="lineage-image-quote">
                <p className="quote-text">
                  "विद्ययाऽमृतमश्नुते"
                </p>
                <p className="quote-translation">Knowledge leads to immortality</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="lineage-decor-circle lineage-decor-1"></div>
            <div className="lineage-decor-circle lineage-decor-2"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Lineage;
