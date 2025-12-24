import React from 'react'

const Testimonials = () => {
  return (
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
  )
}

export default Testimonials
