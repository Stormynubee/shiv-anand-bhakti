import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppFAB.css';

const WhatsAppFAB = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/917978887477?text=Hari%20Om%20Panditji,%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more.', '_blank');
  };

  return (
    <button 
      className="whatsapp-fab" 
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="fab-tooltip">Chat with Panditji</span>
    </button>
  );
};

export default WhatsAppFAB;
