import React from 'react'
import { Link } from 'react-router-dom'

const Team = () => {
  return (
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
          <img className="img-fluid rounded-top " src="img/team-1.jpg" alt="" />
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
          <img className="img-fluid rounded-top " src="img/team-2.jpg" alt="" />
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
          <img className="img-fluid rounded-top " src="img/team-3.jpg" alt="" />
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
          <img className="img-fluid rounded-top " src="img/team-4.jpg" alt="" />
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
    
  )
}

export default Team
