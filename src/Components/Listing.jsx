import React from "react";
import villa from "../assets/images/villa.jpg";
import poolside from "../assets/images/poolside.jpg";
import normalhome from "../assets/images/normalhome.jpg";
import { MapPin } from "lucide-react";

const Listing = () => {
  return (
    <div className="tf-container mt-5 px-2">
      <h2 className="fw-bold mb-4 text-dark"> Recommended For You</h2>

      {/* Card 1 */}
      <div
        className="mb-5"
        style={{
          borderRadius: "5px",
          background: "#fff",
          boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={villa}
            alt="Luxury Villa"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(135deg, #ED2027, #ED2027)",
              color: "#fff",
              fontSize: "0.7rem",       // slightly smaller text
              fontWeight: "600",
              padding: "2px 8px",       // reduced padding → less height
              lineHeight: "2",          // keeps text tight inside
              borderRadius: "6px",      // smaller rounded corners
            }}
          >
            SALE
          </span>



        </div>
        <div style={{ padding: "16px" }}>
          <h5
            style={{
              marginBottom: "6px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#161E2D",
            }}
          >
            Luxury Villa
          </h5>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.9rem",
              color: "#6c757d",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MapPin size={16} style={{ marginRight: "6px", color: "#ff4b2b" }} />
            Chhattisgarh
          </p>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span style={{ fontWeight: "800", fontSize: "1rem", color: "black" }}>
              Guest User
            </span>
            <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "black" }}>
              ₹500.00
            </span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div
        className="mb-5"
        style={{
          borderRadius: "5px",
          background: "#fff",
          boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={poolside}
            alt="Luxury Villa"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(135deg, #ED2027, #ED2027)",
              color: "#fff",
              fontSize: "0.7rem",       // slightly smaller text
              fontWeight: "600",
              padding: "2px 8px",       // reduced padding → less height
              lineHeight: "2",          // keeps text tight inside
              borderRadius: "6px",      // smaller rounded corners
            }}
          >
            SALE
          </span>



        </div>
        <div style={{ padding: "16px" }}>
          <h5
            style={{
              marginBottom: "6px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#161E2D",
            }}
          >
            Luxury Villa
          </h5>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.9rem",
              color: "#6c757d",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MapPin size={16} style={{ marginRight: "6px", color: "#ff4b2b" }} />
            Chhattisgarh
          </p>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span style={{ fontWeight: "800", fontSize: "1rem", color: "black" }}>
              Guest User
            </span>
            <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "black" }}>
              ₹500.00
            </span>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div
        className="mb-5"
        style={{
          borderRadius: "5px",
          background: "#fff",
          boxShadow: "0 1px 1px rgba(0,0,0,0.08)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "relative" }}>
          <img
            src={normalhome}
            alt="Luxury Villa"
            style={{ width: "100%", height: "220px", objectFit: "cover" }}
          />
          <span
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "linear-gradient(135deg, #ED2027, #ED2027)",
              color: "#fff",
              fontSize: "0.7rem",       // slightly smaller text
              fontWeight: "600",
              padding: "2px 8px",       // reduced padding → less height
              lineHeight: "2",          // keeps text tight inside
              borderRadius: "6px",      // smaller rounded corners
            }}
          >
            SALE
          </span>



        </div>
        <div style={{ padding: "16px" }}>
          <h5
            style={{
              marginBottom: "6px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#161E2D",
            }}
          >
            Luxury Villa
          </h5>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: "0.9rem",
              color: "#6c757d",
              display: "flex",
              alignItems: "center",
            }}
          >
            <MapPin size={16} style={{ marginRight: "6px", color: "#ff4b2b" }} />
            Chhattisgarh
          </p>
          <div
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
          >
            <span style={{ fontWeight: "800", fontSize: "1rem", color: "black" }}>
              Guest User
            </span>
            <span style={{ fontWeight: "800", fontSize: "1.1rem", color: "black" }}>
              ₹500.00
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listing;
