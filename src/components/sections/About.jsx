import React, { useEffect, useState } from "react";
import "../../styles/about.css";
import mainGymIcon from "../../assets/about-main-icon.png";
import trainerIcon from "../../assets/expert-trainer.png";
import equipmentIcon from "../../assets/modern-equipment.png";

const cards = [
  {
    title: "Expert Trainers",
    description:
      "Work with certified trainers who provide personalized workout plans and support tailored to your goals.",
    icon: trainerIcon,
  },
  {
    title: "Modern Equipment",
    description:
      "Train with the latest in advanced, state-of-the-art fitness equipment to maximize your workout efficiency.",
    icon: equipmentIcon,
  },
  {
    title: "Custom Plans",
    description:
      "Get personalized fitness and nutrition plans designed to match your body goals and daily routine.",
    icon: trainerIcon,
  },
  {
    title: "Body Progress",
    description:
      "Track your growth with structured programs that help improve strength, endurance, and consistency.",
    icon: equipmentIcon,
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    cards[index],
    cards[(index + 1) % cards.length],
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-bg-lines about-bg-lines-right"></div>
      <div className="about-bg-lines about-bg-lines-bottom"></div>

      <div className="about-container">
        <div className="about-left">
          <div className="about-glow"></div>

          <div className="about-circle">
            <img src={mainGymIcon} alt="Gym icon" className="about-main-image" />
          </div>
        </div>

        <div className="about-right">
          <p className="about-label">WHAT WE OFFER</p>

          <h2 className="about-title">
            <span className="about-title-dark">Build Your Body &</span>
            <br />
            <span className="about-title-gold">Shape Yourself</span>
          </h2>

          <p className="about-text">
            Achieve your fitness goals with our expert trainers, state-of-the-art
            equipment, and personalized nutrition plans that ensure effective and
            sustainable results.
          </p>

          <div className="about-slider-area">
            <div className="about-cards-row">
              {visibleCards.map((card, i) => (
                <div
                  className={`about-card ${i === 0 ? "card-overlap" : ""}`}
                  key={`${card.title}-${i}`}
                >
                  <div className="about-card-icon-wrap">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="about-card-icon"
                    />
                  </div>

                  <div className="about-card-content">
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>

                    <button className="about-btn">
                      Learn More <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="about-dots">
              {cards.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`about-dot ${dotIndex === index ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;