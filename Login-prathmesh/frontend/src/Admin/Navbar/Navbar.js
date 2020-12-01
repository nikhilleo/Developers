import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  var [color, setColor] = useState();
  // let root = document.documentElement;

  // document.documentElement.style.setProperty("--background-color", "yellow");

  // root.addEventListener("mousemove", (e) => {
  //   root.style.setProperty("--mouse-x", e.clientX + "px");
  //   root.style.setProperty("--mouse-y", e.clientY + "px");
  // });
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link to="/Admin__Booking" style={{ textDecoration: "none" }}>
                <span className="navbar__span">Booking</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link to="Delete__Admin__camp" style={{ textDecoration: "none" }}>
                <span className="navbar__span">Delete Camp</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="Admin__Account__settings"
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