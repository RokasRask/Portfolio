import React, { useState, useEffect } from 'react';
import './styles/main.scss';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

// Animate on scroll initialization
const checkScroll = () => {
  const elements = document.querySelectorAll('.animate-on-scroll');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementPosition < windowHeight - 100) {
      element.classList.add('is-visible');
    }
  });
};

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'lt');

  const toggleLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
    
    // Add a subtle transition effect when changing language
    document.body.classList.add('language-transition');
    setTimeout(() => {
      document.body.classList.remove('language-transition');
    }, 500);
  };
  
  useEffect(() => {
    // Initial check for elements in viewport
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header language={language} toggleLanguage={toggleLanguage} />
      <main>
        <About language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Experience language={language} />
        <Education language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;