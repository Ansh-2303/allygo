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
            href="https://instagram.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://linkedin.com/company/YOUR_PAGE"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://chat.whatsapp.com/YOUR_GROUP_LINK"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Community
          </a>

          <a href="mailto:contact@allygo.in">
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;