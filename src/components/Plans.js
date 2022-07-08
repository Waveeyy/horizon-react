import React from 'react';

function Plans({ title }) {
  return (
    <section>
      <div className='container plans'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='text-center'>PLANS</h3>
          </div>
          <div className='col-md-3'>
            <div className='thumbnail'>
              <img
                src='/img/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg'
                alt=''
                className='img-fluid'
              />
              <div className='caption text-center'>
                <h3>Virtual {title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='thumbnail'>
              <img
                src='/img/raj-rana-zCQsBI7ZltQ-unsplash.jpg'
                alt=''
                className='img-fluid'
              />
              <div className='caption text-center'>
                <h3>Customized {title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='thumbnail'>
              <img
                src='/img/toa-heftiba-FV3GConVSss-unsplash.jpg'
                alt=''
                className='img-fluid'
              />
              <div className='caption text-center'>
                <h3>Serviced {title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='thumbnail'>
              <img
                src='/img/copernico-cLmOptqvuFQ-unsplash.jpg'
                alt=''
                className='img-fluid'
              />
              <div className='caption text-center'>
                <h3>Meeting {title}</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae ipsa facilis molestiae fugit nam cupiditate
                  distinctio modi natus laboriosam omnis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
