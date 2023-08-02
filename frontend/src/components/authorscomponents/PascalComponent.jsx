import React from "react";

const PascalComponent = () => {
  return (
    <div>
      <section id="author" className="mb-5 pb-5">
        <div className="author-container mx-auto mt-4">
          <div className="image pt-3">
            <img
              src="https://randomuser.me/api/portraits/men/11.jpg"
              className="rounded-circle mb-3 mx-auto"
              alt=""
            />
          </div>
          <div className="name d-flex justify-content-center align-items-center">
            <h1 className="lead p-3">Pascal Igihozo</h1>
          </div>

          <div className="info container">
            <div className="row">
              <div className="col-md-12">
                <div className="BacgroundInfo mt-2 text-center">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates? Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Cumque
                    reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="Skills mt-2 text-center">
                  <h1 className="p-3 fw-bold">Background Information</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="contribution mt-2 text-center">
                  <h1 className="p-3 fw-bold">Skills</h1>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cumque reiciendis eius autem eveniet mollitia, at asperiores
                    suscipit quae similique laboriosam iste minus placeat odit
                    velit quos, nulla architecto amet voluptates?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default PascalComponent;
