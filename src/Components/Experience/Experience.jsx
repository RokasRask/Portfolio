import React from 'react';
import { getText } from '../../Utils/i18n';
import './Experience.scss';

const Experience = ({ language }) => {
  // You can add more experience entries as needed
  const experiences = [
    {
      title: getText(language, 'jobTitle'),
      company: getText(language, 'jobCompany'),
      period: getText(language, 'jobPeriod'),
      description: getText(language, 'jobDescription'),
      responsibilities: [
        language === 'lt' 
          ? 'Kompiuterių aparatinės ir programinės įrangos gedimų nustatymas ir taisymas'
          : 'Diagnosis and repair of computer hardware and software issues',
        language === 'lt' 
          ? 'Techninė pagalba klientams'
          : 'Technical support to customers',
        language === 'lt' 
          ? 'Operacinių sistemų diegimas ir konfigūravimas'
          : 'Operating system installation and configuration',
        language === 'lt' 
          ? 'Kompiuterių priežiūra ir aptarnavimas'
          : 'Computer maintenance and service',
      ]
    },
    // Add more experience entries as needed
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'experienceTitle')}
        </h2>
        
        <p className="experience__intro animate-on-scroll">
          {getText(language, 'experienceIntro')}
        </p>
        
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div className="experience__item animate-on-scroll" key={index}>
              <div className="experience__period">
                <span>{exp.period}</span>
              </div>
              
              <div className="experience__content">
                <h3 className="experience__title">{exp.title}</h3>
                <div className="experience__company">{exp.company}</div>
                <p className="experience__description">{exp.description}</p>
                
                <ul className="experience__responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="experience__note animate-on-scroll">
          <h3>
            {language === 'lt' 
              ? 'Ieškau darbo galimybių!' 
              : 'Looking for job opportunities!'}
          </h3>
          <p>
            {language === 'lt'
              ? 'Esu pasiruošęs priimti naujus iššūkius ir tobulėti. Jei ieškote junior full-stack kūrėjo, kuris nori mokytis ir augti, susisiekite su manimi!'
              : "I'm ready to take on new challenges and grow. If you're looking for a junior full-stack developer who is eager to learn and grow, please get in touch!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;