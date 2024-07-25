import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src="/abkon-logo.png" alt="abkon logo" />
      <h1>Abkon</h1>
      <ul className="sidebar-navlinks">
        <li>
          <Link 
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Services
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link 
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="sidebar-contacts">
        <p>+234 901 217 4094</p>
        <p>+234 913 564 4777</p>
        <p>abkon350@gmail.com</p>
      </div>
      <div className="sidebar-socials">
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
    </div>
  );
};

export default Sidebar;