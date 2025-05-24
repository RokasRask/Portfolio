import React from 'react';
import { getText } from '../../Utils/i18n';
import './Footer.scss';

const Footer = ({ language }) => {
  // Get current year
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rokas-raskevicius/',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/rokasrask',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:rokas.raskevic@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ];

  // Quick links
  const quickLinks = [
    { name: getText(language, 'about'), url: '#about' },
    { name: getText(language, 'skills'), url: '#skills' },
    { name: getText(language, 'projects'), url: '#projects' },
    { name: getText(language, 'contact'), url: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__logo">
            <h3 className="footer__name">Rokas Raškevičius</h3>
            <p className="footer__tagline">
              {language === 'lt' 
                ? 'Full-Stack Kūrėjas' 
                : 'Full-Stack Developer'}
            </p>
          </div>
          
          <div className="footer__links">
            <div className="footer__quick-links">
              <h4 className="footer__heading">
                {language === 'lt' ? 'Rekomendacijos' : 'Recommendations'}
              </h4>
              <p className="footer__recommendation">
                {language === 'lt' 
                  ? 'Turiu profesionalias rekomendacijas savo LinkedIn profilyje.'
                  : 'I have professional recommendations on my LinkedIn profile.'}
              </p>
              <a 
                href="https://www.linkedin.com/in/rokas-raskevicius/details/recommendations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer__recommendation-link"
              >
                {language === 'lt' ? 'Peržiūrėti rekomendacijas' : 'View recommendations'}
              </a>
            </div>
            
            <div className="footer__social-links">
              <h4 className="footer__heading">
                {language === 'lt' ? 'Sekite Mane' : 'Follow Me'}
              </h4>
              <ul className="footer__social-list">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="footer__social-link"
                      aria-label={link.name}
                    >
                      {link.icon}
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Rokas Raškevičius. 
            {language === 'lt' 
              ? ' Visos teisės saugomos.' 
              : ' All rights reserved.'}
          </p>
          
          <p className="footer__disclaimer">
            {language === 'lt'
              ? 'Sukurta su React ir SCSS'
              : 'Built with React and SCSS'}
          </p>
        </div>
      </div>
      
      <button 
        className="footer__scroll-top" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={language === 'lt' ? 'Grįžti į viršų' : 'Back to top'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </button>
    </footer>
  );
};

export default Footer;