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
            <a href="mailto:vamsikrishna@example.com">
              <Mail size={18} />
            </a>
            <a href="https://linkedin.com/in/vamsikrishna">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/vamsikrishna">
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;