import React, { useEffect } from "react";
import "../styles/authors.css";

const AuthorComponent = ({ userData }) => {
  const { userName, userBg, userDescription, userImage, userSkill } = userData;

  useEffect(() => {
    console.log("fdfdf");
  }, []);

  return (
    <div>
      <section id="author" className="mb-5 pb-5">
        <div className="author-container mx-auto mt-4">
          <div className="image pt-3">
            <img
              src={userImage}
              className="rounded-circle mb-3 mx-auto"
              id="image"
              alt=""
            />
          </div>
          <div className="name d-flex justify-content-center align-items-center">
            <h1 className="lead p-3">{userName}</h1>
          </div>

          <div className="info container">
            <div className="row">
              <div className="col-md-12">
                <div className="BacgroundInfo mt-2 text-center">
                  <h1 className="p-3 fw-bold">Background information</h1>
                  <p>{userDescription}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="Skills mt-2 text-center">
                  <h1 className="p-3 fw-bold">Skills</h1>
                  <p>{userBg}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="contribution mt-2 text-center">
                  <h1 className="p-3 fw-bold">Contribution</h1>
                  <p>{userSkill}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuthorComponent;
