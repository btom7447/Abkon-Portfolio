import React from 'react';
import AboutData from './AboutData';

const AboutSectionGrid = () => {
  return (
    <div className="about-grid">
      {AboutData.map((item, index) => (
        <div key={item.id} className={`about-item ${index % 2 === 0 ? 'row-normal' : 'row-reverse'}`}>
          <div className="about-image">
            <img src={item.imageSrc} alt={item.title} />
          </div>
          <div className="about-text">
            <h5>{item.title}</h5>
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutSectionGrid;