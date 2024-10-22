import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import Company from '../../assets/Home-four.jpg';
import Icon from '../../assets/play-icon.png';

const About = ({ setPlayState }) => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Optionally reset animation when out of view
        }
      });
    });

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="about">
      <div className="left-side">
        <img src={Company} alt="" className="about-img" />
        <img src={Icon} alt="" className="play-icon" onClick={() => { setPlayState(true); }} />
      </div>

      <div className={`righ-side ${isVisible ? 'scroll-trigger' : ''}`} ref={contentRef}>
        <h3 style={{ color: '#2a6265' }}>ABOUT US</h3>
        <br />
        <br />
        <h4>
          Welcome to Fourth Wall Architect! We're a passionate team of architects and designers committed to innovative, sustainable design solutions.
          From sleek modern homes to iconic commercial spaces, we create environments that inspire and endure.
          Let's build something extraordinary together.
        </h4>
        <h5>
          Modern architecture prioritizes functionality, simplicity, and innovation, often incorporating clean lines, open spaces, and sustainable materials for contemporary living environments.
        </h5>
        <h5>
          ``Architecture + Design embodies the fusion of creativity and functionality, where spaces become expressions of artistry and purpose. From innovative structures to intricate interiors, it's a realm where imagination shapes the world we inhabit, merging form with function to create transformative environments.``
        </h5>
      </div>
    </div>
  );
}

export default About;