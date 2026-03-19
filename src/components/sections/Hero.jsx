import React from "react";
import "../../styles/hero.css";

import siteLogo from "../../assets/site-logo.png";
import heroMan from "../../assets/hero-man.png";
import nessImage from "../../assets/ness.png";
import weightLossBadge from "../../assets/icon-weight-loss.png";
import nutritionBadge from "../../assets/logo-nutrition.png";
import trainerBadge from "../../assets/logo-trainer.png";
import followFacebook from "../../assets/follow-facebook.png";
import followTwitter from "../../assets/follow-twitter.png";

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-bg-overlay"></div>
      <div className="hero-bg-right-glow"></div>
      <div className="hero-bg-left-glow"></div>
      <div className="hero-bottom-shadow"></div>

      <div className="hero-wrapper">
        <header className="hero-navbar">
          <a href="#home" className="hero-logo">
            <img src={siteLogo} alt="Fitness logo" />
          </a>

          <nav className="hero-nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#services">SERVICE</a>
            <a href="#contact">CONTACT</a>
          </nav>
        </header>

        <div className="hero-rings">
          <div className="ring ring-fade"></div>
          <div className="ring ring-outer"></div>
          <div className="ring ring-mid"></div>
          <div className="ring ring-inner"></div>
        </div>

        <div className="hero-man-wrap">
          <img src={heroMan} alt="Trainer" className="hero-man" />
        </div>

        <div className="hero-text-area">
          <p className="hero-transform">Transform</p>

          <div className="hero-main-line">
            <span className="hero-you">YOU</span>

            <div className="hero-title-group">
              <span className="hero-fit">FIT</span>
              <img src={nessImage} alt="ness" className="hero-ness" />
              <span className="hero-into-shape">into shape</span>
            </div>
          </div>

          <button className="hero-btn">
            Appointment <span>→</span>
          </button>
        </div>

        <img
          src={weightLossBadge}
          alt="Weight Loss"
          className="hero-badge hero-badge-weight"
        />

        <img
          src={nutritionBadge}
          alt="Nutrition"
          className="hero-badge hero-badge-nutrition"
        />

        <img
          src={trainerBadge}
          alt="Personal Trainer"
          className="hero-badge hero-badge-trainer"
        />

        <div className="hero-follow">
          <div className="hero-follow-line"></div>
          <span className="hero-follow-text">FOLLOW ME</span>
          <div className="hero-follow-icons">
            <img src={followFacebook} alt="Facebook" />
            <img src={followTwitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;