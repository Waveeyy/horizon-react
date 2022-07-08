import React from 'react';

function Navbar() {
  return (
    <div className='container-fluid'>
      <div className='row mx-5'>
        <nav className='navbar navbar-custom navbar-expand-sm w-100 nv'>
          {/* <!-- Brand --> */}
          <a className='navbar-brand' href='/index.html'>
            <img
              src='/img/f96a261e5a60d7d66b36e2850e3eb19b.png'
              alt=''
              className='navLogo'
            />
          </a>
          <div className='flags'>
            <img src='/img/download.png' alt='Ghana' className='mx-1' />
            <img src='/img/download (1).png' alt='Ghana' className='mx-1' />
            <img src='/img/download (2).png' alt='Ghana' className='mx-1' />
          </div>
          <div className='aboutUs'>
            <a href='#'>ABOUT US</a>
          </div>
        </nav>
        <br />
      </div>
    </div>
  );
}

export default Navbar;
