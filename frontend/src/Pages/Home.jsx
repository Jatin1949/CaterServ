import React from 'react'
import {Link} from "react-router-dom"; 
const Home = () => {
  return (
    <>
  <div
    className="modal fade"
    id="searchModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-fullscreen">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Search by keyword
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center">
          <div className="input-group w-75 mx-auto d-flex">
            <input
              type="search"
              className="form-control bg-transparent p-3"
              placeholder="keywords"
              aria-describedby="search-icon-1"
            />
            <span id="search-icon-1" className="input-group-text p-3">
              <i className="fa fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Search End */}
  {/* Hero Start */}
  <div className="container-fluid bg-light py-6 my-6 mt-0">
    <div className="container">
      <div className="row g-5 align-items-center">
        <div className="col-lg-7 col-md-12">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-4 animated bounceInDown">
            Welcome to CaterServ
          </small>
          <h1 className="display-1 mb-4 animated bounceInDown">
            Book <span className="text-primary">Cater</span>Serv For Your Dream
            Event
          </h1>
          <Link
            to="book"
            className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 me-4 animated bounceInLeft"
          >
            
            Book Now
          </Link>
          <Link
            to=""
            className="btn btn-primary border-0 rounded-pill py-3 px-4 px-md-5 animated bounceInLeft"
          >
            Know More
          </Link>
        </div>
        <div className="col-lg-5 col-md-12">
          <img
            src="img/hero.png"
            className="img-fluid rounded animated zoomIn"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}
  
  {/* Fact Start*/}
  <div className="container-fluid faqt py-6">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-lg-7">
          <div className="row g-4">
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.3s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  689
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Happy Customers
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.5s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-users-cog fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  107
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Expert Chefs
                </p>
              </div>
            </div>
            <div className="col-sm-4 wow bounceInUp" data-wow-delay="0.7s">
              <div className="faqt-item bg-primary rounded p-4 text-center">
                <i className="fas fa-check fa-4x mb-4 text-white" />
                <h1 className="display-4 fw-bold" data-toggle="counter-up">
                  253
                </h1>
                <p className="text-dark text-uppercase fw-bold mb-0">
                  Events Complete
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5 wow bounceInUp" data-wow-delay="0.1s">
          <div className="video">
            <button
              type="button"
              className="btn btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Modal Video */}
  <div
    className="modal fade"
    id="videoModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Youtube Video
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/jf2no9vSUus?si=B1SxOK_5CqiVhvsr"
              id="video"
              allowFullScreen=""
              allowscriptaccess="always"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Fact End */}
  {/* Service Start */}
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
  {/* Service End */}
  {/* Events Start */}
  <div className="container-fluid event py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Latest Events
        </small>
        <h1 className="display-5 mb-5">
          Our Social &amp; Professional Events Gallery
        </h1>
      </div>
      <div className="tab-class text-center">
        <ul
          className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
          data-wow-delay="0.1s"
        >
          <li className="nav-item p-2">
            <Link
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
              data-bs-toggle="pill"
              to="#tab-1"
            >
              <span className="text-dark" style={{ width: 150 }}>
                All Events
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              to="#tab-2"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Wedding
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              to="#tab-3"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Corporate
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              to="#tab-4"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Cocktail
              </span>
            </Link>
          </li>
          <li className="nav-item p-2">
            <Link
              className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
              data-bs-toggle="pill"
              to="#tab-5"
            >
              <span className="text-dark" style={{ width: 150 }}>
                Buffet
              </span>
            </Link>
          </li>
        </ul>
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-1.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <Link
                          to="img/event-1.jpg"
                          data-lightbox="event-1"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-2.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <Link
                          to="img/event-2.jpg"
                          data-lightbox="event-2"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-3.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <Link
                          to="img/event-3.jpg"
                          data-lightbox="event-3"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-4.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <Link
                          to="img/event-4.jpg"
                          data-lightbox="event-4"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.1s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-5.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <Link
                          to="img/event-5.jpg"
                          data-lightbox="event-5"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.3s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-6.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <Link
                          to="img/event-6.jpg"
                          data-lightbox="event-6"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.5s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-7.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <Link
                          to="img/event-7.jpg"
                          data-lightbox="event-7"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-md-6 col-lg-3 wow bounceInUp"
                    data-wow-delay="0.7s"
                  >
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-8.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <Link
                          to="img/event-8.jpg"
                          data-lightbox="event-17"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-2" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-1.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-8"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-2.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Wedding</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-9"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-3" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-3.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-10"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-4.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Corporate</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-11"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-4" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-5.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-12"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-6.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Cocktail</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-13"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="tab-5" className="tab-pane fade show p-0">
            <div className="row g-4">
              <div className="col-lg-12">
                <div className="row g-4">
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-7.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-14"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3">
                    <div className="event-img position-relative">
                      <img
                        className="img-fluid rounded w-100"
                        src="img/event-8.jpg"
                        alt=""
                      />
                      <div className="event-overlay d-flex flex-column p-4">
                        <h4 className="me-auto">Buffet</h4>
                        <Link
                          to="img/01.jpg"
                          data-lightbox="event-15"
                          className="my-auto"
                        >
                          <i className="fas fa-search-plus text-dark fa-2x" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Events End */}
  {/* Book Us Start */}
  <div
    className="container-fluid contact py-6 wow bounceInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row g-0">
        <div className="col-1">
          <img
            src="img/background-site.jpg"
            className="img-fluid h-100 w-100 rounded-start"
            style={{ objectFit: "cover", opacity: "0.7" }}
            alt=""
          />
        </div>
        <div className="col-10">
          <div className="border-bottom border-top border-primary bg-light py-5 px-4">
            <div className="text-center">
              <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                Book Us
              </small>
              <h1 className="display-5 mb-5">Where you want Our Services</h1>
            </div>
            <div className="row g-4 form">
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">Select Country</option>
                  <option value={1}>USA</option>
                  <option value={2}>UK</option>
                  <option value={3}>India</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">Select City</option>
                  <option value={1}>Depend On Country</option>
                  <option value={2}>UK</option>
                  <option value={3}>India</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">Select Palace</option>
                  <option value={1}>Depend On Country</option>
                  <option value={2}>UK</option>
                  <option value={3}>India</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">Small Event</option>
                  <option value={1}>Event Type</option>
                  <option value={2}>Big Event</option>
                  <option value={3}>Small Event</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">No. Of Palace</option>
                  <option value={1}>100-200</option>
                  <option value={2}>300-400</option>
                  <option value={3}>500-600</option>
                  <option value={4}>700-800</option>
                  <option value={5}>900-1000</option>
                  <option value={6}>1000+</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <select
                  className="form-select border-primary p-2"
                  aria-label="Default select example"
                >
                  <option selected="">Vegetarian</option>
                  <option value={1}>Vegetarian</option>
                  <option value={2}>Non Vegetarian</option>
                </select>
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="mobile"
                  className="form-control border-primary p-2"
                  placeholder="Your Contact No."
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="date"
                  className="form-control border-primary p-2"
                  placeholder="Select Date"
                />
              </div>
              <div className="col-lg-4 col-md-6">
                <input
                  type="email"
                  className="form-control border-primary p-2"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="col-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 py-3 rounded-pill"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1">
          <img
            src="img/background-site.jpg"
            className="img-fluid h-100 w-100 rounded-end"
            style={{ objectFit: "cover", opacity: "0.7" }}
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  {/* Book Us End */}
  {/* Team Start */}
  <div className="container-fluid team py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Our Team
        </small>
        <h1 className="display-5 mb-5">We have experienced chef Team</h1>
      </div>
      <div className="row g-4">
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="img/team-1.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Henry</h4>
              <p className="text-white mb-0">Decoration Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <Link
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fas fa-share-alt" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link 
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.3s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="img/team-2.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Jemes Born</h4>
              <p className="text-white mb-0">Executive Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <Link
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fas fa-share-alt" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.5s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="img/team-3.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Martin Hill</h4>
              <p className="text-white mb-0">Kitchen Porter</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <Link
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fas fa-share-alt" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.7s">
          <div className="team-item rounded">
            <img
              className="img-fluid rounded-top "
              src="img/team-4.jpg"
              alt=""
            />
            <div className="team-content text-center py-3 bg-dark rounded-bottom">
              <h4 className="text-primary">Adam Smith</h4>
              <p className="text-white mb-0">Head Chef</p>
            </div>
            <div className="team-icon d-flex flex-column justify-content-center m-4">
              <Link
                className="share btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fas fa-share-alt" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-facebook-f" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-twitter" />
              </Link>
              <Link
                className="share-link btn btn-primary btn-md-square rounded-circle mb-2"
                to=""
              >
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
  {/* Testimonial Start */}
