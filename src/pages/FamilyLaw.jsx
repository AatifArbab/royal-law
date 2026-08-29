import React from "react";

const FamilyLaw = () => {
  return (
    <section className="page-section law-page">
      <div className="container">
        <div className="page-heading">
          <p>LEGAL SERVICES</p>
          <h1>Family Law</h1>
          <span>
            Professional legal assistance for family-related matters.
          </span>
        </div>

        <div className="law-content">
          <div className="law-main">
            <h2>Family Law Services</h2>

            <p>
              Family matters can be sensitive and complicated. We provide
              professional legal guidance to help clients understand their
              rights and available legal options.
            </p>

            <div className="law-list">
              <div>✓ Divorce & Khula</div>
              <div>✓ Child Custody</div>
              <div>✓ Child Maintenance</div>
              <div>✓ Family Disputes</div>
              <div>✓ Guardianship Matters</div>
              <div>✓ Marriage & Family Documentation</div>
            </div>
          </div>

          <div className="law-card">
            <div>⚖️</div>
            <h3>Need Family Legal Advice?</h3>
            <p>
              Speak with our legal team about your family law matter.
            </p>
            <a href="/contact">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyLaw;