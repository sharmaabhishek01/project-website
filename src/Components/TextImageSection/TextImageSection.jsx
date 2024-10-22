import React from 'react';
import './TextImageSection.css';
import Consta from '../../assets/House-six6.jpg';

const TextImageSection = () => {
  return (
    <div className="enzo-container">
      <div className="enzo-text-section">
        <div className="enzo-text-block">
          <h4> 01</h4>
          <h2>Designed to relax & inspire</h2>
          <p>At Fourth Wall Architect, we design spaces that seamlessly blend relaxation and inspiration. Our focus on aesthetics, comfort, and positive energy ensures every project fosters tranquility and sparks creativity.</p>
        </div>
        <br/>
        <div className="enzo-text-block">
          <h4> 02</h4>
          <h2>Sustainable</h2>
          <p> Sustainability is at the heart of our designs. We prioritize eco-friendly materials and energy-efficient solutions, creating spaces that minimize environmental impact while maximizing functionality and beauty.</p>
        </div>
        <br/>
        <div className="enzo-text-block">
          <h4> 03</h4>
          <h2>Flexible</h2>
          <p> Flexibility drives our designs. We create adaptable spaces tailored to your evolving needs, ensuring that every project is versatile, functional, and capable of growing with you over time.</p>
        </div>
        <br/>
        <div className="enzo-text-block">
          <h4> 04</h4>
          <h2>Efficient</h2>
          <p> Efficiency is key. We design spaces that optimize functionality and resource use, ensuring seamless workflows, minimal waste, and maximum impact in both design and performance.</p>
        </div>
      </div>
      
      <div className="enzo-image-section">
      <img src={Consta} alt="Vastu design" className="image-icon" />
     
      </div>
      
    </div>
    
  );
};

export default TextImageSection;
