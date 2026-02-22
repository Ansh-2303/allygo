import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
  <img src={logo} alt="AllyGo Logo" />
</div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#internships">Internships</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button className="btn-orange">Join Early Access</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;