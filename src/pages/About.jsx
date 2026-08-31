import React from "react";

const About = () => {
  return (
    <section className="about-page">
      <div className="container">

        <div className="page-heading">
          <span className="section-tag">ABOUT ROYAL LAW</span>
          <h1>Trusted Legal Representation with Integrity</h1>
          <p>
            Delivering professional legal services with a commitment to
            justice, confidentiality, and excellence in legal advocacy.
          </p>
        </div>

        <div className="about-content">

          <div className="about-text">
            <h2>Your Trusted Legal Partner</h2>

            <p>
              At Royal Law, we are dedicated to providing strategic legal
              solutions tailored to the needs of individuals, families, and
              businesses. Our firm is built on professionalism, integrity,
              and a strong commitment to protecting our clients’ rights.
            </p>

            <p>
              We understand that legal matters can be complex and stressful.
              That is why we focus on clear communication, practical advice,
              and personalized legal representation to help our clients make
              informed decisions with confidence.
            </p>

            <p>
              Whether handling family disputes, criminal defense, property
              matters, civil litigation, or corporate legal issues, our goal
              is to achieve the best possible outcome while maintaining the
              highest standards of ethics and professionalism.
            </p>

            <div className="about-features">
              <div className="feature-item">✓ Experienced Legal Guidance</div>
              <div className="feature-item">✓ Client-Focused Approach</div>
              <div className="feature-item">✓ Confidential Consultations</div>
              <div className="feature-item">✓ Professional Representation</div>
            </div>
          </div>

          <div className="about-card">
            <div className="about-icon">⚖️</div>

            <h3>Our Mission</h3>

            <p>
              To provide accessible, professional, and ethical legal services
              while protecting the rights and interests of every client through
              dedication, integrity, and excellence.
            </p>

            <div className="mission-values">
              <div className="value-box">
                <h4>Integrity</h4>
                <span>Ethical Practice</span>
              </div>

              <div className="value-box">
                <h4>Justice</h4>
                <span>Client Protection</span>
              </div>

              <div className="value-box">
                <h4>Excellence</h4>
                <span>Legal Solutions</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-page {
          padding: 100px 0;
          background: #f8f9fc;
        }

        .container {
          width: 90%;
          max-width: 1200px;
          margin: auto;
        }

        .page-heading {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 60px;
        }

        .section-tag {
          display: inline-block;
          color: #c9a227;
          font-weight: 600;
          letter-spacing: 2px;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .page-heading h1 {
          font-size: 3rem;
          margin-bottom: 20px;
          color: #111827;
        }

        .page-heading p {
          color: #6b7280;
          line-height: 1.8;
        }

        .about-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 50px;
          align-items: center;
        }

        .about-text h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #111827;
        }

        .about-text p {
          color: #6b7280;
          line-height: 1.9;
          margin-bottom: 18px;
        }

        .about-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 30px;
        }

        .feature-item {
          background: #fff;
          padding: 15px;
          border-radius: 10px;
          border-left: 4px solid #c9a227;
          font-weight: 500;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .about-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 15px 40px rgba(0,0,0,0.08);
        }

        .about-icon {
          font-size: 60px;
          margin-bottom: 20px;
        }

        .about-card h3 {
          font-size: 1.8rem;
          margin-bottom: 15px;
          color: #111827;
        }

        .about-card p {
          color: #6b7280;
          line-height: 1.8;
        }

        .mission-values {
          margin-top: 30px;
          display: grid;
          gap: 15px;
        }

        .value-box {
          padding: 15px;
          background: #f8f9fc;
          border-radius: 10px;
        }

        .value-box h4 {
          color: #c9a227;
          margin-bottom: 5px;
        }

        .value-box span {
          color: #6b7280;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
          }

          .about-features {
            grid-template-columns: 1fr;
          }

          .page-heading h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;