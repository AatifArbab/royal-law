import React from "react";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
  return (
    <>
      <section className="contact-page-header">
        <div className="container">
          <span className="section-tag">CONTACT ROYAL LAW</span>

          <h1>Get Professional Legal Assistance</h1>

          <p>
            Our legal team is ready to provide trusted guidance and
            professional representation for individuals, families, and
            businesses. Contact us today for reliable legal support and
            confidential consultation.
          </p>
        </div>
      </section>

      <Contact />
      <WhatsAppButton />

      <style>{`
        .contact-page-header {
          padding: 120px 20px 80px;
          text-align: center;
          background: linear-gradient(
            135deg,
            #0f172a,
            #1e293b
          );
          color: white;
        }

        .container {
          max-width: 850px;
          margin: 0 auto;
        }

        .section-tag {
          display: inline-block;
          color: #d4af37;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .contact-page-header h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .contact-page-header p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
        }

        @media (max-width: 768px) {
          .contact-page-header {
            padding: 100px 20px 60px;
          }

          .contact-page-header h1 {
            font-size: 2.2rem;
          }

          .contact-page-header p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;