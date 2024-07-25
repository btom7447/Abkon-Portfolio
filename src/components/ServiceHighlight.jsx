import React, { useEffect, useRef, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const ServiceHighlight = () => {
  const [isVisible, setIsVisible] = useState(false);
  const highlightRef = useRef(null);

  useEffect(() => {
    const currentRef = highlightRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after it has become visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div className="service-highlight" ref={highlightRef}>
      <div className="highlight">
        <h5>
          <Odometer value={isVisible ? 6 : 0} format="d" />+ Years of Experience
        </h5>
      </div>
      <div className="highlight">
        <h5>
          <Odometer value={isVisible ? 45 : 0} format="d" />+ Projects Completed
        </h5>
      </div>
      <div className="highlight">
        <h5>
          <Odometer value={isVisible ? 76 : 0} format="d" />+ Happy Clients
        </h5>
      </div>
    </div>
  );
};

export default ServiceHighlight;