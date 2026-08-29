import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">

        <div className="hero-content">
          <p className="hero-subtitle">
            TRUSTED LEGAL REPRESENTATION
          </p>

          <h1>
            Justice. Integrity.
            <span> Excellence.</span>
          </h1>

          <p className="hero-text">
            At Royal Law, we provide professional and reliable legal
            representation with a personal approach. Our goal is to understand
            your concerns, protect your rights, and help you find the right
            legal solution with confidence.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="primary-btn">
              Book a Consultation
            </a>

            <a href="#services" className="secondary-btn">
              Explore Our Services
            </a>
          </div>

          <div className="hero-trust">
            <div>
              <strong>Professional</strong>
              <span>Legal Guidance</span>
            </div>

            <div>
              <strong>Client-Focused</strong>
              <span>Personal Attention</span>
            </div>

            <div>
              <strong>Trusted</strong>
              <span>Legal Representation</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <div className="scales">⚖</div>

          <h3>Royal Law</h3>

          <p>
            Professional Legal Services
          </p>

          <div className="hero-card-line"></div>

          <span>
            Your Rights. Our Commitment.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Hero;