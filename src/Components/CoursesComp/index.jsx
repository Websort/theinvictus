import React from "react";
import "./index.css";

export default function () {
  return (
    <div>
      <input
        className="inputsize"
        type="text"
        name="city"
        list="cityname"
        placeholder="Enter Courses Subjects e.g LAW"
      />
      <datalist id="cityname">
        <select>
          <option>Cosmerology</option>
          <option>Applied Physics</option>
          <option>Journalism</option>
          <option>Social Science</option>
          <option>Animation</option>
          <option>Paramediacl studies</option>
          <option>Behavioural Science</option>
          <option>Nuclear Physics</option>
          <option>general Studies</option>
          <option>Partical and material Physics</option>
          <option>Astronomy</option>
          <option>Computer Engineering</option>
          <option>International Business</option>
          <option>Chemical Engineering</option>
          <option>human resource Management</option>
          <option>Radiography</option>
          <option>health Science</option>
          <option>medicine And Medical Studies </option>
          <option>Innovation</option>
          <option>Fisheries Studies</option>
          <option>Bakery</option>
          <option>Broadcast Media</option>
          <option>Marine Science</option>
          <option>Environmental Studies</option>
          <option>Occupational Health & Safety</option>
          <option>Forestry Studies</option>
          <option>Public relation(PR)</option>
          <option>All Pharmacy</option>
          <option>Landscape And design and architecture</option>
          <option>Bussiness</option>
          <option>Political and Socail Secience</option>
          <option>Argiculture Science</option>
          <option>All Human Welfare Studies and Services</option>
          <option>Anatomy</option>
          <option>Design and Applied Arts</option>
          <option>Computer graphics</option>
          <option>Biological Sciences</option>
          <option>Quality Management</option>
          <option>Building and Architecture</option>
          <option>Quality Management</option>
          <option>Psychology</option>
          <option>Creative Writing</option>
          <option>Geology</option>
        </select>
      </datalist>
      <select className="inputsize">
        <option>Select study Level</option>
        <option>Postgraduate</option>
        <option>UnderGraduate</option>
        <option>Universiry Preparation</option>
        <option>English Language</option>
        <option>School</option>
      </select>
      <select className="inputsize">
        <option>Select a study destination</option>
        <option>Australia</option>
        <option>Canada</option>
        <option>Ireland</option>
        <option>New Zealand</option>
        <option>United Kingdowm</option>
        <option>United States</option>
      </select>
      <button className="CoursesButton" type="button">
        Search
      </button>
    </div>
  );
}
