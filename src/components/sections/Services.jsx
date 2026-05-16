import React from 'react';
import { Sparkles, Compass, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn, StaggerContainer, StaggerItem } from '../ui/MotionWrappers';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 'jyotish',
      icon: <Sparkles size={28} />,
      title: 'Jyotish Reading',
      desc: 'In-depth birth chart analysis for clarity on career, relationships, and life path.',
      price: '₹500'
    },
    {
      id: 'vastu',
      icon: <Compass size={28} />,
      title: 'Vastu Consultation',
      desc: 'Harmonize your living or workspace with ancient architectural principles.',
      price: '₹1,000'
    },
    {
      id: 'puja',
      icon: <Flame size={28} />,
      title: 'Online Puja',
      desc: 'Personalized rituals performed by seasoned pandits, streamed live for you.',
      price: 'Custom'
    }
  ];

  return (
    <section className="services-section section bg-maroon">
      <div className="container">
        <FadeIn>
          <div className="services-header">
            <h2 className="services-title">
              Seek Divine Guidance
            </h2>
            <p className="services-subtitle">
              Connect with our expert astrologers and spiritual guides for Jyotish readings, Vastu consultations, and personalized Online Pujas.
            </p>
          </div>
        </FadeIn>
        
        <StaggerContainer staggerDelay={0.15}>
          <div className="services-grid">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className="service-card bg-texture">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-card-desc">{service.desc}</p>
                  
                  <div className="service-card-footer">
                    <span className="service-price">{service.price}</span>
                    <Link to="/consultation" className="service-book-link">
                      Book Now <span>→</span>
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Services;
