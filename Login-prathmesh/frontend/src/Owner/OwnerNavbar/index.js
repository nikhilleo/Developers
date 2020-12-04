import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div className="owner__dashboard__body__navbar"></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link
                to="/Owner__Created__Camps"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">Create Camps</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="Owner__Intrested__User"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">Intreasted People</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="Owner__Account__settings"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">Account Setting</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
