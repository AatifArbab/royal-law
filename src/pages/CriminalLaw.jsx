import React from "react";

const CriminalLaw = () => {
  return (
    <section className="page-section law-page">
      <div className="container">
        <div className="page-heading">
          <p>LEGAL SERVICES</p>
          <h1>Criminal Law</h1>
          <span>
            Dedicated legal representation in criminal matters.
          </span>
        </div>

        <div className="law-content">
          <div className="law-main">
            <h2>Criminal Defense & Representation</h2>

            <p>
              Criminal cases require timely and professional legal assistance.
              We provide legal guidance and representation throughout the
              relevant legal proceedings.
            </p>

            <div className="law-list">
              <div>✓ Criminal Defense</div>
              <div>✓ Bail Matters</div>
              <div>✓ FIR Related Matters</div>
              <div>✓ Police & Investigation Matters</div>
              <div>✓ Criminal Trials</div>
              <div>✓ Appeals & Legal Representation</div>
            </div>
          </div>

          <div className="law-card">
            <div>⚔️</div>
            <h3>Need Criminal Legal Assistance?</h3>
            <p>
              Contact us for professional guidance regarding your legal matter.
            </p>
            <a href="/contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriminalLaw;