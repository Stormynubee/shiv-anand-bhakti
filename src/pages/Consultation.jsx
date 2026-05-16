import React, { useState } from 'react';
import Button from '../components/ui/Button';
import PageTransition from '../components/layout/PageTransition';
import './Consultation.css';

const Consultation = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'jyotish',
    dateText: '',
    timeText: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e) => {
    e.preventDefault();
    
    const serviceName = formData.service === 'jyotish' ? 'Jyotish Reading' : 
                        formData.service === 'vastu' ? 'Vastu Consultation' : 'Online Puja';
                        
    const message = `Hari Om Panditji!%0A%0AI would like to book a consultation.%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Service:* ${serviceName}%0A*Preferred Date:* ${formData.dateText}%0A*Preferred Time:* ${formData.timeText}%0A%0A*Message/Details:* ${formData.message}%0A%0APlease let me know the available slots.`;
    
    window.open(`https://wa.me/917978887477?text=${message}`, '_blank');
  };

  return (
    <PageTransition>
      <div className="page-wrapper bg-neutral consult-page">
        <div className="consult-bg-1"></div>
        <div className="consult-bg-2"></div>

        <div className="container consult-container">
          
          <div className="consult-header">
            <span className="consult-label">Personal Guidance</span>
            <h1 className="consult-title">Seek Divine Guidance</h1>
            <p className="consult-intro">
              Connect with Pt. Shiwanand Tiwari for expert Jyotish readings, Vastu consultations, and personalized Online Pujas. Your path to clarity awaits.
            </p>
            <div className="consult-secure-badge">
              <span className="consult-dot"></span>
              Secure & Confidential
            </div>
          </div>

          <div className="consult-layout">
            
            {/* Left: Services Info */}
            <div className="consult-services">
              <h3 className="consult-services-title">Our Services</h3>

              {/* Gurudev photo card */}
              <div className="consult-gurudev-card">
                <img src="/images/gurudev-consultation.jpg" alt="Gurudev Pt. Shiwanand Ji at his consultation desk" className="consult-gurudev-img" />
                <div className="consult-gurudev-caption">
                  <span className="consult-gurudev-name">Gurudev Pt. Shiwanand Ji</span>
                  <span className="consult-gurudev-role">Vedic Astrologer & Vastu Expert</span>
                </div>
              </div>

              
              <div className="consult-service-card border-l-saffron">
                <h4 className="consult-service-name">Jyotish Reading</h4>
                <p className="consult-service-desc">In-depth birth chart analysis. We predict and offer remedies for career, marriage, health, and wealth.</p>
                <div className="consult-service-meta">
                  <span className="consult-service-duration">Duration: 45 Min</span>
                  <span className="consult-service-price">₹500</span>
                </div>
              </div>
              
              <div className="consult-service-card border-l-gold">
                <h4 className="consult-service-name">Vastu Consultation</h4>
                <p className="consult-service-desc">Harmonize your home or business place with ancient directional sciences to invite success and peace.</p>
                <div className="consult-service-meta">
                  <span className="consult-service-duration">Duration: 45 Min</span>
                  <span className="consult-service-price">₹1,000</span>
                </div>
              </div>
              
              <div className="consult-service-card border-l-maroon">
                <h4 className="consult-service-name">Online Puja & Anushthan</h4>
                <p className="consult-service-desc">Personalized rituals performed by seasoned pandits on your behalf, with live video streaming.</p>
                <div className="consult-service-meta">
                  <span className="consult-service-duration">Duration: Custom</span>
                  <span className="consult-service-price">Inquire</span>
                </div>
              </div>
            </div>

            {/* Right: Booking Form */}
            <div className="consult-form-wrapper">
              <div className="consult-form-card">
                <h3 className="consult-form-title">Schedule Your Session</h3>
                
                <form onSubmit={handleBooking} className="consult-form">
                  
                  {/* Service Selection */}
                  <div className="form-group">
                    <label className="form-label">Select Service</label>
                    <div className="consult-radio-group">
                      {['jyotish', 'vastu', 'puja'].map((type) => (
                        <label 
                          key={type}
                          className={`consult-radio-label ${formData.service === type ? 'active' : ''}`}
                        >
                          <input 
                            type="radio" 
                            name="service" 
                            value={type} 
                            checked={formData.service === type} 
                            onChange={handleChange}
                            className="consult-radio-input"
                          />
                          {type === 'jyotish' ? 'Jyotish' : type === 'vastu' ? 'Vastu' : 'Online Puja'}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="consult-form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">WhatsApp Number *</label>
                      <input 
                        type="tel" 
                        name="phone" 
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91..."
                        className="form-input"
                      />
                    </div>
                  </div>

                  {formData.service === 'jyotish' && (
                    <div className="consult-birth-notice">
                      <p className="consult-notice-title">
                        <span className="consult-notice-icon">ℹ</span> Birth Details Required
                      </p>
                      <p className="consult-notice-text">Please provide your Date, Time, and Place of birth in the message box below for accurate Kundali generation.</p>
                    </div>
                  )}

                  <div className="consult-form-row">
                    <div className="form-group">
                      <label className="form-label">Preferred Date</label>
                      <input 
                        type="text" 
                        name="dateText" 
                        value={formData.dateText}
                        onChange={handleChange}
                        placeholder="e.g. Next Monday"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Preferred Time</label>
                      <input 
                        type="text" 
                        name="timeText" 
                        value={formData.timeText}
                        onChange={handleChange}
                        placeholder="e.g. Morning / Evening"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message / Details *</label>
                    <textarea 
                      name="message" 
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={formData.service === 'jyotish' ? "E.g. DOB: 05 Oct 2008, Time: 10:30 AM, Place: Odisha..." : "Tell us what you need guidance for..."}
                      rows="4"
                      className="form-input"
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Request Booking via WhatsApp
                  </Button>
                  <p className="consult-form-note">
                    Panditji's team will contact you on WhatsApp to confirm the slot and payment.
                  </p>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Consultation;
