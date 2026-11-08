import { Container } from 'react-bootstrap'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="site-footer__inner">
        <div>
          <a className="site-footer__brand" href="#home">
            Runita Sahay
          </a>
          <p>
            Mental Health Counseling · USA (100+) · India (140+) · Australia
            (160+)
          </p>
        </div>
        <nav className="site-footer__links" aria-label="Footer navigation">
          <a href="#home">Home</a>
          <a href="#about">About Her</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#contact">Contact</a>
          <a href="#privacy">Privacy Policy</a>
        </nav>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} Runita Sahay. All rights reserved.
        </p>
      </Container>
    </footer>
  )
}
