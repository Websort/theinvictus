import React from "react";
import "./Events.css";

export default function Events() {
  return (
    <div>
      <select className="inputsize" name="States" id="State">
        <option value="">Select a state</option>
        <option value="maharashtra">Maharashtra</option>
        <option value="karnataka">Karnataka</option>
        <option value="tamilnadu">Tamil Nadu</option>
        <option value="uttarpradesh">Uttar Pradesh</option>
        <option value="westbengal">West Bengal</option>
        <option value="gujarat">Gujarat</option>
        <option value="rajasthan">Rajasthan</option>
        <option value="andhrapradesh">Andhra Pradesh</option>
        <option value="telangana">Telangana</option>
        <option value="kerala">Kerala</option>
        <option value="madhyapradesh">Madhya Pradesh</option>
        <option value="bihar">Bihar</option>
        <option value="punjab">Punjab</option>
        <option value="haryana">Haryana</option>
        <option value="odisha">Odisha</option>
        <option value="assam">Assam</option>
        <option value="jharkhand">Jharkhand</option>
        <option value="chhattisgarh">Chhattisgarh</option>
        <option value="uttarakhand">Uttarakhand</option>
        <option value="himachalpradesh">Himachal Pradesh</option>
        <option value="goa">Goa</option>
        <option value="tripura">Tripura</option>
        <option value="meghalaya">Meghalaya</option>
        <option value="manipur">Manipur</option>
        <option value="nagaland">Nagaland</option>
        <option value="arunachalpradesh">Arunachal Pradesh</option>
        <option value="mizoram">Mizoram</option>
      </select>
      <select className="inputsize">
        <option>Month</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>september</option>
        <option>february</option>
        <option>March</option>
        <option>April</option>
        <option>may</option>
      </select>
      <select className="inputsize">
        <option>Study destination</option>
        <option>Australia</option>
        <option>Canada</option>
        <option>ireland</option>
        <option>New Zealand</option>
        <option>United kingdowm</option>
        <option>United States</option>
      </select>
      <button className="EventButton" type="button">
        Search
      </button>
    </div>
  );
}
