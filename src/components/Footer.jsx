
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <Link to="/" className="brand">
              <span className="brand-mark">SF</span>
              <span className="brand-name">
                SF MOTORS
                <small>COMMERCIAL VEHICLES</small>
              </span>
            </Link>
            <p>
              Driven by Trust. Defined by Excellence.
              Your trusted destination for pre-owned commercial vehicles.
            </p>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/vehicles">Browse Vehicles</Link></li>
              <li><Link to="/sell-vehicle">Sell Your Vehicle</Link></li>
            </ul>
          </div>

          <div>
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="tel:+919976881947">
                  <Phone size={13} /> +91 99768 81947
                </a>
              </li>
              <li>
                <a href="tel:+919344455479">
                  <Phone size={13} /> +91 93444 55479
                </a>
              </li>
              <li>
                <a href="mailto:sfbabusfbabu@gmail.com">
                  <Mail size={13} /> Email SF Motors
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Visit Us</h3>
            <p>
              <MapPin size={15} /> Fort, Salem 636001,
              Tamil Nadu, India
            </p>
            <p>Email:</p>
            <a href="mailto:sfbabusfbabu@gmail.com">
              sfbabusfbabu@gmail.com
            </a>
            <br />
            <a href="mailto:sheikabbasbabu2005@gmail.com">
              sheikabbasbabu2005@gmail.com
            </a>
          </div>

        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SF Motors. All rights reserved.</span>
          <span>Driven by Trust. Defined by Excellence.</span>
        </div>
      </div>
    </footer>
  );
}
