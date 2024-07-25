import React from 'react';
import AboutSectionGrid from './AboutSectionGrid';
import SkillSet from './SkillSet';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <AboutSectionGrid />
      <SkillSet />
    </section>
  );
};

export default AboutSection;