import React from 'react';
import { getText } from '../../Utils/i18n';
import './Experience.scss';

const Experience = ({ language }) => {
  // Darbo patirtis iš CV
  const experiences = [
    {
      title: language === 'lt' ? 'IT technikas' : 'IT technician',
      company: 'UAB "IT HELPAS"',
      location: language === 'lt' ? 'Marijampolė' : 'Marijampolė',
      period: '07/2022—03/2024',
      responsibilities: [
        language === 'lt'
          ? 'Naujų techninių komponentų diegimas ir konfigūravimas (spausdintuvai, skaitytuvai, maršrutizatoriai)'
          : 'Installed and configured new hardware components such as printers, scanners, and routers',
        language === 'lt'
          ? 'Sistemų stebėjimas, problemų identifikavimas ir greitas jų sprendimas'
          : 'Monitored systems, identified issues, and resolved them in a timely manner',
        language === 'lt'
          ? 'Operacinių sistemų, programų ir programinės įrangos diegimas, konfigūravimas ir priežiūra'
          : 'Installed, configured, and maintained operating systems, applications, and software',
        language === 'lt'
          ? 'Stebėjimo sistemų diegimas ir priežiūra'
          : 'Installation and maintenance of security systems',
      ]
    },
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
                <div className="experience__company">{exp.company}, {exp.location}</div>

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
              ? 'Esu pasiruošęs priimti naujus iššūkius ir tobulėti. Jei ieškote full-stack programuotojo, IT specialisto ar IT administratoriaus, kuris nori mokytis ir augti, susisiekite su manimi!'
              : "I'm ready to take on new challenges and grow. If you're looking for a full-stack developer, IT specialist or IT administrator who is eager to learn and grow, please get in touch!"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;