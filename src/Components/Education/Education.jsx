import React from 'react';
import { getText } from '../../Utils/i18n';
import './Education.scss';

const Education = ({ language }) => {
  // Add education history based on CV
  const educationHistory = [
    {
      degree: language === 'lt' 
        ? 'Profesinis bakalauro laipsnis Informacinių sistemų technologijos ir kibernetinio saugumo srityje' 
        : 'Professional bachelor\'s degree of Information Systems Technology and Cybersecurity',
      institution: language === 'lt' ? 'Marijampolės kolegija' : 'Marijampolės kolegija',
      location: language === 'lt' ? 'Marijampolė' : 'Marijampolė',
      period: '09/2020—05/2024',
      description: language === 'lt'
        ? 'Informacinių sistemų technologija ir kibernetinis saugumas Marijampolės kolegijoje. Studijavau įvairius IT aspektus, įskaitant programavimą, tinklus ir kibernetinį saugumą. Diplomą apsigyniau 2024 m. vasarą.'
        : 'Information Systems Technology and Cybersecurity at Marijampolė College. Studied various aspects of IT including programming, networking, and cybersecurity. Defended my diploma in summer 2024.',
      skills: [
        language === 'lt' ? 'Programavimas' : 'Programming',
        language === 'lt' ? 'Duomenų bazių valdymas' : 'Database Management',
        language === 'lt' ? 'Tinklų administravimas' : 'Network Administration',
        language === 'lt' ? 'Kibernetinis saugumas' : 'Cybersecurity',
        language === 'lt' ? 'Sistemų analizė' : 'Systems Analysis',
      ]
    },
  ];

  // Add courses and certificates based on CV
  const certificates = [
    {
      title: language === 'lt' ? 'Web programuotojo studijos' : 'Web developer studies',
      organization: language === 'lt' ? 'Baltic Institute of Technology' : 'Baltic Institute of Technology',
      location: language === 'lt' ? 'Kaunas' : 'Kaunas',
      year: '2024-2025',
      period: '09/2024—03/2025',
      description: language === 'lt'
        ? 'Studijavau full-stack web kūrimą, HTML, CSS, JavaScript, React.'
        : 'Studied full-stack web development, HTML, CSS, JavaScript, React.',
      link: 'https://bit.lt'
    }
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
                
                <div className="education__institution">{edu.institution}, {edu.location}</div>
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
              {language === 'lt' ? 'Papildomi kursai' : 'Additional Courses'}
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
                  {cert.description && (
                    <p className="education__certificate-description">
                      {cert.description}
                    </p>
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
                  ? 'Nuolat mokausi ir seku naujausias technologijas, kad galėčiau tobulėti kaip programuotojas ir IT specialistas.'
                  : 'I am continuously learning and following the latest technologies to improve as a developer and IT specialist.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;