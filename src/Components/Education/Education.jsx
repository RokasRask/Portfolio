import React from 'react';
import { getText } from '../../Utils/i18n';
import './Education.scss';

const Education = ({ language }) => {
  // Add education history
  const educationHistory = [
    {
      degree: getText(language, 'educationDegree'),
      institution: getText(language, 'educationInstitution'),
      period: getText(language, 'educationPeriod'),
      description: getText(language, 'educationDescription'),
      diplomaLink: "/assets/diploma/rokas-raskevicius-diploma.pdf",
      skills: [
        language === 'lt' ? 'Programavimas' : 'Programming',
        language === 'lt' ? 'Duomenų bazių valdymas' : 'Database Management',
        language === 'lt' ? 'Tinklų administravimas' : 'Network Administration',
        language === 'lt' ? 'Kibernetinis saugumas' : 'Cybersecurity',
        language === 'lt' ? 'Sistemų analizė' : 'Systems Analysis',
      ]
    },
    // Add more education entries as needed
  ];

  // Add courses and certificates
  const certificates = [
    {
      title: 'Web Development Course',
      organization: 'Baltic Institute of Technology (BIT)',
      year: '2024-2025',
      period: '2024-09-30 — 2025-03-07',
      link: 'https://bit.lt'
    }
    // Add more certificates as needed
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'educationTitle')}
        </h2>
        
        <div className="education__grid">
          <div className="education__main animate-on-scroll">
            <h3 className="education__subtitle">
              {language === 'lt' ? 'Akademinis išsilavinimas' : 'Academic Education'}
            </h3>
            
            {educationHistory.map((edu, index) => (
              <div className="education__item" key={index}>
                <div className="education__header">
                  <h4 className="education__degree">{edu.degree}</h4>
                  <div className="education__period">{edu.period}</div>
                </div>
                
                <div className="education__institution">{edu.institution}</div>
                <p className="education__description">{edu.description}</p>
                
                
                
                <div className="education__skills">
                  <h5 className="education__skills-title">
                    {language === 'lt' ? 'Įgyti įgūdžiai:' : 'Skills Acquired:'}
                  </h5>
                  <div className="education__skills-list">
                    {edu.skills.map((skill, idx) => (
                      <span className="education__skill-tag" key={idx}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="education__certificates animate-on-scroll">
            <h3 className="education__subtitle">
              {language === 'lt' ? 'Kursai ir sertifikatai' : 'Courses & Certificates'}
            </h3>
            
            <div className="education__certificates-list">
              {certificates.map((cert, index) => (
                <div className="education__certificate" key={index}>
                  <h4 className="education__certificate-title">{cert.title}</h4>
                  <div className="education__certificate-info">
                    <span className="education__certificate-org">{cert.organization}</span>
                    <span className="education__certificate-year">{cert.year}</span>
                  </div>
                  {cert.period && (
                    <div className="education__certificate-period">
                      {cert.period}
                    </div>
                  )}
                  <a href={cert.link} className="education__certificate-link" target="_blank" rel="noopener noreferrer">
                    {language === 'lt' ? 'Peržiūrėti' : 'View'}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="education__ongoing">
              <h4>
                {language === 'lt' 
                  ? 'Nuolatinis mokymasis' 
                  : 'Continuous Learning'}
              </h4>
              <p>
                {language === 'lt'
                  ? 'Nuolat mokausi ir seku naujausias technologijas, kad galėčiau tobulėti kaip programuotojas.'
                  : 'I am continuously learning and following the latest technologies to improve as a developer.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;