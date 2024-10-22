import React, { useState } from 'react';
import './Flipcont.css';
import Flipcount1 from '../../assets/Home-one1.jpg';
import Flipcount2 from '../../assets/Home-two2.jpg';
import Flipcount3 from '../../assets/Home-three3.jpg';
import Flipcount4 from '../../assets/Home-four.jpg';
import Flipcount5 from '../../assets/Home-five5.jpg';
import Flipcount6 from '../../assets/House-six6.jpg';
import Flipcount7 from '../../assets/House-seven7.jpg';
import Flipcount8 from '../../assets/House-eight8.jpg';

const Flipcont = () => {
  const [showImages, setShowImages] = useState(false);

  const handleButtonClick = () => {
    setShowImages(!showImages);
  };

  return (
    <div className="flipcont-container">
      <br/>
      <h2 className="flipcont-subtitle">From Imagination to Reality</h2>
     
      <br/><br/>
      <p className="flipcont-description">
        Architectural Solutions provides top quality made-to-measure windows, rooflights, and bespoke window and door solutions.
        We offer the largest single sheet windows available, with minimal frames produced in the highest quality materials. 
        Our products are measured and fitted on site by a team of experts for optimal fit and movement.
        <br/><br/>
        we turn your dreams into reality. From the initial spark of imagination to the final structure, 
        our expert team guides you through every step of the process. Combining innovative design, technical expertise, 
        and attention to detail, 
        we transform creative concepts into functional, inspiring spaces tailored to your vision.
      </p>
      
      {/* Button to show images */}
      <button className="flipcont-button" onClick={handleButtonClick}>
        {showImages ? 'Hide' : 'Show More'}
      </button>

      {/* Conditionally render the images */}
      {showImages && (
        <div className="flipcont-images">
           <img src={Flipcount1} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount2} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount3} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount4} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount5} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount6} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount7} alt="Front Image" className='flipcont-image' />
           <img src={Flipcount8} alt="Front Image" className='flipcont-image' />
           
        </div>
      )}
    </div>
  );
};

export default Flipcont;




