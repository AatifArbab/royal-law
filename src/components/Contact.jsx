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

    const whatsappNumber = "923001234567";

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
            GET IN TOUCH
          </p>

          <h2>
            Let’s Discuss Your
            <span> Legal Matter.</span>
          </h2>

          <p className="contact-description">
            Have a legal concern or need professional guidance? Get in touch
            with Royal Law today. Share your concerns with us and our team
            will help you understand your legal options and the next steps.
          </p>

          <div className="contact-items">

            <div className="contact-item">
              <div className="contact-icon">📞</div>

              <div>
                <strong>Call Us</strong>
                <a href="tel:+92300 8326838">
                  +92 300 8326838
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉</div>

              <div>
                <strong>Email Us</strong>
                <a href="mailto:info@royallaw.pk">
                  info@royallaw.pk
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>

              <div>
                <strong>Visit Our Office</strong>
                <span>Karachi, Pakistan</span>
              </div>
            </div>

          </div>

          <div className="contact-note">
            <strong>⚖ Professional & Confidential</strong>
            <p>
              Your privacy and legal concerns are treated with the utmost
              care and confidentiality.
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">

          <div className="form-header">
            <h3>Request a Consultation</h3>

            <p>
              Fill out the form below and connect with us directly through
              WhatsApp.
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
                Email Address
                <span> (Optional)</span>
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
              Send Consultation Request
              <span>→</span>
            </button>

            <p className="form-disclaimer">
              By submitting this form, you agree to be contacted regarding
              your consultation request.
            </p>

          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;