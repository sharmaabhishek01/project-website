import React, { useState, useEffect } from 'react';
import './Cookies.css'; // Import the CSS file

const Cookies = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000); // Delay of 10 seconds (10000ms)

      return () => clearTimeout(timer); // Clean up the timeout on component unmount
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="cookie-popup">
      <div className="cookie-content">
        <p>This website uses cookies to improve functionality and performance.
          We respect your privacy and are committed to protecting your personal information.
          By clicking “Accept,” you consent to the use of cookies in accordance with our Cookie Policy.</p>
        <button className="cookie-button" onClick={acceptCookies}>
          Accept Cookies
        </button>
        {/* <button className="cookie-button2" onClick={acceptCookies}>
          Manage Preferences
        </button> */}
      </div>
    </div>
  );
};

export default Cookies;

