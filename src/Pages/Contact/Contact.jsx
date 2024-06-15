import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {};
  return (
    <div className="contact">
      <div className="form">
        <h1 className="can-help-you">
          <span className="underline">Invictus</span> Can Help You
        </h1>
        <p className="content">
          Enter your details and one of our expert counsellors will reach out to
          you so we can connect you to the right course, country, university –
          and even scholarships!
        </p>
        <form className="form">
          <input
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name*"
            className="in"
          />
          <input
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name*"
            className="in"
          />
          <input
            type="text"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            className="in"
          />
          <section className="mobile">
            <h1 className="code">+91</h1>
            <input
              type="text"
              placeholder="Mobile Number*"
              value={formData.mobile}
              onChange={handleChange}
              className="mobile-input"
            />
          </section>
          <label htmlFor="place">Your preferred study destination*</label>
          <select id="place">
            <option>Select</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>Ireland</option>
            <option>New Zealand</option>
            <option>UK</option>
            <option>United States</option>
          </select>
          <label htmlFor="month">When do you plan to study?*</label>
          <select id="month">
            <option>Select</option>
            <option>Jun-2024</option>
            <option>Jul-2024</option>
            <option>Aug-2024</option>
            <option>Sep-2024</option>
            <option>Oct-2024</option>
            <option>Nov-2024</option>
            <option>Dec-2024</option>
          </select>
          <label htmlFor="near">Nearest Invictus Office*</label>
          <select id="near">
            <option>Select</option>
            <option>Ahmedabad</option>
            <option>Bangalore</option>
            <option>ChandiGhar</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Gurgaon</option>
          </select>
          <label htmlFor="mode">Preferred mode of counselling*</label>
          <select id="mode">
            <option>Select</option>
            <option>In-person</option>
            <option>Virtual-Counselling</option>
          </select>
          <label htmlFor="level">Preferred study level*</label>
          <select id="level">
            <option>Select</option>
            <option>Undergraduate</option>
            <option>Postgraduate</option>
            <option>Doctorate</option>
            <option>Vocational</option>
          </select>
          <label htmlFor="fund">How would you fund tour education?*</label>
          <select id="fund">
            <option>Select</option>
            <option>Self-funded</option>
            <option>ScolarShip</option>
            <option>parents</option>
            <option>Government ScholarShip</option>
            <option>BankLoan</option>
            <option>Other</option>
          </select>
          <div className="checks">
            <div className="check">
              <input type="checkbox" id="terms" className="terms" />
              <label htmlFor="terms">
                I agree to IDP Terms and privacy policy
              </label>
            </div>
            <div className="check">
              <input type="checkbox" id="assist" className="terms" />
              <label htmlFor="assist">
                Please contact me by phone,email or sms to assist with my
                enquiry
              </label>
            </div>
            <div className="check">
              <input type="checkbox" id="offers" className="terms" />
              <label htmlFor="offers">
                I would like to receive updates and offers from IDP
              </label>
            </div>
          </div>
          <button type="submit" className="submit">
            Help Me Study Abroad.
          </button>
        </form>
      </div>
      <img
        src="https://theinvictus.co.in/wp-content/uploads/2023/04/holding-world-my-hands-attractive-female-travel-agent-showing-globe-smiling-while-working-her-modern-office-scaled-1-1024x683.jpg"
        className="image"
      />
    </div>
  );
}
