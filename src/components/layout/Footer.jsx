import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Youtube, Instagram, Facebook } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <h2 className="footer-logo">शिव आनंद भक्ति</h2>
            <p className="footer-desc">
              Authentic Jyotish, Vastu consultation, and sacred puja samagri blessed by Pandit Shiwanand Tiwari.
            </p>
            <div className="social-links">
              <a href="https://www.youtube.com/@Gurudevpt.Shiwanandji" target="_blank" rel="noreferrer" className="social-icon">
                <Youtube size={18} />
              </a>
              <a href="#" className="social-icon">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-icon">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h3 className="footer-section-title">Quick Links</h3>
            <ul>
              <li><Link to="/about">About Panditji</Link></li>
              <li><Link to="/shop">Sacred Shop</Link></li>
              <li><Link to="/consultation">Book Consultation</Link></li>
              <li><Link to="/cart">Cart</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h3 className="footer-section-title">Contact Us</h3>
            <ul className="contact-info">
              <li>
                <MapPin size={16} />
                <span>Kalahandi, Odisha, India</span>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+917978887477">+91 79788 87477</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:priyanktiwari434@gmail.com">Contact via email</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Shiv Anand Bhakti. Created by <a href="https://acezen.in" className="footer-credit">AceZen</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
