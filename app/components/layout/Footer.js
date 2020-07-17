import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='border-top text-center small text-muted py-3'>
      <p>
        <Link to='/' className='mx-1'>
          主页
        </Link>{' '}
        |{' '}
        <Link className='mx-1' to='/about-us'>
          关于
        </Link>{' '}
        |{' '}
        <Link className='mx-1' to='/terms'>
          条例
        </Link>
      </p>
      <p className='m-0'>
        Copyright &copy; 2020 <a href='/' className='text-muted'></a>.
        本站保留所有权.
      </p>
    </footer>
  );
}

export default Footer;
