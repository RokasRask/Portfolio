import React, { useState } from 'react';
import { getText } from '../../Utils/i18n';
import './Projects.scss';

// Import project images
import project1Image from '../../Assets/Sask.PNG';
import project2Image from '../../Assets/valid.PNG';
import project3Image from '../../Assets/green.PNG';
import project4Image from '../../Assets/farm.PNG';
import project5Image from '../../Assets/kolt.PNG';
import project6Image from '../../Assets/tic-tac-toe.PNG';
import placeholderImage from '../../Assets/placeholder.jpg';

const Projects = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Project data with added categories and github links
  const projects = [
    {
      title: language === 'lt' ? 'PVM sąskaita faktūra' : 'VAT invoice',
      description: language === 'lt' 
        ? 'Puslapis, kuris sugeneruoja sąskaitą faktūrą, naudodamas API. Projekto tikslas buvo sukurti funkcionalų sprendimą, kuris leistų vartotojams generuoti sąskaitas faktūras pagal jų pateiktus duomenis.' 
        : 'Page that generates VAT invoice using API. The goal of this project was to create a functional solution that allows users to generate invoices based on their input data.',
      link: "https://rokasrask.github.io/Saskaita_faktura/",
      github: "https://github.com/rokasrask/Saskaita_faktura",
      image: project1Image,
      category: 'api',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API Integration']
    },
    {
      title: language === 'lt' ? 'Prisijungimo forma' : 'Login form',
      description: language === 'lt' 
        ? 'Paprasta prisijungimo forma su validacijomis. Šis projektas buvo sukurtas mokytis formų validacijos naudojant JavaScript.' 
        : 'Simple login form with validation. This project was created to learn form validation using JavaScript.',
      link: "https://rokasrask.github.io/Friday_challenge/",
      github: "https://github.com/rokasrask/Friday_challenge",
      image: project2Image,
      category: 'ui',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Form Validation']
    },
    {
      title: language === 'lt' ? 'Pradinio puslapio dizainas' : 'Landing page design',
      description: language === 'lt' 
        ? 'Pradinis puslapis atliktas su React. Šis projektas buvo sukurtas praktikuoti React komponentų kūrimą ir puslapio išdėstymą.' 
        : 'Landing page created using React. This project was created to practice creating React components and page layout.',
      link: "https://rokasrask.github.io/green_plant_shop/",
      github: "https://github.com/rokasrask/green_plant_shop",
      image: project3Image,
      category: 'react',
      technologies: ['React', 'CSS', 'Responsive Design']
    },
    {
      title: language === 'lt' ? 'Ferma' : 'Farm',
      description: language === 'lt' 
        ? 'Nedidelis projektėlis praktikai su local storage. Šis projektas leidžia vartotojams valdyti virtualią fermą ir išsaugoti jų progresą naudojant naršyklės local storage.' 
        : 'Small project to practice local storage. This project allows users to manage a virtual farm and save their progress using browser local storage.',
      link: "https://rokasrask.github.io/farm/",
      github: "https://github.com/rokasrask/farm",
      image: project4Image,
      category: 'javascript',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Local Storage']
    },
    {
      title: language === 'lt' ? 'CRUD projektėlis' : 'CRUD project',
      description: language === 'lt' 
        ? 'Projektas, kuriame atliekamos CRUD operacijos. Sukurta galimybė pridėti, redaguoti, skaityti ir ištrinti įrašus.' 
        : 'Project where CRUD operations are used. Created the ability to add, edit, read, and delete records.',
      link: "https://rokasrask.github.io/kolt/",
      github: "https://github.com/rokasrask/kolt",
      image: project5Image,
      category: 'crud',
      technologies: ['HTML', 'CSS', 'JavaScript', 'CRUD Operations']
    },
    {
      title: language === 'lt' ? 'Tic-Tac-Toe' : 'Tic-Tac-Toe',
      description: language === 'lt' 
        ? 'Žaidimas "Tic-Tac-Toe" sukurtas naudojant JavaScript' 
        : '"Tic_Tac-Toe game created using JavaScript"',
      link: "https://rokasrask.github.io/tic-tac-toe/",
      github: "https://github.com/rokasrask/tic-tac-toe",
      image: project6Image,
      category: 'crud',
      technologies: ['HTML', 'CSS', 'JavaScript']
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Categories for filter
  const categories = [
    { id: 'all', name: language === 'lt' ? 'Visi' : 'All' },
    { id: 'react', name: 'React' },
    { id: 'javascript', name: 'JavaScript' },
    { id: 'api', name: 'API' },
    { id: 'crud', name: 'CRUD' },
    { id: 'ui', name: 'UI/UX' },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'projectsTitle')}
        </h2>
        
        <div className="projects__filters animate-on-scroll">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`projects__filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="projects__grid">
          {filteredProjects.map((project, index) => (
            <div 
              className="projects__item animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="projects__image-container">
                <img 
                  src={project.image || placeholderImage} 
                  alt={project.title}
                  className="projects__image"
                />
                <div className="projects__overlay">
                  <div className="projects__links">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="projects__link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>{getText(language, 'viewProject')}</span>
                    </a>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="projects__link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>{getText(language, 'viewCode')}</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="projects__content">
                <h3 className="projects__title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__technologies">
                  {project.technologies.map((tech, idx) => (
                    <span className="projects__tech-tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects__more animate-on-scroll">
          <p>
            {language === 'lt'
              ? 'Daugiau projektų rasite mano GitHub profilyje!'
              : 'More projects can be found on my GitHub profile!'}
          </p>
          <a 
            href="https://github.com/rokasrask"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;