import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/">
              <h2>
                Shyam <span>Sundar Sahoo</span>
              </h2>
            </NavLink>
          </div>
          <nav>
            <ul className="navbar">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
