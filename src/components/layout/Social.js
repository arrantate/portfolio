import React from 'react';

const Social = () => {
  return (
    <div id='social'>
      <a
        className='feature-color xsmall-margin'
        href='https://github.com/arrantate'
        alt='GitHub'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-github fa-2x'></i>
      </a>
      <a
        className='feature-color xsmall-margin'
        href='http://twitter.com/arrantate'
        alt='Twitter'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-twitter fa-2x'></i>
      </a>
      <a
        className='feature-color xsmall-margin'
        href='https://www.linkedin.com/in/arran-tate-b8141795/'
        alt='LinkedIn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <i className='fab fa-linkedin fa-2x'></i>
      </a>
    </div>
  );
};

export default Social;
