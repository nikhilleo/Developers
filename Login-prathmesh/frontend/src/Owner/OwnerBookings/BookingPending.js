import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/owner";
import OwnerNavbar from "../OwnerNavbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";
import "../style.css";

function Home() {
  return (
    <div>
      <Navbar />
      <OwnerNavbar />
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container xs={12} align="center">
        <Grid item xs={12}>
          <p
            style={{ fontSize: "23px", color: "#5e5e80", fontWeight: "bolder" }}
          >
            Booking
          </p>
        </Grid>
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container xs={12} align="center">
        <Grid item xs={3}></Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/BookingPending"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Pending
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/PaymentPending"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
              }}
            >
              Payment Pending
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/Approved"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{ cursor: "pointer", color: "black", fontSize: "18px" }}
            >
              Approved
            </span>
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
      <Divider style={{ color: "black" }} />
      <Grid
        container
        xs={12}
        style={{
          background: "rgb(242, 247, 247)",
          boxShadow: "rgb(0, 0, 0) 1px 0px 10px -1px",
          borderRadius: "23px",
          padding: "11px",
        }}
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={1}></Grid>
        <Grid item xs={2}>
          <img
            className="Owner__Dashboard__photos"
            src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          ></img>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={1}></Grid>
        <Grid container xs={2}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "34px",
                  color: "#5e5e80",
                }}
              >
                Lamp A Camp
              </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span>Location (Maharashtra)</span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "34px",
                  color: "#5e5e80",
                }}
              >
                User Full Name{" "}
              </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span>User Address </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span>User Mobile Number </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid container xs={2}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "34px",
                  color: "#5e5e80",
                }}
              >
                Camping Dates
              </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontWeight: "bolder", color: "#5e5e80" }}>
                Check In Date: &emsp;&ensp;
              </span>
              <span>Dec 20 2020</span>
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontWeight: "bolder", color: "#5e5e80" }}>
                Check Out Date: &ensp;
              </span>
              <span> Dec 20 2020 </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>

            <Grid item xs={12}>
              <span
                style={{
                  fontWeight: "bolder",
                  fontSize: "34px",
                  color: "#5e5e80",
                }}
              >
                Selected Types
              </span>
            </Grid>
            <Grid item xs={4} style={{ visibility: "hidden" }}>
              ,
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontWeight: "bolder", color: "#5e5e80" }}>
                Type: &emsp; &emsp; &emsp; &emsp; &emsp;
              </span>
              <span>Farm Cottage </span>
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontWeight: "bolder", color: "#5e5e80" }}>
                No. Of People: &emsp; &ensp;
              </span>
              <span>2 </span>
            </Grid>
            <Grid item xs={12}>
              <span style={{ fontWeight: "bolder", color: "#5e5e80" }}>
                Total Price:&emsp; &ensp; &ensp;&ensp;&ensp;
              </span>
              <span>7323</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>

      <Divider style={{ color: "black" }} />
      <Grid container xs={12} style={{ visibility: "hidden" }}>
        .
      </Grid>
    </div>
  );
}

export default Home;
