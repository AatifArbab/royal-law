import React from "react";

const PropertyLaw = () => {
  const services = [
    {
      number: "01",
      title: "Property Disputes",
      description:
        "Professional legal guidance and representation in disputes involving residential, commercial, agricultural, and other property interests.",
    },
    {
      number: "02",
      title: "Ownership & Title",
      description:
        "Assistance with ownership claims, title-related concerns, verification issues, and disputes concerning property rights.",
    },
    {
      number: "03",
      title: "Sale & Purchase",
      description:
        "Legal support for property sale and purchase transactions, agreements, documentation, and related legal considerations.",
    },
    {
      number: "04",
      title: "Property Documentation",
      description:
        "Guidance regarding agreements, legal documents, records, and other documentation connected with property matters.",
    },
    {
      number: "05",
      title: "Inheritance Property",
      description:
        "Legal assistance concerning inherited property, succession-related disputes, and the rights of legal heirs.",
    },
    {
      number: "06",
      title: "Possession & Eviction",
      description:
        "Professional representation in matters involving possession, recovery of property, unlawful occupation, and eviction proceedings.",
    },
  ];

  return (
    <section className="property-law-page">
      <style>{`
        .property-law-page {
          --gold: #c9a227;
          --gold-light: #e4c45a;
          --navy: #08111f;
          --navy-soft: #101c2e;
          --text: #172033;
          --muted: #687386;
          --border: #e6e9ee;
          --white: #ffffff;

          width: 100%;
          min-height: 100vh;
          background: #fafafa;
          color: var(--text);
          overflow: hidden;
        }

        .property-law-page * {
          box-sizing: border-box;
        }

        /* =========================
           HERO
        ========================= */

        .property-hero {
          position: relative;
          min-height: 680px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 20px 100px;
          text-align: center;
          color: #ffffff;
          overflow: hidden;

          background:
            radial-gradient(
              circle at 12% 20%,
              rgba(201, 162, 39, 0.13),
              transparent 27%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(201, 162, 39, 0.08),
              transparent 28%
            ),
            linear-gradient(
              135deg,
              #060c17 0%,
              #0c1626 50%,
              #17263b 100%
            );
        }

        .property-hero::before {
          content: "";
          position: absolute;
          inset: 24px;
          border: 1px solid rgba(201, 162, 39, 0.14);
          pointer-events: none;
        }

        .property-hero::after {
          content: "";
          position: absolute;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(201, 162, 39, 0.08);
          border-radius: 50%;
          left: -280px;
          top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .property-hero-decoration {
          position: absolute;
          width: 190px;
          height: 190px;
          right: -95px;
          top: 100px;
          border: 1px solid rgba(201, 162, 39, 0.12);
          transform: rotate(45deg);
          pointer-events: none;
        }

        .property-hero-content {
          position: relative;
          z-index: 3;
          width: 100%;
          max-width: 920px;
          margin: 0 auto;
        }

        .property-eyebrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 25px;

          color: var(--gold-light);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
        }

        .property-eyebrow::before,
        .property-eyebrow::after {
          content: "";
          width: 40px;
          height: 1px;
          background: var(--gold);
          opacity: 0.75;
        }

        .property-kicker {
          margin-bottom: 20px;
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .property-hero h1 {
          margin: 0;

          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3.4rem, 7vw, 5.8rem);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -2px;
        }

        .property-hero h1 span {
          display: block;
          margin-top: 14px;
          color: var(--gold-light);
          font-style: italic;
        }

        .property-hero-description {
          max-width: 760px;
          margin: 32px auto 0;

          color: rgba(255, 255, 255, 0.7);
          font-size: 17px;
          line-height: 1.9;
        }

        .property-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-top: 38px;
          flex-wrap: wrap;
        }

        .property-primary-btn,
        .property-secondary-btn {
          min-height: 54px;
          padding: 0 27px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.4px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease;
        }

        .property-primary-btn {
          gap: 14px;
          background: var(--gold);
          color: #101827;
          box-shadow: 0 12px 35px rgba(201, 162, 39, 0.18);
        }

        .property-primary-btn span {
          font-size: 20px;
          transition: transform 0.3s ease;
        }

        .property-primary-btn:hover {
          transform: translateY(-3px);
          background: var(--gold-light);
          box-shadow: 0 18px 45px rgba(201, 162, 39, 0.25);
        }

        .property-primary-btn:hover span {
          transform: translateX(5px);
        }

        .property-secondary-btn {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.03);
          color: #ffffff;
          backdrop-filter: blur(10px);
        }

        .property-secondary-btn:hover {
          transform: translateY(-3px);
          border-color: rgba(201, 162, 39, 0.55);
          color: var(--gold-light);
          background: rgba(201, 162, 39, 0.05);
        }

        /* =========================
           MAIN
        ========================= */

        .property-main {
          width: min(1180px, 92%);
          margin: 0 auto;
          padding: 105px 0;
        }

        .property-intro {
          display: grid;
          grid-template-columns: 0.9fr 1.2fr;
          gap: 85px;
          align-items: center;
          margin-bottom: 105px;
        }

        .property-section-label {
          margin-bottom: 17px;

          color: var(--gold);
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .property-intro h2 {
          margin: 0;

          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.3rem, 4vw, 3.6rem);
          font-weight: 500;
          line-height: 1.15;
        }

        .property-intro h2 span {
          color: var(--gold);
          font-style: italic;
        }

        .property-intro-text {
          color: var(--muted);
          font-size: 16px;
          line-height: 1.9;
        }

        .property-intro-text p {
          margin: 0 0 17px;
        }

        .property-notice {
          margin-top: 25px;
          padding: 20px 22px;

          border-left: 3px solid var(--gold);
          background: #ffffff;

          box-shadow: 0 10px 35px rgba(15, 23, 42, 0.05);

          color: #596577;
          font-size: 14px;
          line-height: 1.7;
        }

        .property-notice strong {
          color: var(--navy);
          font-weight: 700;
        }

        /* =========================
           SERVICES
        ========================= */

        .property-services-heading {
          max-width: 720px;
          margin: 0 auto 52px;
          text-align: center;
        }

        .property-services-heading h2 {
          margin: 0;

          color: var(--navy);
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.3rem, 4vw, 3.3rem);
          font-weight: 500;
          line-height: 1.2;
        }

        .property-services-heading p {
          margin: 17px 0 0;

          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .property-services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .property-service-card {
          position: relative;
          min-height: 245px;
          padding: 35px 30px;

          background: #ffffff;
          border: 1px solid var(--border);

          overflow: hidden;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .property-service-card::before {
          content: "";
          position: absolute;
          width: 70px;
          height: 70px;
          right: -35px;
          top: -35px;

          border: 1px solid rgba(201, 162, 39, 0.12);
          border-radius: 50%;
        }

        .property-service-card::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: var(--gold);

          transition: width 0.35s ease;
        }

        .property-service-card:hover {
          transform: translateY(-7px);
          border-color: rgba(201, 162, 39, 0.35);
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.09);
        }

        .property-service-card:hover::after {
          width: 100%;
        }

        .property-number {
          margin-bottom: 30px;

          color: var(--gold);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 15px;
        }

        .property-service-card h3 {
          margin: 0 0 13px;

          color: var(--navy);
          font-size: 19px;
          font-weight: 700;
        }

        .property-service-card p {
          margin: 0;

          color: var(--muted);
          font-size: 14px;
          line-height: 1.8;
        }

        /* =========================
           CTA
        ========================= */

        .property-cta {
          position: relative;
          margin-top: 105px;
          padding: 70px 35px;

          text-align: center;

          background:
            radial-gradient(
              circle at 80% 50%,
              rgba(201, 162, 39, 0.08),
              transparent 25%
            ),
            linear-gradient(
              135deg,
              #09111f,
              #142238
            );

          color: #ffffff;
          overflow: hidden;
        }

        .property-cta::before {
          content: "⌂";

          position: absolute;
          right: 7%;
          top: 50%;
          transform: translateY(-50%);

          color: rgba(201, 162, 39, 0.07);
          font-size: 180px;
          font-family: Georgia, "Times New Roman", serif;
        }

        .property-cta-content {
          position: relative;
          z-index: 2;
        }

        .property-cta h2 {
          margin: 0;

          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2.1rem, 4vw, 3.3rem);
          font-weight: 500;
          line-height: 1.2;
        }

        .property-cta p {
          max-width: 680px;
          margin: 17px auto 30px;

          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          line-height: 1.8;
        }

        .property-cta a {
          display: inline-flex;
          align-items: center;
          gap: 10px;

          padding: 15px 28px;

          background: var(--gold);
          color: #101827;

          text-decoration: none;
          font-size: 13px;
          font-weight: 800;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .property-cta a:hover {
          transform: translateY(-3px);
          background: var(--gold-light);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 950px) {
          .property-intro {
            grid-template-columns: 1fr;
            gap: 35px;
          }

          .property-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 650px) {
          .property-hero {
            min-height: 620px;
            padding: 100px 20px 80px;
          }

          .property-hero::before {
            inset: 12px;
          }

          .property-eyebrow {
            gap: 9px;
            font-size: 9px;
            letter-spacing: 3px;
          }

          .property-eyebrow::before,
          .property-eyebrow::after {
            width: 25px;
          }

          .property-kicker {
            font-size: 9px;
            letter-spacing: 2px;
          }

          .property-hero h1 {
            font-size: 3rem;
            letter-spacing: -1px;
          }

          .property-hero-description {
            font-size: 15px;
            line-height: 1.8;
          }

          .property-hero-actions {
            flex-direction: column;
            width: 100%;
          }

          .property-primary-btn,
          .property-secondary-btn {
            width: min(100%, 310px);
          }

          .property-main {
            width: min(92%, 100%);
            padding: 75px 0;
          }

          .property-intro {
            margin-bottom: 75px;
          }

          .property-services-grid {
            grid-template-columns: 1fr;
          }

          .property-service-card {
            min-height: auto;
          }

          .property-cta {
            margin-top: 75px;
            padding: 55px 22px;
          }

          .property-cta::before {
            right: -25px;
            font-size: 130px;
          }

          .property-hero-decoration {
            width: 120px;
            height: 120px;
            right: -65px;
          }
        }

        @media (max-width: 420px) {
          .property-hero h1 {
            font-size: 2.45rem;
          }

          .property-hero-description {
            font-size: 14px;
          }

          .property-intro h2 {
            font-size: 2.1rem;
          }
        }
      `}</style>

      {/* =========================
          HERO SECTION
      ========================= */}

      <div className="property-hero">
        <div className="property-hero-decoration"></div>

        <div className="property-hero-content">
          <div className="property-eyebrow">
            Royal Law • Legal Services
          </div>

          <div className="property-kicker">
            Property Law & Legal Representation
          </div>

          <h1>
            Property Law
            <span>Protecting Your Property Rights</span>
          </h1>

          <p className="property-hero-description">
            Professional legal assistance for property transactions,
            ownership matters, documentation, possession disputes,
            inheritance issues, and related legal proceedings.
          </p>

          <div className="property-hero-actions">
            <a href="/contact" className="property-primary-btn">
              Request a Consultation
              <span>→</span>
            </a>

            <a
              href="tel:03701675145"
              className="property-secondary-btn"
            >
              Call 0370 1675145
            </a>
          </div>
        </div>
      </div>

      {/* =========================
          INTRODUCTION
      ========================= */}

      <div className="property-main">
        <div className="property-intro">
          <div>
            <div className="property-section-label">
              Property Matters. Professional Counsel.
            </div>

            <h2>
              Clear Legal Guidance for
              <span> Property Matters</span>
            </h2>
          </div>

          <div className="property-intro-text">
            <p>
              Property transactions and disputes can involve important
              legal rights, ownership questions, documentation, and
              financial interests. Proper legal guidance can help you
              understand the relevant issues before taking important
              decisions.
            </p>

            <p>
              Royal Law provides professional assistance in property
              matters with an emphasis on careful legal analysis,
              confidentiality, clear communication, and effective
              representation.
            </p>

            <div className="property-notice">
              <strong>Professional & Confidential</strong>
              <br />
              Every property matter is reviewed carefully with attention
              to the client's circumstances, legal position, and
              available options.
            </div>
          </div>
        </div>

        {/* =========================
            SERVICES
        ========================= */}

        <div className="property-services-heading">
          <div className="property-section-label">
            Our Property Law Services
          </div>

          <h2>Comprehensive Legal Support</h2>

          <p>
            Professional assistance across a range of property-related
            legal matters and proceedings.
          </p>
        </div>

        <div className="property-services-grid">
          {services.map((service) => (
            <div
              className="property-service-card"
              key={service.number}
            >
              <div className="property-number">
                {service.number}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </div>
          ))}
        </div>

        {/* =========================
            CTA
        ========================= */}

        <div className="property-cta">
          <div className="property-cta-content">
            <h2>Have a Property Legal Matter?</h2>

            <p>
              Discuss your circumstances confidentially with Royal Law
              and understand the legal options available to you.
            </p>

            <a href="/contact">
              Book a Confidential Consultation →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyLaw;