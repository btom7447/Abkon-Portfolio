import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 
import testimonialData from './TestimonialData';

const Testimonial = () => {
  useEffect(() => {
    const splide = new Splide('.splide-testimonial', {
      type       : 'loop',
      perPage    : 1,
      autoplay   : true,
      interval   : 5000,
      pagination : true,
      arrows     : false,
    }).mount();

    return () => {
      splide.destroy();
    };
  }, []);

  return (
    <div className="testimonial-section">
        <div className="testimonial-caption">
            <h1>Client Testimonials</h1>
            <p>
            My clients' success is my greatest achievement. We're proud to have helped numerous brands elevate their visual identity and achieve their goals. But don't just take my word for it - hear from the clients who have experienced the impact of my design expertise firsthand.
            </p>
        </div>
        <div className="splide splide-testimonial">
            <div className="splide__track">
                <ul className="splide__list">
                    {testimonialData.map((testimonial) => (
                        <li key={testimonial.id} className="splide__slide">
                            <div className="testimonial-slide">
                                <span className='quotation'>"</span>
                                <img src={testimonial.image} alt={testimonial.name} />
                                <p>{testimonial.text}</p>
                                <h5>{testimonial.name} - <span className='title'>{testimonial.title}</span></h5>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default Testimonial;