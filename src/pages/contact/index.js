import React from 'react';
import resume from './techresume.pdf'
import image from './contactimage.jpg'
import './index.css';

export default function Contact() {

  return (
  <div className='page-height'>

    <h1 className='welcome text-center mb-0 my-3'>Contact Me!</h1>
    {/* Can use my-4 for spacing above header away from the navbar */}

    <p className='welcome text-center p-1'>Email: mah.319.hc@gmail.com</p>

    <div className='container'>

      <div className='row' style={{ textAlign: 'center' }}>

        <div className='col-4 order-last'>
          <a title='Resume!!' href={resume} target='_blank'><i className='email fas fa-file-pdf fa-7x' /></a>
        </div>

        <div className='col-4'>
          <a title='IG page' href='https://www.instagram.com/smooth_mt/'><i className='fab fa-instagram-square fa-7x' /></a>
        </div>

        <div className='col-4 order-first'>
          <a title='LinkedIn Profile'href='https://www.linkedin.com/in/malcolm-hill-0b9a24b1/'><i className='fab fa-linkedin fa-7x'/></a>
        </div>
      </div>

      <div className='text-center'>
      <img className='img-fluid center-block' src={image} height={500} width={700} alt='Productive Programmer' id='contactimage' />
      </div>

    </div>

  </div>

  );

}
