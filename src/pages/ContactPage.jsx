import React from "react";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
  return (
    <>
      <section className="contact-page-header">
        <div className="container">
          <span className="section-tag">
            ROYAL LAW • LEGAL CONSULTATION
          </span>

          <h1>
            Schedule a Confidential
            <span> Legal Consultation</span>
          </h1>

          <p>
            At Royal Law, we provide trusted legal advice, strategic
            representation, and practical solutions for individuals,
            families, and businesses. Our commitment is to protect your
            rights, safeguard your interests, and deliver professional
            legal services with integrity and excellence.
          </p>

          <div className="header-badges">
            <span>Integrity</span>
            <span>Advocacy</span>
            <span>Justice</span>
          </div>
        </div>
      </section>

      <Contact />
      <WhatsAppButton />

      <style>{`
        .contact-page-header {
          position: relative;
          padding: 140px 20px 100px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #0b1120,
            #172033,
            #1e293b
          );
          color: #fff;
          overflow: hidden;
        }

        .contact-page-header::before {
          content: "";
          position: absolute;
          width: 350px;
          height: 350px;
          background: rgba(212, 175, 55, 0.08);
          border-radius: 50%;
          top: -100px;
          right: -100px;
        }

        .contact-page-header::after {
          content: "";
          position: absolute;
          width: 250px;
          height: 250px;
          background: rgba(212, 175, 55, 0.05);
          border-radius: 50%;
          bottom: -80px;
          left: -80px;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-tag {
          display: inline-block;
          color: #d4af37;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .contact-page-header h1 {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 25px;
        }

        .contact-page-header h1 span {
          color: #d4af37;
        }

        .contact-page-header p {
          font-size: 1.1rem;
          line-height: 1.9;
          color: rgba(255, 255, 255, 0.85);
          max-width: 750px;
          margin: 0 auto;
        }

        .header-badges {
          margin-top: 35px;
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .header-badges span {
          padding: 10px 20px;
          border: 1px solid rgba(212, 175, 55, 0.4);
          border-radius: 30px;
          color: #d4af37;
          font-size: 14px;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(5px);
        }

        @media (max-width: 768px) {
          .contact-page-header {
            padding: 110px 20px 80px;
          }

          .contact-page-header h1 {
            font-size: 2.4rem;
          }

          .contact-page-header p {
            font-size: 1rem;
          }

          .header-badges {
            gap: 10px;
          }

          .header-badges span {
            font-size: 12px;
            padding: 8px 14px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;