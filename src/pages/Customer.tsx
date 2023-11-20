import React, { useState } from "react";
import { customer } from "../data/customer";
import "../style/customer.css";

interface HomeProps {
  activeTab: number;
  setActiveTab: (id: number) => void;
}

interface CustomerProps {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  body: string;
}

interface Tabs {
  id: number;
}

const Customer: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  const [customers] = useState<CustomerProps[]>(customer);
  const [tabs] = useState<Tabs[]>([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

  const handleTab = (id: number) => {
    setActiveTab(id);
  };

  return (
    <div className="customer-details">
      <div className="customer-title">
        <h1>Customer Reviews</h1>
      </div>
      <div className="customer-review">
        {customers.map((customering) => (
          <div>
            {customering.id === activeTab && (
              <div className="fetching-customers" data-aos="fade-left">
                <p>{customering.body}</p>
                <img src={customering.img} alt="" />
                <h3>{customering.title}</h3>
                <span>{customering.subTitle}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="customer-buttons">
        {tabs.map((tab) => (
          <button
            type="button"
            className={`innerTab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTab(tab.id)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Customer;
