import heroBg from "../assets/hero-bg.jpg";

function Hero() {
  return (
    <section
      id="top"
      className="hero fade-in"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-content">
        <h1>
          AllyGo — Your Ally for <span>Student Life</span>
        </h1>

        <p>
          A student-first ecosystem connecting learning, earning,
          and trusted campus services in one place.
        </p>

        <div className="hero-buttons">
          <button className="btn-orange">Join Early Access</button>
          <button className="btn-outline">Apply for Internship</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;