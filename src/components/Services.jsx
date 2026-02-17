// src/components/Services.jsx

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <h2>What AllyGo Provides</h2>

        <div className="services-grid">

          <div className="service-card">
            <h3>🎓 Peer-to-Peer Academic Help</h3>
            <p>
              Students can post assignments, notes, and project queries
              and connect 1:1 with peers for reliable academic support.
            </p>
          </div>

          <div className="service-card">
            <h3>💸 Student Micro-Earning</h3>
            <p>
              Students who help others can earn money or credits,
              creating skill-based income opportunities within campus.
            </p>
          </div>

          <div className="service-card">
            <h3>🏠 Campus Services Marketplace</h3>
            <p>
              Discover trusted PGs, mess facilities, laundry services,
              and other verified local providers near your college.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;