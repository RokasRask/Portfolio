import React from 'react';
import { getText } from '../../Utils/i18n';
import './Skills.scss';

const Skills = ({ language }) => {
  // Define skills with proficiency percentages
  const technicalSkills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS/SCSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Git', level: 65 },
    { name: 'Responsive Design', level: 85 },
  ];

  const softSkills = [
    { name: language === 'lt' ? 'Komunikacija' : 'Communication', level: 90 },
    { name: language === 'lt' ? 'Problemų sprendimas' : 'Problem Solving', level: 85 },
    { name: language === 'lt' ? 'Komandinis darbas' : 'Teamwork', level: 90 },
    { name: language === 'lt' ? 'Adaptabilumas' : 'Adaptability', level: 80 },
    { name: language === 'lt' ? 'Laiko valdymas' : 'Time Management', level: 75 },
  ];

  // Tools and technologies I'm familiar with
  const tools = [
    'VS Code',
    'GitHub',
    'npm',
    'Webpack',
    'Bootstrap',
    'Figma',
    'Photoshop',
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'skillsTitle')}
        </h2>
        
        <p className="skills__intro animate-on-scroll">
          {getText(language, 'skillsIntro')}
        </p>
        
        <div className="skills__content">
          <div className="skills__column animate-on-scroll">
            <h3 className="skills__subtitle">
              {language === 'lt' ? 'Techniniai įgūdžiai' : 'Technical Skills'}
            </h3>
            
            <div className="skills__list">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div 
                      className="skill-item__progress" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills__column animate-on-scroll">
            <h3 className="skills__subtitle">
              {language === 'lt' ? 'Asmeniniai įgūdžiai' : 'Soft Skills'}
            </h3>
            
            <div className="skills__list">
              {softSkills.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div 
                      className="skill-item__progress skill-item__progress--soft" 
                      style={{ width: `${skill.level}%` }}
                      data-level={skill.level}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="skills__tools animate-on-scroll">
          <h3 className="skills__subtitle">
            {language === 'lt' ? 'Įrankiai ir technologijos' : 'Tools & Technologies'}
          </h3>
          
          <div className="skills__tools-grid">
            {tools.map((tool, index) => (
              <div className="skills__tool-item" key={index}>
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;