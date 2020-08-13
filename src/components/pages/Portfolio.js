import React, { useState } from 'react';
import Project from '../projects/Project';

import portfolioIMG from '../img/portfolio.png';
import weatherAppIMG from '../img/weatherapp.png';

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      name: 'Portfolio',
      description:
        "The site you're on right now!  You can view the source code on github.",
      tech: ['React', 'HTML', 'CSS', 'Netlify'],
      live: 'https://arrantate.netlify.com/',
      code: 'https://github.com/arrantate/portfolio',
      img: portfolioIMG,
    },
    {
      name: 'Weather App',
      description:
        'Gives you the current weather and some brief information about a city of your choice',
      tech: ['Python', 'Flask', 'API calls', 'Bootstrap', 'HTML'],
      live: null,
      code: 'https://github.com/arrantate/weather-app',
      img: weatherAppIMG,
    },
  ]);

  return (
    <div className='container'>
      <h1>Portfolio</h1>
      {projects.map((project) => {
        return <Project project={project} />;
      })}
    </div>
  );
};

export default Portfolio;
