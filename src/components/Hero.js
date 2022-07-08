import React from "react";

function Hero() {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner slider">
              <div className="carousel-item active">
                <img
                  src="/img/pedro-lastra-Nyvq2juw4_o-unsplash.jpg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/kelvin-zyteng-LMq-rTluKfQ-unsplash.jpg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/img/ben-o-bro-wpU4veNGnHg-unsplash.jpg"
                  className="d-block w-100"
                  alt=""
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-target="#carouselExampleControls"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
