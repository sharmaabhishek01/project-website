import React, { useEffect, useRef, useState } from "react";
import "./Construction.css";
import Const from '../../assets/Home-five5.jpg';
import { Link } from 'react-scroll';

const Construction = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="stunning-section" ref={sectionRef}>
      <div className="image-container">
        <img src={Const} alt="Building" className="stunning-image" />
      </div>
      <div className={`text-content ${animate ? "animate-text" : ""}`}>
        <h1 className="uppercase-text">
          We&nbsp;have&nbsp;a&nbsp;vision&nbsp;for&nbsp;the&nbsp;future of construction.
        </h1>
        <br/><br/><br/>
        <h2>Stunning structures, sustainably built</h2>
        <br/><br/><br/>
        <p>
          <b>FOURTH WALL ARCHITECT</b> network of construction professionals rise to the challenges associated with a diverse buildings portfolio, 
          bringing added value to every educational, institutional, residential, and commercial construction project. FOURTH WALL ARCHITECT offers 
          substantial construction experience, competitive pricing, financial strength, integrity, and a commitment to your project that is supported 
          by a foundation of quality and workplace safety.
        </p>
        <Link to='home-container' href='Home' smooth={true} offset={0} duration={500}>Learn More</Link>
      </div>
    </div>
  );
};

export default Construction;
