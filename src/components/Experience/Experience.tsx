import React from 'react';
import { experiences } from '../../data/experience';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">03</span>
            Experience
          </h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        <div className="experience-timeline">
          <div className="timeline-line"></div>
          {experiences.map((experience, index) => (
            <div key={index} className="experience-item">
              <div className="experience-date">
                <span className="date-range">{experience.dateRange}</span>
                <span className="date-present">{experience.present}</span>
              </div>
              <div className="experience-content">
                <div className="company-info">
                  <div className={`company-icon ${experience.iconClass || ''}`}>
                    {experience.icon}
                  </div>
                  <div>
                    <h3 className="company-name">{experience.companyName}</h3>
                    <p className="job-title">{experience.jobTitle}</p>
                  </div>
                </div>
                <p className="job-description">{experience.description}</p>
                <div className="job-tags">
                  {experience.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;