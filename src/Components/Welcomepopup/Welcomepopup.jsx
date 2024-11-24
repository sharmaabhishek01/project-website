import React, { useState, useEffect } from "react";
import "./Welcomepopup.css"; // Import the CSS file for animation
import LogoComp from '../../assets/one-or-logo-29.png';

const Welcomepopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  useEffect(() => {
    // Automatically hide the popup after 3 seconds
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={LogoComp} alt="Logo" />
            <h2>Welcome to Fourth Wall Architect</h2>
            <p>Hand of Dreams</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Welcomepopup;



