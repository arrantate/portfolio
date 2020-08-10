import React from 'react';
import udemypython from './img/udemypython.jpg';
import skillsoftreact from './img/skillsoftreact.png';

const Badges = () => {
  return (
    <div>
      <div className='row'>
        <div className='one-third column badge'>
          <div className='badge-img-box'>
            <a href='https://www.udemy.com/certificate/UC-1fa9dea9-0304-4ee6-8df6-287059b33c8e/'>
              <img
                className='badge-img'
                src={udemypython}
                alt='Udemy Badge'
              ></img>
            </a>
          </div>

          <h4>2020 Complete Python Bootcamp</h4>
        </div>

        <div className='one-third column badge'>
          <div className='badge-img-box'>
            <a href='https://skillsoft.digitalbadges-eu.skillsoft.com/26d9d02d-16c4-4b88-ab29-45a351c464cf#gs.bx3ter'>
              <img
                className='badge-img'
                src={skillsoftreact}
                alt='Skillsoft Badge'
              ></img>
            </a>
          </div>
          <h4>Introducing React for Web Applications</h4>
        </div>
        <div className='one-third column'>&nbsp;</div>
      </div>
    </div>
  );
};

export default Badges;
