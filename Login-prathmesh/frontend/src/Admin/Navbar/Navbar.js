import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  var [color, setColor] = useState();
  return (
    <div>
      <div>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link to="/Booking">
                <span className="navbar__span">Booking</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link to="Delete__camp">
                <span className="navbar__span">Delete Camp</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link to="Account__settings">
                <span className="navbar__span">Account Setting</span>
              </Link>
            </li>
            <div className="navbar__line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
