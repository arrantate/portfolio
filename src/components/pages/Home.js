import React, { Fragment } from 'react';

const Home = () => {
  return (
    <Fragment>
      <div className='container'>
        <div id='intro'>
          <h1 id='name'>Arran Tate</h1>
          <h2>Web Developer</h2>
          <p>
            I make responsive web applications and tools. I started my coding
            journey in Python and made the switch to JavaScript after learning
            to use Flask and wanting more front end capabilities.
          </p>
        </div>
      </div>
      <div className='hero'>
        <div className='container2'>
          <span>
            <i className='fab fa-python fa-5x small-margin' alt='Python'></i>
            <i className='fab fa-html5 fa-5x small-margin'></i>
            <i className='fab fa-css3-alt fa-5x small-margin'></i>
            <i className='fab fa-js-square fa-5x small-margin'></i>
            <br />
            <i className='fab fa-react fa-5x small-margin'></i>
            <i className='fab fa-node fa-5x small-margin'></i>
          </span>
        </div>
      </div>
      <div className='container'>
        <h3>The story so far...</h3>
        <p>
          I have spent the last few years of my life as an aircraft engineer in
          the armed forces. But in 2019 I discovered a passion for programming.
        </p>
        <p>
          Web design allows me to combine my creativity with the productive
          values I've picked up in my working life.
        </p>
        <h3>Values:</h3>
        <ul>
          <li>Great comminucation and teamwork</li>
          <li>Familiarity with Agile and Waterfall methodologies</li>
          <li>Time management</li>
          <li>Organisational Skills</li>
          <li>Attention to detail</li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Home;
