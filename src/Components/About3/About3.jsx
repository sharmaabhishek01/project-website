import React, { useEffect, useRef } from 'react';
import './About3.css';

const About3 = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 1.3;

      if (sectionTop < triggerPoint) {
        section.classList.add('show-content');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={sectionRef} className="forwas-container">
      <div className="left-section">
      
        <h2>&rarr; What's Fourth Wall Architect?</h2>
      </div>
     
      <div className="right-section">
        <p>
          Fourth Wall Architect is a leading architectural firm specializing in the
          art and science of designing innovative, sustainable, and functional
          spaces. We believe that architecture should not only be aesthetically
          captivating but also serve the needs of modern living while respecting
          the environment. Our expertise spans across interior and exterior designs,
          offering a seamless blend of creativity and practicality in every project.
        </p>
        <p>
          At Fourth Wall Architect, we pride ourselves on delivering bespoke
          architectural solutions tailored to the unique vision of each client.
          Whether it’s residential, commercial, or urban projects, we focus on
          enhancing the structural integrity and visual appeal of spaces. Our team
          of highly skilled architects and designers work collaboratively to
          transform ideas into reality, ensuring the highest standards of quality,
          efficiency, and sustainability.
        </p>
        <p>
          Our commitment to innovation drives us to explore new materials,
          technologies, and design principles, constantly pushing the boundaries
          of what’s possible in architecture. With a deep understanding of Vastu
          Shastra and contemporary design trends, Fourth Wall Architect brings
          timeless elegance and cutting-edge solutions together to create spaces
          that inspire and endure.
        </p>
      </div>
    </div>
  );
};

export default About3;
