import React from 'react';
import PageTransition from '../components/layout/PageTransition';
import './About.css';

const About = () => {
  return (
    <PageTransition>
      <div className="page-wrapper bg-neutral">
        <div className="container">
          
          <div className="about-wrapper">
            <div className="about-header">
              <span className="about-label">Our Lineage</span>
              <h1 className="about-title">About Gurudev</h1>
              <p className="about-intro">
                Discover the story of Pt. Shiwanand Tiwari, a revered Vedic scholar dedicated to the service of Sanatana Dharma.
              </p>
            </div>
            
            <div className="about-hero-card">
              <img src="/images/gurudev-with-mata.jpg" alt="Gurudev Pt. Shiwanand Ji with Mata Rani" className="about-hero-image" />
              
              <div className="about-hero-content">
                <h2 className="about-section-heading">A Life Dedicated to Dharma</h2>
                <div className="about-prose">
                  <p>
                    Born into a family of esteemed Vedic scholars, Pt. Shiwanand Tiwari's journey began at a young age. Immersed in the rich traditions of Sanatana Dharma, he spent years mastering the intricate doctrines of Jyotish (Astrology), Vastu Shastra, and Karmakanda (Vedic Rituals) under the guidance of revered gurus.
                  </p>
                  <p>
                    With over 22 years of austere practice and continuous study, he has developed a profound understanding of how ancient Vedic principles apply to the complexities of modern life. His approach is not merely academic but deeply intuitive, combining scriptural knowledge with experiential wisdom.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="about-cards-grid">
              <div className="about-card">
                <h3 className="about-card-title">Expertise</h3>
                <ul className="about-expertise-list">
                  <li>
                    <span className="about-bullet">•</span>
                    <span><strong>Vedic Astrology (Jyotish):</strong> Precision birth chart analysis and effective remedies using gems and yantras.</span>
                  </li>
                  <li>
                    <span className="about-bullet">•</span>
                    <span><strong>Vastu Shastra:</strong> Harmonizing residential and commercial spaces for health, wealth, and prosperity.</span>
                  </li>
                  <li>
                    <span className="about-bullet">•</span>
                    <span><strong>Karmakanda & Anushthan:</strong> Authentically performing traditional Pujas, Havans, and large-scale religious ceremonies.</span>
                  </li>
                  <li>
                    <span className="about-bullet">•</span>
                    <span><strong>Spiritual Discourse (Katha):</strong> Engaging narrator of Shrimad Bhaagwat, Shiva Puran, and Devi Bhaagwat.</span>
                  </li>
                </ul>
              </div>
              
              <div className="about-card">
                <h3 className="about-card-title">Mission</h3>
                <p className="about-mission-text">
                  Panditji's mission is to make the profound wisdom of Sanatana Dharma accessible to all, providing authentic guidance that alleviates suffering and fosters spiritual growth.
                </p>
                <div className="about-quote-block">
                   <p className="about-quote">
                     "True astrology is not about instilling fear, but awakening awareness and guiding the soul towards its highest potential."
                   </p>
                   <p className="about-quote-attribution">— Pt. Shiwanand Tiwari</p>
                </div>
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="about-gallery">
              <h2 className="about-gallery-title">Moments of Devotion</h2>
              <div className="about-gallery-grid">
                <div className="about-gallery-item about-gallery-tall">
                  <img src="/images/gurudev-chanting.jpg" alt="Gurudev chanting mantras at night puja" />
                  <div className="about-gallery-caption">Nightly Puja & Mantra Chanting</div>
                </div>
                <div className="about-gallery-item">
                  <img src="/images/mandir-interior.jpg" alt="Sri Devi Mandir interior" />
                  <div className="about-gallery-caption">Our Sacred Mandir</div>
                </div>
                <div className="about-gallery-item">
                  <img src="/images/gurudev-astro.jpg" alt="Gurudev at astrology desk" />
                  <div className="about-gallery-caption">Jyotish Consultations Daily</div>
                </div>
                <div className="about-gallery-item">
                  <img src="/images/shishya-together.jpg" alt="Gurudev with shishyas performing puja" />
                  <div className="about-gallery-caption">Parampara — The Living Lineage</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
