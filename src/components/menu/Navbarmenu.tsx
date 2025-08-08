import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-scroll";
import "./Navbarmenu.css";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top shadow-sm ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="container">
        <a className="navbar-brand text-black fw-bold" href="#home">
          Scout
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="team"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                activeClass="active"
                className="nav-link custom-nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
