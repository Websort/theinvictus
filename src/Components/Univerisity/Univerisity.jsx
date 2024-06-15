import React from "react";
import "./Univerisity.css";

export default function Univerisity() {
  return (
    <div>
      <input
        className="inputsize"
        type="text"
        name="city"
        list="cityname"
        placeholder="Enter University name "
      />
      <datalist id="cityname">
        <select>
          <option value="harvard">Harvard University</option>
          <option value="stanford">Stanford University</option>
          <option value="mit">
            Massachusetts Institute of Technology (MIT)
          </option>
          <option value="caltech">
            California Institute of Technology (Caltech)
          </option>
          <option value="ucberkeley">University of California, Berkeley</option>
          <option value="oxford">University of Oxford</option>
          <option value="cambridge">University of Cambridge</option>
          <option value="imperial">Imperial College London</option>
          <option value="lse">
            London School of Economics and Political Science (LSE)
          </option>
          <option value="ucl">University College London (UCL)</option>
          <option value="utoronto">University of Toronto</option>
          <option value="mcgill">McGill University</option>
          <option value="ubc">University of British Columbia</option>
          <option value="ualberta">University of Alberta</option>
          <option value="umontreal">University of Montreal</option>
          <option value="usyd">University of Sydney</option>
          <option value="umelb">University of Melbourne</option>
          <option value="anu">Australian National University (ANU)</option>
          <option value="uq">University of Queensland</option>
          <option value="monash">Monash University</option>
          <option value="ethzurich">ETH Zurich (Switzerland)</option>
          <option value="ucopenhagen">
            University of Copenhagen (Denmark)
          </option>
          <option value="uamsterdam">
            University of Amsterdam (Netherlands)
          </option>
          <option value="lmu">
            Ludwig Maximilian University of Munich (Germany)
          </option>
          <option value="uparis">University of Paris (France)</option>
          <option value="utokyo">University of Tokyo (Japan)</option>
          <option value="nus">National University of Singapore (NUS)</option>
          <option value="tsinghua">Tsinghua University (China)</option>
          <option value="peking">Peking University (China)</option>
          <option value="hku">University of Hong Kong (HKU)</option>
          <option value="uct">University of Cape Town (South Africa)</option>
          <option value="wits">
            University of the Witwatersrand (South Africa)
          </option>
          <option value="stellenbosch">
            Stellenbosch University (South Africa)
          </option>
          <option value="cairo">Cairo University (Egypt)</option>
          <option value="uon">University of Nairobi (Kenya)</option>
        </select>
      </datalist>
      <span className="text">or</span>
      <select className="inputsize">
        <option>Select a study destination</option>
        <option>Austraila</option>
        <option>Canada</option>
        <option>Ireland</option>
        <option>New Zealand</option>
        <option>United Kingdom</option>
        <option>United States</option>
      </select>
      <button className="UniverisityButton" type="button">
        Search
      </button>
    </div>
  );
}
