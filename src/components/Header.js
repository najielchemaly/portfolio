import React, { useState } from "react";
import LineIcon from "react-lineicons";
import { Link, NavLink } from "react-router-dom";
import strings from "../data/localization/strings";

function Header() {
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button onClick={handleNavigationToggler} className="mi-header-toggler">
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img
              src={require("../assets/images/profile.jpeg")}
              alt="brandimage"
            />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink to="/portfolio" end>
              <span>{strings.header.home}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>{strings.header.about}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>{strings.header.resume}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>{strings.header.portfolios}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>{strings.header.contact}</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="http://najielchemaly.com"
            >
              Naji El Chemaly
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
