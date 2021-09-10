import React from 'react';
import strapcityBC from '../../assets/strapcity.PNG';
import project1 from '../../assets/calendercapture.PNG';
import project2 from '../../assets/projectcapture.PNG';
import project3 from '../../assets/weathercapture.PNG';
import filler from '../../assets/Projectimage.jpg'


export default function Portfolio() {
  return (

    <div className='text-center page-height' >

      <h1 className='welcome my-3 '>Projects!</h1>

      <h2 className='text-center mb-5'>Select one of the 3 projects below to view the live applications:</h2>

      <div className='container'>
      <div className='row d-flex align-items-center'>
      <div className='col-4 mb-5' >
            <a href='https://strapcitybc.com/' title='StrapCityBC!'>
              <img style={{ height:'230px' , width:'330px'}} src={strapcityBC} />
            </a>
            <br>
            </br>
            <a className='text-decoration-none active' href='https://github.com/malhill/strapcityBC'>Click here for Repository</a>
          </div>

      </div>

        <div className='row d-flex align-items-center'>
          
          <div className='col-4' >
            <a href='https://malhill.github.io/Calendar/' title='Calender Project!'>
              <img style={{ height:'230px' }} src={project1} />
            </a>
            <br>
            </br>
            <a className='text-decoration-none active' href='https://github.com/malhill/Calendar'>Click here for Repository</a>
          </div>

          <div className='col-4'>
            <a href='https://malhill.github.io/getty-gallery/' title='Team Project 1'>
              <img  style={{ height:'230px' }} src={project2} />
            </a>
            <br>
            </br>
            <a className='text-decoration-none active' href='https://github.com/malhill/Calendar'>Click here for Repository</a>
          </div>

          <div className='col-4'>
            <a href='https://malhill.github.io/Weather-Dashboard/' title='Weather Project'>
              <img style={{ height:'230px' }} src={project3} />
            </a>
            <br>
            </br>
            <a className='text-decoration-none active' href='https://github.com/malhill/Calendar'>Click here for Repository</a>
          </div>

        </div>
      </div>

      <picture>
        <img src={filler} className='w-50' title='More projects coming soon!' id='projectimage' />
      </picture>

    </div>

  );
}
