import React from "react";
import "./styles/home.css";
import { Link } from "react-router-dom/dist";

const Home = () => {
  return (
    <div className="wrapper">
      <section
        id="homebody"
        className="text-light p-5 text-center text-sm-start"
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
              <h1 className="p-4 lead fw-bold">Visualization</h1>
              <p>
                <p>Welcome to the Visualization page!</p>
                <p className="mt-2">
                  This page is designed to assist you in your job search journey
                  with three distinct subpages. The first subpage helps you find
                  jobs that match your interests and qualifications. You can
                  explore a wide range of available job opportunities from
                  various companies and locations, along with relevant links to
                  learn more about the positions and apply directly. The second
                  and third subpage provides valuable information about
                  employment trends and salaries, offering insights that can be
                  beneficial when applying for a specific job.
                  <p className="mt-2">
                    Click on the button bellow to access the page
                  </p>
                </p>
              </p>
              <p className="pt-3">
                <Link to="/visualspage" className="btn btn-danger">
                  Access the page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="learn" className="p-5 bg-dark text-light">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-md p-5">
              <h1 className="p-4 lead fw-bold">Data source</h1>
              <p>Welcome to the DataSource page! Here,</p>
              <p className="mt-2">
                you will find crucial information about the data used to
                accomplish the content found on this website. This page serves
                as a comprehensive guide to understanding the sources of the
                data utilized in our project. You'll gain insights into the
                origin and reliability of the data, enabling you to assess its
                credibility and relevance. Additionally, the DataSource page
                provides a detailed Description of Data Content and Structure,
                helping you comprehend the nature and organization of the
                information presented.
              </p>
              <p className="mt-2">
                Click on the button bellow to access the page
              </p>
              <p className="pt-3">
                <Link to="/sources" className="btn btn-danger">
                  Access the page
                </Link>
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
          <h2 className="text-center text-dark p-3 lead fw-bold">
            Meet The Team
          </h2>
          <p className="lead text-center text-dark mb-5">
            <span className="lead fw-bold">Power6</span> is the dynamic group of
            six dedicated members who worked hand in hand to deliver this
            project. With a shared passion for excellence and a commitment to
            achieving the best results, Power6 pooled their unique skills and
            expertise to ensure the successful completion of the endeavor.
          </p>
          <div className="row g-4 d-flex">
            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/fD71g7n/TOUL7996.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Amos Kasumba</h3>
                  <p className="card-text text-light">
                    I am passionate about Networking and Cybersecurity with an
                    aim of leveraging skills to secure assets in cyberspace.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/Pw7YFZK/lyse.png"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">
                    Lyse Arlette ANEZE
                  </h3>
                  <p className="card-text text-light">
                    I am a web developer who aims to create user-centered tech
                    solutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/yRDsQWV/og.png"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">
                    Lewis Ndahinyuka
                  </h3>
                  <p className="card-text text-light">
                    I am a full-stack web developer proficient in HTML, CSS,
                    PHP, Node.js, and React.js.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/sPZHPm9/ss.png"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Harry Goliyo</h3>
                  <p className="card-text text-light">
                    As an amateur programmer, I possess a foundational
                    understanding of various programming languages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/9s8JRBf/81709635.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Pascal Gihozo</h3>
                  <p className="card-text text-light">
                    I am a Backend developer proficient in Django and FastAPI.
                    Experienced in frontend tools: ReactJS, HTML, CSS,
                    Bootstrap, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-2 flex-fill">
              <div className="card bg-dark" id="min-height-card">
                <div className="card-body text-center pb-5">
                  <img
                    src="https://i.ibb.co/khqv8PF/Victory.jpg"
                    className="rounded-circle mb-3 mx-auto"
                    id="image"
                    alt=""
                  />
                  <h3 className="card-title mb-3 text-light">Victory Friday</h3>
                  <p className="card-text text-light">
                    I am a UI/UX designer with skills in Python, HTML, CSS, and
                    C++. Worked on design projects, volunteers, conducts
                    research, and documents experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-2 pb-4 d-flex justify-content-center align-items-center">
          Click the button below to access the authors page
        </p>
        <div className="button d-flex justify-content-center align-items-center pb-5">
          <Link to="/authors" className="btn btn-danger">
            Access the page
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
