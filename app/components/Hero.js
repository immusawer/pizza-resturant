export default function Hero() {
  return (
    <section id="hero" className="hero section light-background">
      <div className="container">
        <div className="row gy-4 align-items-center">
          <div className="col-lg-5">
            <h1>
              Enjoy Your Healthy
              <br />
              Delicious Food
            </h1>
            <p>We deliver great food with love.</p>
            <div className="d-flex gap-3">
              <a href="#book-a-table" className="btn-get-started">
                Book a Table
              </a>
            </div>
          </div>

          <div className="col-lg-5 hero-img">
            <img
              src="/assets/img/hero-img.png"
              className="img-fluid animated"
              alt="Hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
