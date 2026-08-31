import React from "react";

const FamilyLaw = () => {
  const services = [
    {
      number: "01",
      title: "Divorce & Khula",
      description:
        "Professional legal guidance and representation in divorce, khula, and related family proceedings.",
    },
    {
      number: "02",
      title: "Child Custody",
      description:
        "Legal assistance regarding child custody, visitation, and matters concerning the welfare and best interests of children.",
    },
    {
      number: "03",
      title: "Child Maintenance",
      description:
        "Guidance and representation regarding child maintenance, financial support, and related family court matters.",
    },
    {
      number: "04",
      title: "Family Disputes",
      description:
        "Professional assistance in sensitive family disputes with a focus on lawful, practical, and respectful solutions.",
    },
    {
      number: "05",
      title: "Guardianship",
      description:
        "Legal guidance concerning guardianship applications and related proceedings before the appropriate authorities and courts.",
    },
    {
      number: "06",
      title: "Marriage Matters",
      description:
        "Legal support concerning marriage documentation and other important family law matters.",
    },
  ];

  const css = [
    ".family-law-page {",
    "  --family-navy: #09111f;",
    "  --family-navy-light: #142238;",
    "  --family-gold: #c9a227;",
    "  --family-gold-light: #e4c45a;",
    "  --family-white: #ffffff;",
    "  --family-bg: #fafafa;",
    "  --family-text: #172033;",
    "  --family-muted: #687386;",
    "  --family-border: #e5e8ed;",
    "  background: var(--family-bg);",
    "  color: var(--family-text);",
    "  overflow: hidden;",
    "  width: 100%;",
    "}",
    ".family-law-page *, .family-law-page *::before, .family-law-page *::after {",
    "  box-sizing: border-box;",
    "}",
    ".family-container {",
    "  width: min(1180px, calc(100% - 40px));",
    "  margin: 0 auto;",
    "}",
    ".family-hero {",
    "  position: relative;",
    "  min-height: 720px;",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  padding: 120px 20px 100px;",
    "  overflow: hidden;",
    "  text-align: center;",
    "  color: #ffffff;",
    "  background:",
    "    radial-gradient(circle at 18% 25%, rgba(201,162,39,.14), transparent 27%),",
    "    radial-gradient(circle at 82% 78%, rgba(201,162,39,.08), transparent 28%),",
    "    linear-gradient(135deg, #060b14 0%, #0b1423 48%, #17263b 100%);",
    "}",
    ".family-frame {",
    "  position: absolute;",
    "  inset: 24px;",
    "  border: 1px solid rgba(201,162,39,.13);",
    "  pointer-events: none;",
    "}",
    ".family-glow {",
    "  position: absolute;",
    "  border: 1px solid rgba(201,162,39,.1);",
    "  border-radius: 50%;",
    "  pointer-events: none;",
    "}",
    ".family-glow-one {",
    "  width: 480px;",
    "  height: 480px;",
    "  left: -250px;",
    "  top: 50%;",
    "  transform: translateY(-50%);",
    "}",
    ".family-glow-two {",
    "  width: 360px;",
    "  height: 360px;",
    "  right: -180px;",
    "  top: 80px;",
    "}",
    ".family-hero::after {",
    "  content: '';",
    "  position: absolute;",
    "  bottom: 0;",
    "  left: 50%;",
    "  transform: translateX(-50%);",
    "  width: 220px;",
    "  height: 2px;",
    "  background: linear-gradient(90deg, transparent, var(--family-gold), transparent);",
    "}",
    ".family-hero-content {",
    "  position: relative;",
    "  z-index: 3;",
    "  max-width: 900px;",
    "}",
    ".family-eyebrow {",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  gap: 14px;",
    "  margin-bottom: 22px;",
    "  color: var(--family-gold-light);",
    "  font-size: 11px;",
    "  font-weight: 800;",
    "  letter-spacing: 4px;",
    "}",
    ".family-eyebrow span {",
    "  width: 42px;",
    "  height: 1px;",
    "  background: var(--family-gold);",
    "  opacity: .7;",
    "}",
    ".family-kicker {",
    "  margin: 0 0 25px;",
    "  color: rgba(255,255,255,.48);",
    "  font-size: 11px;",
    "  font-weight: 600;",
    "  letter-spacing: 3px;",
    "}",
    ".family-hero h1 {",
    "  margin: 0;",
    "  color: #ffffff;",
    "  font-family: Georgia, 'Times New Roman', serif;",
    "  font-size: clamp(3.4rem, 7vw, 6rem);",
    "  font-weight: 500;",
    "  line-height: .98;",
    "  letter-spacing: -2px;",
    "}",
    ".family-hero h1 em {",
    "  display: block;",
    "  margin-top: 18px;",
    "  color: var(--family-gold-light);",
    "  font-size: .58em;",
    "  font-style: italic;",
    "  font-weight: 400;",
    "  letter-spacing: -.5px;",
    "}",
    ".family-hero-description {",
    "  max-width: 750px;",
    "  margin: 32px auto 0;",
    "  color: rgba(255,255,255,.7);",
    "  font-size: 16px;",
    "  line-height: 1.9;",
    "}",
    ".family-hero-actions {",
    "  display: flex;",
    "  justify-content: center;",
    "  align-items: center;",
    "  gap: 14px;",
    "  margin-top: 38px;",
    "  flex-wrap: wrap;",
    "}",
    ".family-primary-button, .family-secondary-button {",
    "  min-height: 54px;",
    "  padding: 0 26px;",
    "  display: inline-flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  text-decoration: none;",
    "  font-size: 13px;",
    "  font-weight: 800;",
    "  transition: all .3s ease;",
    "}",
    ".family-primary-button {",
    "  gap: 15px;",
    "  background: var(--family-gold);",
    "  color: #101827;",
    "  box-shadow: 0 14px 35px rgba(201,162,39,.15);",
    "}",
    ".family-primary-button span {",
    "  font-size: 20px;",
    "  transition: transform .3s ease;",
    "}",
    ".family-primary-button:hover {",
    "  transform: translateY(-3px);",
    "  background: var(--family-gold-light);",
    "  box-shadow: 0 18px 45px rgba(201,162,39,.25);",
    "}",
    ".family-primary-button:hover span {",
    "  transform: translateX(5px);",
    "}",
    ".family-secondary-button {",
    "  color: #ffffff;",
    "  border: 1px solid rgba(255,255,255,.18);",
    "  background: rgba(255,255,255,.035);",
    "}",
    ".family-secondary-button:hover {",
    "  transform: translateY(-3px);",
    "  color: var(--family-gold-light);",
    "  border-color: rgba(201,162,39,.55);",
    "}",
    ".family-trust {",
    "  display: flex;",
    "  align-items: center;",
    "  justify-content: center;",
    "  gap: 26px;",
    "  margin-top: 55px;",
    "}",
    ".family-trust div {",
    "  display: flex;",
    "  align-items: center;",
    "  gap: 10px;",
    "}",
    ".family-trust strong {",
    "  color: var(--family-gold);",
    "  font-family: Georgia, 'Times New Roman', serif;",
    "  font-size: 17px;",
    "  font-weight: 500;",
    "}",
    ".family-trust span {",
    "  color: rgba(255,255,255,.52);",
    "  font-size: 10px;",
    "  font-weight: 600;",
    "  letter-spacing: 1.5px;",
    "  text-transform: uppercase;",
    "}",
    ".family-trust i {",
    "  width: 1px;",
    "  height: 25px;",
    "  background: rgba(255,255,255,.13);",
    "}",
    ".family-introduction {",
    "  padding: 110px 0;",
    "  background: #ffffff;",
    "}",
    ".family-intro-grid {",
    "  display: grid;",
    "  grid-template-columns: .9fr 1.1fr;",
    "  gap: 90px;",
    "  align-items: center;",
    "}",
    ".family-section-label {",
    "  display: block;",
    "  margin-bottom: 17px;",
    "  color: var(--family-gold);",
    "  font-size: 10px;",
    "  font-weight: 800;",
    "  letter-spacing: 3px;",
    "  text-transform: uppercase;",
    "}",
    ".family-intro-heading h2, .family-services-heading h2, .family-why h2, .family-cta h2 {",
    "  margin: 0;",
    "  color: var(--family-navy);",
    "  font-family: Georgia, 'Times New Roman', serif;",
    "  font-size: clamp(2.3rem, 4vw, 3.7rem);",
    "  font-weight: 500;",
    "  line-height: 1.13;",
    "}",
    ".family-intro-heading h2 em, .family-why h2 em, .family-cta h2 em {",
    "  color: var(--family-gold);",
    "  font-style: italic;",
    "}",
    ".gold-line {",
    "  width: 65px;",
    "  height: 2px;",
    "  margin-top: 28px;",
    "  background: var(--family-gold);",
    "}",
    ".family-intro-text {",
    "  color: var(--family-muted);",
    "  font-size: 15px;",
    "  line-height: 1.9;",
    "}",
    ".family-intro-text p {",
    "  margin: 0 0 18px;",
    "}",
    ".family-confidential-box {",
    "  display: flex;",
    "  align-items: flex-start;",
    "  gap: 17px;",
    "  margin-top: 28px;",
    "  padding: 23px;",
    "  border-left: 3px solid var(--family-gold);",
    "  background: #fafafa;",
    "}",
    ".confidential-icon {",
    "  color: var(--family-gold);",
    "  font-size: 25px;",
    "  line-height: 1;",
    "}",
    ".family-confidential-box strong {",
    "  display: block;",
    "  margin-bottom: 5px;",
    "  color: var(--family-navy);",
    "  font-size: 14px;",
    "}",
    ".family-confidential-box p {",
    "  margin: 0;",
    "  font-size: 13px;",
    "  line-height: 1.7;",
    "}",
    ".family-services {",
    "  padding: 110px 0;",
    "  background: var(--family-bg);",
    "}",
    ".family-services-heading {",
    "  max-width: 720px;",
    "  margin: 0 auto 55px;",
    "  text-align: center;",
    "}",
    ".family-services-heading h2 {",
    "  color: var(--family-navy);",
    "}",
    ".family-services-heading p {",
    "  max-width: 620px;",
    "  margin: 18px auto 0;",
    "  color: var(--family-muted);",
    "  font-size: 15px;",
    "  line-height: 1.8;",
    "}",
    ".family-services-grid {",
    "  display: grid;",
    "  grid-template-columns: repeat(3, 1fr);",
    "  gap: 18px;",
    "}",
    ".family-service-card {",
    "  position: relative;",
    "  min-height: 260px;",
    "  padding: 31px 29px;",
    "  overflow: hidden;",
    "  border: 1px solid var(--family-border);",
    "  background: #ffffff;",
    "  transition: all .35s ease;",
    "}",
    ".family-service-card:hover {",
    "  transform: translateY(-7px);",
    "  border-color: rgba(201,162,39,.4);",
    "  box-shadow: 0 22px 50px rgba(15,23,42,.09);",
    "}",
    ".service-top {",
    "  display: flex;",
    "  justify-content: space-between;",
    "  align-items: center;",
    "}",
    ".service-number {",
    "  color: var(--family-gold);",
    "  font-family: Georgia, 'Times New Roman', serif;",
    "  font-size: 15px;",
    "}",
    ".service-arrow {",
    "  color: #b3bac5;",
    "  font-size: 20px;",
    "  transition: all .3s ease;",
    "}",
    ".family-service-card:hover .service-arrow {",
    "  color: var(--family-gold);",
    "  transform: translate(3px,-3px);",
    "}",
    ".service-divider {",
    "  width: 100%;",
    "  height: 1px;",
    "  margin: 22px 0;",
    "  background: var(--family-border);",
    "}",
    ".family-service-card h3 {",
    "  margin: 0 0 12px;",
    "  color: var(--family-navy);",
    "  font-size: 19px;",
    "  font-weight: 750;",
    "}",
    ".family-service-card p {",
    "  margin: 0;",
    "  color: var(--family-muted);",
    "  font-size: 13px;",
    "  line-height: 1.8;",
    "}",
    ".service-bottom-line {",
    "  position: absolute;",
    "  bottom: 0;",
    "  left: 0;",
    "  width: 0;",
    "  height: 2px;",
    "  background: var(--family-gold);",
    "  transition: width .4s ease;",
    "}",
    ".family-service-card:hover .service-bottom-line {",
    "  width: 100%;",
    "}",
    ".family-why {",
    "  padding: 110px 0;",
    "  background: #ffffff;",
    "}",
    ".family-why-grid {",
    "  display: grid;",
    "  grid-template-columns: .9fr 1.1fr;",
    "  gap: 100px;",
    "  align-items: start;",
    "}",
    ".family-why-items {",
    "  border-top: 1px solid var(--family-border);",
    "}",
    ".why-item {",
    "  display: grid;",
    "  grid-template-columns: 55px 1fr;",
    "  gap: 20px;",
    "  padding: 27px 0;",
    "  border-bottom: 1px solid var(--family-border);",
    "}",
    ".why-item > span {",
    "  color: var(--family-gold);",
    "  font-family: Georgia, 'Times New Roman', serif;",
    "  font-size: 14px;",
    "}",
    ".why-item h3 {",
    "  margin: 0 0 8px;",
    "  color: var(--family-navy);",
    "  font-size: 17px;",
    "}",
    ".why-item p {",
    "  margin: 0;",
    "  color: var(--family-muted);",
    "  font-size: 13px;",
    "  line-height: 1.75;",
    "}",
    ".family-cta-section {",
    "  padding: 0 0 110px;",
    "  background: #ffffff;",
    "}",
    ".family-cta {",
    "  position: relative;",
    "  padding: 75px 30px;",
    "  overflow: hidden;",
    "  text-align: center;",
    "  background:",
    "    radial-gradient(circle at 85% 50%, rgba(201,162,39,.09), transparent 25%),",
    "    linear-gradient(135deg, #09111f, #132238);",
    "}",
    ".family-cta::before {",
    "  content: '';",
    "  position: absolute;",
    "  inset: 20px;",
    "  border: 1px solid rgba(201,162,39,.1);",
    "}",
    ".cta-decoration {",
    "  position: absolute;",
    "  width: 250px;",
    "  height: 250px;",
    "  right: -120px;",
    "  top: 50%;",
    "  transform: translateY(-50%) rotate(45deg);",
    "  border: 1px solid rgba(201,162,39,.1);",
    "}",
    ".family-cta-content {",
    "  position: relative;",
    "  z-index: 2;",
    "  max-width: 760px;",
    "  margin: 0 auto;",
    "}",
    ".family-cta .family-section-label {",
    "  color: var(--family-gold-light);",
    "}",
    ".family-cta h2 {",
    "  color: #ffffff;",
    "}",
    ".family-cta p {",
    "  max-width: 650px;",
    "  margin: 18px auto 30px;",
    "  color: rgba(255,255,255,.66);",
    "  font-size: 15px;",
    "  line-height: 1.8;",
    "}",
    ".family-cta-button {",
    "  display: inline-flex;",
    "  align-items: center;",
    "  gap: 14px;",
    "  min-height: 52px;",
    "  padding: 0 26px;",
    "  background: var(--family-gold);",
    "  color: #101827;",
    "  text-decoration: none;",
    "  font-size: 13px;",
    "  font-weight: 800;",
    "  transition: all .3s ease;",
    "}",
    ".family-cta-button span {",
    "  font-size: 19px;",
    "  transition: transform .3s ease;",
    "}",
    ".family-cta-button:hover {",
    "  background: var(--family-gold-light);",
    "  transform: translateY(-3px);",
    "  box-shadow: 0 15px 35px rgba(201,162,39,.2);",
    "}",
    ".family-cta-button:hover span {",
    "  transform: translateX(5px);",
    "}",
    "@media (max-width: 950px) {",
    "  .family-intro-grid, .family-why-grid {",
    "    grid-template-columns: 1fr;",
    "    gap: 45px;",
    "  }",
    "  .family-services-grid {",
    "    grid-template-columns: repeat(2, 1fr);",
    "  }",
    "}",
    "@media (max-width: 650px) {",
    "  .family-container {",
    "    width: min(100% - 32px, 1180px);",
    "  }",
    "  .family-hero {",
    "    min-height: 670px;",
    "    padding: 100px 18px 80px;",
    "  }",
    "  .family-frame {",
    "    inset: 12px;",
    "  }",
    "  .family-eyebrow {",
    "    gap: 8px;",
    "    font-size: 9px;",
    "    letter-spacing: 2.5px;",
    "  }",
    "  .family-eyebrow span {",
    "    width: 25px;",
    "  }",
    "  .family-kicker {",
    "    font-size: 9px;",
    "    letter-spacing: 1.8px;",
    "  }",
    "  .family-hero h1 {",
    "    font-size: 3.15rem;",
    "    letter-spacing: -1px;",
    "  }",
    "  .family-hero h1 em {",
    "    margin-top: 15px;",
    "    font-size: .52em;",
    "    line-height: 1.2;",
    "  }",
    "  .family-hero-description {",
    "    font-size: 14px;",
    "    line-height: 1.8;",
    "  }",
    "  .family-hero-actions {",
    "    flex-direction: column;",
    "  }",
    "  .family-primary-button, .family-secondary-button {",
    "    width: min(100%, 310px);",
    "  }",
    "  .family-trust {",
    "    gap: 12px;",
    "    margin-top: 42px;",
    "  }",
    "  .family-trust div {",
    "    flex-direction: column;",
    "    gap: 4px;",
    "  }",
    "  .family-trust span {",
    "    font-size: 8px;",
    "    letter-spacing: 1px;",
    "  }",
    "  .family-trust i {",
    "    height: 32px;",
    "  }",
    "  .family-introduction, .family-services, .family-why {",
    "    padding: 75px 0;",
    "  }",
    "  .family-services-grid {",
    "    grid-template-columns: 1fr;",
    "    gap: 14px;",
    "  }",
    "  .family-service-card {",
    "    min-height: auto;",
    "    padding: 28px 25px;",
    "  }",
    "  .family-cta-section {",
    "    padding-bottom: 75px;",
    "  }",
    "  .family-cta {",
    "    padding: 60px 20px;",
    "  }",
    "  .family-cta::before {",
    "    inset: 12px;",
    "  }",
    "  .why-item {",
    "    grid-template-columns: 40px 1fr;",
    "    gap: 12px;",
    "  }",
    "}",
    "@media (max-width: 400px) {",
    "  .family-hero h1 {",
    "    font-size: 2.7rem;",
    "  }",
    "  .family-hero-description {",
    "    font-size: 13.5px;",
    "  }",
    "  .family-trust {",
    "    gap: 8px;",
    "  }",
    "}",
  ].join("\n");

  return (
    <main className="family-law-page">
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <section className="family-hero">
        <div className="family-glow family-glow-one"></div>
        <div className="family-glow family-glow-two"></div>
        <div className="family-frame"></div>

        <div className="family-hero-content">
          <div className="family-eyebrow">
            <span></span>
            ROYAL LAW • FAMILY LAW
            <span></span>
          </div>

          <p className="family-kicker">
            PROFESSIONAL LEGAL GUIDANCE & REPRESENTATION
          </p>

          <h1>
            Family Law
            <em>Guidance With Care & Clarity</em>
          </h1>

          <p className="family-hero-description">
            Family legal matters can be deeply personal and legally complex.
            Royal Law provides professional, discreet, and client-focused
            legal assistance for individuals and families facing important
            family law concerns.
          </p>

          <div className="family-hero-actions">
            <a href="/contact" className="family-primary-button">
              Request a Consultation
              <span>→</span>
            </a>

            <a href="tel:03701675145" className="family-secondary-button">
              Call 0370 1675145
            </a>
          </div>

          <div className="family-trust">
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
              <span>Client Focused</span>
            </div>
          </div>
        </div>
      </section>

      <section className="family-introduction">
        <div className="family-container">
          <div className="family-intro-grid">
            <div className="family-intro-heading">
              <span className="family-section-label">
                SENSITIVE MATTERS. PROFESSIONAL COUNSEL.
              </span>

              <h2>
                Protecting Your Family With
                <em> Care & Clarity</em>
              </h2>

              <div className="gold-line"></div>
            </div>

            <div className="family-intro-text">
              <p>
                Family disputes can be emotionally challenging and legally
                complex. Understanding your rights, responsibilities, and
                available legal options is an important first step toward
                making informed decisions.
              </p>

              <p>
                At Royal Law, we approach family law matters with discretion,
                professionalism, and respect. Our aim is to provide clear
                legal guidance and practical representation based on the
                circumstances of each client.
              </p>

              <div className="family-confidential-box">
                <div className="confidential-icon">⚖</div>

                <div>
                  <strong>Private & Confidential</strong>

                  <p>
                    Your family matter deserves careful attention, respectful
                    communication, and professional legal guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="family-services">
        <div className="family-container">
          <div className="family-services-heading">
            <span className="family-section-label">
              OUR FAMILY LAW SERVICES
            </span>

            <h2>Professional Support for Family Matters</h2>

            <p>
              We assist clients with a range of family law concerns and
              provide guidance throughout the relevant legal process.
            </p>
          </div>

          <div className="family-services-grid">
            {services.map((service) => (
              <article
                className="family-service-card"
                key={service.number}
              >
                <div className="service-top">
                  <span className="service-number">
                    {service.number}
                  </span>

                  <span className="service-arrow">↗</span>
                </div>

                <div className="service-divider"></div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-bottom-line"></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="family-why">
        <div className="family-container">
          <div className="family-why-grid">
            <div>
              <span className="family-section-label">
                WHY CHOOSE ROYAL LAW
              </span>

              <h2>
                Legal Support When
                <em> It Matters Most</em>
              </h2>
            </div>

            <div className="family-why-items">
              <div className="why-item">
                <span>01</span>

                <div>
                  <h3>Clear Legal Guidance</h3>
                  <p>
                    We help clients understand their legal position and
                    available options in straightforward terms.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <span>02</span>

                <div>
                  <h3>Discreet Representation</h3>
                  <p>
                    Sensitive family matters are approached with privacy,
                    respect, and professional discretion.
                  </p>
                </div>
              </div>

              <div className="why-item">
                <span>03</span>

                <div>
                  <h3>Client-Focused Approach</h3>
                  <p>
                    Every matter is considered according to the individual
                    circumstances and legal needs of the client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="family-cta-section">
        <div className="family-container">
          <div className="family-cta">
            <div className="cta-decoration"></div>

            <div className="family-cta-content">
              <span className="family-section-label">
                CONFIDENTIAL LEGAL CONSULTATION
              </span>

              <h2>
                Need Guidance on a
                <em> Family Matter?</em>
              </h2>

              <p>
                Speak with Royal Law about your circumstances and understand
                your legal options with professional and confidential
                assistance.
              </p>

              <a href="/contact" className="family-cta-button">
                Book a Consultation
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FamilyLaw;