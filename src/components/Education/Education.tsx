import React from 'react';
import { education } from '../../data/education';
import './Education.css';

const Education: React.FC = () => {
  return (
    <section id="education" className="education-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">04</span>
            Education
          </h2>
          <p className="section-subtitle">My academic journey</p>
        </div>
        <div className="education-timeline">
          <div className="education-timeline-line"></div>
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-date">
                <span className="education-date-range">{edu.dateRange}</span>
              </div>
              <div className="education-content">
                <div className="education-info">
                  <div className="education-icon">
                    {edu.icon}
                  </div>
                  <div>
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                  </div>
                </div>
                {edu.description && (
                  <p className="education-description">{edu.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;