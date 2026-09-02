import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>
            Royal <span>Law</span>
          </h2>
        
          <p>
            Trusted legal guidance and professional representation,
            committed to protecting your rights and achieving the best
            possible solutions.
          
          </p>

          <a href="#contact" className="footer-cta">
            Schedule a Consultation →
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Our Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Legal Services</h3>

          <a href="#services">Civil Law</a>
          <a href="#services">Criminal Law</a>
          <a href="#services">Family Law</a>
          <a href="#services">Corporate Law</a>
          <a href="#services">Legal Consultation</a>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Get in Touch</h3>

          <p>
            <strong>Location</strong>
            <br />
              Office No. M-8 Rafi Mall First Floor Near Malir NADRA District Malir Karachi          </p>

          <p>
            <strong>Phone</strong>
            <br />
            <a href="tel: 03008326838"> 03008326838</a>
          </p>

          <p>
            <strong>Email</strong>
            <br />
            <a href=":Ahmedalisaeen110786@gmail.com">
              Ahmedalisaeen110786@gmail.com
            </a>
          </p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <div className="container footer-bottom-container">
          <p>
            © {new Date().getFullYear()} Royal Law. All Rights Reserved.
          </p>

          <p>
            Professional Legal Services • Karachi, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;