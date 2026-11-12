
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Truck,
  Target,
  Eye,
  Handshake
} from "lucide-react";

export default function About() {
  return (
    <main className="about-luxury">

      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay" />

        <div className="about-hero-content">
          <span className="about-kicker">THE SF MOTORS LEGACY</span>
          <h1>
            Built on Trust.
            <br />
            <span>Driven by Excellence.</span>
          </h1>
          <p>
            A journey shaped by experience, powered by ambition
            and driven by the world of commercial vehicles.
          </p>
          <Link to="/vehicles" className="about-gold-button">
            Explore Our Vehicles <ArrowRight size={17} />
          </Link>
        </div>

        <div className="about-hero-bottom">
          <span>SALEM · TAMIL NADU · INDIA</span>
          <span>DRIVEN BY TRUST. DEFINED BY EXCELLENCE.</span>
        </div>

        <div className="about-road">
          <div className="about-road-line" />
          <div className="about-truck">
            <Truck size={72} strokeWidth={1.1} />
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="about-intro">
        <div className="about-section-label">WHO WE ARE</div>
        <h2>
          More Than Vehicles.
          <br />
          <span>A Legacy of Trust.</span>
        </h2>
        <p>
          SF Motors is dedicated to the purchase and sale of quality
          pre-owned commercial vehicles. Built around experience and
          a commitment to honest business, we aim to make every
          vehicle transaction transparent, dependable and convenient.
        </p>
      </section>

      {/* FOUNDERS */}
      <section className="about-founders">
        <div className="founder-image-wrap">
          <img
            src="/images/sf-founders.jpg"
            alt="SF Motors Founders"
          />
          <div className="founder-image-caption">
            <span>THE PEOPLE BEHIND THE BRAND</span>
            <strong>SF MOTORS</strong>
          </div>
        </div>

        <div className="founder-story">
          <span className="about-section-label">OUR JOURNEY</span>
          <h2>
            Built on Experience.
            <br />
            <span>Driven by the Next Generation.</span>
          </h2>
          <p>
            Every business begins with a belief. At SF Motors,
            that belief is built around trust, commitment and
            the value of meaningful relationships.
          </p>
          <p>
            With a foundation in commercial vehicle dealings,
            we are working towards taking the business forward
            with a modern approach, professional presentation
            and a customer-first mindset.
          </p>
          <p className="founder-signature">
            A commitment that moves forward.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-section-label">WHAT DEFINES US</div>
        <h2>Our Principles. Our Promise.</h2>

        <div className="about-value-grid">
          <article>
            <ShieldCheck />
            <h3>Trust</h3>
            <p>Building confidence through honest communication.</p>
          </article>

          <article>
            <Award />
            <h3>Transparency</h3>
            <p>Clear information for confident decisions.</p>
          </article>

          <article>
            <Handshake />
            <h3>Relationships</h3>
            <p>Every customer relationship matters to us.</p>
          </article>
        </div>
      </section>

      {/* VISION */}
      <section className="about-vision">
        <div className="vision-icon"><Target /></div>
        <span className="about-section-label">OUR MISSION</span>
        <h2>Moving Businesses Forward.</h2>
        <p>
          To make pre-owned commercial vehicle buying and selling
          more reliable, accessible and transparent.
        </p>

        <div className="vision-divider" />

        <div className="vision-icon"><Eye /></div>
        <span className="about-section-label">OUR VISION</span>
        <h2>To Become a Name You Trust.</h2>
        <p>
          To grow as a respected name in the commercial vehicle
          marketplace through integrity, service and excellence.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="about-final">
        <span>YOUR NEXT JOURNEY STARTS HERE</span>
        <h2>Driven by Trust.<br />Defined by Excellence.</h2>
        <Link to="/vehicles" className="about-gold-button">
          Discover SF Motors <ArrowRight size={17} />
        </Link>
      </section>

    </main>
  );
}
