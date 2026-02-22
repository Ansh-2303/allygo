// src/components/Services.jsx

function Services() {
  return (
    <section className="section services fade-in" id="services">
      <div className="services-container">
        <h2>What AllyGo Provides</h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>Peer-to-Peer Academic Help</h3>
            <p>
              Post assignments, notes, and project queries and connect 1:1
              with trusted peers for reliable academic support.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">💸</div>
            <h3>Student Micro-Earning</h3>
            <p>
              Earn money or credits by helping others, creating skill-based
              income opportunities within campus communities.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏠</div>
            <h3>Campus Services Marketplace</h3>
            <p>
              Discover verified PGs, mess facilities, laundry services,
              and essential local providers near your college.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;