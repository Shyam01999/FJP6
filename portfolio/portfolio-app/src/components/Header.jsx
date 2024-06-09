import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const routes = [
    {
      path: "/home",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/skills",
      name: "Skills",
    },
    {
      path: "/projects",
      name: "Projects",
    },
    {
      path: "/services",
      name: "Services",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];
  return (
    <>
      <header id="header">
        <div className="container section-header">
          <div className="logo-brand">
            <NavLink to="/">
              <h2>
                Shyam <span>Sundar Sahoo</span>
              </h2>
            </NavLink>
          </div>
          <nav>
            <ul className="navbar">
              {routes.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item.path}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
