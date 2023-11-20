import React, { useState, useEffect } from "react";
import Meal from "../images/meals/meal.jpg";
import Meal2 from "../images/meals/meal2.jpg";
import Meal3 from "../images/meals/meal3.jpg";
import Meal4 from "../images/meals/meal4.jpg";
import "../style/home.css";
import Header from "./Header";
import AboutUs from "./aboutUs";
import Chefs from "./Chefs";
import OurMenu from "./ourMenu";
import Services from "./Services";
import Reserve from "./reserve";
import Customer from "./Customer";
import Contact from "./contact";
import Footer from "./footer";
import Aos from "aos";
import "aos/dist/aos.css";

export interface Tabs {
  id: number;
  title: string;
}

const Home = () => {
  const [tabs, setTabs] = useState<Tabs[]>([
    { id: 1, title: "BREAKFAST" },
    { id: 2, title: "BRUNCH" },
    { id: 3, title: "DINNER" },
  ]);
  const [activeTab, setActiveTab] = useState<number>(1);

  useEffect(() => {
    Aos.init();
  });

  return (
    <>
      <section
        className="section-1 "
        id="section-1"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(${Meal})`,
          backgroundPosition: " center top",
          backgroundAttachment: "fixed",
          backgroundSize: "auto",
        }}
      >
        <div className="entry" data-aos="fade-up">
          <div className="entry-navbar">
            <Header />
          </div>
        </div>
        <div className="entry-section" data-aos="fade-up">
          <div className="entry-title">
            <h1>Welcome To Meal</h1>
            <a href="#section-7">
              <button>Reserve A Table</button>
            </a>
          </div>
        </div>
      </section>

      <section className="section-2" data-aos="fade-up">
        <div className="about-food">
          <div className="food-text">
            <h1>Find your best food</h1>
            <p>
              "At Meal, our best food is all about delicious flavors and
              satisfying your cravings. From our mouthwatering Chicken
              Chimichurri Croquettes to our Buttermilk Chicken Jibaritos, we
              serve up the perfect meal for every appetite. Come taste the
              difference with us today!"
            </p>
          </div>

          <div className="image-food">
            <div className="image-food-1" data-aos="zoom-in">
              <div className="first-section">
                <img src={Meal2} alt="Meal2" />
                <div className="first-text">
                  <span>VEGIES</span>
                  <h3>BEEF EMPANDAS</h3>
                  <p>
                    Separated they live in Bookmarksgrove right at the coast of
                    the Semantics, a large language ocean.
                  </p>
                  <button>LEARN MORE</button>
                </div>
                <img src={Meal3} alt="Meal3" />
              </div>
            </div>

            <div className="image-food-2">
              <div className="second-details" data-aos="zoom-out-right">
                <div className="second-section">
                  <span>FOOD</span>
                  <h3>Buttermilk Chicken Jibaritos</h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <button>LEARN MORE</button>
                </div>
                <img src={Meal4} alt="Meal4" />
                <div className="third-text">
                  <span>FOOD</span>
                  <h3>Chicken Chimichurri Croquettes</h3>
                  <p>
                    Even the all-powerful Pointing has no control about the
                    blind texts it is an almost unorthographic life.
                  </p>
                  <button>LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3" id="section-3" data-aos="fade-up">
        <AboutUs />
      </section>

      <section className="section-4" data-aos="fade-up">
        <Chefs />
      </section>

      <section className="section-5" id="section-5" data-aos="fade-up">
        <OurMenu
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </section>

      <section className="section-6" data-aos="fade-up">
        <Services />
      </section>

      <section className="section-7" id="section-7" data-aos="fade-up">
        <Reserve />
      </section>

      <section className="section-8" data-aos="fade-up">
        <Customer setActiveTab={setActiveTab} activeTab={activeTab} />
      </section>

      <section className="section-9" id="section-9" data-aos="fade-up">
        <Contact />
      </section>

      <section className="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
