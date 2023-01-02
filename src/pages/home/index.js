import React from "react";
import BioImage from "../../assets/bio-image.jpg";
import './index.css';
// import { Link, Route } from "react-router-dom";

export default function Home() {
  return (
    <div className='page-height' >
      <h1 className="text-center my-3 welcome">Welcome!</h1>

      <section className="container card w-50" id="biocard">
        <div className="row card-row col-sm">
          <div className="col">
            <section>
              <div className="card-img-top mb-3">
                <img src={BioImage} width="300" height="300" alt="Bio Image" />
              </div>
 
              <h5 className="card-title" id="BioCardName">
                Malcolm Hill
              </h5>

              <ul>
                <li>Languages + Technologies Known: HTML, CSS, JS, Web API's, Node.js </li>
                <li>Currently Learning: Ionic, Next.js, Python</li>
                <li>Frameworks: React.js, Express, Boostrap</li>
                <li>Databases: Mongo with Mongoose, MySQL with Sequelize</li>
                <li>Deployed to GitHub and Heroku</li>
              </ul>
            </section>
          </div>

          <div className="col">
            <div>
              <div>
                <p className="card-body">
                  Hi, my name is Malcolm,
                  <br></br>
                  <br></br>

                  <br></br>
                  <br></br>
                  Assets: Through patience, organization, and maintaining a progressive mindset; handling several objectives is normal in day to day project building. When working with clientele, creativity stands out as my strongest attribute. I am fully capable of handling many diverse situations and clients. Currently seeking to further my career in full stack and mobile development!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='row'>
          <a className='text-center' href='https://github.com/malhill'>
            Click me, for GitHub Repository
          </a>
        </div>
      </section>
    </div>
  );
}
