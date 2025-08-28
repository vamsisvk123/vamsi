import React from 'react';
import { User, MapPin, Calendar, Award } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">01</span>
            About Me
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              {/* <h3>Hello! I'm Vamsikrishna</h3> */}
              <p>
                I'm a passionate software developer with over 8 years of
                experience creating digital solutions that make a difference. I
                love turning complex problems into simple, beautiful, and
                intuitive designs.
              </p>
              <p>
                My journey in tech started with curiosity and has evolved into a
                career focused on building scalable web applications and
                delivering exceptional user experiences.
              </p>
            </div>
          </div>
          <div className="about-highlights">
            <div className="highlight-item">
              <User className="highlight-icon" />
              <div className="highlight-content">
                <h4>Full Stack Developer</h4>
                <p>
                  Specialized in React, Node.js, and modern web technologies
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <MapPin className="highlight-icon" />
              <div className="highlight-content">
                <h4>Based in USA</h4>
                <p>
                  Available for remote, onsite, hybrid roles - excited to
                  collaborate on impactful projects
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <Calendar className="highlight-icon" />
              <div className="highlight-content">
                <h4>8+ Years Experiene</h4>
                <p>
                  Passionate about building web applications and solving complex
                  problems, with hands-on experience from development to
                  deployment.
                </p>
              </div>
            </div>
            <div className="highlight-item">
              <Award className="highlight-icon" />
              <div className="highlight-content">
                <h4>Quality Focused</h4>
                <p>Committed to writing clean, maintainable code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
