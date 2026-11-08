import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'

export default function Header() {
  return (
    <Navbar expand="lg" className="header py-3">
      <Container>
        <Navbar.Brand href="#home" className="header__logo">
          Runita Sahay
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navigation" aria-label="Toggle navigation" className='border-0 shadow-none' />
        <Navbar.Collapse id="main-navigation">
          <Nav className="ms-auto header__nav" aria-label="Main navigation">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Her</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Button
            as="a"
            href="#contact"
            className="header__schedule-button rounded-0 text-white"
          >
            SCHEDULE NOW
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
