import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 
import skillSetsData from './SkillSetData'; 

const SkillSet = () => {
  useEffect(() => {
    // Create Splide instance
    const splide = new Splide('.splide', {
      type       : 'loop',
      perPage    : 3,
      autoplay   : true,
      interval   : 5000, 
      pagination : true,
      arrows     : false,
      breakpoints: {
        1200: {
          perPage: 2,
        },
        768: {
          perPage: 1,
        },
      },
    }).mount();

    // Clean up Splide instance on unmount
    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="splide">
      <div className="splide__track">
        <ul className="splide__list">
          {skillSetsData.map(skillSet => (
            <li key={skillSet.id} className="splide__slide">
              <div className="skill-box">
                <img src={skillSet.logo} alt={skillSet.name} />
                <h5>{skillSet.name}</h5>
                <p>{skillSet.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillSet;
