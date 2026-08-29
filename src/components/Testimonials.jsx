import React from "react";

const testimonials = [
  {
    name: "Ahmed Khan",
    role: "Client",
    text: "Royal Law provided professional guidance throughout my legal matter. Everything was explained clearly and I always felt that my concerns were being taken seriously.",
  },
  {
    name: "Muhammad Ali",
    role: "Client",
    text: "The legal process was explained to me in a simple and understandable way. I appreciated the professional approach, communication and attention to my case.",
  },
  {
    name: "Sana Ahmed",
    role: "Client",
    text: "I received clear legal advice and professional support when I needed it most. The team was approachable, respectful and very helpful throughout the process.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <p>CLIENT EXPERIENCES</p>

          <h2>
            Trusted by Our
            <span> Clients.</span>
          </h2>

          <span className="section-description">
            We believe that effective legal representation begins with
            listening, understanding and building trust with every client.
          </span>
        </div>

        {/* Testimonials */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
            >

              <div className="quote-icon">
                “
              </div>

              <div className="stars" aria-label="5 out of 5 stars">
                ★★★★★
              </div>

              <p className="testimonial-text">
                {testimonial.text}
              </p>

              <div className="testimonial-divider"></div>

              <div className="client">

                <div className="client-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div className="client-info">
                  <h4>{testimonial.name}</h4>
                  <span>{testimonial.role}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Bottom Trust Message */}
        <div className="testimonial-footer">
          <span>⚖</span>

          <p>
            Professional service. Clear communication. Client-focused
            representation.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;