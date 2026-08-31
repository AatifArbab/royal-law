import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Royal Law - Legal Consultation Request

Client Information
-------------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not Provided"}

Legal Matter
-------------------------
${formData.message}

Please contact me regarding legal consultation.

Thank you,
${formData.name}`;

    const whatsappNumber = "923701675145";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  return (
    <section className="contact" id="contact">
      <style>{`
        .contact {
          background-color: #0a0f1a;
          color: #e8e8e8;
          padding: 100px 0;
        }

        .contact .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        /* Left: Contact Info */
        .contact-subtitle {
          color: #d4af37;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          margin-bottom: 14px;
        }

        .contact-info h2 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 38px;
          font-weight: 500;
          line-height: 1.25;
          color: #ffffff;
          margin-bottom: 22px;
        }

        .contact-info h2 span {
          color: #d4af37;
          font-style: italic;
        }

        .contact-description {
          font-size: 15px;
          line-height: 1.8;
          color: #a8a8a8;
          margin-bottom: 40px;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 26px;
          margin-bottom: 40px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 18px;
        }

        .contact-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.35);
          background: rgba(212, 175, 55, 0.06);
          color: #d4af37;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-item strong {
          display: block;
          color: #ffffff;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .contact-item a,
        .contact-item span {
          color: #b8b8b8;
          font-size: 15px;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .contact-item a:hover {
          color: #d4af37;
        }

        .contact-note {
          border-left: 2px solid #d4af37;
          padding: 18px 22px;
          background: rgba(212, 175, 55, 0.04);
          border-radius: 0 8px 8px 0;
        }

        .contact-note strong {
          display: block;
          color: #d4af37;
          font-size: 14px;
          margin-bottom: 8px;
        }

        .contact-note p {
          font-size: 13.5px;
          line-height: 1.7;
          color: #999999;
          margin: 0;
        }

        /* Right: Contact Form */
        .contact-form-wrapper {
          background-color: #12182a;
          border: 1px solid #232b3d;
          border-radius: 14px;
          padding: 44px;
        }

        .form-header h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          color: #ffffff;
          margin-bottom: 10px;
        }

        .form-header p {
          font-size: 14px;
          line-height: 1.7;
          color: #999999;
          margin-bottom: 28px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #cfcfcf;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          background-color: #0a0f1a;
          border: 1px solid #2a3245;
          border-radius: 8px;
          padding: 13px 16px;
          font-size: 14px;
          color: #ffffff;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-group input::placeholder,
        .form-group textarea::placeholder {
          color: #5f6779;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          border-color: #d4af37;
        }

        .form-group textarea {
          resize: none;
        }

        .contact-submit {
          background-color: #d4af37;
          color: #0a0f1a;
          border: none;
          border-radius: 8px;
          padding: 16px 24px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .contact-submit:hover {
          background-color: #c29d2e;
          transform: translateY(-2px);
        }

        .form-disclaimer {
          font-size: 12px;
          line-height: 1.6;
          color: #6b7280;
          margin: 0;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }

        @media (max-width: 600px) {
          .contact {
            padding: 70px 0;
          }

          .contact-info h2 {
            font-size: 28px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrapper {
            padding: 28px 22px;
          }
        }
      `}</style>

      <div className="container contact-container">
        
        {/* Contact Information */}
        <div className="contact-info">
          <p className="contact-subtitle">
            TRUSTED LEGAL COUNSEL
          </p>

          <h2>
            Protecting Your Rights.
            <span> Pursuing Justice.</span>
          </h2>

          <p className="contact-description">
            At Royal Law, we are committed to providing strategic legal
            guidance, professional representation, and practical solutions
            tailored to your needs. Whether your matter involves family law,
            criminal defense, property disputes, civil litigation, or
            corporate affairs, our legal team is prepared to assist you
            with integrity, professionalism, and dedication.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-icon">☎</div>
              <div>
                <strong>Phone Consultation</strong>
                <a href="tel:+923701675145">
                  0370 1675145
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>
              <div>
                <strong>Email Consultation</strong>
                <a href="mailto:aatifarbab59@gmail.com">
                  aatifarbab59@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>
              <div>
                <strong>Office Location</strong>
                <span>Karachi, Pakistan</span>
              </div>
            </div>
          </div>

          <div className="contact-note">
            <strong>Attorney–Client Confidentiality</strong>

            <p>
              Every inquiry is handled with complete discretion,
              professionalism, and strict confidentiality. Your legal
              concerns remain private and are treated with the highest
              standard of professional care.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <div className="form-header">
            <h3>Request a Private Consultation</h3>

            <p>
              Complete the form below and our legal team will connect
              with you through WhatsApp to discuss your matter and
              provide professional legal guidance.
            </p>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address (Optional)
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Describe Your Legal Matter
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Provide a brief overview of your legal concern..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
            >
              Request Legal Consultation →
            </button>

            <p className="form-disclaimer">
              By submitting this form, you acknowledge that the information
              provided will be used solely for consultation purposes and
              will be handled with strict confidentiality.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;