<div className="container-fluid py-6 bg-light">
  <div className="container">
    <div className="text-center mb-5">
      <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
        Testimonials
      </small>
      <h1 className="display-5">What Our Clients Say</h1>
    </div>

    <div className="row g-4">
      {/* Testimonial 1 */}
      <div className="col-lg-4 col-md-6">
        <div className="testimonial-item bg-white rounded shadow p-4 h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="img/testimonial-1.jpg"
              className="rounded-circle me-3"
              style={{ width: 60, height: 60, objectFit: "cover" }}
              alt="client"
            />
            <div>
              <h5 className="mb-0">Rahul Sharma</h5>
              <small className="text-muted">Wedding Event</small>
            </div>
          </div>
          <p className="mb-3">
            CaterServ made our wedding unforgettable. The food quality,
            presentation, and service were absolutely perfect.
          </p>
          <div className="text-primary">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>

      {/* Testimonial 2 */}
      <div className="col-lg-4 col-md-6">
        <div className="testimonial-item bg-white rounded shadow p-4 h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="img/testimonial-2.jpg"
              className="rounded-circle me-3"
              style={{ width: 60, height: 60, objectFit: "cover" }}
              alt="client"
            />
            <div>
              <h5 className="mb-0">Anjali Verma</h5>
              <small className="text-muted">Corporate Event</small>
            </div>
          </div>
          <p className="mb-3">
            Professional team, timely service, and delicious food. Highly
            recommended for corporate catering.
          </p>
          <div className="text-primary">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>

      {/* Testimonial 3 */}
      <div className="col-lg-4 col-md-6">
        <div className="testimonial-item bg-white rounded shadow p-4 h-100">
          <div className="d-flex align-items-center mb-3">
            <img
              src="img/testimonial-3.jpg"
              className="rounded-circle me-3"
              style={{ width: 60, height: 60, objectFit: "cover" }}
              alt="client"
            />
            <div>
              <h5 className="mb-0">Mohit Singh</h5>
              <small className="text-muted">Birthday Party</small>
            </div>
          </div>
          <p className="mb-3">
            Amazing taste and great variety. Guests loved every dish. Will
            definitely book again.
          </p>
          <div className="text-primary">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Testimonial End */}

  {/* Blog Start */}
  <div className="container-fluid blog py-6">
    <div className="container">
      <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
        <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
          Our Blog
        </small>
        <h1 className="display-5 mb-5">Be First Who Read News</h1>
      </div>
      <div className="row gx-4 justify-content-center">
        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
          <div className="blog-item">
            <div className="overflow-hidden rounded">
              <img src="img/blog-1.jpg" className="img-fluid w-100" alt="" />
            </div>
            <div className="blog-content mx-4 d-flex rounded bg-light">
              <div className="text-dark bg-primary rounded-start">
                <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                  <p className="fw-bold mb-0">16</p>
                  <p className="fw-bold mb-0">Sep</p>
                </div>
              </div>
              <Link to="#" className="h5 lh-base my-auto h-100 p-3">
                How to get more test in your food from
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.3s">
          <div className="blog-item">
            <div className="overflow-hidden rounded">
              <img src="img/blog-2.jpg" className="img-fluid w-100" alt="" />
            </div>
            <div className="blog-content mx-4 d-flex rounded bg-light">
              <div className="text-dark bg-primary rounded-start">
                <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                  <p className="fw-bold mb-0">16</p>
                  <p className="fw-bold mb-0">Sep</p>
                </div>
              </div>
              <Link to="#" className="h5 lh-base my-auto h-100 p-3">
                How to get more test in your food from
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.5s">
          <div className="blog-item">
            <div className="overflow-hidden rounded">
              <img src="img/blog-3.jpg" className="img-fluid w-100" alt="" />
            </div>
            <div className="blog-content mx-4 d-flex rounded bg-light">
              <div className="text-dark bg-primary rounded-start">
                <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
                  <p className="fw-bold mb-0">16</p>
                  <p className="fw-bold mb-0">Sep</p>
                </div>
              </div>
              <Link to="#" className="h5 lh-base my-auto h-100 p-3">
                How to get more test in your food from
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Blog End */}
</>

  )
}

export default Home
