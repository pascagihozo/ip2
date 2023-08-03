import React, { useEffect } from "react";



const AuthorComponent = ({userData})=>{

    const {userName, userBg, userDescription, userImage, UserSkill} = userData;

    useEffect(()=>{
        console.log("fdfdf")
    }, [])

    return (
        <div>
        <section id="author" className="mb-5 pb-5">
          <div className="author-container mx-auto mt-4">
            <div className="image pt-3">
              <img
                src={userImage}
                className="rounded-circle mb-3 mx-auto"
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
                    <p>
                      {userDescription}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="Skills mt-2 text-center">
                    <h1 className="p-3 fw-bold">Background Information</h1>
                    <p>
                      {userBg}
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="contribution mt-2 text-center">
                    <h1 className="p-3 fw-bold">Skills</h1>
                    <p>
                      {UserSkill}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
}

export default AuthorComponent;