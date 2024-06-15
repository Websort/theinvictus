import React from "react";
import "./Testimonial.css";

export default function TestimonialCard({ item }) {
  return (
    <div className="testi-card">
      <div className="profile-bio">
        <img src={item.imageUrl} alt="image" className="testi-image" />
        <div>
          <h2>{item.name}</h2>
          <p>{item.university}</p>
        </div>
      </div>
      <div>
        <p>{item.content}</p>
      </div>
    </div>
  );
}
