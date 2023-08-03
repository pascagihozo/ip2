import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./styles/authors.css";

const Authors = () => {

  



  return (
    <div className="bg-light">
      <section className="wrapper">
        <section className="AuthorsLinks">
          <div id="SectionWrapper" className="container-fluid">
            <NavLink to="lewis">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">
                  Lewis Ndahinyuka
                </h3>
              </div>
            </NavLink>
            <NavLink to="harry">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">
                  Harry Goliyo
                </h3>
              </div>
            </NavLink>
            <NavLink to="lyse">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">
                  Aneze Lyse
                </h3>
              </div>
            </NavLink>
            <NavLink to="amos">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">
                  Amos Kasumba
                </h3>
              </div>
            </NavLink>
            <NavLink to="pascal">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">
                  Pascal gihozo
                </h3>
              </div>
            </NavLink>
            <NavLink to="victory">
              <div className="Member">
                <img
                  src="https://randomuser.me/api/portraits/men/12.jpg"
                  className="rounded-circle mb-3"
                  alt=""
                />
                <h3 className="card-title mb-3 text-dark ml-auto">Victory</h3>
              </div>
            </NavLink>
          </div>
        </section>
      </section>
      <section className="header d-flex justify-content-center align-items-center ">
        <h1 className="lead mt-4 p-3 text-dark fw-bold">About The Member</h1>
      </section>


      <Outlet />
    </div>
  );
};

export default Authors;
