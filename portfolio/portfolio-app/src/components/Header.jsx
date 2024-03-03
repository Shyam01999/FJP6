import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="logo-brand">
            {/* <NavLink to="/"> */}
              <h2>
                Shyam <span>Sundar Sahoo</span>
              </h2>
            {/* </NavLink> */}
          </div>
          <nav>
            <ul className="navbar">
              <li>
                <span>Home</span>
              </li>
              <li>
                <span>About</span>
              </li>
              <li>
                <span>Skills</span>
              </li>
              <li>
                <span>Projects</span>
              </li>
              <li>
                <span>Services</span>
              </li>
              <li>
                <span>Contact</span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
