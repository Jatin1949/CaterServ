import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div
  className="container-fluid footer py-6 my-6 mb-0 bg-light wow bounceInUp"
  data-wow-delay="0.1s"
>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h1 className="text-primary">
            Cater<span className="text-dark">Serv</span>
          </h1>
          <p className="lh-lg mb-4">
            There cursus massa at urnaaculis estieSed aliquamellus vitae ultrs
            condmentum leo massamollis its estiegittis miristum.
          </p>
          <div className="footer-icon d-flex">
            <Link
              className="btn btn-primary btn-sm-square me-2 rounded-circle"
              to=""
            >
              <i className="fab fa-facebook-f" />
            </Link>
            <Link
              className="btn btn-primary btn-sm-square me-2 rounded-circle"
              to=""
            >
              <i className="fab fa-twitter" />
            </Link>
            <Link
              to="#"
              className="btn btn-primary btn-sm-square me-2 rounded-circle"
            >
              <i className="fab fa-instagram" />
            </Link>
            <Link
              to="#"
              className="btn btn-primary btn-sm-square rounded-circle"
            >
              <i className="fab fa-linkedin-in" />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="mb-4">Special Facilities</h4>
          <div className="d-flex flex-column align-items-start">
            <Link className="text-body mb-3" to="">
              <i className="fa fa-check text-primary me-2" />
              Cheese Burger
            </Link>
            <Link to="" className="text-body mb-3">
              <i className="fa fa-check text-primary me-2" />
              Sandwich
            </Link>
            <Link className="text-body mb-3" to="">
              <i className="fa fa-check text-primary me-2" />
              Panner Burger
            </Link>
            <Link className="text-body mb-3" to="">
              <i className="fa fa-check text-primary me-2" />
              Special Sweets
            </Link>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="mb-4">Contact Us</h4>
          <div className="d-flex flex-column align-items-start">
            <p>
              <i className="fa fa-map-marker-alt text-primary me-2" /> 123
              Street, New York, USA
            </p>
            <p>
              <i className="fa fa-phone-alt text-primary me-2" /> (+012) 3456
              7890 123
            </p>
            <p>
              <i className="fas fa-envelope text-primary me-2" />{" "}
              info@example.com
            </p>
            <p>
              <i className="fa fa-clock text-primary me-2" /> 26/7 Hours Service
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-6">
        <div className="footer-item">
          <h4 className="mb-4">Social Gallery</h4>
          <div className="row g-2">
            <div className="col-4">
              <img
                src="img/menu-01.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="img/menu-02.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="img/menu-03.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="img/menu-04.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="img/menu-05.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                src="img/menu-06.jpg"
                className="img-fluid rounded-circle border border-primary p-2"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Footer
