import React from "react";
import "./styles/sources.css";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom/dist";

const Sources = () => {
  return (
    <div className="vizual">
      <div className="pt-5 bg-light viz">
        <nav className="p-4 d-flex">
          <NavLink className="nav-link me-4">Source of Utilized Data</NavLink>
          <NavLink className="nav-link me-4">
            Description of Data Content and Structure
          </NavLink>
          <NavLink className="nav-link">
            API Access and Visualization Code Execution
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Sources;
