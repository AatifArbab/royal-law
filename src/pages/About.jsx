import React from "react";

const About = () => {
  return (
    <section className="page-section about-page">
      <div className="container">
        <div className="page-heading">
          <p>ABOUT ROYAL LAW</p>
          <h1>Committed to Justice & Excellence</h1>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Professional Legal Representation</h2>

            <p>
              Royal Law provides professional and reliable legal services to
              individuals, families and businesses. Our focus is on protecting
              the rights and interests of our clients through dedicated legal
              representation.
            </p>

            <p>
              We believe that every client deserves honest advice, clear
              communication and professional legal support. Our approach is
              based on integrity, confidentiality and commitment to justice.
            </p>

            <p>
              Whether you are dealing with a family dispute, criminal matter,
              property issue or corporate legal concern, we aim to provide
              practical and effective legal solutions.
            </p>
          </div>

          <div className="about-box">
            <div className="about-icon">⚖️</div>
            <h3>Our Mission</h3>
            <p>
              To provide accessible, professional and ethical legal services
              while protecting the rights and interests of every client.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;