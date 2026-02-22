// src/components/Internship.jsx

function Internship() {
  return (
    <section className="section internship fade-in" id="internships">
      <div className="internship-container">
        <h2>Build AllyGo With Us</h2>

        <p>
          We are building a trusted student ecosystem across campuses.
          If you believe students deserve better systems for learning,
          earning, and living — join us and help shape the future.
        </p>

        <div className="internship-buttons">
          <a
            href="https://forms.gle/NhVJpu1Bgr33zX6e9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange"
          >
            Apply for Internship
          </a>

          <a
            href="https://forms.gle/NhVJpu1Bgr33zX6e9"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-light"
          >
            Campus Ambassador Program
          </a>
        </div>
      </div>
    </section>
  );
}

export default Internship;