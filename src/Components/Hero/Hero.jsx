import React from 'react';
import './Hero.css';
import backgroundVideo from '../../assets/video2.mp4';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Hero = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>

      <div className="hero-text-container">
        <h1 className="hero-main-text">A New Way <br/>of Building.</h1>
        <p className="hero-sub-text">Hand Of Dreams</p>
      </div>

      
    </div>
  );
};

export default Hero;
