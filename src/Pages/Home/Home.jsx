import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import CoursesComp from "../../Components/CoursesComp";
import Scholarship from "../../Components/Scholarships/Scholarships";
import Univerisity from "../../Components/Univerisity/Univerisity";
import Events from "../../Components/Events/Events";
import Traning from "../Traning/Traning";
import Footer from "../../Components/Footer/Footer";
import Dreamdestination from "../Dreamdestination/dreamdestination";

import Contact from "../Contact/Contact";

export default function Home() {
  const [index, setindex] = useState(0);
  const [category, setcategory] = useState("Courses");

  const caurosel = [
    {
      title: "Study abroud with Invictus!!",
      buttonName: "Contact Us",
      path: "/contactUs",
      className: "btn-color",
    },
    {
      title: "Our Services",
      buttonName: "read more",
      className: "btn-color-another-ones",
    },
    {
      title: "Success Stories",
      buttonName: "read more",
      className: "btn-color-another-ones",
    },

    {
      title: "Our Latest Blogs",
      buttonName: "read more",
      className: "btn-color-another-ones",
    },
  ];
  return (
    <div className="section2">
      <div className="laptop-version">
        <div className="carousel-image">
          <div className="flex-text-content">
            <div className="aline-tostart"></div>
            <h1>{caurosel[index].title}</h1>
            <Link to={caurosel[index].path}>
              <button className={caurosel[index].className}>
                {caurosel[index].buttonName}
              </button>
            </Link>

            <div className="button-flexing button-flexing-tostart">
              <button
                onClick={() => setindex(0)}
                className="btn-styling"
              ></button>
              <button
                onClick={() => setindex(1)}
                className="btn-styling"
              ></button>
              <button
                onClick={() => setindex(2)}
                className="btn-styling"
              ></button>
              <button
                onClick={() => setindex(3)}
                className="btn-styling"
              ></button>
            </div>
          </div>
        </div>
      </div>
      {/* filteringpage for laptoversion */}
      <div className="alinecard">
        <div className="cardHomepage">
          <section>
            <button
              className={category === "Courses" ? "active" : "cardbutton"}
              onClick={() => setcategory("Courses")}
            >
              Courses
            </button>
            <button
              className={category === "Scholarships" ? "active" : "cardbutton"}
              onClick={() => setcategory("Scholarships")}
            >
              Scholarships
            </button>
            <button
              className={category === "Univerisity" ? "active" : "cardbutton"}
              onClick={() => setcategory("Univerisity")}
            >
              Universities
            </button>
            <button
              className={category === "Events" ? "active" : "cardbutton"}
              onClick={() => setcategory("Events")}
            >
              Events
            </button>
            <button
              className={category === "Guide me" ? "active" : "cardbutton"}
              onClick={() => setcategory("Guide me")}
            >
              Guide me
            </button>
          </section>
          {category === "Courses" && <CoursesComp />}
          {category === "Scholarships" && <Scholarship />}
          {category === "Univerisity" && <Univerisity />}
          {category === "Events" && <Events />}
        </div>
      </div>
      {/* why choose Invictus */}
      <div className="why-choose-main-container-laptop">
        <div className="invictus-text-page-laptop ">
          <h1 className="invictus-heading-frist-text">Why choose Invictus?</h1>
          <h1 className="line-color"> </h1>
        </div>
      </div>
      <div className="hover-image-container">
        <article class="card">
          <header class="card__thumb">
            <a href="#">
              <img src="https://theinvictus.co.in/wp-content/uploads/2023/04/young-students-learning-library-bookshelves-scaled-1-2048x1367.jpg" />
            </a>
          </header>
          <div class="card__body">
            <div class="card__category">
              <a href="#">Invicitus</a>
            </div>
            <h2 class="card__title">
              <a href="#">DREAM BIG, FLY HIGH WITH INVICTUS!</a>
            </h2>
            <div class="card__subtitle">
              At Invictus, we believe in the power of pursuing a global
              education and opening numerous doors for students. With diverse
              course options, the world becomes an oyster for students who want
              to expand their horizons. As young Indians today continue to
              emerge as leaders in different arenas, we take pride in guiding
              future leaders to choose and pursue their higher education at some
              of the best universities in the world
            </div>
            <p class="card__description"></p>
          </div>
          <footer class="card__footer">
            <span class="icon ion-clock"></span> 10 mins ago
            <span class="icon ion-chatbox"></span>
            <a href="#"> 145 comments</a>
          </footer>
        </article>
        {/* second card */}
        <article class="card card-6">
          <header class="card__thumb">
            <a href="#">
              <img src="https://media.licdn.com/dms/image/D5612AQGwmkOWqYis_w/article-cover_image-shrink_720_1280/0/1697198829332?e=2147483647&v=beta&t=R_h2zmWHhv1BNw59eFhtAhq0DLEfgHmhx4-Ldtk8l8I" />
            </a>
          </header>
          <div class="card__body">
            <div class="card__category">
              <a href="#">Invicitus</a>
            </div>
            <h2 class="card__title">
              <a href="#">Vision</a>
            </h2>
            <div class="card__subtitle">
              Our vision is to empower students to become global citizens by
              providing them with the tools and resources they need to succeed
              in the competitive world of higher education.
            </div>
            <p class="card__description"></p>
          </div>
          <footer class="card__footer">
            <span class="icon ion-clock"></span> 10 mins ago
            <span class="icon ion-chatbox"></span>
            <a href="#"> 180 comments</a>
          </footer>
        </article>
        {/* third card */}
        <article class="card card-7">
          <header class="card__thumb">
            <a href="#">
              <img src="https://media.licdn.com/dms/image/D5612AQGyZm237ZcSaQ/article-inline_image-shrink_1500_2232/0/1690765145639?e=1723075200&v=beta&t=Yu1mGlERjHcxa5lzW9uUPNfoja7OQOEeKSRCIjm4mJk" />
            </a>
          </header>
          <div class="card__body">
            <div class="card__category">
              <a href="#">Invicitus</a>
            </div>
            <h2 class="card__title">
              <a href="#">Motto</a>
            </h2>
            <div class="card__subtitle">
              Our motto, “Dream Big, Fly High,” encapsulates our belief that
              every student has the potential to achieve great things. We are
              here to help students realize their dreams and reach for the
              stars. At Invictus, we believe that with hard work, dedication,
              and the right guidance, anything is possible.
            </div>
            <p class="card__description"></p>
          </div>
          <footer class="card__footer">
            <span class="icon ion-clock"></span> 10 mins ago
            <span class="icon ion-chatbox"></span>
            <a href="#"> 180 comments</a>
          </footer>
        </article>
      </div>

      {/* // mobile version starts here */}
      <div className="mobile-version">
        <div className="carousel-image">
          <div className="text-alinement">
            <div className="aline-tostart">
              <h1>{caurosel[index].title}</h1>
              <Link to={caurosel[index].path}>
                <button className={caurosel[index].className}>
                  {caurosel[index].buttonName}
                </button>
              </Link>

              <div className="button-flexing button-flexing-tostart ">
                <button
                  onClick={() => setindex(0)}
                  className="btn-styling"
                ></button>
                <button
                  onClick={() => setindex(1)}
                  className="btn-styling"
                ></button>
                <button
                  onClick={() => setindex(2)}
                  className="btn-styling"
                ></button>
                <button
                  onClick={() => setindex(3)}
                  className="btn-styling"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardHomepage-mobile">
        <section>
          <button
            className={category === "Courses" ? "active" : "cardbutton"}
            onClick={() => setcategory("Courses")}
          >
            Courses
          </button>
          <button
            className={category === "Scholarships" ? "active" : "cardbutton"}
            onClick={() => setcategory("Scholarships")}
          >
            Scholarships
          </button>
          <button
            className={category === "Univerisity" ? "active" : "cardbutton"}
            onClick={() => setcategory("Univerisity")}
          >
            Universities
          </button>
          <button
            className={category === "Events" ? "active" : "cardbutton"}
            onClick={() => setcategory("Events")}
          >
            Events
          </button>
          <button
            className={category === "Guide me" ? "active" : "cardbutton"}
            onClick={() => setcategory("Guide me")}
          >
            Guide me
          </button>
        </section>
        {category === "Courses" && <CoursesComp />}
        {category === "Scholarships" && <Scholarship />}
        {category === "Univerisity" && <Univerisity />}
        {category === "Events" && <Events />}
      </div>

      {/* why choose Invictus */}
      <div className="why-choose-us-mobile-page">
        <div className="whychoose-text">
          <h1 className="why-choose-heading-text">Why choose Invictus?</h1>
          <h1 className="line-color-mobile"></h1>
        </div>
      </div>
      <div className="card-element-container">
        <div className="card-mobile">
          <img
            src="https://theinvictus.co.in/wp-content/uploads/2023/04/young-students-learning-library-bookshelves-scaled-1-2048x1367.jpg"
            alt=""
            className="image"
          />
          <h3>DREAM BIG, FLY HIGH WITH INVICTUS!</h3>
          <br />
          <p className="paragraph-lineheight">
            At Invictus, we believe in the power of pursuing a global education
            and opening numerous doors for students. With diverse course
            options, the world becomes an oyster for students who want to expand
            their horizons. As young Indians today continue to emerge as leaders
            in different arenas, we take pride in guiding future leaders to
            choose and pursue their higher education at some of the best
            universities in the world
          </p>
        </div>
        <div className="card-mobile">
          <img
            src="https://media.licdn.com/dms/image/D5612AQGwmkOWqYis_w/article-cover_image-shrink_720_1280/0/1697198829332?e=2147483647&v=beta&t=R_h2zmWHhv1BNw59eFhtAhq0DLEfgHmhx4-Ldtk8l8I"
            alt=""
            className="image"
          />
          <h3>VISION</h3>
          <br />
          <p className="paragraph-lineheight">
            Our mission is to provide personalized guidance and support to
            students at every stage of their study abroad journey. We are
            committed to helping students achieve their academic and career
            goals by offering high-quality services at an affordable price.
          </p>
        </div>
        <div className="card-mobile">
          <img
            src="https://media.licdn.com/dms/image/D5612AQGyZm237ZcSaQ/article-inline_image-shrink_1500_2232/0/1690765145639?e=1723075200&v=beta&t=Yu1mGlERjHcxa5lzW9uUPNfoja7OQOEeKSRCIjm4mJk"
            alt=""
            className="image"
          />
          <h3>Motto</h3>
          <p className="paragraph-lineheight">
            Our motto, “Dream Big, Fly High,” encapsulates our belief that every
            student has the potential to achieve great things. We are here to
            help students realize their dreams and reach for the stars. At
            Invictus, we believe that with hard work, dedication, and the right
            guidance, anything is possible.
          </p>
        </div>
      </div>
      <Traning />
      <Dreamdestination />
      {/* contact will appear here */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
