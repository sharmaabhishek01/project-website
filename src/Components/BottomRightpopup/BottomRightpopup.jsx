import React, { useState } from "react";
import "./BottomRightpopup.css"; // Updated CSS file
import { Link } from 'react-scroll';

const BottomRightpopup = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './src/assets/broucher.pdf';
    link.setAttribute('download', 'FourthWallArchitect.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {showPopup && (
        <div className="info-popup-container">
          <div className="info-popup-header">
            <button className="info-popup-close-btn" onClick={closePopup}>×</button>
          </div>
          <div className="info-popup-body">
            <Link to='contact' smooth={true} offset={-260} duration={500} className='info-popup-title'>
              Need more info?
            </Link>
            <br /><br />
            <a href="/" className="info-popup-link" onClick={handleDownload}>
              Download brochure here
            </a>
            <p>
              <Link to='home-container' smooth={true} offset={0} duration={500}>
                Ask us your question
              </Link>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomRightpopup;