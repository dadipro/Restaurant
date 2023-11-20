import React from "react";
import { services } from "../data/services";
import "../style/services.css";

const Services = () => {
  return (
    <div className="service-details">
      <div className="service-flex">
        <div className="service-title">
          <h1>Other Services</h1>
          <p>
            Other Services In addition to our delectable dishes, we offer a
            range of additional services to enhance your dining experience:
          </p>
        </div>

        <div className="all-services">
          <div className="first-service" data-aos="fade-right">
            {services.firstService.map((service) => (
              <div key={service.id}>
                <h3>{service.title}</h3>
                <p>{service.body}</p>
              </div>
            ))}
          </div>

          <div className="service-details-2">
            <div className="second-service" data-aos="fade-right">
              {services.secondService.map((service) => (
                <div key={service.id}>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
