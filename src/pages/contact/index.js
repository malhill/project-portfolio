import React from 'react';
import resume from './techresume.pdf'
import image from './contactimage.jpg'
export default function Contact() {

  return (
  <div>

    <h1 className="contact" style={{ textAlign: 'center' }}>Contact Me!</h1>

    <div className="container">

      <div className="row" style={{ textAlign: 'center' }}>

        <div className="col-4 order-last">
          <a href={resume} target="_blank" className="email"><i className="fas fa-file-pdf fa-7x" /></a>
        </div>

        <div className="col-4">
          <a href="https://www.instagram.com/smooth_mt/"><i className="fab fa-instagram-square fa-7x" /></a>
        </div>

        <div className="col-4 order-first">
          <a href="https://www.linkedin.com/in/malcolm-hill-0b9a24b1/"><i className="fab fa-linkedin fa-7x" /></a>
        </div>

      </div>

      <div className="text-center">
      <img className="img-fluid center-block" src={image} height={500} width={700} alt="Productive Programmer" id="contactimage" />
      </div>

    </div>

  </div>

  );

}
