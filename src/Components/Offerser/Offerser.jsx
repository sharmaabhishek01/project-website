import React, { useEffect, useRef, useState } from 'react';
import './Offerser.css';
import Consti from '../../assets/vastu2.png';

const Offerser = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); // Reset visibility when out of viewport
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
    <section className="cover-letter-section">

      <div className="icon-container">
        <img src={Consti} alt="Vastu design" className="image-icon" />
      </div>
      <div className={`content ${isVisible ? 'scroll-trigger' : ''}`} ref={contentRef}>
        <br />
        <p>
          <big>At</big>  <b>Fourth Wall Architect</b>, we specialize in <u>Vastu Shastra</u> home design, harmonizing your living spaces with nature's energy.
          Our expert team integrates traditional principles to enhance prosperity, health, and well-being in your home.
        </p>
        <p>
          <big>We</big> create balanced, inviting environments that promote positivity, ensuring your space resonates with peace and tranquility.
          Transform your home with Vastu today!
        </p>
      </div>


    </section>
  );
};

export default Offerser;
