import React from "react";
import "./Traning.css";

export default function Traning() {
  return (
    <>
      <div className="traning-main-page-laptop">
        <h1 className="heading-text">You Should Also Know</h1>
        <p className="line-color-traning"></p>
        <h1 className="trining-text">Traning With Invictus</h1>
        <div className="traning-start-page">
          <div className="flex-image-and-paragraph ajust-hight">
            <img
              className="imagesizing"
              src="https://cioafrica.co/wp-content/uploads/2023/03/Training.jpg"
              alt="traning-image"
            />
            <p className="paragraph-height">
              In today’s dynamic corporate world, many students intend to pursue
              additional education abroad in order to obtain a global footprint
              for their profession. Students must not only have excellent GPAs,
              ambitious course loads, and well-rounded extracurricular
              activities to stand out in the application pool, but they must
              also have good college-entrance exam results (GRE, GMAT, SAT,
              IELTS, TOEFL SCORES).
            </p>
          </div>
          <div className="flex-image-and-paragraph ajust-hight">
            <img
              className="imagesizing"
              src="https://images.ctfassets.net/cwuwssn8bo43/4q4QpBBJYNHkbRzzspMugZ/7c29008b14efa52a40d564c47fa3ba38/USA_Training_Hero.webp?fm=webp&w=1080"
              alt="traning-image"
            />
            <p className="paragraph-height">
              Our training follows a simple yet comprehensive style. During the
              first session, students complete a full-length diagnostic test on
              our portal. This enables us to better understand each student’s
              individual potential. Our professional trainers from IITs and NITs
              teach our students everything they need to know to ace these tests
              in the succeeding lessons. We value commitment over natural skill
              as the path to success.
            </p>
          </div>
          <div className="flex-image-and-paragraph">
            <img
              className="imagesizing"
              src="https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2023/07/training/24976199-1-eng-GB/Training_pillars.jpg"
              alt="traning-image"
            />
            <p className="paragraph-height">
              Throughout the course, we administer a number of full-length
              diagnostic examinations, each with a comprehensive report
              outlining specific strengths and shortcomings. One of the reasons
              for our program’s success is the specific attention we give each
              student. The focus of our classes is equally vital. Our technique
              includes a thorough review of all mathematical and verbal subjects
              tested in these exams, in addition to the student-written essays.
              However, we go beyond that by teaching
            </p>
          </div>
        </div>
      </div>
      {/* mobileversion start here */}
    </>
  );
}
