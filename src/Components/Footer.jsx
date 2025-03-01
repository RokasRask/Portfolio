import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = ({ language }) => {
  return (
    <footer className="text-white py-4" style={{ background: 'linear-gradient(90deg, #4b6cb7, #182848)' }}>
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              {language === 'lt'
                ? '© 2025 Rokas Raškevičius. Visos teisės saugomos.'
                : '© 2025 Rokas Raškevičius. All rights reserved.'}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;