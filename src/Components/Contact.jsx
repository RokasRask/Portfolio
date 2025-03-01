import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Contact = ({ language }) => {
  return (
    <div id="contact" className="bg-light py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center mb-4">{language === 'lt' ? 'Kontaktai' : 'Contact'}</h2>
            <p className="text-center lead">
              {language === 'lt'
                ? 'Susisiekite su manimi el. paštu: '
                : 'Feel free to reach out to me at '}
              <a href="mailto:rokas.raskevic@gmail.com">rokas.raskevic@gmail.com</a>.
            </p>
            <p className="text-center lead">
              {language === 'lt'
                ? 'Arba LinkedIn: '
                : 'Or LinkedIn: '}
              <a href="https://www.linkedin.com/in/rokas-raškevicius-5b3414317/">Rokas Raškevičius</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
