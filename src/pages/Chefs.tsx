import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Chef1 from "../images/meals/chefs/chef1.jpg";
import Chef2 from "../images/meals/chefs/chef2.jpg";
import "../style/chefs.css";

const Chefs = () => {
  return (
    <div className="chefs-container">
      <div className="all-chefs">
        <div className="chefs-details">
          <div className="chef-title">
            <h1>Meet The Chefs</h1>
          </div>
          <div className="all-chefs-of">
            <div className="details-of-chefs">
              <div className="chef-one" data-aos="fade-left">
                <img src={Chef1} alt="" />
                <h2>Daniel Graham</h2>
                <span>MASTER CHEF</span>
                <p>
                  Meet Daniel Graham, our Master Chef, whose culinary expertise
                  shines in every dish he creates. With a passion for the art of
                  cooking, he crafts delectable meals that leave a lasting
                  impression. From gourmet delicacies to comfort food, Daniel's
                  culinary skills are sure to tantalize your taste buds.
                </p>

                <div className="socials">
                  <button>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </div>
              </div>

              <div className="chef-two" data-aos="fade-right">
                <img src={Chef2} alt="" />
                <h2>Nick Browning</h2>
                <span>MASTER CHEF</span>
                <p>
                  Introducing Nick Browning, our Master Chef known for his
                  culinary mastery. Nick's dedication to the craft of cooking is
                  evident in every dish he prepares. Whether you're craving
                  international flavors or classic comfort food, Nick's
                  creations are a testament to his commitment to culinary
                  excellence.
                </p>

                <div className="socials">
                  <button>
                    <FontAwesomeIcon icon={faFacebookF} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTwitter} />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faInstagram} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
