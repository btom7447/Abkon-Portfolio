import React from "react";
import ServicesOffered from "./ServicesOffered";
import ServiceHighlight from "./ServiceHighlight";

const Services = () => {
    return (
        <div id="services" className="services-section">
           <div className="service-caption">
            <h1>Services Offered</h1>
                <p>
                    Elevate your brand's visual identity with my expert design services. I specialize in creating captivating logos, social media designs, flyers, infographics, and user interfaces that embody your brand's essence, engage your audience, drive results, simplify complex information, and provide seamless experiences. Whether you're looking to refresh your brand's image or launch a new product, I'll work closely with you to craft visually stunning designs that resonate with your audience and set you apart from the competition
                </p>
           </div>
            <ServicesOffered />
            <ServiceHighlight />
        </div>
    )
};

export default Services;