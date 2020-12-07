import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="navbar__container__home">
          <div className="navbar__menu__home">
            <li className="navbar__li">
              <Link
                to="/Owner__Bookings/BookingPending"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">BOOKING</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="../Owner__Bookings/Total__Earnings"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">EARNINGS</span>
              </Link>
            </li>
            <li className="navbar__li">
              <Link
                to="../Owner__Bookings/Account__Settings"
                style={{ textDecoration: "none" }}
              >
                <span className="navbar__span">ACCOUNT SETTING</span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
