import React, { useState, useEffect } from "react";
import "../style/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };

  useEffect(() => {
    const onScroll = () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY >= 1000) {
          setShow(show);
        }
      });
    };

    onScroll();
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-text">
        <h1>M</h1>
      </div>

      <div className="nav-btn">
        <button type="button" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {show && (
        <div className="navigation" data-aos="fade-left">
          <div className="links">
            <ul>
              <a href="#section1">
                <li>Home</li>
              </a>
              <a href="#section-3">
                <li>About Us</li>
              </a>
              <a href="#section-5">
                <li>Our Menu</li>
              </a>
              <a href="#section-7">
                <li>Reserve A Table</li>
              </a>
              <a href="#section-9">
                <li>Contact</li>
              </a>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
