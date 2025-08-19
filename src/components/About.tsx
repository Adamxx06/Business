import "./About.css";

const About = () => {
  return (
    <section id="about" className=" about section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center mb-4">
          <div
            className="col-lg-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="section-heading">Our Vision & Mission</h2>
            <p className="lead">
              We're dedicated to transforming businesses through innovative
              solutions and strategic expertise that drive sustainable growth.
            </p>
          </div>
        </div>
        <div className="row g-4 mb-5">
          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h5>Innovation</h5>
              <p>
                Pioneering solutions that challenge conventional thinking and
                create new opportunities for success.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h5>Growth</h5>
              <p>
                Facilitating sustainable expansion through strategic planning
                and calculated execution.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="feature-box text-center ">
              <div className="icon-container">
                <i className="bi bi-shield-check"></i>
              </div>
              <h5>Integrity</h5>
              <p>
                Upholding the highest standards of ethics, transparency and
                accountability in all our endeavors.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-people-fill"></i>
              </div>
              <h5>Collaboration</h5>
              <p>
                Working alongside our clients as partners to achieve mutual
                growth and shared success.
              </p>
            </div>
          </div>
        </div>

        {/* About ShowCase */}
        <div className="row about-showcase align-items-center">
          <div
            className="col-lg-6 order-1 order-lg-2 mb-5"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="about-image-grid mb-5">
              <img
                src="https://bootstrapmade.com/content/demo/Scout/assets/img/about/about-15.webp"
                alt="Our company's vision"
                className="grid-main position-relative"
              />
              <img
                src="https://bootstrapmade.com/content/demo/Scout/assets/img/about/about-17.webp"
                alt="Our team"
                className="grid-secondary"
              />
              <img
                src="https://bootstrapmade.com/content/demo/Scout/assets/img/about/about-square-5.webp"
                alt="Our workspace"
                className="grid-tertiary"
              />

              <div className="experience-badge">
                <span className="years">15+</span>
                <span className="text">Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 order-2 order-lg-1 mt-5">
            <div className="about-content-box">
              <h3 className="display-6 fw-bold mb-4">
                Transforming Businesses Since 2008
              </h3>
              <p className="mb-4 fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                gravida tortor in lectus pharetra, at iaculis orci scelerisque.
                Cras porta enim id neque interdum, at fermentum odio venenatis.
              </p>
              <div className="progress-item">
                <div className="progress-item-container mb-4">
                  <div className="progress-info">
                    <p className="progress-text">Strategic planning</p>
                    <p className="progress-rate">94%</p>
                  </div>
                  <div className="progress">
                    <div
                      style={{ width: "94%", backgroundColor: "orangered" }}
                      className="progress-bar progress-bar-animated"
                    ></div>
                  </div>
                </div>

                <div className="progress-item-container mb-4">
                  <div className="progress-info">
                    <p className="progress-text">Business Development</p>
                    <p className="progress-rate">87%</p>
                  </div>
                  <div className="progress">
                    <div
                      style={{ width: "87%", backgroundColor: "orangered" }}
                      className="progress-bar progress-bar-animated"
                    ></div>
                  </div>
                </div>
                <div className="progress-item-container mb-4">
                  <div className="progress-info">
                    <p className="progress-text">Market Research</p>
                    <p className="progress-rate">92%</p>
                  </div>
                  <div className="progress">
                    <div
                      style={{ width: "92%", backgroundColor: "orangered" }}
                      className="progress-bar progress-bar-animated"
                    ></div>
                  </div>

                  <div className="about-cta btn-wrap mt-5 fw-bold">
                    <input
                      type="button"
                      className="btn btn-orang"
                      value="Learn More About Us"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

    </section>
  );
};

export default About;
