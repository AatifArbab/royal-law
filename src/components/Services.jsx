import React from "react";

const services = [
  {
    number: "01",
    icon: "⚖",
    title: "Civil Law",
    description:
      "Professional representation in civil disputes, contractual matters, recovery claims, property disputes and other civil proceedings.",
  },
  {
    number: "02",
    icon: "§",
    title: "Criminal Law",
    description:
      "Dedicated legal representation and guidance in criminal cases, bail matters, trials, investigations and related proceedings.",
  },
  {
    number: "03",
    icon: "♙",
    title: "Family Law",
    description:
      "Compassionate legal assistance in divorce, khula, maintenance, child custody, guardianship and other family matters.",
  },
  {
    number: "04",
    icon: "▣",
    title: "Corporate & Business Law",
    description:
      "Practical legal advice for businesses, commercial agreements, contracts, documentation and corporate legal matters.",
  },
  {
    number: "05",
    icon: "⌂",
    title: "Property Law",
    description:
      "Legal assistance with property disputes, ownership issues, documentation, transactions and related legal proceedings.",
  },
  {
    number: "06",
    icon: "✦",
    title: "Legal Consultancy",
    description:
      "Clear, practical and confidential legal advice tailored to your personal, professional or business requirements.",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>OUR AREAS OF PRACTICE</p>

          <h2>
            Legal Services You Can
            <span> Rely On.</span>
          </h2>

          <span className="section-description">
            We provide professional and client-focused legal services designed
            to protect your rights, resolve disputes and help you move forward
            with confidence.
          </span>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.number}>

              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <a href="#contact" className="service-link">
                Discuss Your Matter
                <span>→</span>
              </a>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-cta">
          <div>
            <h3>Not Sure Which Legal Service You Need?</h3>

            <p>
              Tell us about your situation and let us help you understand
              your legal options.
            </p>
          </div>

          <a href="#contact">
            Book a Consultation →
          </a>
        </div>

      </div>
    </section>
  );
};

export default Services;