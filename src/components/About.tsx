import './About.css';

const About = () => {
  return (
    <section id="about" className=" about section py-5">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row justify-content-center mb-4">
          <div className="col-lg-8 text-center" data-aos="fade-up" data-aos-delay="200">
            <h2 className="section-heading">Our Vision & Mission</h2>
            <p className="lead">We're dedicated to transforming businesses through innovative solutions and strategic expertise that drive sustainable growth.</p>
          </div>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-lightbulb"></i>
              </div>
              <h5>Innovation</h5>
              <p>Pioneering solutions that challenge conventional thinking and create new opportunities for success.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-graph-up-arrow"></i>
              </div>
              <h5>Growth</h5>
              <p>Facilitating sustainable expansion through strategic planning and calculated execution.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
            <div className="feature-box text-center ">
              <div className="icon-container">
                <i className="bi bi-shield-check"></i>
              </div>
              <h5>Integrity</h5>
              <p>Upholding the highest standards of ethics, transparency and accountability in all our endeavors.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
            <div className="feature-box text-center">
              <div className="icon-container">
                <i className="bi bi-people-fill"></i>
              </div>
              <h5>Collaboration</h5>
              <p>Working alongside our clients as partners to achieve mutual growth and shared success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
