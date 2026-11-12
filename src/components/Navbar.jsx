
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Vehicles", path: "/vehicles" },
    { name: "Sell Vehicle", path: "/sell-vehicle" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <Link to="/" className="brand">
          <span className="brand-mark">SF</span>
          <span className="brand-name">
            SF MOTORS
            <small>COMMERCIAL VEHICLES</small>
          </span>
        </Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link to="/vehicles" className="nav-cta">
          Explore Stock
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
