import React from "react";
import "./styles/visuals.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";

const VisualsHomePage = () => {
  return (
    <div className="viz">
      <div className="pt-5 bg-light">
        <nav className="p-4 d-flex">
          <NavLink className="nav-link me-4" to="visualization">
            Search for jobs
          </NavLink>
          <NavLink className="nav-link me-4" to="work">
            Employment Information
          </NavLink>
          <NavLink className="nav-link" to="visuals">
            Salary Information
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default VisualsHomePage;
