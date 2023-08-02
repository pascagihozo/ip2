import React from "react";
import "./styles/home.css";

const Home = () => {
  return (
    <div className="wrapper">
      <section
        id="homebody"
        className="text-light p-5 pt-lg-3 text-center text-sm-start"
      ></section>
      <section id="learn" className="p-5">
        <div className="container">
          <div className="row align-items-center justify-content-between p-5">
            <div className="col-md">
              <img
                src="https://i.ibb.co/85pfgb0/autho.jpg"
                className="img-fluid"
                alt="autho"
                border="0"
              />
            </div>
            <div className="col-md p-5">
              <h1 className="p-4">Authors</h1>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <p className="pt-3">
                <a href="#" className="btn btn-danger">
                  Read More
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h1 className="p-4">Data source</h1>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Similique deleniti possimus magnam corporis ratione facere!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque
                reiciendis eius autem eveniet mollitia, at asperiores suscipit
                quae similique laboriosam iste minus placeat odit velit quos,
                nulla architecto amet voluptates?
              </p>
              <p className="pt-3">
                <a href="#" className="btn btn-danger">
                  Read More
                </a>
              </p>
            </div>
            <div className="col-md">
              <img
                src="https://i.ibb.co/2dzKSnw/viz.png"
                className="img-fluid"
                alt="viz"
                border="0"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="instructors" className="p-5 bg-light">
        <div className="container p-5">
          <h2 className="text-center text-dark p-3">Meet The Team</h2>
          <p className="lead text-center text-dark mb-5">
            Our instructors all have 5+ years working as web developers in the
            industry
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark">
                <div className="card-body text-center  pb-5">
                  <img
                    src="https://randomuser.me/api/portraits/men/11.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">John Doe</h3>
                  <p className="card-text text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark">
                <div className="card-body text-center  pb-5">
                  <img
                    src="https://randomuser.me/api/portraits/women/11.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Jane Doe</h3>
                  <p className="card-text text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark">
                <div className="card-body text-center  pb-5">
                  <img
                    src="https://randomuser.me/api/portraits/men/12.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Steve Smith</h3>
                  <p className="card-text text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card bg-dark">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://randomuser.me/api/portraits/women/12.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Sara Smith</h3>
                  <p className="card-text text-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda accusamus nobis sed cupiditate iusto? Quibusdam.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button d-flex justify-content-center align-items-center pb-5">
          <a href="#" className="btn btn-danger">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
