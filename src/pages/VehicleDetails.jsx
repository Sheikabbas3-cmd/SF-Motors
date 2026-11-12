
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const photos = [
  "/images/Vehicles/sf_motors_vehicle_07.jpg",
  "/images/Vehicles/sf_motors_vehicle_08.jpg",
  "/images/Vehicles/sf_motors_vehicle_09.jpg",
  "/images/Vehicles/sf_motors_vehicle_03.jpg",
  "/images/Vehicles/sf_motors_vehicle_05.jpg",
  "/images/Vehicles/sf_motors_vehicle_06.jpg",
  "/images/Vehicles/sf_motors_vehicle_10.jpg",
  "/images/Vehicles/sf_motors_vehicle_11.jpg",
];

export default function VehicleDetails() {
  const { id } = useParams();
  const [activePhoto, setActivePhoto] = useState(photos[0]);

  if (id !== "al3118") {
    return (
      <div className="vehicle-not-found">
        <h2>Vehicle not found</h2>
        <Link to="/vehicles">Back to Vehicles</Link>
      </div>
    );
  }

  const message = encodeURIComponent(
    "Hello SF Motors, I am interested in the Ashok Leyland AL 3118 HGV listed at ₹17,50,000. Please share more details."
  );

  return (
    <section className="vehicle-details-page">
      <Link to="/vehicles" className="back-to-stock">
        <ArrowLeft size={17} /> Back to Vehicles
      </Link>

      <div className="details-layout">
        <div className="details-gallery">
          <div className="main-vehicle-photo">
            <img src={activePhoto} alt="Ashok Leyland AL 3118" />
          </div>

          <div className="vehicle-thumbnails">
            {photos.map((photo) => (
              <button
                key={photo}
                className={
                  activePhoto === photo
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() => setActivePhoto(photo)}
              >
                <img src={photo} alt="Vehicle view" />
              </button>
            ))}
          </div>
        </div>

        <div className="details-information">
          <span className="details-label">
            SF MOTORS · AVAILABLE FOR SALE
          </span>

          <h1>Ashok Leyland AL 3118</h1>
          <p className="details-type">
            Heavy Goods Vehicle (HGV)
          </p>

          <div className="details-price">
            <small>ASKING PRICE</small>
            <h2>₹17,50,000</h2>
            <span>Quite Negotiable</span>
          </div>

          <div className="details-specifications">
            <div>
              <small>Registration Year</small>
              <strong>2015</strong>
            </div>
            <div>
              <small>Registration Region</small>
              <strong>TN 86</strong>
            </div>
            <div>
              <small>Ownership</small>
              <strong>3rd Owner</strong>
            </div>
            <div>
              <small>Vehicle Type</small>
              <strong>HGV</strong>
            </div>
          </div>

          <h3>Vehicle Information</h3>

          <ul className="details-features">
            <li><CheckCircle2 /> RC Available</li>
            <li><CheckCircle2 /> NOC assistance available</li>
            <li><CheckCircle2 /> Insurance arrangement available</li>
            <li><CheckCircle2 /> Pollution certificate arrangement</li>
            <li>
              <CheckCircle2 /> Finance assistance available, subject to approval
            </li>
          </ul>

          <div className="details-location">
            <MapPin size={17} /> Salem, Tamil Nadu
          </div>

          <a
            className="details-whatsapp"
            href={`https://wa.me/919976881947?text=${message}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={18} />
            Enquire on WhatsApp
          </a>

          <a className="details-call" href="tel:+919976881947">
            <Phone size={17} />
            Call SF Motors
          </a>

          <p className="details-disclaimer">
            Vehicle documents and condition are subject to buyer
            verification. Insurance and finance are subject to
            applicable terms and approval.
          </p>

          <div className="sf-quote-panel">
            <div className="quote-brand">SF MOTORS</div>

            <div className="quote-visual">
              <span className="quote-orbit"></span>
              <span className="quote-number">01</span>
              <span className="quote-caption">
                THE POWER OF TRUST
              </span>
            </div>

            <div className="quote-content">
              <span className="quote-label">ஒரு சிந்தனை</span>
              <h2>
                வாகனம் என்பது
                <span> வெறும் பயணம் அல்ல...</span>
              </h2>
              <p>
                அது ஒருவரின் உழைப்பின் அடையாளம்.
                நம்பிக்கையுடன் தொடரும் வெற்றிப் பயணம்.
              </p>
            </div>

            <div className="quote-footer">
              DRIVEN BY TRUST.
              <span>DEFINED BY EXCELLENCE.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
