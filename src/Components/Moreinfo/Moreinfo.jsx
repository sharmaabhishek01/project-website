// src/components/DownloadBrochure.js
// import React from 'react';
// import './Moreinfo.css';

// const Moreinfo = () => {
//   return (
//     <div className="download-container">
//       <h2 className="download-title">Download Our Brochure</h2>
//       <p className="download-description">
//         Discover more about our services, projects, and team in our detailed brochure.
//       </p>
//       <a href="/Broucher.pdf" download="Fourth_Wall_Architect_Brochure">
//   Download Brochure
// </a>

//     </div>
//   );
// };

// export default Moreinfo;



// src/components/DownloadBrochure.js
import React from 'react';
import './Moreinfo.css';

const Moreinfo = () => {
  return (
    <div className="download-container">
      <h2 className="download-title">Download Our Brochure</h2>
      <p className="download-description">
        Discover more about our services, projects, and team in our detailed brochure.
      </p>
      <a href="/Broucher.pdf" download="Fourth_Wall_Architect_Brochure" className="download-link">
        Download Brochure
      </a>
    </div>
  );
};

export default Moreinfo;

