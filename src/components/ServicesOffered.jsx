import React from 'react';
import servicesOfferedData from './ServicesOfferedData';

const ServicesOffered = () => {
  return (
    <div className="services-offered">
      <div className="services-grid">
        {servicesOfferedData.map(service => (
          <div key={service.id} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h5 className="service-title">{service.title}</h5>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesOffered;