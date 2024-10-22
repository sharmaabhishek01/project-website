import React, { useState } from "react";
import './Projects.css'; 
import image1 from '../../assets/material/image-1.jpg';
import image2 from '../../assets/material/image-2.jpg';
import image3 from '../../assets/material/image-3.jpg';
import image4 from '../../assets/material/image-4.jpg';
import image5 from '../../assets/material/image-5.jpg';
import image6 from '../../assets/material/image-6.jpg';
import image7 from '../../assets/material/image-7.jpg';
import image8 from '../../assets/material/image-8.jpg';
import image9 from '../../assets/material/image-9.jpg';
import image10 from '../../assets/material/image-10.png';
import image11 from '../../assets/material/image-11.jpg';
import image12 from '../../assets/material/image-12.jpg';
import image13 from '../../assets/material/image-13.jpg';
import image14 from '../../assets/material/image-14.jpg';
import image15 from '../../assets/material/image-15.jpg';
import image16 from '../../assets/material/image-16.jpg';
import image17 from '../../assets/material/image-17.png';
import image18 from '../../assets/material/image-18.jpg';
import image19 from '../../assets/material/image-19.jpg';
import image20 from '../../assets/material/image-20.png';
import image21 from '../../assets/material/image-21.jpg';
import image22 from '../../assets/material/image-22.jpg';
import image23 from '../../assets/material/image-23.jpg';
import image24 from '../../assets/material/image-24.jpg';
import image25 from '../../assets/material/image-25.jpg';
import image26 from '../../assets/material/image-26.jpg';
import image27 from '../../assets/material/image-27.jpg';
import image28 from '../../assets/material/image-28.jpg';
import image29 from '../../assets/material/image-29.jpg';
import image30 from '../../assets/material/image-30.jpg';
import image31 from '../../assets/material/image-31.jpg';
import image32 from '../../assets/material/image-32.jpg';
import image33 from '../../assets/material/image-33.jpg';
import image34 from '../../assets/material/image-34.png';
import image35 from '../../assets/material/image-35.jpg';
import image36 from '../../assets/material/image-36.jpg';
import image37 from '../../assets/material/image-37.jpg';
import image38 from '../../assets/material/image-38.png';
import image39 from '../../assets/material/image-39.jpg';
import image40 from '../../assets/material/image-40.jpg';
import image41 from '../../assets/material/image-41.jpg';
import image42 from '../../assets/material/image-42.jpg';
import image43 from '../../assets/material/image-43.jpg';
import image44 from '../../assets/material/image-44.jpg';
import image45 from '../../assets/material/image-45.jpg';
import image46 from '../../assets/material/image-46.jpg';
import image47 from '../../assets/material/image-47.jpg';
import image48 from '../../assets/material/image-48.jpg';
import image49 from '../../assets/material/image-49.jpg';
import image50 from '../../assets/material/image-50.jpg';

const Projects = () => {
  const [visible, setVisible] = useState(2); 
  const [expanded, setExpanded] = useState(false); //  expanding image size

  const projects = [
    { id: 1, src: image1, title: '' },
    { id: 2, src: image2, title: '' },
    { id: 3, src: image3, title: '' },
    { id: 4, src: image4, title: '' },
    { id: 5, src: image5, title: '' },
    { id: 6, src: image6, title: '' },
    { id: 7, src: image7, title: '' },
    { id: 8, src: image8, title: '' },
    { id: 9, src: image9, title: '' },
    { id: 10, src: image10, title: '' },
    { id: 11, src: image11, title: '' },
    { id: 12, src: image12, title: '' },
    { id: 13, src: image13, title: '' },
    { id: 14, src: image14, title: '' },
    { id: 15, src: image15, title: '' },
    { id: 16, src: image16, title: '' },
    { id: 17, src: image17, title: '' },
    { id: 18, src: image18, title: '' },
    { id: 19, src: image19, title: '' },
    { id: 20, src: image20, title: '' },
    { id: 21, src: image21, title: '' },
    { id: 22, src: image22, title: '' },
    { id: 23, src: image23, title: '' },
    { id: 24, src: image24, title: '' },
    { id: 25, src: image25, title: '' },
    { id: 26, src: image26, title: '' },
    { id: 27, src: image27, title: '' },
    { id: 28, src: image28, title: '' },
    { id: 29, src: image29, title: '' },
    { id: 30, src: image30, title: '' },
    { id: 31, src: image31, title: '' },
    { id: 32, src: image32, title: '' },
    { id: 33, src: image33, title: '' },
    { id: 34, src: image34, title: '' },
    { id: 35, src: image35, title: '' },
    { id: 36, src: image36, title: '' },
    { id: 37, src: image37, title: '' },
    { id: 38, src: image38, title: '' },
    { id: 39, src: image39, title: '' },
    { id: 40, src: image40, title: '' },
    { id: 41, src: image41, title: '' },
    { id: 42, src: image42, title: '' },
    { id: 43, src: image43, title: '' },
    { id: 44, src: image44, title: '' },
    { id: 45, src: image45, title: '' },
    { id: 46, src: image46, title: '' },
    { id: 47, src: image47, title: '' },
    { id: 48, src: image48, title: '' },
    { id: 49, src: image49, title: '' },
    { id: 50, src: image50, title: '' },
  ];

  const showMoreProjects = () => {
    setVisible(projects.length); 
    setExpanded(true); 
  };

  const handleDownload = (src) => {
    const link = document.createElement('a');
    const extension = src.split('.').pop(); // Get the file extension (e.g., jpg, png)
    link.href = src;
    link.download = `fourthwallarchitects-images.${extension}`; // Download file as "image.jpg" or "image.png"
    link.click();
  };

  return (
    <div id="projects-section" className="project-section">
      <div className={`project-grid ${expanded ? 'expanded' : ''}`}>
        {projects.slice(0, visible).map(project => (
          <div key={project.id} className="project-item">
            <img src={project.src} alt={project.title} />
            <p>{project.title}</p>
            <button
              className="download-btn"
              onClick={() => handleDownload(project.src)}
              aria-label="Download image"
            >
              &#x21E9; {/* Downward arrow symbol */}
            </button>
          </div>
        ))}
      </div>
      {visible < projects.length && (
        <button className="see-more-btn" onClick={showMoreProjects}>See More Here</button>
      )}
    </div>
  );
};

export default Projects;