function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AllyGo</div>

      <ul className="nav-links">
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