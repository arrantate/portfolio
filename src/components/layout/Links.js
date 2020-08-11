import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <nav id='links'>
      <span>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/portfolio'>
          Portfolio
        </Link>
      </span>
    </nav>
  );
};

export default Links;
