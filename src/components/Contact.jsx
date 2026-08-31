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
                <a href="tel:03701675145">
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