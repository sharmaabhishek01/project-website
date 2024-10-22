import React, { useEffect, useState } from 'react';
import './Counter.css';

const Counter= () => {
  const [countersVisible, setCountersVisible] = useState(false);
  const [counts, setCounts] = useState({ websites: 0, hours: 0, min: 0, satisfaction: 0 });

  // Scroll event handler
  // const handleScroll = () => {
  //   const section = document.getElementById('counter-section');
  //   const position = section.getBoundingClientRect().top;
  //   const screenPosition = window.innerHeight / 1.2;

  //   if (position < screenPosition) {
  //     setCountersVisible(true);
  //   } else {
  //     setCountersVisible(false);
  //   }
  // };


  // Scroll event handler to detect scroll up and down
const handleScroll = () => {
  const section = document.getElementById('counter-section');
  const position = section.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.2;

  if (position < screenPosition && position > -screenPosition) {
    setCountersVisible(true);
    section.classList.add('active'); // Add this line
  } else {
    setCountersVisible(false);
    section.classList.remove('active'); // Add this line
  }
};


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (countersVisible) {
      const interval = setInterval(() => {
        setCounts((prevCounts) => ({
          websites: prevCounts.websites < 99.9 ? prevCounts.websites + 1 : 99.9,
          hours: prevCounts.hours < 1000 ? prevCounts.hours + 10 : 1000,
          min: prevCounts.min < 1 ? prevCounts.min + 0.01 : 1,
          satisfaction: prevCounts.satisfaction < 97 ? prevCounts.satisfaction + 1 : 97,
        }));
      }, 50);
      return () => clearInterval(interval);
    }
  }, [countersVisible]);

  return (
    <section id="counter-section" className="counter-section">
      <div className="counter-box">
        <h1>{counts.websites.toFixed(1)}%</h1>
        <p> support</p>
      </div>
      <div className="counter-box">
        <h1>{counts.hours}+</h1>
        <p>hours of development invested</p>
      </div>
      <div className="counter-box">
        <h1>{counts.min.toFixed(2)} min</h1>
        <p>to start using the widget</p>
      </div>
      <div className="counter-box">
        <h1>{counts.satisfaction}%</h1>
        <p>customer satisfaction rate</p>
      </div>
    
    </section>
  );
};

export default Counter;




