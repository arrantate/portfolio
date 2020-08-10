import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/' className='button'>
        Home
      </Link>
      <Link to='/projects' className='button'>
        Projects
      </Link>
      <Link to='/certificates' className='button'>
        Certificates
      </Link>
    </nav>
  );
};

export default Nav;
