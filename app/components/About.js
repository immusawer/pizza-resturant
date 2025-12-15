export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>About Us</h2>
        <p>
          <span>Learn More</span> About Us
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7">
            <img
              src="/assets/img/about.jpg"
              className="img-fluid"
              alt="About"
            />
          </div>
          <div className="col-lg-5">
            <p className="fst-italic">
              Passion for food. Respect for tradition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
