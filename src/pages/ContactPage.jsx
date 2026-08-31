import React from "react";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
  return (
    <>
      {/* ================================
          PREMIUM CONTACT HERO
      ================================= */}

      <section className="contact-page-header">
        <div className="hero-overlay"></div>

        <div className="hero-decoration decoration-one"></div>
        <div className="hero-decoration decoration-two"></div>

        <div className="contact-hero-container">
          <div className="hero-content">

            <div className="hero-label">
              <span className="label-line"></span>
              <span>ROYAL LAW</span>
              <span className="label-line"></span>
            </div>

            <div className="hero-kicker">
              LEGAL CONSULTATION & REPRESENTATION
            </div>

            <h1>
              Trusted Counsel.
              <br />
              <span>Strategic Representation.</span>
            </h1>

            <p className="hero-description">
              When your rights, family, property, business, or future are
              at stake, having the right legal counsel matters. Royal Law
              provides professional legal guidance and representation with
              integrity, discretion, and a commitment to justice.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="hero-primary-btn">
                Request a Consultation
                <span>→</span>
              </a>

              <a href="tel:03701675145" className="hero-secondary-btn">
                Call 0370 1675145
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <strong>01</strong>
                <span>Professional</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>02</strong>
                <span>Confidential</span>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>03</strong>
                <span>Client Focused</span>
              </div>
            </div>

          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO CONNECT</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ================================
          CONTACT SECTION
      ================================= */}

      <Contact />

      {/* ================================
          WHATSAPP BUTTON
      ================================= */}

      <WhatsAppButton />

      {/* ================================
          PAGE STYLES
      ================================= */}

      <style>{`
        * {
          box-sizing: border-box;
        }

        .contact-page-header {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background:
            radial-gradient(
              circle at 15% 20%,
              rgba(212, 175, 55, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 80%,
              rgba(212, 175, 55, 0.06),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #080d18 0%,
              #0d1525 45%,
              #172235 100%
            );
          color: #ffffff;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(8, 13, 24, 0.9),
              rgba(13, 21, 37, 0.7),
              rgba(8, 13, 24, 0.9)
            );
          pointer-events: none;
        }

        .contact-page-header::before {
          content: "";
          position: absolute;
          inset: 25px;
          border: 1px solid rgba(212, 175, 55, 0.1);
          pointer-events: none;
        }

        .contact-page-header::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -1px;
          transform: translateX(-50%);
          width: 180px;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent,
            #d4af37,
            transparent
          );
        }

        .hero-decoration {
          position: absolute;
          border: 1px solid rgba(212, 175, 55, 0.12);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .decoration-one {
          width: 180px;
          height: 180px;
          right: -90px;
          top: 90px;
        }

        .decoration-two {
          width: 120px;
          height: 120px;
          left: -60px;
          bottom: 100px;
        }

        .contact-hero-container {
          width: 92%;
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 3;
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          color: #d4af37;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 5px;
          margin-bottom: 20px;
        }

        .label-line {
          width: 45px;
          height: 1px;
          background: #d4af37;
          opacity: 0.7;
        }

        .hero-kicker {
          color: rgba(255, 255, 255, 0.55);
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        .contact-page-header h1 {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3rem, 6vw, 5.2rem);
          font-weight: 500;
          line-height: 1.08;
          letter-spacing: -1.5px;
          color: #ffffff;
        }

        .contact-page-header h1 span {
          color: #d4af37;
          font-style: italic;
        }

        .hero-description {
          max-width: 760px;
          margin: 30px auto 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 17px;
          line-height: 1.9;
          font-weight: 400;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 54px;
          padding: 0 27px;
          border-radius: 2px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.4px;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            color 0.3s ease;
        }

        .hero-primary-btn {
          gap: 14px;
          background: #d4af37;
          color: #101827;
          box-shadow: 0 12px 35px rgba(212, 175, 55, 0.18);
        }

        .hero-primary-btn span {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .hero-primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 45px rgba(212, 175, 55, 0.28);
        }

        .hero-primary-btn:hover span {
          transform: translateX(5px);
        }

        .hero-secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #ffffff;
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
        }

        .hero-secondary-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(212, 175, 55, 0.6);
          color: #d4af37;
          background: rgba(212, 175, 55, 0.05);
        }

        .hero-trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 25px;
          margin-top: 55px;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .trust-item strong {
          color: #d4af37;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          font-weight: 500;
        }

        .trust-item span {
          color: rgba(255, 255, 255, 0.58);
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .trust-divider {
          width: 1px;
          height: 25px;
          background: rgba(255, 255, 255, 0.15);
        }

        .hero-bottom {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 12px;
          color: rgba(255, 255, 255, 0.35);
          font-size: 9px;
          letter-spacing: 2px;
          white-space: nowrap;
        }

        .scroll-line {
          width: 35px;
          height: 1px;
          background: rgba(212, 175, 55, 0.5);
        }

        @media (max-width: 768px) {
          .contact-page-header {
            min-height: 680px;
            padding: 100px 0 70px;
          }

          .contact-page-header::before {
            inset: 12px;
          }

          .hero-label {
            gap: 9px;
            font-size: 10px;
            letter-spacing: 3px;
          }

          .label-line {
            width: 28px;
          }

          .hero-kicker {
            font-size: 10px;
            letter-spacing: 2px;
          }

          .contact-page-header h1 {
            font-size: 2.8rem;
            letter-spacing: -0.8px;
          }

          .hero-description {
            font-size: 15px;
            line-height: 1.8;
            padding: 0 10px;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            width: min(100%, 300px);
          }

          .hero-trust {
            gap: 12px;
            margin-top: 42px;
          }

          .trust-item {
            flex-direction: column;
            gap: 4px;
          }

          .trust-item strong {
            font-size: 15px;
          }

          .trust-item span {
            font-size: 9px;
            letter-spacing: 1px;
          }

          .trust-divider {
            height: 35px;
          }

          .decoration-one {
            width: 120px;
            height: 120px;
            right: -70px;
          }

          .decoration-two {
            width: 90px;
            height: 90px;
            left: -55px;
          }

          .hero-bottom {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .contact-page-header h1 {
            font-size: 2.35rem;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-trust {
            gap: 8px;
          }

          .trust-divider {
            height: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;