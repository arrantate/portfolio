import React from 'react';
import Badges from '../Badges';

const Home = () => {
  return (
    <div>
      <h1>Arran Tate</h1>
      <h2>Web Developer</h2>
      <p>
        Thanks for visiting my website! I've been learning python for the last
        year and have recently transitioned into the world of JavaScript after
        discovering how enjoyable web development can be!
      </p>
      <p>
        Since I started out with Flask I have a good understanding of how the
        back end works, So my main focus now is to improve my front end
        abilities to acheive a full stack title.
      </p>
      <p>Take a look at the technologies I work with!</p>
      <ul>
        <li>HTML5</li>
        <li>
          CSS3
          <ul>
            <li>Bootstrap</li>
          </ul>
        </li>
        <li>
          JavaScript
          <ul>
            <li>MongosDB</li>
            <li>Express.js</li>
            <li>React.js</li>
          </ul>
        </li>
        <li>
          Python
          <ul>
            <li>Flask</li>
            <li>Some Django</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Home;
