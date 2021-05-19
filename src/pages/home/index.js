import React from "react";
import BioImage from "../../assets/bio-image.jpg";
import './index.css';
// import { Link, Route } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ height:"90vh" }} >
      <h1 className="text-center mt-5">Welcome!</h1>

      <section className="container card w-50" id="biocard">
        <div className="row card-row col-sm">
          <div className="col">
            <section>
              <div className="card-img-top ">
                <img src={BioImage} width="300" height="300" alt="Bio Image" />
              </div>

              <h5 className="card-title" id="BioCardName">
                Malcolm Hill
              </h5>

              <ul>
                <li>Nutrition Counseling</li>
                <li>Sport Specific Programming</li>
                <li>Full Stack Programmer</li>
              </ul>
            </section>
          </div>

          <div className="col">
            <div>
              <div>
                <p className="card-body">
                  Assets: Through patience, organization, and maintaining a
                  progressive mindset I am capable of handling several
                  objectives. While working directly with clients in pursuit of
                  their goals, creativity stands out as my strongest attribute.
                  I am fully capable of handling many diverse situations and
                  clients. Currently seeking to further my career in web
                  development!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
