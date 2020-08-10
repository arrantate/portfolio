import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container'>
      <h1>Oops</h1>
      <h3>The Page you're looking for does not exist</h3>
      <Link className='link' to='/'>
        Go home
      </Link>
    </div>
  );
};

export default NotFound;
