import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      setScrollPercent(scrollPercent);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Precompute circumference of the circle
  const radius = 49;
  const circleLength = 2 * Math.PI * radius;

  return (
    <div
      className={`progress-wrap ${isVisible ? 'active-progress' : ''}`}
      id="scrollUp"
      onClick={handleClick}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            strokeDasharray: circleLength,
            strokeDashoffset: circleLength - (scrollPercent / 100) * circleLength,
          }}
        />
      </svg>
      <FontAwesomeIcon icon={faChevronUp} className="scroll-icon" />
    </div>
  );
};

export default ScrollToTopButton;
