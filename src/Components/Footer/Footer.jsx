import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faInstagram, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../../assets/one-or-logo-29.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='top-line'></div>
      <div className='footer-container'>
        <div className='footer-logo'>
          {/* Wrap the logo with the Link component to scroll to the Home section */}
          <Link to="home-container" smooth={true} offset={0} duration={500}>
            <img src={logo} alt="Fourt Wall Architect Logo" className="company-logo" />
          </Link>
        </div>
        <div className='footer-links'>
          <div className='link-section'>
            <h6>Quick Links</h6>
            <ul>
              <li><Link to='home-container' href='Home' smooth={true} offset={0} duration={500}>Home</Link></li>
            
               <li><Link to='about' href='about us' smooth={true} offset={-150} duration={500}>About Us</Link></li>
              <li> <Link to='project-section'  href='gallery' smooth={true} offset={-260} duration={500}>
            Gallery
          </Link></li>
              <li><Link to='contact' href='contact us' smooth={true} offset={-260} duration={500} >Contact us</Link></li>
            </ul>
          </div>
          <div className='link-section'>
            <h6>Discover</h6>
            <ul>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#news">Recent in News</a></li>
            </ul>
          </div>
          
        </div>
        <div className='social-icons'>
          <a href="https://wa.me/917549091730" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="https://www.instagram.com/fourth_wall_architect?igsh=MWk0bmd6OG82d3hjbw==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/anup-sharma-86399b173?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <p>Hajipur, Vaishali (844101)</p>
        <p><a href="/terms">Terms & Conditions</a> · <a href="/privacy">Privacy Policy</a></p>
        <p>&#169; 2024 Fourt Wall Architect. All Rights Reserved</p>
      </div>

    </footer>
  );
};

export default Footer;