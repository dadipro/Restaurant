import React, { useEffect, useState } from "react";
import { Tabs } from "./home";
import { MenuItem, foods } from "../data/foodData";
import "../style/ourMenu.css";

interface MenuProps {
  tabs: Tabs[];
  activeTab: number;
  setActiveTab: (id: number) => void;
}

const OurMenu: React.FC<MenuProps> = ({ activeTab, setActiveTab, tabs }) => {
  const handleTab = (id: number) => {
    setActiveTab(id);
  };

  const handleActiveTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="food-menu">
      <div className="menu-details">
        <div className="food-title">
          <h2>Menu</h2>
          <p>Please Feel Free To Explore Our Menu</p>
        </div>
        <div className="food-tabs">
          {tabs.map((tab) => (
            <button
              className={`menu-buttons ${tab.id === activeTab ? "active" : ""}`}
              onClick={() => handleTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>
      </div>

      <div className="fetch-menu">
        <div className="fetch-details">
          <div className="food-details">
            {activeTab === 1 && (
              <div className="foods-menu" data-aos='zoom-in'>
                {foods["breakfast"].map((food) => (
                  <div className="actual-foods" key={food.id}>
                    <img src={food.image} alt="" />
                    <div className="food-title">
                      <h1>{food.title}</h1>
                      <p>{food.description}</p>
                    </div>
                    <div className="food-price">
                      <div>${food.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 2 && (
              <div className="foods-menu" data-aos='zoom-in'>
                {foods["brunch"].map((food) => (
                  <div className="actual-foods" key={food.id}>
                    <img src={food.image} alt="" />
                    <div className="food-title">
                      <h1>{food.title}</h1>
                      <p>{food.description}</p>
                    </div>
                    <div className="food-price">
                      <div>${food.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 3 && (
              <div className="foods-menu" data-aos='zoom-in'>
                {foods["dinner"].map((food) => (
                  <div className="actual-foods" key={food.id}>
                    <img src={food.image} alt="" />
                    <div className="food-title">
                      <h1>{food.title}</h1>
                      <p>{food.description}</p>
                    </div>
                    <div className="food-price">
                      <div>${food.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
