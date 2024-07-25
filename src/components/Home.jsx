import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { ReactTyped } from 'react-typed';
import Mouse from './Mouse';

const Home = () => {
  return (
    <section id="home" className="home-section">
        <img src={require('../assets/image/home-background.jpg')} alt="abkon work setup" />      <div className="home-caption">
        <div className="typed-text">
          <ReactTyped
            strings={[
              "Hi, I'm Abasiama Bassey,",
              "a Brand Design Expert,",
              "and an Entrepreneur."
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </div>
        <div className="home-socials">
          <a href="https://www.facebook.com/Abkon350?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a href="https://www.instagram.com/abkon350?igsh=MTc0NmMycjczYjl3bA==" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.linkedin.com/in/abasiama-bassey-096a48294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
        <Mouse />
      </div>
    </section>
  );
};

export default Home;