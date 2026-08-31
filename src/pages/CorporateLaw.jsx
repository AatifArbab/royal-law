import React from "react";
import Contact from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

const ContactPage = () => {
  return (
    <>
      {/* =====================================================
          PREMIUM CONTACT HERO
      ====================================================== */}

      <section className="contact-page-header">
        <div className="hero-overlay"></div>

        <div className="hero-decoration decoration-one"></div>
        <div className="hero-decoration decoration-two"></div>
        <div className="hero-decoration decoration-three"></div>

        <div className="contact-hero-container">
          <div className="hero-content">

            {/* Brand Label */}
            <div className="hero-label">
              <span className="label-line"></span>
              <span>ROYAL LAW</span>
              <span className="label-line"></span>
            </div>

            {/* Kicker */}
            <div className="hero-kicker">
              LEGAL CONSULTATION • ADVOCACY • REPRESENTATION
            </div>

            {/* Main Heading */}
            <h1>
              Trusted Counsel.
              <br />
              <span>Strategic Representation.</span>
            </h1>

            {/* Description */}
            <p className="hero-description">
              When your rights, family, property, business, or future are
              at stake, the right legal counsel matters. Royal Law provides
              professional legal guidance and representation with integrity,
              discretion, and an unwavering commitment to justice.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a
                href="#contact"
                className="hero-primary-btn"
              >
                Request a Consultation
                <span>→</span>
              </a>

              <a
                href="tel:03701675145"
                className="hero-secondary-btn"
              >
                <span className="phone-icon">☎</span>
                0370 1675145
              </a>
            </div>

            {/* Trust Points */}
            <div className="hero-trust">

              <div className="trust-item">
                <strong>01</strong>
                <div>
                  <span>Professional</span>
                  <small>Legal Guidance</small>
                </div>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>02</strong>
                <div>
                  <span>Confidential</span>
                  <small>Client Matters</small>
                </div>
              </div>

              <div className="trust-divider"></div>

              <div className="trust-item">
                <strong>03</strong>
                <div>
                  <span>Dedicated</span>
                  <small>Client Advocacy</small>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Scroll Indicator */}
        <div className="hero-bottom">
          <span>SCROLL TO CONNECT</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* =====================================================
          CONTACT SECTION
      ====================================================== */}

      <Contact />

      {/* =====================================================
          WHATSAPP BUTTON
      ====================================================== */}

      <WhatsAppButton />

      {/* =====================================================
          PAGE STYLES
      ====================================================== */}

      <style>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          box-sizing: border-box;
        }

        /* ===============================
           HERO
        =============================== */

        .contact-page-header {
          position: relative;
          min-height: 720px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 20% 25%,
              rgba(212, 175, 55, 0.08),
              transparent 30%
            ),
            radial-gradient(
              circle at 80% 75%,
              rgba(212, 175, 55, 0.06),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #070b14 0%,
              #0d1525 48%,
              #182338 100%
            );

          color: #ffffff;
        }

        /* Subtle overlay */

        .hero-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(7, 11, 20, 0.96),
              rgba(13, 21, 37, 0.72),
              rgba(7, 11, 20, 0.96)
            );

          pointer-events: none;
        }

        /* Elegant border */

        .contact-page-header::before {
          content: "";
          position: absolute;
          inset: 24px;

          border: 1px solid rgba(212, 175, 55, 0.12);

          pointer-events: none;
        }

        /* Gold bottom line */

        .contact-page-header::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;

          width: 220px;
          height: 2px;

          transform: translateX(-50%);

          background: linear-gradient(
            90deg,
            transparent,
            #d4af37,
            transparent
          );
        }

        /* ===============================
           DECORATIONS
        =============================== */

        .hero-decoration {
          position: absolute;

          border: 1px solid rgba(212, 175, 55, 0.1);

          transform: rotate(45deg);

          pointer-events: none;
        }

        .decoration-one {
          width: 220px;
          height: 220px;

          right: -110px;
          top: 70px;
        }

        .decoration-two {
          width: 150px;
          height: 150px;

          left: -75px;
          bottom: 80px;
        }

        .decoration-three {
          width: 70px;
          height: 70px;

          right: 12%;
          bottom: 18%;

          border-color: rgba(212, 175, 55, 0.06);
        }

        /* ===============================
           CONTAINER
        =============================== */

        .contact-hero-container {
          width: 92%;
          max-width: 1150px;

          margin: 0 auto;

          position: relative;
          z-index: 5;

          text-align: center;
        }

        .hero-content {
          max-width: 920px;
          margin: 0 auto;
        }

        /* ===============================
           BRAND LABEL
        =============================== */

        .hero-label {
          display: flex;
          align-items: center;
          justify-content: center;

          gap: 15px;

          color: #d4af37;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 5px;

          margin-bottom: 18px;
        }

        .label-line {
          width: 48px;
          height: 1px;

          background: #d4af37;

          opacity: 0.7;
        }

        /* ===============================
           KICKER
        =============================== */

        .hero-kicker {
          margin-bottom: 25px;

          color: rgba(255, 255, 255, 0.45);

          font-size: 11px;
          font-weight: 500;

          letter-spacing: 3px;
        }

        /* ===============================
           MAIN HEADING
        =============================== */

        .contact-page-header h1 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            3.2rem,
            6vw,
            5.4rem
          );

          font-weight: 500;

          line-height: 1.07;

          letter-spacing: -1.8px;

          color: #ffffff;
        }

        .contact-page-header h1 span {
          color: #d4af37;

          font-style: italic;
        }

        /* ===============================
           DESCRIPTION
        =============================== */

        .hero-description {
          max-width: 780px;

          margin: 32px auto 0;

          color: rgba(
            255,
            255,
            255,
            0.68
          );

          font-size: 17px;

          line-height: 1.9;

          font-weight: 400;
        }

        /* ===============================
           BUTTONS
        =============================== */

        .hero-actions {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 14px;

          margin-top: 40px;

          flex-wrap: wrap;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          min-height: 56px;

          padding: 0 28px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          border-radius: 2px;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 0.5px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }

        /* Primary */

        .hero-primary-btn {
          gap: 14px;

          background: #d4af37;

          color: #101827;

          box-shadow:
            0 12px 35px
            rgba(212, 175, 55, 0.18);
        }

        .hero-primary-btn span {
          font-size: 20px;

          transition:
            transform 0.3s ease;
        }

        .hero-primary-btn:hover {
          transform: translateY(-3px);

          box-shadow:
            0 18px 45px
            rgba(212, 175, 55, 0.3);
        }

        .hero-primary-btn:hover span {
          transform: translateX(5px);
        }

        /* Secondary */

        .hero-secondary-btn {
          gap: 10px;

          color: #ffffff;

          border:
            1px solid
            rgba(255, 255, 255, 0.18);

          background:
            rgba(255, 255, 255, 0.035);

          backdrop-filter: blur(10px);
        }

        .phone-icon {
          color: #d4af37;

          font-size: 15px;
        }

        .hero-secondary-btn:hover {
          transform: translateY(-3px);

          color: #d4af37;

          border-color:
            rgba(212, 175, 55, 0.55);

          background:
            rgba(212, 175, 55, 0.06);
        }

        /* ===============================
           TRUST SECTION
        =============================== */

        .hero-trust {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 30px;

          margin-top: 58px;
        }

        .trust-item {
          display: flex;

          align-items: center;

          gap: 12px;

          text-align: left;
        }

        .trust-item strong {
          color: #d4af37;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: 18px;

          font-weight: 500;
        }

        .trust-item div {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }

        .trust-item span {
          color:
            rgba(
              255,
              255,
              255,
              0.65
            );

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1.5px;

          font-weight: 600;
        }

        .trust-item small {
          color:
            rgba(
              255,
              255,
              255,
              0.32
            );

          font-size: 9px;

          letter-spacing: 0.5px;
        }

        .trust-divider {
          width: 1px;

          height: 30px;

          background:
            rgba(
              255,
              255,
              255,
              0.13
            );
        }

        /* ===============================
           SCROLL INDICATOR
        =============================== */

        .hero-bottom {
          position: absolute;

          bottom: 28px;
          left: 50%;

          transform:
            translateX(-50%);

          z-index: 5;

          display: flex;

          align-items: center;

          gap: 12px;

          color:
            rgba(
              255,
              255,
              255,
              0.3
            );

          font-size: 8px;

          letter-spacing: 2.5px;

          white-space: nowrap;
        }

        .scroll-line {
          width: 38px;
          height: 1px;

          background:
            rgba(
              212,
              175,
              55,
              0.5
            );
        }

        /* ===============================
           TABLET
        =============================== */

        @media (max-width: 768px) {

          .contact-page-header {
            min-height: 700px;

            padding:
              100px 0
              80px;
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
            font-size: 9px;

            letter-spacing: 2px;

            margin-bottom: 20px;
          }

          .contact-page-header h1 {
            font-size: 2.8rem;

            letter-spacing: -0.8px;
          }

          .hero-description {
            padding: 0 12px;

            margin-top: 25px;

            font-size: 15px;

            line-height: 1.8;
          }

          .hero-actions {
            flex-direction: column;

            width: 100%;

            margin-top: 32px;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            width: min(
              100%,
              310px
            );
          }

          .hero-trust {
            gap: 14px;

            margin-top: 45px;
          }

          .trust-item {
            flex-direction: column;

            gap: 5px;

            text-align: center;
          }

          .trust-item strong {
            font-size: 15px;
          }

          .trust-item div {
            align-items: center;
          }

          .trust-item span {
            font-size: 8px;

            letter-spacing: 1px;
          }

          .trust-item small {
            font-size: 8px;
          }

          .trust-divider {
            height: 40px;
          }

          .decoration-one {
            width: 120px;
            height: 120px;

            right: -65px;
          }

          .decoration-two {
            width: 90px;
            height: 90px;

            left: -50px;
          }

          .decoration-three {
            display: none;
          }

          .hero-bottom {
            display: none;
          }
        }

        /* ===============================
           SMALL MOBILE
        =============================== */

        @media (max-width: 480px) {

          .contact-page-header {
            min-height: 680px;

            padding:
              90px 0
              70px;
          }

          .contact-page-header h1 {
            font-size: 2.35rem;

            line-height: 1.12;
          }

          .hero-description {
            font-size: 14px;

            line-height: 1.75;
          }

          .hero-trust {
            gap: 8px;
          }

          .trust-divider {
            height: 35px;
          }

          .trust-item span {
            font-size: 7px;
          }

          .trust-item small {
            font-size: 7px;
          }

          .hero-primary-btn,
          .hero-secondary-btn {
            min-height: 52px;

            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
};

export default ContactPage;