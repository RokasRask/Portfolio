import React from 'react';
import { getText } from '../../Utils/i18n';
import './Skills.scss';

const Skills = ({ language }) => {
  // Define skills without percentages
  const technicalSkills = [
    'HTML5',
    'JavaScript',
    'HTML & CSS',
    'React',
    'Git',
    'Node.js',
    'SQL',
    'MySQL',
  ];

  const softSkills = [
    language === 'lt' ? 'Problemų sprendimas' : 'Problem Solving',
    language === 'lt' ? 'Komandinis darbas' : 'Teamwork',
    language === 'lt' ? 'Techninė pagalba' : 'Technical Support',
    language === 'lt' ? 'Adaptabilumas' : 'Adaptability',
    language === 'lt' ? 'Komunikacija' : 'Communication',
    language === 'lt' ? 'Kompiuterių taisymas' : 'Computer Repair',
    language === 'lt' ? 'Spaudintuvų taisymas' : 'Printer Repair',
    language === 'lt' ? 'Klientų aptarnavimas' : 'Customer Service',
  ];

  // Tools and technologies I'm familiar with
  const tools = [
    'Visual Studio Code',
    'GitHub',
    'npm',
    'Webpack',
    'Terminal',
    'REST API',
    'JSON',
    'Express.js',
    'Teamviever',
    'AnyDesk',
    'Figma'
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
            
            <div className="skills__fancy-list">
              {technicalSkills.map((skill, index) => (
                <div className="skill-item-fancy" key={index}>
                  <div className="skill-item-fancy__icon">
                    <span className="skill-item-fancy__icon-inner"></span>
                  </div>
                  <div className="skill-item-fancy__content">
                    <span className="skill-item-fancy__name">{skill}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills__column animate-on-scroll">
            <h3 className="skills__subtitle">
              {language === 'lt' ? 'Asmeniniai įgūdžiai' : 'Soft Skills'}
            </h3>
            
            <div className="skills__fancy-list">
              {softSkills.map((skill, index) => (
                <div className="skill-item-fancy skill-item-fancy--soft" key={index}>
                  <div className="skill-item-fancy__icon">
                    <span className="skill-item-fancy__icon-inner"></span>
                  </div>
                  <div className="skill-item-fancy__content">
                    <span className="skill-item-fancy__name">{skill}</span>
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
              <div className="skills__tool-fancy" key={index}>
                <span className="skills__tool-text">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;