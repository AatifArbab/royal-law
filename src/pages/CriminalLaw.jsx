import React from "react";
import { Link } from "react-router-dom";

const CriminalLaw = () => {
  const services = [
    {
      number: "01",
      title: "Criminal Defense",
      description:
        "Professional legal representation and defense in criminal proceedings, with a focus on protecting your legal rights and interests.",
    },
    {
      number: "02",
      title: "Bail Matters",
      description:
        "Legal assistance and representation in bail-related matters, including pre-arrest and post-arrest proceedings.",
    },
    {
      number: "03",
      title: "FIR Related Matters",
      description:
        "Guidance regarding FIR registration, cancellation, quashing and related criminal legal proceedings.",
    },
    {
      number: "04",
      title: "Police & Investigation",
      description:
        "Legal guidance during investigation procedures and interaction with relevant law-enforcement authorities.",
    },
    {
      number: "05",
      title: "Criminal Trials",
      description:
        "Dedicated representation and legal advocacy throughout criminal trial proceedings before the appropriate courts.",
    },
    {
      number: "06",
      title: "Appeals & Revision",
      description:
        "Professional legal assistance in criminal appeals, revisions and other available legal remedies.",
    },
  ];

  const principles = [
    {
      number: "01",
      title: "Protect Your Rights",
      text: "We work to ensure that your legal rights and interests are properly represented throughout the proceedings.",
    },
    {
      number: "02",
      title: "Clear Legal Guidance",
      text: "We explain your legal position and available options in a clear and practical manner.",
    },
    {
      number: "03",
      title: "Strategic Representation",
      text: "Every matter requires a careful approach based on its facts, circumstances and applicable law.",
    },
  ];

  return (
    <main className="criminal-law-page">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="criminal-hero">

        <div className="criminal-hero-glow glow-one"></div>
        <div className="criminal-hero-glow glow-two"></div>

        <div className="criminal-hero-border"></div>

        <div className="criminal-container">
          <div className="criminal-hero-content">

            <div className="criminal-eyebrow">
              <span></span>
              ROYAL LAW
              <span></span>
            </div>

            <p className="criminal-kicker">
              CRIMINAL LAW • DEFENSE • REPRESENTATION
            </p>

            <h1>
              Strong Legal Defense.
              <br />
              <em>Professional Representation.</em>
            </h1>

            <p className="criminal-hero-description">
              Facing a criminal allegation or legal proceeding can be
              challenging. Royal Law provides professional legal guidance,
              representation and advocacy designed to protect your rights
              and help you understand your available legal options.
            </p>

            <div className="criminal-hero-actions">
              <Link
                to="/contact"
                className="criminal-primary-btn"
              >
                Request Consultation
                <span>→</span>
              </Link>

              <a
                href="tel:03701675145"
                className="criminal-secondary-btn"
              >
                <span>☎</span>
                0370 1675145
              </a>
            </div>

            <div className="criminal-trust-row">

              <div>
                <strong>01</strong>
                <span>Professional</span>
              </div>

              <i></i>

              <div>
                <strong>02</strong>
                <span>Confidential</span>
              </div>

              <i></i>

              <div>
                <strong>03</strong>
                <span>Dedicated</span>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          INTRODUCTION
      ====================================================== */}

      <section className="criminal-intro">

        <div className="criminal-container">

          <div className="intro-grid">

            <div className="intro-heading">

              <span className="gold-label">
                CRIMINAL LAW
              </span>

              <h2>
                Professional Defense
                <br />
                <span>When It Matters Most.</span>
              </h2>

            </div>

            <div className="intro-text">

              <p>
                Criminal proceedings can have serious consequences for an
                individual's personal, professional and family life.
                Understanding your legal position and obtaining timely
                legal assistance can be essential.
              </p>

              <p>
                At Royal Law, we approach criminal matters with
                professionalism, discretion and careful attention to the
                facts and applicable law. Our objective is to provide
                clear legal guidance and effective representation at every
                appropriate stage of the matter.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="criminal-services">

        <div className="criminal-container">

          <div className="services-heading">

            <div>
              <span className="gold-label">
                OUR SERVICES
              </span>

              <h2>
                Criminal Law
                <br />
                <span>Legal Services</span>
              </h2>
            </div>

            <p>
              Legal assistance across key areas of criminal law and
              criminal proceedings, subject to the facts and circumstances
              of each individual matter.
            </p>

          </div>

          <div className="services-grid">

            {services.map((service) => (
              <article
                className="criminal-service-card"
                key={service.number}
              >

                <div className="service-number">
                  {service.number}
                </div>

                <div className="service-line"></div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <Link to="/contact">
                  Discuss Your Matter
                  <span>→</span>
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          APPROACH
      ====================================================== */}

      <section className="criminal-approach">

        <div className="criminal-container">

          <div className="approach-header">

            <span className="gold-label">
              OUR APPROACH
            </span>

            <h2>
              Legal Strategy Built Around
              <br />
              <span>Your Circumstances.</span>
            </h2>

            <p>
              Every criminal matter is different. Our approach begins with
              understanding the facts, assessing the legal position and
              identifying the appropriate course of action.
            </p>

          </div>

          <div className="principles-grid">

            {principles.map((item) => (
              <div
                className="principle-card"
                key={item.number}
              >

                <span className="principle-number">
                  {item.number}
                </span>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* =====================================================
          CONFIDENTIALITY BANNER
      ====================================================== */}

      <section className="criminal-confidence">

        <div className="criminal-container">

          <div className="confidence-box">

            <div className="confidence-symbol">
              ⚖
            </div>

            <div className="confidence-content">

              <span>
                PROFESSIONAL • PRIVATE • CONFIDENTIAL
              </span>

              <h2>
                Your Legal Matter Deserves
                <br />
                <em>Serious Attention.</em>
              </h2>

              <p>
                Discuss your circumstances with our legal team and receive
                professional guidance regarding the appropriate next steps.
              </p>

            </div>

            <Link
              to="/contact"
              className="confidence-btn"
            >
              Contact Royal Law
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="criminal-final-cta">

        <div className="criminal-container">

          <div className="final-cta-content">

            <span className="gold-label">
              NEED LEGAL ASSISTANCE?
            </span>

            <h2>
              Speak With Us About
              <br />
              <span>Your Criminal Matter.</span>
            </h2>

            <p>
              Contact Royal Law for a confidential consultation and
              professional guidance regarding your legal concerns.
            </p>

            <div className="final-actions">

              <Link
                to="/contact"
                className="final-primary-btn"
              >
                Request a Consultation
                <span>→</span>
              </Link>

              <a
                href="tel:03701675145"
                className="final-phone"
              >
                Call 0370 1675145
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style>{`

        /* =====================================================
           GLOBAL
        ====================================================== */

        .criminal-law-page {
          width: 100%;
          overflow: hidden;
          background: #f8f7f3;
          color: #182131;
        }

        .criminal-container {
          width: min(1160px, 92%);
          margin: 0 auto;
        }

        .gold-label {
          display: inline-block;
          color: #b18a28;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .criminal-hero {
          position: relative;
          min-height: 720px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            radial-gradient(
              circle at 18% 30%,
              rgba(190, 151, 54, 0.09),
              transparent 30%
            ),
            radial-gradient(
              circle at 85% 70%,
              rgba(190, 151, 54, 0.06),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #070b13 0%,
              #0d1524 50%,
              #172338 100%
            );

          color: #ffffff;
        }

        .criminal-hero::before {
          content: "";
          position: absolute;
          inset: 25px;

          border: 1px solid
            rgba(212, 175, 55, 0.12);

          pointer-events: none;
        }

        .criminal-hero::after {
          content: "";

          position: absolute;
          bottom: 0;
          left: 50%;

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

        .criminal-hero-glow {
          position: absolute;

          border-radius: 50%;

          border: 1px solid
            rgba(212, 175, 55, 0.1);

          transform: rotate(45deg);
        }

        .glow-one {
          width: 240px;
          height: 240px;

          right: -120px;
          top: 100px;
        }

        .glow-two {
          width: 170px;
          height: 170px;

          left: -85px;
          bottom: 70px;
        }

        .criminal-hero-border {
          position: absolute;

          width: 450px;
          height: 450px;

          right: -220px;
          bottom: -250px;

          border-radius: 50%;

          border: 1px solid
            rgba(212, 175, 55, 0.07);
        }

        .criminal-hero-content {
          position: relative;
          z-index: 5;

          max-width: 920px;

          margin: 0 auto;

          text-align: center;
        }

        /* =====================================================
           HERO LABEL
        ====================================================== */

        .criminal-eyebrow {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 15px;

          margin-bottom: 20px;

          color: #d4af37;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 5px;
        }

        .criminal-eyebrow span {
          width: 45px;
          height: 1px;

          background: #d4af37;

          opacity: 0.7;
        }

        .criminal-kicker {
          margin: 0 0 24px;

          color:
            rgba(255, 255, 255, 0.45);

          font-size: 11px;

          letter-spacing: 3px;

          font-weight: 500;
        }

        /* =====================================================
           HERO TITLE
        ====================================================== */

        .criminal-hero h1 {
          margin: 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            3rem,
            6vw,
            5.4rem
          );

          line-height: 1.08;

          font-weight: 500;

          letter-spacing: -1.7px;
        }

        .criminal-hero h1 em {
          color: #d4af37;

          font-style: italic;
        }

        .criminal-hero-description {
          max-width: 780px;

          margin: 32px auto 0;

          color:
            rgba(255, 255, 255, 0.68);

          font-size: 16px;

          line-height: 1.9;
        }

        /* =====================================================
           HERO BUTTONS
        ====================================================== */

        .criminal-hero-actions {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 14px;

          margin-top: 40px;

          flex-wrap: wrap;
        }

        .criminal-primary-btn,
        .criminal-secondary-btn {
          min-height: 55px;

          padding: 0 28px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          text-decoration: none;

          font-size: 13px;

          font-weight: 700;

          border-radius: 2px;

          transition:
            0.3s ease;
        }

        .criminal-primary-btn {
          gap: 14px;

          background: #d4af37;

          color: #111827;

          box-shadow:
            0 14px 35px
            rgba(212, 175, 55, 0.18);
        }

        .criminal-primary-btn span {
          font-size: 19px;

          transition:
            transform 0.3s ease;
        }

        .criminal-primary-btn:hover {
          transform: translateY(-3px);

          box-shadow:
            0 18px 45px
            rgba(212, 175, 55, 0.3);
        }

        .criminal-primary-btn:hover span {
          transform: translateX(5px);
        }

        .criminal-secondary-btn {
          gap: 10px;

          color: #ffffff;

          border:
            1px solid
            rgba(255, 255, 255, 0.18);

          background:
            rgba(255, 255, 255, 0.03);

          backdrop-filter: blur(10px);
        }

        .criminal-secondary-btn span {
          color: #d4af37;
        }

        .criminal-secondary-btn:hover {
          transform: translateY(-3px);

          color: #d4af37;

          border-color:
            rgba(212, 175, 55, 0.55);
        }

        /* =====================================================
           TRUST
        ====================================================== */

        .criminal-trust-row {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 30px;

          margin-top: 55px;
        }

        .criminal-trust-row div {
          display: flex;

          align-items: center;

          gap: 10px;
        }

        .criminal-trust-row strong {
          color: #d4af37;

          font-family:
            Georgia,
            serif;

          font-size: 17px;

          font-weight: 500;
        }

        .criminal-trust-row span {
          color:
            rgba(255, 255, 255, 0.5);

          font-size: 10px;

          text-transform: uppercase;

          letter-spacing: 1.5px;
        }

        .criminal-trust-row i {
          width: 1px;

          height: 25px;

          background:
            rgba(255, 255, 255, 0.14);
        }

        /* =====================================================
           INTRO
        ====================================================== */

        .criminal-intro {
          padding: 110px 0;

          background: #ffffff;
        }

        .intro-grid {
          display: grid;

          grid-template-columns:
            1fr 1.15fr;

          gap: 90px;

          align-items: center;
        }

        .intro-heading h2 {
          margin: 18px 0 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            2.4rem,
            4vw,
            3.8rem
          );

          line-height: 1.12;

          font-weight: 500;

          color: #172033;
        }

        .intro-heading h2 span {
          color: #b18a28;

          font-style: italic;
        }

        .intro-text {
          border-left:
            2px solid #d4af37;

          padding-left: 32px;
        }

        .intro-text p {
          margin: 0 0 20px;

          color: #5c6472;

          font-size: 16px;

          line-height: 1.9;
        }

        .intro-text p:last-child {
          margin-bottom: 0;
        }

        /* =====================================================
           SERVICES
        ====================================================== */

        .criminal-services {
          padding: 115px 0;

          background: #f5f4ef;
        }

        .services-heading {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 80px;

          align-items: end;

          margin-bottom: 55px;
        }

        .services-heading h2,
        .approach-header h2 {
          margin: 17px 0 0;

          font-family:
            Georgia,
            "Times New Roman",
            serif;

          font-size: clamp(
            2.4rem,
            4vw,
            3.7rem
          );

          line-height: 1.12;

          font-weight: 500;

          color: #172033;
        }

        .services-heading h2 span,
        .approach-header h2 span {
          color: #b18a28;

          font-style: italic;
        }

        .services-heading > p {
          margin: 0;

          color: #6c7380;

          font-size: 15px;

          line-height: 1.85;
        }

        .services-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 18px;
        }

        .criminal-service-card {
          position: relative;

          min-height: 320px;

          padding: 32px;

          background: #ffffff;

          border:
            1px solid #e7e4dc;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .criminal-service-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(177, 138, 40, 0.45);

          box-shadow:
            0 20px 45px
            rgba(20, 28, 42, 0.09);
        }

        .service-number {
          color: #b18a28;

          font-family:
            Georgia,
            serif;

          font-size: 18px;
        }

        .service-line {
          width: 35px;
          height: 1px;

          margin: 20px 0 25px;

          background: #d4af37;
        }

        .criminal-service-card h3 {
          margin: 0 0 15px;

          color: #182131;

          font-family:
            Georgia,
            serif;

          font-size: 23px;

          font-weight: 500;
        }

        .criminal-service-card p {
          margin: 0;

          color: #6b7280;

          font-size: 14px;

          line-height: 1.8;
        }

        .criminal-service-card a {
          position: absolute;

          bottom: 28px;
          left: 32px;

          display: inline-flex;

          align-items: center;

          gap: 10px;

          color: #9b7620;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 1.2px;
        }

        .criminal-service-card a span {
          font-size: 17px;

          transition:
            transform 0.3s ease;
        }

        .criminal-service-card:hover a span {
          transform: translateX(5px);
        }

        /* =====================================================
           APPROACH
        ====================================================== */

        .criminal-approach {
          padding: 115px 0;

          background: #ffffff;
        }

        .approach-header {
          max-width: 800px;

          margin: 0 auto 60px;

          text-align: center;
        }

        .approach-header p {
          max-width: 680px;

          margin: 25px auto 0;

          color: #6b7280;

          font-size: 15px;

          line-height: 1.85;
        }

        .principles-grid {
          display: grid;

          grid-template-columns:
            repeat(3, 1fr);

          gap: 20px;
        }

        .principle-card {
          padding: 35px;

          background: #faf9f6;

          border-top:
            2px solid #d4af37;
        }

        .principle-number {
          display: block;

          margin-bottom: 22px;

          color: #b18a28;

          font-family:
            Georgia,
            serif;

          font-size: 16px;
        }

        .principle-card h3 {
          margin: 0 0 14px;

          color: #182131;

          font-family:
            Georgia,
            serif;

          font-size: 21px;

          font-weight: 500;
        }

        .principle-card p {
          margin: 0;

          color: #6b7280;

          font-size: 14px;

          line-height: 1.8;
        }

        /* =====================================================
           CONFIDENCE
        ====================================================== */

        .criminal-confidence {
          padding: 35px 0;

          background: #f5f4ef;
        }

        .confidence-box {
          display: flex;

          align-items: center;

          gap: 35px;

          padding: 42px 48px;

          background:
            linear-gradient(
              135deg,
              #111a2a,
              #1b293f
            );

          color: #ffffff;

          position: relative;

          overflow: hidden;
        }

        .confidence-box::after {
          content: "";

          position: absolute;

          width: 260px;
          height: 260px;

          right: -120px;
          top: -130px;

          border-radius: 50%;

          border:
            1px solid
            rgba(212, 175, 55, 0.16);
        }

        .confidence-symbol {
          width: 65px;
          height: 65px;

          flex-shrink: 0;

          display: flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid
            rgba(212, 175, 55, 0.45);

          color: #d4af37;

          font-size: 28px;
        }

        .confidence-content {
          flex: 1;
        }

        .confidence-content > span {
          color: #d4af37;

          font-size: 9px;

          font-weight: 800;

          letter-spacing: 2px;
        }

        .confidence-content h2 {
          margin: 10px 0;

          font-family:
            Georgia,
            serif;

          font-size: 30px;

          line-height: 1.2;

          font-weight: 500;
        }

        .confidence-content h2 em {
          color: #d4af37;

          font-style: italic;
        }

        .confidence-content p {
          max-width: 620px;

          margin: 0;

          color:
            rgba(255, 255, 255, 0.55);

          font-size: 13px;

          line-height: 1.7;
        }

        .confidence-btn {
          position: relative;

          z-index: 2;

          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 12px;

          padding: 15px 22px;

          background: #d4af37;

          color: #111827;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;

          text-transform: uppercase;

          letter-spacing: 0.8px;
        }

        /* =====================================================
           FINAL CTA
        ====================================================== */

        .criminal-final-cta {
          padding: 120px 0;

          text-align: center;

          background: #ffffff;
        }

        .final-cta-content {
          max-width: 780px;

          margin: 0 auto;
        }

        .final-cta-content h2 {
          margin: 18px 0;

          font-family:
            Georgia,
            serif;

          font-size: clamp(
            2.5rem,
            5vw,
            4.3rem
          );

          line-height: 1.1;

          font-weight: 500;

          color: #172033;
        }

        .final-cta-content h2 span {
          color: #b18a28;

          font-style: italic;
        }

        .final-cta-content p {
          max-width: 650px;

          margin: 0 auto;

          color: #6b7280;

          font-size: 15px;

          line-height: 1.85;
        }

        .final-actions {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 15px;

          margin-top: 35px;

          flex-wrap: wrap;
        }

        .final-primary-btn {
          display: inline-flex;

          align-items: center;

          gap: 13px;

          min-height: 54px;

          padding: 0 27px;

          background: #172033;

          color: #ffffff;

          text-decoration: none;

          font-size: 12px;

          font-weight: 800;

          transition:
            0.3s ease;
        }

        .final-primary-btn span {
          color: #d4af37;

          font-size: 18px;
        }

        .final-primary-btn:hover {
          transform: translateY(-3px);

          background: #0d1524;
        }

        .final-phone {
          min-height: 54px;

          display: inline-flex;

          align-items: center;

          padding: 0 25px;

          border:
            1px solid #ddd9ce;

          color: #3e4653;

          text-decoration: none;

          font-size: 12px;

          font-weight: 700;

          transition:
            0.3s ease;
        }

        .final-phone:hover {
          border-color: #b18a28;

          color: #9b7620;

          transform: translateY(-3px);
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 900px) {

          .services-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

          .intro-grid {
            gap: 50px;
          }

          .confidence-box {
            flex-wrap: wrap;
          }

          .confidence-content {
            min-width: 60%;
          }

        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 700px) {

          .criminal-hero {
            min-height: 700px;

            padding: 100px 0 75px;
          }

          .criminal-hero::before {
            inset: 12px;
          }

          .criminal-eyebrow {
            gap: 9px;

            font-size: 9px;

            letter-spacing: 3px;
          }

          .criminal-eyebrow span {
            width: 27px;
          }

          .criminal-kicker {
            font-size: 8px;

            letter-spacing: 1.8px;
          }

          .criminal-hero h1 {
            font-size: 2.7rem;

            letter-spacing: -0.7px;
          }

          .criminal-hero-description {
            padding: 0 10px;

            margin-top: 25px;

            font-size: 14px;

            line-height: 1.8;
          }

          .criminal-hero-actions {
            flex-direction: column;

            width: 100%;

            margin-top: 30px;
          }

          .criminal-primary-btn,
          .criminal-secondary-btn {
            width: min(100%, 310px);
          }

          .criminal-trust-row {
            gap: 12px;

            margin-top: 43px;
          }

          .criminal-trust-row div {
            flex-direction: column;

            gap: 4px;
          }

          .criminal-trust-row span {
            font-size: 8px;

            letter-spacing: 1px;
          }

          .criminal-trust-row strong {
            font-size: 14px;
          }

          .criminal-trust-row i {
            height: 35px;
          }

          .criminal-intro,
          .criminal-services,
          .criminal-approach {
            padding: 80px 0;
          }

          .intro-grid,
          .services-heading {
            grid-template-columns: 1fr;

            gap: 35px;
          }

          .intro-text {
            padding-left: 22px;
          }

          .services-grid {
            grid-template-columns: 1fr;

            gap: 15px;
          }

          .criminal-service-card {
            min-height: 300px;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }

          .confidence-box {
            padding: 32px 25px;

            flex-direction: column;

            align-items: flex-start;

            gap: 25px;
          }

          .confidence-content h2 {
            font-size: 26px;
          }

          .confidence-btn {
            width: 100%;

            justify-content: center;
          }

          .criminal-final-cta {
            padding: 85px 0;
          }

          .final-actions {
            flex-direction: column;
          }

          .final-primary-btn,
          .final-phone {
            width: min(100%, 310px);

            justify-content: center;
          }

        }

        /* =====================================================
           SMALL MOBILE
        ====================================================== */

        @media (max-width: 420px) {

          .criminal-hero h1 {
            font-size: 2.25rem;
          }

          .criminal-hero-description {
            font-size: 13px;
          }

          .criminal-trust-row {
            gap: 7px;
          }

          .criminal-trust-row span {
            font-size: 7px;
          }

          .criminal-trust-row i {
            height: 30px;
          }

          .intro-heading h2,
          .services-heading h2,
          .approach-header h2 {
            font-size: 2.25rem;
          }

        }

      `}</style>

    </main>
  );
};

export default CriminalLaw;