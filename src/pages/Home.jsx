
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Truck,
  BadgeCheck,
  ShieldCheck,
  TrendingUp,
  ChevronRight
} from "lucide-react";

const categories = [
  { name: "Heavy Trucks", icon: "🚛", count: "Heavy commercial vehicles" },
  { name: "Tippers", icon: "🚚", count: "Construction & mining" },
  { name: "Trailers", icon: "🚛", count: "Long-haul transportation" },
  { name: "Pickup Vehicles", icon: "🛻", count: "Light commercial vehicles" },
  { name: "Buses", icon: "🚌", count: "Passenger transportation" },
  { name: "LCV", icon: "🚐", count: "Light commercial vehicles" }
];

const benefits = [
  {
    icon: <ShieldCheck size={25} />,
    title: "Trust & Transparency",
    description: "Clear vehicle information to help buyers make informed decisions."
  },
  {
    icon: <BadgeCheck size={25} />,
    title: "Verified Details",
    description: "Vehicle details reviewed before listings are published."
  },
  {
    icon: <TrendingUp size={25} />,
    title: "Business Upgrades",
    description: "Find the right commercial vehicle for your next business move."
  }
];

export default function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <span className="eyebrow">
            SALEM'S COMMERCIAL VEHICLE MARKETPLACE
          </span>

          <h1>
            The Right Vehicle.
            <br />
            <span>The Next Opportunity.</span>
          </h1>

          <p>
            Discover quality pre-owned commercial vehicles.
            Buy with confidence. Sell with ease.
          </p>

          <div className="hero-actions">
            <Link to="/vehicles" className="btn-primary">
              Explore Vehicles <ArrowRight size={17} />
            </Link>

            <Link to="/sell-vehicle" className="hero-outline-btn">
              Sell Your Vehicle
            </Link>
          </div>

          <div className="hero-caption">
            <span></span>
            DRIVEN BY TRUST. DEFINED BY EXCELLENCE.
          </div>
        </div>

        <div className="hero-number">
          SF / 01
        </div>
      </section>

      {/* SEARCH SECTION */}
      <section className="search-section">
        <div className="container">
          <div className="search-heading">
            <div>
              <span className="section-label">FIND YOUR VEHICLE</span>
              <h2>What are you looking for?</h2>
            </div>
            <Link to="/vehicles" className="text-link">
              View all vehicles <ArrowRight size={16} />
            </Link>
          </div>

          <form
            className="vehicle-search"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "/vehicles";
            }}
          >
            <div className="search-field">
              <label>Vehicle category</label>
              <select defaultValue="">
                <option value="" disabled>All categories</option>
                <option>Heavy Trucks</option>
                <option>Tippers</option>
                <option>Trailers</option>
                <option>Pickup Vehicles</option>
                <option>Buses</option>
                <option>LCV</option>
              </select>
            </div>

            <div className="search-field">
              <label>Brand</label>
              <select defaultValue="">
                <option value="" disabled>Select brand</option>
                <option>Tata</option>
                <option>Ashok Leyland</option>
                <option>Eicher</option>
                <option>BharatBenz</option>
                <option>Mahindra</option>
              </select>
            </div>

            <div className="search-field">
              <label>Budget</label>
              <select defaultValue="">
                <option value="" disabled>Select budget</option>
                <option>Below ₹5 Lakhs</option>
                <option>₹5–10 Lakhs</option>
                <option>₹10–20 Lakhs</option>
                <option>Above ₹20 Lakhs</option>
              </select>
            </div>

            <button type="submit" className="search-button">
              <Search size={18} /> Search
            </button>
          </form>
          <p className="search-note">
            Search filters will become functional when we connect the vehicle database.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="category-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-label">EXPLORE OUR COLLECTION</span>
            <h2>Vehicles for Every Business</h2>
            <p>Find a vehicle that moves your business forward.</p>
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <Link
                to="/vehicles"
                className="category-card"
                key={category.name}
              >
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.count}</p>
                <span className="category-arrow">
                  <ChevronRight size={19} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="featured-section">
        <div className="container">
          <div className="search-heading">
            <div>
              <span className="section-label">OUR MARKETPLACE</span>
              <h2>Featured Vehicles</h2>
              <p>Explore available commercial vehicles from SF Motors.</p>
            </div>

            <Link to="/vehicles" className="text-link">
              Explore inventory <ArrowRight size={16} />
            </Link>
          </div>

          <div className="empty-inventory">
            <Truck size={42} strokeWidth={1.2} />
            <h3>New listings coming soon</h3>
            <p>
              Our vehicle inventory will appear here once listings are added
              through the SF Motors admin dashboard.
            </p>
            <Link to="/vehicles" className="btn-outline">
              Browse Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* WHY SF MOTORS */}
      <section className="why-section">
        <div className="container">
          <div className="section-heading-center">
            <span className="section-label">THE SF MOTORS DIFFERENCE</span>
            <h2>Built Around Trust</h2>
            <p>A straightforward marketplace for commercial vehicle buyers and sellers.</p>
          </div>

          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <div className="benefit-card" key={benefit.title}>
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SELL CTA */}
      <section className="sell-banner">
        <div className="container sell-banner-content">
          <div>
            <span className="section-label">SELL WITH SF MOTORS</span>
            <h2>Ready to upgrade your fleet?</h2>
            <p>List your commercial vehicle and connect with interested buyers.</p>
          </div>

          <Link to="/sell-vehicle" className="btn-primary">
            List Your Vehicle <ArrowRight size={17} />
          </Link>
        </div>
      </section>

    </div>
  );
}
