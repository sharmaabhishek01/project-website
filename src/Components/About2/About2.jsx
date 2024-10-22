import React, { useEffect, useRef } from 'react';
import './About2.css';
import Comp from '../../assets/team-for24.png';

const About = () => {
  const textRef = useRef(null); // Use ref to track the text content
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-text');
          } else {
            entry.target.classList.remove('animate-text');
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is in the viewport
    );
    
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div className="about-section-modern">
      <div className="about-container-modern">
        <div className="about-content-modern">
          <img src={Comp} alt="Team" className='about-img-modern' />
          <p ref={textRef} className="about-text-modern">
            We are a team of over <b>20</b> professional experts, specializing in architecture and structural design for both interior and exterior spaces.Our focus is on creating innovative, functional, 
            and sustainable designs that meet the unique needs of each client. <br />
            </p>
            </div>
      </div>
    </div>
  );
};

export default About;