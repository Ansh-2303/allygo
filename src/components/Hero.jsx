// src/components/Hero.jsx

function Hero() {
  return (
    <section className="hero">
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