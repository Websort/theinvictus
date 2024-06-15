import React from "react";
import "./Navbar.css";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";

import { IoLogoInstagram } from "react-icons/io5";

export default function Navbar() {
  const navelement = [
    {
      title: "News and artical",
      path: "/newsandarthical",
    },
    { title: "Events", path: "/events" },
  ];
  return (
    <>
      <div className="nav">
        {navelement.map((each, ind) => (
          <Link className="nav-element-text" to={each.path} key={ind}>
            {each.title}
          </Link>
        ))}
        <section className="social-display">
          <button className="btn-sizing">Social v</button>
          <div className="social">
            <div className="flex-icons">
              <IoLogoInstagram />
              <h1>Instagram</h1>
            </div>
            <div className="flex-icons">
              <FaFacebook />
              <h1>Facebook</h1>
            </div>
            <div className="flex-icons">
              <FaLinkedinIn />
              <h1>Linked In</h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
