import React, { useState, useEffect } from 'react';
import './Flipimage.css';
import Flipimg1 from '../../assets/House-for3.png';
import Flipimg2 from '../../assets/House-for6.png';
import Flipimg3 from '../../assets/House-for54.png'; // Add more images as needed
import Flipimg4 from '../../assets/Home-for22.png';
import Flipimg5 from '../../assets/Home-for64.png';

const Flipimage = () => {
  const images = [Flipimg1, Flipimg2, Flipimg3, Flipimg4, Flipimg5]; // Add your image sources here
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    // Cycle through the images every 2 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); // Loop through images
    }, 1000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div className="image-flip-container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} className='full-page-image' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flipimage;


