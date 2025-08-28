import React from 'react';
import { ExternalLink, Download } from 'lucide-react';
import './Hero.css';

interface HeroProps {
  isLoaded: boolean;
  onScrollToSection: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ isLoaded, onScrollToSection }) => {
  return (
    <section id="hero" className={`hero ${isLoaded ? 'loaded' : ''}`}>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line" style={{ color: 'white' }}>
            Hi, I'm
          </span>
          <span className="title-line gradient-text">Vamsikrishna</span>
        </h1>
        <p className="hero-subtitle">
          <span className="typing-text">Software Developer</span>
        </p>
        <p className="hero-description">
          Crafting digital experiences with modern technologies and creative
          solutions
        </p>
        <div className="hero-buttons">
          <button
            className="cta-button primary"
            onClick={() => onScrollToSection('contact')}
          >
            <span>Let's Connect</span>
            <ExternalLink size={18} />
          </button>
          <button
            className="cta-button secondary"
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/vamsi/Vamsi_Krishna_Resume.pdf';
              link.download = 'Vamsi_Krishna_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <span>Download Resume</span>
            <Download size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
