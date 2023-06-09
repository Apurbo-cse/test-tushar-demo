import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm">
    <div className="container">
      <NavLink className="navbar-brand fw-bold fs-4" to="/">
        Hotel Management
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/room"
            >
              Room
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="page"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <div className="buttons">
          <NavLink to="/login" className="btn btn-outline-dark me-2">
            <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login
          </NavLink>

          <NavLink to="/login" className="btn btn-outline-dark ">
            <i className="fa fa-sign-in me-1" aria-hidden="true"></i> Register
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar