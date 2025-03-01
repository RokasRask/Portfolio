import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profilePhoto from '../Assets/Photo.png';

const About = ({ language }) => {
  return (
    <Container id="about" className="my-5 py-5">
      <Row className="align-items-center">
        <Col md={4} className="text-center mb-4 mb-md-0">
          <Image
            src={profilePhoto}
            alt="Profile"
            fluid
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        </Col>
        <Col md={8}>
          <h2>{language === 'lt' ? 'Apie Mane' : 'About Me'}</h2>
          <p className="lead">
            {language === 'lt'
              ? 'Sveiki! Aš esu Rokas Raškevičius, entuziastingas programuotojas, besimokantis HTML, CSS, JavaScript ir React. Mėgstu kurti projektus ir spręsti problemas. Studijavau Marijampolės kolegijoje Informacines technologijas ir kibernetinę saugą, studijuodamas dirbau kompiuterių taisykloje. Diplomą apsigyniau 2024 m. vasarą, o rudenį pradėjau labiau gilintis į tinklalapių kūrimą fullstack. Šiuo metu ieškau darbo svetainių kūrimo srityje.'
              : "Hello! I'm Rokas Raškevičius, a passionate developer learning HTML, CSS, JavaScript, and React. I love building projects and solving problems. I studied Information Technologies and Cybersecurity at Marijampolė College. While studying, I worked at a computer repair shop. I defended my diploma in the summer of 2024, and in the fall, I began delving deeper into full-stack web development. Currently, I am seeking a job in the field of web development."}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;