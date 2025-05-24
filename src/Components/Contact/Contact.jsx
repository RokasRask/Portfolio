import React, { useState, useRef } from 'react';
import { getText } from '../../Utils/i18n';
import './Contact.scss';

const Contact = ({ language }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
    isSubmitting: false
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: language === 'lt' 
          ? 'Prašome užpildyti visus laukus.' 
          : 'Please fill in all fields.',
        isSubmitting: false
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: language === 'lt' 
          ? 'Prašome įvesti teisingą el. pašto adresą.' 
          : 'Please enter a valid email address.',
        isSubmitting: false
      });
      return;
    }
    
    // Set loading state
    setFormStatus({
      submitted: false,
      error: false,
      message: '',
      isSubmitting: true
    });

    try {
      // Use FormSubmit for sending the form data
      // You need to replace 'your-email@example.com' with your actual email
      const formData = new FormData(formRef.current);
      
      const response = await fetch('https://formsubmit.co/rokas.raskevic@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus({
          submitted: true,
          error: false,
          message: language === 'lt' 
            ? 'Ačiū! Jūsų žinutė išsiųsta.' 
            : 'Thank you! Your message has been sent.',
          isSubmitting: false
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            error: false,
            message: '',
            isSubmitting: false
          });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus({
        submitted: false,
        error: true,
        message: language === 'lt'
          ? 'Klaida siunčiant žinutę. Prašome bandyti vėliau.'
          : 'Error sending message. Please try again later.',
        isSubmitting: false
      });
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section__title animate-on-scroll">
          {getText(language, 'contactTitle')}
        </h2>
        
        <p className="contact__intro animate-on-scroll">
          {getText(language, 'contactText')}
        </p>
        
        <div className="contact__grid">
          <div className="contact__info animate-on-scroll">
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">
                  {language === 'lt' ? 'El. Paštas' : 'Email'}
                </h3>
                <a href="mailto:rokas.raskevic@gmail.com" className="contact__info-link">
                  rokas.raskevic@gmail.com
                </a>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">
                  {language === 'lt' ? 'Miestas' : 'Location'}
                </h3>
                <p className="contact__info-text">
                  Vilnius, {language === 'lt' ? 'Lietuva' : 'Lithuania'}
                </p>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/rokas-raškevicius-5b3414317/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="contact__info-link"
                >
                  Rokas Raškevičius
                </a>
              </div>
            </div>
            
            <div className="contact__info-item">
              <div className="contact__info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <div className="contact__info-content">
                <h3 className="contact__info-title">
                  {language === 'lt' ? 'Telefonas' : 'Phone'}
                </h3>
                <a 
                  href="tel:+37060185553" 
                  className="contact__info-link"
                >
                  +370 601 85553
                </a>
              </div>
            </div>
            
            <div className="contact__availability">
              <h3>
                {language === 'lt' ? 'Mano Statusas' : 'My Status'}
              </h3>
              <div className="contact__availability-status">
                <span className="contact__availability-indicator"></span>
                <span className="contact__availability-text">
                  {language === 'lt' 
                    ? 'Atviras full-stack ir kitų darbų IT srityje pasiūlymams' 
                    : 'Open to full-stack or other IT fields job opportunities'}
                </span>
              </div>
              <p className="contact__availability-note">
                {language === 'lt'
                  ? 'Šiuo metu aktyviai ieškau naujo darbo. Susisiekite!'
                  : "I'm currently actively looking for new opportunities. Get in touch!"}
              </p>
            </div>
          </div>
          
          <div className="contact__form-container animate-on-scroll">
            <form 
              className="contact__form" 
              onSubmit={handleSubmit} 
              ref={formRef}
              action="https://formsubmit.co/rokas.raskevic@gmail.com"
              method="POST"
            >
              {/* FormSubmit reikalingi laukai */}
              <input type="hidden" name="_subject" value={language === 'lt' ? 'Nauja žinutė iš jūsų portfolio' : 'New message from your portfolio'} />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <input type="text" name="_honey" style={{ display: 'none' }} />
              
              <div className="contact__form-field">
                <label htmlFor="name" className="contact__form-label">
                  {getText(language, 'formNameLabel')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
              
              <div className="contact__form-field">
                <label htmlFor="email" className="contact__form-label">
                  {getText(language, 'formEmailLabel')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="contact__form-input"
                />
              </div>
              
              <div className="contact__form-field">
                <label htmlFor="message" className="contact__form-label">
                  {getText(language, 'formMessageLabel')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="contact__form-textarea"
                  rows="5"
                ></textarea>
              </div>
              
              {formStatus.message && (
                <div className={`contact__form-message ${formStatus.error ? 'error' : 'success'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <button 
                type="submit" 
                className={`contact__form-submit ${formStatus.isSubmitting ? 'submitting' : ''}`}
                disabled={formStatus.isSubmitting}
              >
                {formStatus.isSubmitting 
                  ? (language === 'lt' ? 'Siunčiama...' : 'Sending...') 
                  : getText(language, 'formSubmitButton')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;