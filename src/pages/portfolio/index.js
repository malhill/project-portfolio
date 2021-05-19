import React from 'react';
import project1 from '../../assets/calendercapture.PNG';
import project2 from '../../assets/projectcapture.PNG';
import project3 from '../../assets/weathercapture.PNG';
import filler from '../../assets/Projectimage.jpg'


export default function Portfolio() {
  return (

    <div className="text-center" style= {{ height:"90vh" }} >

      <h1 className="projects">Projects!</h1>

      <h2 className="text-center">Select one of the 3 projects below to view the live applications:</h2>

      <div className="container">
        <div className="row d-flex align-items-center">
          
          <div className="col-4" >
            <a href="https://malhill.github.io/Calendar/" title="Calender Project">
              <img className="w-100" src={project1} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://malhill.github.io/getty-gallery/" title="Team Project">
              <img className="w-100" style={{ height:"100%" }} src={project2} />
            </a>
          </div>

          <div className="col-4">
            <a href="https://malhill.github.io/Weather-Dashboard/" title="Weather Project">
              <img className="w-100" src={project3} />
            </a>
          </div>

        </div>
      </div>

      <picture>
        <img src={filler} className="w-50" title="More projects coming soon!" id="projectimage" />
      </picture>

    </div>

  );
}
