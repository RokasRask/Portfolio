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
    aboutText: "Hello! I'm Rokas Raškevičius, a passionate full-stack developer working with HTML, CSS, JavaScript, React, and back-end technologies. I love building comprehensive web solutions and solving complex problems. I studied Information Technologies and Cybersecurity at Marijampolė College. While studying, I worked at a computer repair shop. I defended my diploma in the summer of 2024, and in the fall, I began delving deeper into full-stack web development. Currently, I am seeking a job in the field of web development.",
    downloadCV: "Download CV",
    
    // Skills section
    skillsTitle: "My Skills",
    skillsIntro: "Here are the technologies and tools I've been working with:",
    
    // Experience section
    experienceTitle: "Work Experience",
    experienceIntro: "My professional journey so far:",
    jobTitle: "Computer Technician",
    jobPeriod: "2021 - 2024",
    jobCompany: "Computer Repair Shop",
    jobDescription: "Diagnosed and repaired hardware and software issues. Provided technical support and customer service.",
    
    // Education section
    educationTitle: "Education",
    educationDegree: "Bachelor's Degree in Information Technologies and Cybersecurity",
    educationPeriod: "2020 - 2024",
    educationInstitution: "Marijampolė College",
    educationDescription: "Studied various aspects of IT including programming, networking, and cybersecurity. Defended my diploma in summer 2024.",
    
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
    aboutText: "Sveiki! Aš esu Rokas Raškevičius, entuziastingas full-stack programuotojas, dirbantis su HTML, CSS, JavaScript, React ir serverinėmis technologijomis. Mėgstu kurti visapusiškus internetinius sprendimus ir spręsti sudėtingas problemas. Studijavau Marijampolės kolegijoje Informacines technologijas ir kibernetinę saugą, studijuodamas dirbau kompiuterių taisykloje. Diplomą apsigyniau 2024 m. vasarą, o rudenį pradėjau labiau gilintis į tinklalapių kūrimą fullstack. Šiuo metu ieškau darbo svetainių kūrimo srityje.",
    downloadCV: "Atsisiųsti CV",
    
    // Skills section
    skillsTitle: "Mano Įgūdžiai",
    skillsIntro: "Technologijos ir įrankiai, su kuriais dirbu:",
    
    // Experience section
    experienceTitle: "Darbo Patirtis",
    experienceIntro: "Mano profesinė kelionė iki šiol:",
    jobTitle: "Kompiuterių technikas",
    jobPeriod: "2021 - 2024",
    jobCompany: "Kompiuterių taisykla",
    jobDescription: "Diagnostikavau ir taisiau aparatinės ir programinės įrangos problemas. Teikiau techninę pagalbą ir klientų aptarnavimą.",
    
    // Education section
    educationTitle: "Išsilavinimas",
    educationDegree: "Bakalauro laipsnis Informacinių technologijų ir kibernetinio saugumo srityje",
    educationPeriod: "2020 - 2024",
    educationInstitution: "Marijampolės kolegija",
    educationDescription: "Studijavau įvairius IT aspektus, įskaitant programavimą, tinklus ir kibernetinį saugumą. Diplomą apsigyniau 2024 m. vasarą.",
    
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