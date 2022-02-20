import React from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className="col-sm-4 col-md-4 col-lg-3 sidebar_nav_background h-100 bottom-0">
      <div className=" d-flex flex-column">
        <div className="container mt-5">
          <h5 className="text-uppercase text-white fw-bold text-center">
            RestaurantApp
          </h5>
          <p className="mt-5 text-white-50 text-center">
            Administra tu restaurant en las siguientes opciones
          </p>
        </div>

        <nav className="nav flex-column navbar-dark mt-5">
          <hr />
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link sidebar_nav_active"
                  : "nav-link sidebar_nav"
              }
              to="/menu"
            >
              Menu
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "nav-link sidebar_nav_active"
                  : "nav-link sidebar_nav"
              }
              to="/"
            >
              Ordenes
            </NavLink>
          </li>
        </nav>
      </div>
    </div>
  );
};
