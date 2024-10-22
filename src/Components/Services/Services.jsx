import React from 'react';
import './Services.css';
import Comp1 from '../../assets/services-1.jpg';
import Comp2 from '../../assets/service-2.jpg';
import Comp3 from '../../assets/services-3.jpg';

const Services = () => {
  return (
    <div className="redesign-container">
      <header>
        <h2 className="redesign-title">  INTERIOR , EXTERIOR , GARDEN <br/>& CONSTRUCTIONS</h2>
        <h1 className="redesign-subtitle">Redesign a Home from Top to Bottom</h1>
      </header>
      <div className="redesign-card-container">
      
        <div className="redesign-card">
        <img src={Comp1} alt="Team" className='redesign-card-image' />
          <h3 className="redesign-card-heading">Interior </h3>
        </div>
        <div className="redesign-card">
        <img src={Comp2} alt="Team" className='redesign-card-image' />
          <h3 className="redesign-card-heading">Exterior </h3>
        </div>
        <div className="redesign-card">
        <img src={Comp3} alt="Team" className='redesign-card-image' />
          <h3 className="redesign-card-heading">Garden </h3>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
