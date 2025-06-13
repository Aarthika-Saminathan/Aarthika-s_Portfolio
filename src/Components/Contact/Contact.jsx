import React from 'react';
import './Contact.css';
import { FaLinkedin } from "react-icons/fa";

import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import linkedin_icon from '../../assets/linkedin_icon.webp';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "f538a300-cf63-40d8-8b96-363f5b077cfe");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      form.reset();
    } else {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
      </div>

      <div className="contact-section">
        {/* Left Section */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently available for new projects.</p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="Email" />
              <p>
                <a href="mailto:aarthikasaminathan7896@gmail.com">
                  aarthikasaminathan7896@gmail.com
                </a>
              </p>
            </div>

          


<div className="contact-detail">
  <FaLinkedin className="linkedin-icon" />
  <p>
    <a 
      href="https://www.linkedin.com/in/aarthika-s-8209092a7/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      linkedin.com/in/aarthika-s
    </a>
  </p>
</div>


            {/* <div className="contact-detail">
              <img src={call_icon} alt="Phone" />
              <p>
                <a href="tel:8124537896">8124537896</a>
              </p>
            </div> */}

            <div className="contact-detail">
              <img src={location_icon} alt="Location" />
              <p>Ariyalur</p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" placeholder="Enter your name" name="name" required />

          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder="Enter your email" name="email" required />

          <label htmlFor="message">Write Your Message Here</label>
          <textarea id="message" name="message" rows="8" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
