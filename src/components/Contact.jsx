import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h1>Contact Us</h1>
      <form action="https://formspree.io/f/xkgwopao" method="POST">
        <input type="text" id="name" name="name" placeholder="Name*" required />
        <input
          type="tel"
          id="number"
          name="number"
          placeholder="Number*"
          pattern="[0-9]*"
          inputMode="numeric"
          maxLength="15"
          required
        />
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Message*"
          required
        ></textarea>
        <button type="submit">Contact Me</button>
      </form>
    </section>
  );
};

export default Contact;