import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { X, ShoppingBag, Calendar } from 'lucide-react';
import './GuidedTour.css';

/* Tour Step Definitions */
const CONSULTATION_STEPS = [
  {
    id: 'consult-hero',
    targetId: 'hero-consult-btn',
    title: '📅 Book Your Consultation',
    body: 'Start here! Click "Book Consultation" to open your personal booking form with Gurudev Ji.',
    arrow: 'bottom',
    cta: 'Got it, Next',
  },
  {
    id: 'consult-form',
    targetId: 'consult-form-section',
    title: '📝 Fill Your Details',
    body: 'Enter your name, contact number, and select the type of consultation you need (Jyotish, Vastu, or Online Puja).',
    arrow: 'top',
    cta: 'Next',
  },
  {
    id: 'consult-whatsapp',
    targetId: 'consult-submit-btn',
    title: '💬 Instant WhatsApp Connect',
    body: 'Hit Send via WhatsApp — your details go directly to Gurudev Ji. He responds within minutes!',
    arrow: 'top',
    cta: 'Done',
  },
];

const SHOP_STEPS = [
  {
    id: 'shop-hero',
    targetId: 'hero-shop-btn',
    title: '🛕 Explore Sacred Items',
    body: 'Click "Explore Shop" to browse our full collection of authentic, energized spiritual products.',
    arrow: 'bottom',
    cta: 'Got it, Next',
  },
  {
    id: 'shop-product',
    targetId: 'shop-first-product',
    title: '🔎 Browse and Select',
    body: 'Click on any item to see full details, pricing, and its spiritual significance. Add items to your cart.',
    arrow: 'top',
    cta: 'Next',
  },
  {
    id: 'shop-cart',
    targetId: 'cart-whatsapp-btn',
    title: '💬 Order via WhatsApp',
    body: 'Done shopping? Your complete cart is sent to Gurudev Ji for confirmation. Simple and secure!',
    arrow: 'top',
    cta: 'Done',
  },
];

/* Main Component */
const GuidedTour = () => {
  const [activeTour, setActiveTour] = useState(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [spotlightStyle, setSpotlightStyle] = useState({});
  const [showLauncher, setShowLauncher] = useState(false);
  const tooltipRef = useRef(null);

  // Show launcher after 3 seconds if not already seen
  useEffect(() => {
    const alreadySeen = localStorage.getItem('sab_tour_dismissed');
    if (alreadySeen) return;
    const t = setTimeout(() => setShowLauncher(true), 3000);
    return () => clearTimeout(t);
  }, []);

  const steps = activeTour === 'consult' ? CONSULTATION_STEPS : SHOP_STEPS;
  const currentStep = steps[stepIndex];

  const positionTooltip = useCallback(() => {
    if (!currentStep) return;
    const el = document.getElementById(currentStep.targetId);
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const scrollY = window.scrollY;
    const pad = 16;

    window.scrollTo({ top: rect.top + scrollY - 180, behavior: 'smooth' });

    setSpotlightStyle({
      top: rect.top + scrollY - pad,
      left: rect.left - pad,
      width: rect.width + pad * 2,
      height: rect.height + pad * 2,
    });

    if (currentStep.arrow === 'bottom') {
      setTooltipStyle({
        top: rect.top + scrollY + rect.height + pad + 12,
        left: Math.max(16, rect.left + rect.width / 2 - 150),
      });
    } else {
      setTooltipStyle({
        top: rect.top + scrollY - 180 - pad,
        left: Math.max(16, rect.left + rect.width / 2 - 150),
      });
    }
  }, [currentStep]);

  useEffect(() => {
    if (!activeTour || !currentStep) return;
    const timer = setTimeout(positionTooltip, 400);
    window.addEventListener('resize', positionTooltip);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', positionTooltip);
    };
  }, [activeTour, stepIndex, positionTooltip]);

  const startTour = (type) => {
    setActiveTour(type);
    setStepIndex(0);
    setShowLauncher(false);
  };

  const next = () => {
    if (stepIndex < steps.length - 1) {
      setStepIndex(i => i + 1);
    } else {
      endTour();
    }
  };

  const endTour = () => {
    setActiveTour(null);
    setStepIndex(0);
    setSpotlightStyle({});
    setTooltipStyle({});
  };

  const dismiss = () => {
    localStorage.setItem('sab_tour_dismissed', '1');
    setShowLauncher(false);
  };

  return (
    <>
      {/* Launcher Prompt */}
      {showLauncher && (
        <div className="tour-launcher">
          <button className="tour-launcher-close" onClick={dismiss}>
            <X size={14} />
          </button>
          <p className="tour-launcher-title">First time here?</p>
          <p className="tour-launcher-sub">Let us guide you step by step.</p>
          <div className="tour-launcher-btns">
            <button className="tour-launch-btn tour-launch-primary" onClick={() => startTour('consult')}>
              <Calendar size={14} /> Book Consultation
            </button>
            <button className="tour-launch-btn tour-launch-secondary" onClick={() => startTour('shop')}>
              <ShoppingBag size={14} /> Explore Shop
            </button>
          </div>
        </div>
      )}

      {/* Help Button — always visible unless tour is active */}
      {!activeTour && (
        <button
          className={`tour-help-fab ${showLauncher ? 'tour-help-fab--active' : ''}`}
          onClick={() => setShowLauncher(v => !v)}
          title="Need help? Take the tour"
        >
          ?
        </button>
      )}

      {/* Active Tour Overlay */}
      {activeTour && (
        <>
          <div className="tour-backdrop" onClick={endTour} />

          <div
            className="tour-spotlight"
            style={spotlightStyle}
          />

          {currentStep && (
            <div
              ref={tooltipRef}
              className={`tour-tooltip tour-arrow-${currentStep.arrow}`}
              style={tooltipStyle}
            >
              <button className="tour-tooltip-close" onClick={endTour}>
                <X size={14} />
              </button>

              <div className="tour-step-count">
                Step {stepIndex + 1} of {steps.length}
              </div>

              <h3 className="tour-tooltip-title">{currentStep.title}</h3>
              <p className="tour-tooltip-body">{currentStep.body}</p>

              <div className="tour-tooltip-footer">
                <div className="tour-dots">
                  {steps.map((_, i) => (
                    <span key={i} className={`tour-dot ${i === stepIndex ? 'active' : ''}`} />
                  ))}
                </div>
                <button className="tour-next-btn" onClick={next}>
                  {currentStep.cta}
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default GuidedTour;
