import React from 'react'
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className="container-fluid service py-6">
  <div className="container">
    <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
      <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
        Our Services
      </small>
      <h1 className="display-5 mb-5">What We Offer</h1>
    </div>
    <div className="row g-4">
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-cheese fa-7x text-primary mb-4" />
              <h4 className="mb-3">Wedding Services</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.3s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-pizza-slice fa-7x text-primary mb-4" />
              <h4 className="mb-3">Corporate Catering</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.5s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-hotdog fa-7x text-primary mb-4" />
              <h4 className="mb-3">Cocktail Reception</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.7s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-hamburger fa-7x text-primary mb-4" />
              <h4 className="mb-3">Bento Catering</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-wine-glass-alt fa-7x text-primary mb-4" />
              <h4 className="mb-3">Pub Party</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.3s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-walking fa-7x text-primary mb-4" />
              <h4 className="mb-3">Home Delivery</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.5s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-wheelchair fa-7x text-primary mb-4" />
              <h4 className="mb-3">Sit-down Catering</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6 col-sm-12 wow bounceInUp"
        data-wow-delay="0.7s"
      >
        <div className="bg-light rounded service-item">
          <div className="service-content d-flex align-items-center justify-content-center p-4">
            <div className="service-content-icon text-center">
              <i className="fas fa-utensils fa-7x text-primary mb-4" />
              <h4 className="mb-3">Buffet Catering</h4>
              <p className="mb-4">
                Contrary to popular belief, ipsum is not simply random.
              </p>
              <Link to="#" className="btn btn-primary px-4 py-2 rounded-pill">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Service;
