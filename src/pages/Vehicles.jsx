
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";

const vehicles = [
  {
    id: "al3118",
    name: "Ashok Leyland AL 3118",
    type: "Heavy Goods Vehicle (HGV)",
    year: "2015",
    location: "Tamil Nadu",
    price: "₹17,50,000",
    ownership: "3rd Owner",
    registration: "TN 86",
    image: "/images/Vehicles/sf_motors_vehicle_04.jpg",
    status: "Available",
  },
];

export default function Vehicles() {
  return (
    <section className="inventory-page">
      <div className="inventory-heading">
        <span className="inventory-eyebrow">SF MOTORS INVENTORY</span>
        <h1>Find Your Next <span>Commercial Vehicle.</span></h1>
        <p>
          Carefully listed commercial vehicles. Transparent details.
          Trusted assistance.
        </p>
      </div>

      <div className="inventory-count">
        <span>AVAILABLE VEHICLES</span>
        <strong>{vehicles.length} Vehicle</strong>
      </div>

      <div className="vehicle-grid">
        {vehicles.map((vehicle) => (
          <article className="vehicle-card" key={vehicle.id}>
            <div className="vehicle-image-wrap">
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="vehicle-image"
              />
              <span className="vehicle-status">
                {vehicle.status}
              </span>
            </div>

            <div className="vehicle-card-content">
              <span className="vehicle-type">{vehicle.type}</span>
              <h2>{vehicle.name}</h2>

              <div className="vehicle-meta">
                <span>{vehicle.year} Registered</span>
                <span>{vehicle.ownership}</span>
                <span>{vehicle.registration}</span>
              </div>

              <div className="vehicle-location">
                <MapPin size={15} />
                {vehicle.location}
              </div>

              <div className="vehicle-price-row">
                <div>
                  <small>ASKING PRICE</small>
                  <h3>{vehicle.price}</h3>
                  <span>Quite Negotiable</span>
                </div>
                <Link
                  to={`/vehicles/${vehicle.id}`}
                  className="vehicle-view-btn"
                >
                  View Details <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="inventory-note">
        <CheckCircle2 size={18} />
        <p>
          NOC assistance, insurance arrangement and finance assistance
          available. RC available. Finance subject to approval.
        </p>
      </div>
    </section>
  );
}
