function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Your contact form is currently in demonstration mode.");
  }

  return (
    <section id="contact" className="section contact-section">
      <div className="section-container contact-layout">
        <div className="contact-information">
          <p className="contact-label">Contact</p>

          <h2>Let&apos;s build something great together.</h2>

          <p>
            I am interested in front-end development opportunities,
            collaborations, and exciting web projects.
          </p>

          <div className="contact-links">
            <a href="mailto:champt2001@gmail.com">champt2001@gmail.com</a>
            <a
              href="https://github.com/itstinaa"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/christine-hampton/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" name="subject" type="text" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required />
          </div>

          <button type="submit" className="button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;