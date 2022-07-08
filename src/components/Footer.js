import React from 'react';

function Footer() {
  return (
    <div className='footer mt-5'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-4'>
            <h5>VISIT US IN KENYA</h5>
            <h6>Nairobi, Kenya</h6>
            <p>
              Belgravia Center,14 Riverside, <br />
              4th floor, Off Riverside Drive <br />
              Hanover Center, 14 Riverside Drive, <br />
              6th floor, Off Riverside Drive
            </p>
          </div>
          <div className='col-md-4'>
            <h5>VISIT US IN GHANA</h5>
            <h6>Accra, Ghana</h6>
            <p>
              One Airport Square, Airport City <br />
              8th Floor
            </p>
          </div>
          <div className='col-md-4'>
            <h5>VISIT US IN NIGERIA</h5>
            <h6>Lagos, Nigeria</h6>
            <p>Sterling Bank Building</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
