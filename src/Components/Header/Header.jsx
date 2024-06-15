import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import "./Header.css";
import Login from "../../Pages/Login/Login";
import { Link } from "react-router-dom";
import "./Header.css";
import { FaGripLinesVertical } from "react-icons/fa";

export default function Header() {
  const [Toogle, setToogle] = useState(false);

  const handleToogle = () => {
    setToogle((prev) => !prev);
  };
  const navarray = [
    {
      title: "Internship",
      path: "/internship",
    },
    {
      title: "Test Prep",
      path: "/testprep",
    },
    {
      title: "UNIVERSITY APPLICATIONS",
      path: "/universityapplication",
    },
    {
      title: "VISA PROCESS",
      path: "/visaprocess",
    },
  ];
  return (
    <>
      <div className="header-main-page">
        {/* laptopversion */}
        <div className="laptopversion alining-items">
          <Link to="/">
            <img
              className="imgsizing-laptop"
              alt=""
              src="https://theinvictus.co.in/wp-content/uploads/2023/04/Brand_Presentation_Invictus_V0_page-0001-removebg-preview-2.png"
            />
          </Link>
          <div className="list-flex">
            {navarray.map((each, ind) => (
              <Link className="text-sizing" to={each.path} key={ind}>
                {each.title}
              </Link>
            ))}
          </div>
        </div>
        {/* laptop version ends here */}
        {/* mobile-version */}
        <div className="mobile-version items-flex">
          <Link to="/">
            <img
              className="imgsizing"
              alt=""
              src="https://theinvictus.co.in/wp-content/uploads/2023/04/Brand_Presentation_Invictus_V0_page-0001-removebg-preview-2.png"
            />
          </Link>
          <div className="btn">
            <Link to="/Login">
              {/* <button className='profile btn-aliment'> <CgProfile /> </button> */}
            </Link>
            <button className="" onClick={handleToogle}>
              {" "}
              <RxHamburgerMenu />{" "}
            </button>
          </div>
        </div>
        <div className="toogle-itemflex">
          {Toogle && (
            <div>
              {navarray.map((each, ind) => (
                <Link className="list-flex1" to={each.path} key={ind}>
                  {each.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* mobile version end here */}
    </>
  );
}
