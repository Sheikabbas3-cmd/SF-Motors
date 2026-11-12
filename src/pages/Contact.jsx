
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  const phoneNumbers = [
    { number: "9976881947", display: "+91 99768 81947" },
    { number: "9344455479", display: "+91 93444 55479" }
  ];

  const emails = [
    "sfbabusfbabu@gmail.com",
    "sheikabbasbabu2005@gmail.com"
  ];

  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h1>Let's Talk Business.</h1>
          <p>
            Looking to buy or sell a commercial vehicle?
            Connect with SF Motors.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <Phone />
            <h3>Call Us</h3>
            {phoneNumbers.map((phone) => (
              <a key={phone.number} href={`tel:+91${phone.number}`}>
                {phone.display}
              </a>
            ))}
          </div>

          <div className="contact-card">
            <Mail />
            <h3>Email Us</h3>
            {emails.map((email) => (
              <a key={email} href={`mailto:${email}`}>
                {email}
              </a>
            ))}
          </div>

          <div className="contact-card">
            <MapPin />
            <h3>Visit Our Office</h3>
            <p>Fort, Salem 636001, Tamil Nadu, India</p>
          </div>

        </div>

        <div className="contact-bottom">
          <h2>Ready to find your next vehicle?</h2>
          <p>Talk directly with SF Motors.</p>

          <a
            className="btn-primary"
            href="https://wa.me/919976881947"
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
