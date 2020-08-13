import React from 'react';

const Project = ({ project }) => {
  const { name, description, tech, live, code, img } = project;

  return (
    <div className='project container'>
      <img src={img} alt={`${name} Screenshot`}></img>

      <div className='project-info'>
        <h2>{name}</h2>

        <p>{description}</p>
        <ul>
          {tech.map((tech) => {
            return <li>{tech}</li>;
          })}
        </ul>

        <div className='links'>
          {live ? (
            <a href={live} className='link'>
              LIVE
            </a>
          ) : null}

          {code ? (
            <a href={code} className='link'>
              CODE
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Project;
