import React from "react";
import "./dreamdestination.css";

export default function Dreamdestination() {
  return (
    <>
      <div className="dreamdestineation-main-page">
        <div>
          <h1 className="six-dream-text">Six dream destinations</h1>
          <p className="under-line-for-six-destination"></p>
          <p className="six-dream-paragraph-text">
            Begin an exciting academic journey in these varied and welcoming
            study locations!
          </p>
        </div>
        <div className="cards-flex-fro-travel-card">
          <div className="main-cont">
            <div className="background-cont background1">
              <h1>Australa</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In Australia</h1>
              <p>
                unCover a World of Opportunies in the land down under! with over
                1,100 instituons,and{" "}
              </p>
              <button className="discover-btn" type="button">
                Discover
              </button>
            </div>
          </div>
          {/* {secondcard} */}
          <div className="main-cont">
            <div className="background-cont background-canada">
              <h1>canada</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In Canada</h1>
              <p>
                Canada is rrenowed for its hight-quality education and welcoming
                multicultural soxiety. with a reputated scenery a well-rounded
                syudy abroud experience.
              </p>
              <button className="discover-btn" type="button">
                {" "}
                Discover
              </button>
            </div>
          </div>
          {/* {third card} */}
          <div className="main-cont">
            <div className="background-cont background-ireland">
              <h1>Ireland</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In Ireland</h1>
              <p>
                Ireland consistently ranks top 20 globally for quality of
                life,safe and human development its rich history,vibrant
                culture,and top-tire insitutions attracted students
              </p>
              <button className="discover-btn" type="button">
                {" "}
                Discover
              </button>
            </div>
          </div>
          <div className="main-cont">
            <div className="background-cont background-newzealand">
              <h1> New-Zealand</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In New-Zealand</h1>
              <p>
                Renoward as one of the world's safest national,newZealand is a
                popular choice among international students,it offers a
                world-class education sysytem,abundant research
              </p>
              <button className="discover-btn" type="button">
                {" "}
                Discover
              </button>
            </div>
          </div>
          {/* {secondcard} */}
          <div className="main-cont">
            <div className="background-cont background-united-kingdom">
              <h1>United Kingdom</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In United Kingdom</h1>
              <p>
                The United Kingdom is home to some of the world's finest and
                oldest universities and colleges. Experience a tradition of
                academic excellence and research innovation, with access to
                top-quality education that shapes future leaders across diverse
                helds.
              </p>
              <button className="discover-btn" type="button">
                {" "}
                Discover
              </button>
            </div>
          </div>
          {/* {third card} */}
          <div className="main-cont">
            <div className="background-cont background-united-State">
              <h1>United States</h1>
            </div>
            <div className="hovering-container">
              <h1>Study In United States</h1>
              <p>
                Boasting 33 of the world's top 100 universities, as well as
                being home to the financial, technology, aerospace, healtheare
                and entertainment hubs of the world, the United States is a land
                of educational and career opportunities for international
                students
              </p>
              <button className="discover-btn" type="button">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
