import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMoon } from "react-icons/io5";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "../redux/actionTypes/theme.actionTypes";
import { LuMenu } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const theme = useSelector((state) => state.themeReducer.theme);

  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();
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

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className={`header ${theme === "light" ? "light" : "dark"}`}>
        <div className="container section-header">
          <div className={`logo-brand ${theme === "light" ? "light" : "dark"}`}>
            <NavLink to="/">
              <h2>
                Shyam <span>Sundar Sahoo</span>
              </h2>
            </NavLink>
          </div>
          <div className={`nav-container`}>
            <nav>
              <ul className={`navbar ${theme === "light" ? "light" : "dark"}`}>
                {routes.map((item, index) => {
                  return (
                    <li key={index}>
                      <NavLink to={item.path}>{item.name}</NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div
              className={`mode-container ${
                theme === "light" ? "light" : "dark"
              }`}
            >
              <span className="menu-icon" onClick={toggleMenu}>
                <LuMenu />
              </span>
              {menu && (
                <div
                  className={`menu-container ${
                    theme === "light" ? "light" : "dark"
                  }`}
                >
                  <span className="cross-icon" onClick={toggleMenu}>
                    <RxCross2 />
                  </span>
                </div>
              )}
              <span onClick={toggleTheme} className="sun-icon">
                {theme === "light" ? <IoMoon /> : <IoIosSunny />}
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
