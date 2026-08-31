import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <NavLink to="/" className="logo" onClick={closeMenu}>
          <img
            src="/favicon.jpeg"
            alt="Royal Law Associates Logo"
            className="logo-mark"
          />

          <div className="logo-text">
            <strong>Royal Law</strong>
            <span>Associates</span>
          </div>
        </NavLink>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" end className={linkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" className={linkClass} onClick={closeMenu}>
            About Us
          </NavLink>

          <NavLink to="/family-law" className={linkClass} onClick={closeMenu}>
            Family Law
          </NavLink>

          <NavLink to="/criminal-law" className={linkClass} onClick={closeMenu}>
            Criminal Law
          </NavLink>

          <NavLink to="/property-law" className={linkClass} onClick={closeMenu}>
            Property Law
          </NavLink>

          <NavLink to="/corporate-law" className={linkClass} onClick={closeMenu}>
            Corporate Law
          </NavLink>

          <NavLink to="/contact" className={linkClass} onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>

        {/* Consultation Button */}
        <NavLink to="/contact" className="nav-btn">
          <span>Free Consultation</span>
          <span className="arrow">→</span>
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Styles */}
      <style>{`
        .navbar {
          background-color: #171514;
          padding: 14px 0;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* Logo */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .logo-mark {
          width: 44px;
          height: 44px;
          object-fit: contain;
          border-radius: 6px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .logo-text strong {
          color: #ffffff;
          font-size: 20px;
          font-weight: 900;
          letter-spacing: 0.5px;
        }

        .logo-text span {
          color: #f6a11f;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* Nav links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 28px;
        }

        .nav-links a {
          color: #e6e2df;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s ease;
          position: relative;
          padding-bottom: 4px;
          border-bottom: 2px solid transparent;
        }

        .nav-links a:hover {
          color: #f6a11f;
        }

        .nav-links a.active {
          color: #f6a11f;
          border-bottom: 2px solid #f6a11f;
        }

        /* Consultation button */
        .nav-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background-color: #f6a11f;
          color: #171514;
          font-weight: 700;
          font-size: 14px;
          padding: 10px 18px;
          border-radius: 6px;
          text-decoration: none;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }

        .nav-btn:hover {
          background-color: #ffb94d;
          transform: translateY(-1px);
        }

        .nav-btn .arrow {
          transition: transform 0.2s ease;
        }

        .nav-btn:hover .arrow {
          transform: translateX(3px);
        }

        /* Mobile menu toggle */
        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
        }

        .menu-toggle span {
          width: 24px;
          height: 2px;
          background-color: #ffffff;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .menu-toggle.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }

        .menu-toggle.open span:nth-child(2) {
          opacity: 0;
        }

        .menu-toggle.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: #171514;
            flex-direction: column;
            gap: 0;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }

          .nav-links.active {
            max-height: 500px;
          }

          .nav-links a {
            padding: 14px 24px;
            width: 100%;
            box-sizing: border-box;
            border-bottom: 1px solid #2a2725;
          }

          .nav-links a.active {
            border-bottom: 1px solid #2a2725;
            border-left: 3px solid #f6a11f;
            padding-left: 21px;
          }

          .nav-btn {
            display: none;
          }

          .menu-toggle {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;