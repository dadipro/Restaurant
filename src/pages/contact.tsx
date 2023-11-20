import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <>
      <div className="getInTouch-details">
        <div className="getInTouch-title">
          <h1>Get In Touch</h1>
        </div>
        <div className="getInTouch-inputs" data-aos='fade zoom-in'>
          <div className="first-inputs">
            <div>
              <span>Name</span>
              <input type="text" />
            </div>
            <div>
              <span>Email</span>
              <input type="email" />
            </div>
            <div>
              <span>Phone</span>
              <input type="tel" />
            </div>
          </div>

          <div className="second-Input">
            <div className="second-details">
              <div>
                <span>Message</span>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className="contact-button">
            <button className="message">Send Message</button>
          </div>
        </div>
        <div className="getInTouch-iframe">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755.7133934994571!2d-74.00051699122494!3d40.74324738988379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bbef9c8b8b%3A0xc0d56110e73f561f!2sLasagna%20Restaurant!5e0!3m2!1ssq!2srs!4v1699262628417!5m2!1ssq!2srs"
            width="600"
            height="450"
            className="no-border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
