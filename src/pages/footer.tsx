import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../style/footer.css";

const Footer = () => {
  const [date] = useState<Date>(new Date());

  return (
    <>
      <div className="footer-details">
        <div className="footer-1">
          <div className="about-footer">
            <h1>About Meal</h1>
            <p>
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question Marks and devious Semikoli,
              but the Little Blind Text didn’t listen.{" "}
            </p>
            <button>Read More</button>
          </div>

          <div className="footer-launch">
            <div className="launches">
              <div className="launch-1">
                <h1>Launch Service</h1>
                <span>Booking from 12:00pm — 1:30pm</span>
              </div>

              <div className="launch-2">
                <h1>Dinner Service</h1>
                <span>Everyday: Booking from 6:00pm — 9:00pm</span>
              </div>
            </div>

            <div className="footer-socials">
              <div className="footer-socials-2">
                <div className="footer-inline">
                  <div className="footer-title">
                    <h1>Follow Along</h1>
                  </div>
                  <div className="social-icons">
                    <div className="inner-socials">
                      <div>
                        <a href="https://www.facebook.com/" target="_blank">
                          <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                      </div>
                      <div>
                        <a href="https://twitter.com/" target="_blank">
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </div>
                      <div>
                        <a href="https://www.instagram.com/" target="_blank">
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="footer-newsletter">
                    <h1>Newsletter</h1>

                    <input type="email" placeholder="Enter Email" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="second-footer">
        <div className="second-text">
          <span>Copyright ©{date.getFullYear()} All rights reserved</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
