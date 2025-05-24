export const languages = {
  en: {
    // Header
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    contact: "Contact",
    
    // About section
    aboutMe: "About Me",
    aboutText: "Hello! I'm Rokas Raškevičius, a passionate developer learning HTML, CSS, JavaScript, and React. I love building projects and solving problems. I studied Information Technologies and Cybersecurity at Marijampolė College. While studying, I worked at a computer repair shop. I defended my diploma in the summer of 2024, and in the fall, I began delving deeper into full-stack web development. Currently, I am seeking a job in the field of web development.",
    downloadCV: "Download CV",
    
    // Skills section
    skillsTitle: "My Skills",
    skillsIntro: "Here are the technologies and tools I've been working with:",
    
    // Experience section
    experienceTitle: "Work Experience",
    experienceIntro: "My professional journey so far:",
    jobTitle: "IT technician",
    jobPeriod: "07/2022—03/2024",
    jobCompany: "UAB \"IT HELPAS\"",
    jobDescription: "Installed and configured hardware, monitored systems, and resolved technical issues.",
    
    // Education section
    educationTitle: "Education",
    educationDegree: "Professional bachelor's degree of Information Systems Technology and Cybersecurity",
    educationPeriod: "09/2020—05/2024",
    educationInstitution: "Marijampolės kolegija",
    educationDescription: "Information Systems Technology and Cybersecurity at Marijampolė College. Studied various aspects of IT including programming, networking, and cybersecurity. Defended my diploma in summer 2024.",
    
    // Projects section
    projectsTitle: "Projects",
    viewProject: "View Project",
    viewCode: "View Code",
    
    // Contact section
    contactTitle: "Get In Touch",
    contactText: "Feel free to reach out to me if you have any questions or opportunities:",
    emailMe: "Email Me",
    contactOnLinkedIn: "Connect on LinkedIn",
    formNameLabel: "Your Name",
    formEmailLabel: "Your Email",
    formMessageLabel: "Your Message",
    formSubmitButton: "Send Message",
    
    // Footer
    footerText: "© 2025 Rokas Raškevičius. All rights reserved."
  },
  lt: {
    // Header
    about: "Apie",
    skills: "Įgūdžiai",
    experience: "Patirtis",
    education: "Išsilavinimas",
    projects: "Projektai",
    contact: "Kontaktai",
    
    // About section
    aboutMe: "Apie Mane",
    aboutText: "Sveiki! Aš esu Rokas Raškevičius, entuziastingas programuotojas, besimokantis HTML, CSS, JavaScript ir React. Mėgstu kurti projektus ir spręsti problemas. Studijavau Marijampolės kolegijoje Informacines technologijas ir kibernetinę saugą, studijuodamas dirbau kompiuterių taisykloje. Diplomą apsigyniau 2024 m. vasarą, o rudenį pradėjau labiau gilintis į tinklalapių kūrimą fullstack. Šiuo metu ieškau darbo svetainių kūrimo srityje.",
    downloadCV: "Atsisiųsti CV",
    
    // Skills section
    skillsTitle: "Mano Įgūdžiai",
    skillsIntro: "Technologijos ir įrankiai, su kuriais dirbu:",
    
    // Experience section
    experienceTitle: "Darbo Patirtis",
    experienceIntro: "Mano profesinė kelionė iki šiol:",
    jobTitle: "IT technikas",
    jobPeriod: "07/2022—03/2024",
    jobCompany: "UAB \"IT HELPAS\"",
    jobDescription: "Diegiau ir konfigūravau techninę įrangą, stebėjau sistemas ir sprendžiau technines problemas.",
    
    // Education section
    educationTitle: "Išsilavinimas",
    educationDegree: "Profesinis bakalauro laipsnis Informacinių sistemų technologijos ir kibernetinio saugumo srityje",
    educationPeriod: "09/2020—05/2024",
    educationInstitution: "Marijampolės kolegija",
    educationDescription: "Informacinių sistemų technologija ir kibernetinis saugumas Marijampolės kolegijoje. Studijavau įvairius IT aspektus, įskaitant programavimą, tinklus ir kibernetinį saugumą. Diplomą apsigyniau 2024 m. vasarą.",
    
    // Projects section
    projectsTitle: "Projektai",
    viewProject: "Peržiūrėti projektą",
    viewCode: "Peržiūrėti kodą",
    
    // Contact section
    contactTitle: "Susisiekime",
    contactText: "Jei turite klausimų ar pasiūlymų, susisiekite su manimi:",
    emailMe: "Rašyti el. laišką",
    contactOnLinkedIn: "Susisiekti per LinkedIn",
    formNameLabel: "Jūsų vardas",
    formEmailLabel: "Jūsų el. paštas",
    formMessageLabel: "Jūsų žinutė",
    formSubmitButton: "Siųsti žinutę",
    
    // Footer
    footerText: "© 2025 Rokas Raškevičius. Visos teisės saugomos."
  }
};

export const getText = (language, key) => {
  return languages[language][key] || key;
};