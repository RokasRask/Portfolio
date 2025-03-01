import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import placeholderImage from '../Assets/placeholder.jpg';
import project1Image from '../Assets/Sask.PNG'; // Pridėkite savo paveikslėlius
import project2Image from '../Assets/valid.PNG';
import project3Image from '../Assets/green.PNG';
import project4Image from '../Assets/farm.PNG';
import project5Image from '../Assets/kolt.PNG';

const Projects = ({ language }) => {
  const projects = [
    {
      title: language === 'lt' ? 'PVM sąskaita faktūra' : 'VAT invoice',
      description: language === 'lt' ? 'Puslapis, kuris sugeneruoja sąskaitą faktūrą, naudodamas API.' : 'Page that generates VAT invoice using API.',
      link: "https://rokasrask.github.io/Saskaita_faktura/",
      image: project1Image,
    },
    {
      title: language === 'lt' ? 'Prisijungimo forma' : 'Login form',
      description: language === 'lt' ? 'Paprasta prisijungimo forma su validacijomis.' : 'Simple login form with validation.',
      link: "https://rokasrask.github.io/Friday_challenge/",
      image: project2Image,
    },
    {
      title: language === 'lt' ? 'Pradinio puslapio dizainas' : 'Landing page design',
      description: language === 'lt' ? 'Pradinis puslapis atliktas su React.' : 'Landing page created using React.',
      link: "https://rokasrask.github.io/green_plant_shop/",
      image: project3Image,
    },
    {
      title: language === 'lt' ? 'Ferma' : 'Farm',
      description: language === 'lt' ? 'Nedidelis projektėlis praktikai su local storage.' : 'Small project to practice local storage.',
      link: "https://rokasrask.github.io/farm/",
      image: project4Image,
    },
    {
      title: language === 'lt' ? 'CRUD projektėlis' : 'CRUD project',
      description: language === 'lt' ? 'Projektas, kuriame atliekamos crud operacijos.' : 'Project where crud operations are used.',
      link: "https://rokasrask.github.io/kolt/",
      image: project5Image,
    },
  ];

  return (
    <Container id="projects" className="my-5 py-5">
      <h2 className="text-center mb-5">{language === 'lt' ? 'Projektai' : 'Projects'}</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} key={index} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Body className="d-flex flex-column">
                <Row>
                  <Col md={8}>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.description}</Card.Text>
                    <Card.Link href={project.link} target="_blank" className="btn btn-primary">
                      {language === 'lt' ? 'Peržiūrėti' : 'View'}
                    </Card.Link>
                  </Col>
                  <Col md={4} className="d-flex align-items-center justify-content-center">
                    <Image
                      src={project.image || placeholderImage}
                      alt={project.title}
                      fluid
                      style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;