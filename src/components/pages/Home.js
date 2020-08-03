import React from 'react';
import Badges from '../Badges';

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In finibus
        vehicula erat cursus tincidunt. Etiam rhoncus sem vestibulum eros
        egestas venenatis. Ut fermentum orci fringilla est hendrerit, sit amet
        efficitur nulla aliquam. Etiam tincidunt nec nibh sit amet facilisis.
        Donec laoreet bibendum augue eu viverra. Vivamus blandit libero
        imperdiet elit dictum, eget hendrerit urna lobortis. Mauris quis diam
        eget sem cursus egestas id in purus. Nulla ut sollicitudin eros,
        eleifend porttitor lorem.
      </p>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
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
          </ul>
        </li>
      </ul>
      <Badges />
    </div>
  );
};

export default Home;
