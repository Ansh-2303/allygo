// src/components/Contact.jsx

function Contact() {
  return (
    <section className="section contact fade-in" id="contact">
      <div className="contact-container">
        <h2>Connect With AllyGo</h2>

        <p>
          Stay updated, join our community, and be part of the AllyGo journey.
        </p>

        <div className="contact-links">
          <a
            href="https://www.instagram.com/allygolimited/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.linkedin.com/company/allygo/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BMXLOUl%2BqT8%2Ba%2BDew%2F4rgBw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://whatsapp.com/channel/0029Vb7Mj9Y7tkjAtHYuD20R"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Community
          </a>

          <a href="mailto:admin@allygo.in">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;