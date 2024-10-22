import React from 'react';
import './Moreinfo.css';

const Moreinfo = () => {
  const handleDownload = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = './src/assets/Broucher-new-form-final.pdf';
    link.setAttribute('download', 'FourthWallArchitect-Brochure.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="brochure-info">
      <a href="/" className="brochure-link" onClick={handleDownload}>
        Download brochure here
      </a>
    </div>
  );
};

export default Moreinfo;
