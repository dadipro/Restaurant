import React from "react";
import AllMeals from '../images/meals/allmeals.jpg'
import '../style/aboutUs.css'

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-section">
        <h1>The Restaurant</h1>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <p>
          It is a paradisematic country, in which roasted parts of sentences fly
          into your mouth.
        </p>
      </div>

      <div className="about-image" data-aos="zoom-in">
        <img src={AllMeals} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
