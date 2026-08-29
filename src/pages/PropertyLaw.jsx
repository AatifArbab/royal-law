import React from "react";

const PropertyLaw = () => {
  return (
    <section className="page-section law-page">
      <div className="container">
        <div className="page-heading">
          <p>LEGAL SERVICES</p>
          <h1>Property Law</h1>
          <span>
            Legal support for property transactions and disputes.
          </span>
        </div>

        <div className="law-content">
          <div className="law-main">
            <h2>Property Legal Services</h2>

            <p>
              Property disputes and transactions can involve complex legal
              documentation and ownership issues. We assist clients with
              property-related legal matters.
            </p>

            <div className="law-list">
              <div>✓ Property Disputes</div>
              <div>✓ Ownership Issues</div>
              <div>✓ Sale & Purchase Agreements</div>
              <div>✓ Property Documentation</div>
              <div>✓ Inheritance Property Matters</div>
              <div>✓ Possession & Eviction Matters</div>
            </div>
          </div>

          <div className="law-card">
            <div>🏠</div>
            <h3>Property Dispute?</h3>
            <p>
              Get professional legal guidance regarding your property matter.
            </p>
            <a href="/contact">Book Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLaw;