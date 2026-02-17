// src/components/Problem.jsx

function Problem() {
  return (
    <section className="problem fade-in">
      <div className="problem-container">
        <h2>Student Life Shouldn’t Be This Complicated</h2>

        <div className="problem-grid">
          <div className="problem-card">
            <h3>📚 Academic Support</h3>
            <p>
              Students struggle to find reliable peer help for assignments,
              notes, and concept clarity.
            </p>
          </div>

          <div className="problem-card">
            <h3>💰 Micro-Earning</h3>
            <p>
              There is no structured system for students to earn
              by using their skills within campus.
            </p>
          </div>

          <div className="problem-card">
            <h3>🏠 Campus Services</h3>
            <p>
              Finding trusted PGs, mess facilities, and local services
              is often confusing and unverified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problem;