import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = ({ language, toggleLanguage }) => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top" style={{ background: 'linear-gradient(90deg, #4b6cb7, #182848)' }}>
      <Navbar.Brand href="#home" className="ml-5">Rokas Raškevičius Porfolio</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" className="text-white mx-3">{language === 'lt' ? 'Apie' : 'About'}</Nav.Link>
          <Nav.Link href="#projects" className="text-white mx-3">{language === 'lt' ? 'Projektai' : 'Projects'}</Nav.Link>
          <Nav.Link href="#contact" className="text-white mx-3">{language === 'lt' ? 'Kontaktai' : 'Contact'}</Nav.Link>
        </Nav>
        <Nav className="ml-auto mr-5">
          <Button
            variant="outline-light"
            className="mx-1"
            onClick={() => toggleLanguage('en')}
            active={language === 'en'}
          >
            EN
          </Button>
          <Button
            variant="outline-light"
            className="mx-1"
            onClick={() => toggleLanguage('lt')}
            active={language === 'lt'}
          >
            LT
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;