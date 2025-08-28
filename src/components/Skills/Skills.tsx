import React from 'react';
import { skills } from '../../data/skills';
import './Skills.css';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: skills.filter(skill => 
        ['React.js', 'Angular', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Next.js', 'jQuery', 'Bootstrap'].includes(skill.name)
      )
    },
    {
      title: 'Backend',
      skills: skills.filter(skill => 
        ['Node.js', 'Express.js', 'Strapi', 'Java', 'REST API'].includes(skill.name)
      )
    },
    {
      title: 'Mobile & Desktop',
      skills: skills.filter(skill => 
        ['Ionic', 'Electron.js'].includes(skill.name)
      )
    },
    {
      title: 'Database',
      skills: skills.filter(skill => 
        ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle'].includes(skill.name)
      )
    },
    {
      title: 'Cloud & DevOps',
      skills: skills.filter(skill => 
        ['AWS', 'Azure', 'Docker', 'Kubernetes'].includes(skill.name)
      )
    },
    {
      title: 'Tools, Testing & Others',
      skills: skills.filter(skill => 
        ['Jest', 'Git', 'Bitbucket', 'Linux', 'Figma', 'WinSCP', 'Putty', 'Splunk', 'Oracle WCS'].includes(skill.name)
      )
    }
  ];
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-number">02</span>
            Skills & Technologies
          </h2>
          <p className="section-subtitle">Technologies I love working with</p>
        </div>
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-card"
                    style={{ animationDelay: `${(categoryIndex * 2 + index) * 0.1}s` }}
                  >
                    <div
                      className="skill-icon"
                      style={{ backgroundColor: skill.color }}
                    >
                      {typeof skill.icon === 'string' ? (
                        <span className="skill-icon-text">{skill.icon}</span>
                      ) : (
                        skill.icon
                      )}
                    </div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;