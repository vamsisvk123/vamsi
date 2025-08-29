import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2024 Vamsikrishna. Crafted with passion and code.</p>
          <div className="footer-links">
            <a href="mailto:vamsiswarna74@gmail.com">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/vamsi-krishna-9715b115a/" target="_blank">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/vamsisvk123" target="_blank">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;