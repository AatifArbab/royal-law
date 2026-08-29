import React from "react";

const CorporateLaw = () => {
  return (
    <section className="page-section law-page">
      <div className="container">
        <div className="page-heading">
          <p>LEGAL SERVICES</p>
          <h1>Corporate Law</h1>
          <span>
            Legal solutions for businesses and corporate clients.
          </span>
        </div>

        <div className="law-content">
          <div className="law-main">
            <h2>Corporate Legal Services</h2>

            <p>
              Businesses need reliable legal advice to protect their interests
              and operate effectively. We provide legal assistance for a range
              of corporate and commercial matters.
            </p>

            <div className="law-list">
              <div>✓ Business Agreements</div>
              <div>✓ Contracts & Documentation</div>
              <div>✓ Corporate Disputes</div>
              <div>✓ Partnership Matters</div>
              <div>✓ Commercial Transactions</div>
              <div>✓ Legal Consultancy for Businesses</div>
            </div>
          </div>

          <div className="law-card">
            <div>🏢</div>
            <h3>Business Legal Support</h3>
            <p>
              Protect your business with professional legal advice.
            </p>
            <a href="/contact">Get Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateLaw;