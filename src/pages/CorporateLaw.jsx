import React from "react";

const CorporateLaw = () => {
  return (
    <section className="page-section law-page">
      <style>{`
        .law-page {
          background-color: #0a0f1a;
          color: #e8e8e8;
          padding: 110px 0;
        }

        .law-page .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Page Heading */
        .page-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 70px;
        }

        .page-heading p {
          color: #d4af37;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 16px;
        }

        .page-heading h1 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 44px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 18px;
          line-height: 1.15;
        }

        .page-heading span {
          font-size: 16px;
          color: #a8a8a8;
          line-height: 1.7;
        }

        /* Content Layout */
        .law-content {
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 50px;
          align-items: start;
        }

        .law-main h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 26px;
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 18px;
        }

        .law-main > p {
          font-size: 15.5px;
          line-height: 1.85;
          color: #a8a8a8;
          margin-bottom: 34px;
        }

        .law-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px 24px;
        }

        .law-list div {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          color: #d4d4d4;
          padding: 14px 16px;
          background: #12182a;
          border: 1px solid #232b3d;
          border-radius: 8px;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }

        .law-list div:hover {
          border-color: #d4af37;
          transform: translateY(-2px);
        }

        /* Sidebar Card */
        .law-card {
          background: linear-gradient(160deg, #12182a 0%, #0d1220 100%);
          border: 1px solid #232b3d;
          border-radius: 14px;
          padding: 40px 32px;
          text-align: center;
          position: sticky;
          top: 100px;
        }

        .law-card > div:first-child {
          width: 64px;
          height: 64px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: rgba(212, 175, 55, 0.08);
          border: 1px solid rgba(212, 175, 55, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
        }

        .law-card h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 19px;
          color: #ffffff;
          margin-bottom: 12px;
        }

        .law-card p {
          font-size: 14px;
          line-height: 1.7;
          color: #999999;
          margin-bottom: 26px;
        }

        .law-card a {
          display: inline-block;
          width: 100%;
          background-color: #d4af37;
          color: #0a0f1a;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
          padding: 14px 20px;
          border-radius: 8px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .law-card a:hover {
          background-color: #c29d2e;
          transform: translateY(-2px);
        }

        /* Responsive */
        @media (max-width: 850px) {
          .law-content {
            grid-template-columns: 1fr;
          }

          .law-card {
            position: static;
          }
        }

        @media (max-width: 600px) {
          .law-page {
            padding: 80px 0;
          }

          .page-heading h1 {
            font-size: 32px;
          }

          .law-list {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
              <div>✓ Contracts &amp; Documentation</div>
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