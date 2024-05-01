import React from "react";
import "./Services.css";
import sections from "../../constants/data";
import SingleService from "./SingleService";

const Services = () => {
  return (
    <section className="services section-p bg-dark py-5" id="services">
      <div className="container py-5">
        <div className="section-t text-center">
          <h3 className="text-uppercase">Services</h3>
        </div>
        <div className="services-content">
          <svg width="1em" height="1em">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#7c00b5" offset="0%" />
              <stop stopColor="#5764de" offset="100%" />
            </linearGradient>
          </svg>

          <div className="item-list grid text-white text-center">
            {sections.services.map((service) => {
              return <SingleService service={service} key={service.id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
