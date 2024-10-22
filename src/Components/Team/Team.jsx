import React from 'react';
import './Team.css'; // Import the CSS for styling
import member1 from '../../assets/finalpic.jpeg'; 
import member2 from '../../assets/finalpic2.jpeg'; 

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-card">
       
        <img 
          img src={member1}  
          alt="Shashank" 
          className="team-img" 
        />
        <div className="team-info">
          <h2>Anup Sharma</h2>
          <h3> CEO & Founder </h3>
          <br/>
          <p>
          Anup Sharma, CEO and founder of Fourth Wall Architect, leads with a vision of innovative architectural solutions, 
          emphasizing sustainable design and cutting-edge technology in both interior and exterior projects.
          </p>
        </div>
      </div>

      <div className="team-card">
      <img 
          img src={member2}  
          alt="Shashank" 
          className="team-img" 
        />
        <div className="team-info">
          <h2>Avinash Ray</h2>
          <h3>Co-Founder </h3>
          <br/>
          <p>
          Avinash Ray, co-founder of Fourth Wall Architect, brings a wealth of experience in architectural and structural design, 
          focusing on innovative solutions for modern interior and exterior projects.
          </p>
        </div>

        
        
      </div>
    </div>
  );
}

export default Team;

