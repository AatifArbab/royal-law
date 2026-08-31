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

    const whatsappMessage = `Hello Royal Law,

I would like to request a legal consultation.

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || "Not provided"}

Legal Matter:
${formData.message}

I look forward to hearing from you. Thank you.`;

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
            CONTACT ROYAL LAW
          </p>

          <h2>
            Professional Legal Advice &
            <span> Representation</span>
          </h2>

          <p className="contact-description">
            Whether you require legal consultation, representation, or
            guidance regarding family, criminal, property, civil, or
            corporate matters, our legal team is prepared to assist you
            with professionalism, confidentiality, and dedication.
          </p>

          <div className="contact-items">

            <div className="contact-item">
              <div className="contact-icon">☎</div>

              <div>
                <strong>Call Us</strong>
                <a href="tel:03701675145">
                  0370 1675145
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <strong>Email Us</strong>
                <a href="mailto:aatifarbab59@gmail.com">
                  aatifarbab59@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">⌖</div>

              <div>
                <strong>Location</strong>
                <span>Karachi, Pakistan</span>
              </div>
            </div>

          </div>

          <div className="contact-note">
            <strong>Professional & Confidential</strong>
            <p>
              Every consultation is handled with complete privacy,
              professionalism, and dedication to protecting your legal
              rights and interests.
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <div className="form-header">
            <h3>Schedule a Legal Consultation</h3>

            <p>
              Complete the form below and connect directly with our legal
              team through WhatsApp for professional assistance.
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
                How Can We Help?
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Briefly describe your legal matter..."
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
              Request Consultation →
            </button>

            <p className="form-disclaimer">
              All information provided will be treated with strict
              confidentiality and used solely for consultation purposes.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;