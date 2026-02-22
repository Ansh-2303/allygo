import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* Logo Click → Scroll Top */}
   <div className="logo" onClick={() => handleClick("top")}>
  <img src={logo} alt="AllyGo Logo" />
</div>

      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li onClick={() => handleClick("about")}>About</li>
        <li onClick={() => handleClick("services")}>Services</li>
        <li onClick={() => handleClick("internships")}>Internships</li>
        <li onClick={() => handleClick("contact")}>Contact</li>
        <li>
          <button
            className="btn-orange"
            onClick={() => handleClick("internships")}
          >
            Join Early Access
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;