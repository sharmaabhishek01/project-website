import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/logo-final-touch-12.png';
import LogoMenu from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <div className="logo-container">
        {/* Wrap the logo with the Link to scroll to the Home section */}
        <Link to='home-container' smooth={true} offset={0} duration={500}>
          <img src={Logo} alt="logo" className='logo' />
        </Link>
        <h3 className='logo-name'></h3>
      </div>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='home-container' smooth={true} offset={0} duration={500}>Home</Link></li>

        <li><Link to='about' smooth={true} offset={-150} duration={500}>About Us</Link></li>
      
        <li>
          <Link to='project-section' smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500}></Link></li>
      </ul>
      <img src={LogoMenu} alt="menu-icon" className='menu-icon' onClick={toggleMenu} />
    </nav>
  );
}

export default Navbar;
