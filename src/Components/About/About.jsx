import React from 'react';
import { getText } from '../../Utils/i18n';
import './About.scss';
import profilePhoto from '../../Assets/Photo.png';

import cvEN from '../../Assets/cv/rokas-raskevicius-cv-en.pdf';
import cvLT from '../../Assets/cv/rokas-raskevicius-cv-lt.pdf';

const About = ({ language }) => {
  const cvFile = language === 'lt' ? cvLT : cvEN;
  
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'aboutMe')}
        </h2>
        
        <div className="about__content">
          <div className="about__photo-container animate-on-scroll">
            <div className="about__photo-wrapper">
              <img 
                src={profilePhoto} 
                alt="Rokas Raškevičius" 
                className="about__photo" 
              />
            </div>
            <div className="about__social">
              <a 
                href="https://www.linkedin.com/in/rokas-raskevicius/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about__social-link"
                aria-label="LinkedIn Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/rokas-raskevicius/details/recommendations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about__badge"
                title={language === 'lt' ? 'Peržiūrėti rekomendacijas' : 'View recommendations'}
              >
                <span className="about__badge-text">
                  {language === 'lt' ? 'Rekomenduojamas' : 'Recommended'}
                </span>
              </a>
              <a 
                href="https://github.com/rokasrask" 
                target="_blank" 
                rel="noopener noreferrer"
                className="about__social-link"
                aria-label="GitHub Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="about__text animate-on-scroll">
            <p className="about__description">
              {language === 'lt' 
                ? 'Sveiki! Aš esu Rokas Raškevičius, entuziastingas programuotojas ir IT specialistas, besimokantis HTML, CSS, JavaScript ir React. Mėgstu kurti projektus ir spręsti problemas. Studijavau Marijampolės kolegijoje Informacines technologijas ir kibernetinę saugą, studijuodamas dirbau kompiuterių taisykloje. Diplomą apsigyniau 2024 m. vasarą, o rudenį pradėjau labiau gilintis į tinklalapių kūrimą fullstack. Šiuo metu ieškau darbo programavimo, IT specialisto ir IT administravimo srityse.'
                : "Hello! I'm Rokas Raškevičius, a passionate developer and IT specialist learning HTML, CSS, JavaScript, and React. I love building projects and solving problems. I studied Information Technologies and Cybersecurity at Marijampolė College. While studying, I worked at a computer repair shop. I defended my diploma in the summer of 2024, and in the fall, I began delving deeper into full-stack web development. Currently, I am seeking a job in the field of programming, IT specialist or IT administration."}
            </p>
            
            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">
                  {language === 'lt' ? 'Miestas:' : 'Location:'}
                </span>
                <span className="about__detail-value">
                  {language === 'lt' ? 'Vilnius, Lietuva' : 'Vilnius, Lithuania'}
                </span>
              </div>
              
              <div className="about__detail-item">
                <span className="about__detail-label">
                  {language === 'lt' ? 'Specializacija:' : 'Specialization:'}
                </span>
                <span className="about__detail-value">
                  {language === 'lt' ? 'Full-Stack Kūrėjas' : 'Full-Stack Developer'}
                </span>
              </div>
              
              <div className="about__detail-item">
                <span className="about__detail-label">
                  {language === 'lt' ? 'El. paštas:' : 'Email:'}
                </span>
                <span className="about__detail-value">
                  <a href="mailto:rokas.raskevic@gmail.com">
                    rokas.raskevic@gmail.com
                  </a>
                </span>
              </div>
              
              <div className="about__detail-item">
                <span className="about__detail-label">
                  {language === 'lt' ? 'Telefonas:' : 'Phone:'}
                </span>
                <span className="about__detail-value">
                  <a href="tel:+37060185553">
                    +370 601 85553
                  </a>
                </span>
              </div>
              
              <div className="about__detail-item">
                <span className="about__detail-label">
                  {language === 'lt' ? 'LinkedIn:' : 'LinkedIn:'}
                </span>
                <span className="about__detail-value">
                  <a 
                    href="https://www.linkedin.com/in/rokas-raškevicius-5b3414317/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Rokas Raškevičius
                  </a>
                </span>
              </div>
            </div>
            
            <div className="about__buttons">
              <a href="#contact" className="btn btn-primary">
                {language === 'lt' ? 'Susisiekti' : 'Contact Me'}
              </a>
              <a 
                href={cvFile} 
                className="btn btn-outline"
                target="_blank" 
                rel="noopener noreferrer"
                download
              >
                {getText(language, 'downloadCV')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;