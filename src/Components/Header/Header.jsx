import React, { useState, useEffect } from 'react';
import { getText } from '../../Utils/i18n';
import './Header.scss';

const Header = ({ language, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if page is scrolled for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking on a nav link
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__container">
        <div className="header__logo">
          <a href="#home">Rokas Raškevičius</a>
        </div>

        <button 
          className={`header__mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`header__nav ${mobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'about')}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#skills" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'skills')}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#experience" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'experience')}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#education" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'education')}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'projects')}
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link" onClick={handleNavLinkClick}>
                {getText(language, 'contact')}
              </a>
            </li>
          </ul>
        </nav>

        <div className="header__language-switcher">
          <button 
            className={`header__language-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => toggleLanguage('en')}
          >
            EN
          </button>
          <button 
            className={`header__language-btn ${language === 'lt' ? 'active' : ''}`}
            onClick={() => toggleLanguage('lt')}
          >
            LT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;