import './Page.css'

import './Page.css'

function Contact() {
  return (
    <div className="page">
      <div className="page-content">
        <div className="contact-container">
          {/* Contact Information Column */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="contact-item">
              <h3>Visit Us</h3>
              <p>
                Loomleaves Textile House<br />
                Near Gohana Chowk<br />
                Panipat, Haryana 132103<br />
                India
              </p>
            </div>

            <div className="contact-item">
              <h3>Contact</h3>
              <p>
                <strong>Phone:</strong> +91 98967 86599<br />
                <strong>Email:</strong> info@loomleaves.com
              </p>
            </div>

            <div className="contact-item">
              <h3>Business Hours</h3>
              <p>
                Monday - Saturday: 9:00 AM - 8:00 PM<br />
                Sunday: By Appointment
              </p>
            </div>
          </div>

          {/* Contact Form Column */}
          <form className="contact-form">
            <h2>Send a Query</h2>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="email@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+91..." />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell us about your requirements..." required></textarea>
            </div>
            <button type="submit" className="submit-button">Send Message</button>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="map-section">
          <h2>Locate Us</h2>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13961.352467946221!2d76.9634!3d29.3909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dd1a2a8a8a8a9%3A0x1a2a3a4a5a6a7a8a!2sGohana%20Chowk%2C%20Panipat%2C%20Haryana!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, filter: 'grayscale(0.2)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Loomleaves Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

