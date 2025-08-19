import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left column: Text content */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4">
              <div className="hero-tag d-flex align-items-center mb-2">
                <i className="bi bi-rocket-takeoff me-2 fs-5"></i>
                <span className="fw-bold">Innovative Solutions</span>
              </div>
              <h1 className="display-5 fw-bold">
                Achieving <span className="text-orangered">Outstanding Results</span> for Your Growth
              </h1>
              <p className="text-secondary mt-3">
                Our dedicated team provides exceptional service to help you reach your business goals effectively.
              </p>
              <ul className="list-unstyled">
                <li><i className="bi bi-check-circle me-2"></i>Streamlined operational processes</li>
                <li><i className="bi bi-check-circle me-2"></i>Enhanced customer engagement strategy</li>
                <li><i className="bi bi-check-circle me-2"></i>Data-driven decision support</li>
              </ul>
              <div className="mt-4 d-flex gap-3">
                <a href="#Services" className="btn fw-bold btn-orange">Explore Our Services</a>
                <a href="tel:+15559876543" className="text-white text-decoration-none mt-2">
                  <i className="bi bi-telephone me-1"></i>+1 (555) 987-6543
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Image and floating boxes */}
          <div className="col-lg-6 position-relative" data-aos="fade-up" data-aos-delay="300">
            <img
              src="https://bootstrapmade.com/content/demo/Scout/assets/img/about/about-square-13.webp"
              alt="Hero"
              className="img-fluid rounded shadow"
              width={400}
            />

            {/* Floating on large screens */}
            <div className="floating-box1 d-none d-lg-block">
              <div className="info-box bg-dark">
                <h5>18.9K</h5>
                <p className="mb-0">Improved market presence</p>
                <i className="bi bi-graph-up-arrow chart"></i>
              </div>
              </div>
            <div className="floating-box2 d-none d-lg-block">
              <div className="info-box bg-dark">
                <h5>+450%</h5>
                <p className="mb-0">Increased lead generation</p>
                <i className="bi bi-graph-down chart"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Visible only on small screens */}
        <div className="row d-lg-none mt-4">
          <div className="col-12 mb-3">
            <div className="info-box-sm">
              <h5>18.9K</h5>
              <p className="mb-0">Improved market presence</p>
                <i className="bi bi-graph-up-arrow chart"></i>
            </div>
          </div>
          <div className="col-12">
            <div className="info-box-sm">
              <h5>+450%</h5>
              <p className="mb-0">Increased lead generation</p>
                <i className="bi bi-graph-down chart"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
