import React from 'react';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <nav id='links'>
      <span>
        <Link className='link' to='/'>
          Home
        </Link>
      </span>
    </nav>
  );
};

export default Links;
