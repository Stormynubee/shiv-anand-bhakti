import React from 'react';
import { Youtube } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './YouTubeFeed.css';

const YouTubeFeed = () => {
  const revealRef = useScrollReveal();

  const videos = [
    {
      id: 'video-1',
      title: 'चन्द्र ग्रहण 3 मार्च 2026 संपूर्ण जानकारी तथा आपके राशि पर पड़ने वाला प्रभाव,उपाय',
      thumbnail: '/images/yt-thumb-1.webp',
      url: 'https://www.youtube.com/watch?v=iVyC2b6XJ3s'
    },
    {
      id: 'video-2',
      title: 'Makar Sankranti 2026: January 14 or 15? Auspicious Time and Zodiac Sign ...',
      thumbnail: '/images/yt-thumb-2.webp',
      url: 'https://www.youtube.com/watch?v=NFMOFp8cpiA'
    },
    {
      id: 'video-3',
      title: 'When is Diwali 2025? 🪔 Auspicious time, Yama Panchak and the secret of ...',
      thumbnail: '/images/yt-thumb-3.webp',
      url: 'https://www.youtube.com/watch?v=tcNTcfqVyQQ'
    }
  ];

  return (
    <section className="section bg-white" ref={revealRef}>
      <div className="container">
        
        <div className="reveal-child yt-header">
          <div>
            <h2 className="yt-title">
              <Youtube className="yt-icon" size={28} />
              Spiritual Wisdom Online
            </h2>
            <p className="yt-subtitle">Watch recent Kathas, Jyotish insights, and live Aarti from our mandir.</p>
          </div>
          <a 
            href="https://www.youtube.com/@Gurudevpt.Shiwanandji" 
            target="_blank" 
            rel="noreferrer"
            className="yt-subscribe-link"
          >
            Subscribe to Channel →
          </a>
        </div>

        <div className="yt-grid">
          {videos.map((video, index) => (
            <a 
              key={video.id} 
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="reveal-child yt-video-card"
              style={{ transitionDelay: `${0.2 + (index * 0.1)}s` }}
            >
              <div className="yt-thumbnail-container">
                <img src={video.thumbnail} alt={video.title} className="yt-thumbnail" />
                <div className="yt-thumbnail-overlay">
                  <div className="yt-play-btn">
                    <svg className="yt-play-icon" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z"></path></svg>
                  </div>
                </div>
              </div>
              <h3 className="yt-video-title">
                {video.title}
              </h3>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default YouTubeFeed;
