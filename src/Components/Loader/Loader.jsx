import React, { useState, useEffect } from "react";
import "./Loader.css"; // Import the CSS file

const Loader = () => {
  const [loading, setLoading] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null); // Track scroll direction

  let lastScrollTop = 0;

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      // Scrolling down
      setScrollDirection("down");
    } else {
      // Scrolling up
      setScrollDirection("up");
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Loader stays for 1 second after scroll
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`loader-container ${loading ? "show" : ""}`}>
      {scrollDirection === "up" ? (
        <div className="loader up-loader"></div>
      ) : (
        <div className="loader down-loader"></div>
      )}
    </div>
  );
};

export default Loader;
