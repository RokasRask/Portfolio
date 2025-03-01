import React, { useState } from 'react';
import './app.css';
import Header from './Components/Header';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { languages } from './Components/Data/languages';

function App() {

  const toggleLanguage = (lang) => {
    localStorage.setItem('language', lang);
    setLanguage(lang);
  };
  
  
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'lt');

  return (
    <div>
      <Header language={language} toggleLanguage={toggleLanguage} />
      <About language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;