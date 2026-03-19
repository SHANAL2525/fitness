import React from "react";
import "../../styles/services.css";

import personalTrainingImg from "../../assets/personal-training.png";
import nutritionPlanningImg from "../../assets/nutrition-planning.png";
import weightLossImg from "../../assets/weight-loss-programs.png";

const servicesData = [
  {
    title: "Personal Training",
    image: personalTrainingImg,
    description:
      "Get personalized workout plans and one to one coaching with our expert trainers to reach your fitness goals.",
  },
  {
    title: "Nutrition Planning",
    image: nutritionPlanningImg,
    description:
      "Customized meal plans and expert advice to fuel your body for optimal performance and recovery.",
  },
  {
    title: "Weight Loss Programs",
    image: weightLossImg,
    description:
      "Effective and sustainable weight loss programs designed to help you reach your ideal body weight safely.",
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-border-top"></div>
      <div className="services-border-right"></div>
      <div className="services-border-bottom"></div>
      <div className="services-border-left"></div>

      <div className="services-container">
        <p className="services-label">WHAT WE OFFER</p>

        <div className="services-heading-wrap">
          <h2 className="services-title">
            <span className="services-title-black">OUR SERVICES</span>
            <span className="services-title-brown"> & FEATURES</span>
          </h2>

          <div className="services-title-lines">
            <span className="line-left"></span>
            <span className="line-right"></span>
          </div>
        </div>

        <div className="services-cards">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>

              <div className="service-image-wrap">
                <div className="service-image-glow"></div>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
              </div>

              <p>{service.description}</p>

              <button className="service-btn">
                Learn More <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;