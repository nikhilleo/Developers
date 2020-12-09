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
  var [campDetails, setCampDetails] = useState();
  useEffect(() => {
    axios
      .get("/get_recent_camps")
      .then((res) => {
        console.log(res);
        setCampDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <div>
      <Navbar />

      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div className="ownerMAinBody">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="navbar__container__home">
              <div className="navbar__menu__home">
                <li className="navbar__li">
                  <Link
                    to="/Owner__Bookings/BookingPending"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">BOOKING</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Total__Earnings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">EARNINGS</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Account__Settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">ACCOUNT</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} align="center">
          <Grid item xs={12}>
            <p
              style={{
                fontSize: "27px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Approved
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} className="ownerDashboardBodys" spacing={10}>
          <Grid item xs={4}></Grid>
          <Grid item xs={2}>
            <Link
              to="/Owner__Bookings/BookingPending"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Booking Pending
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="../Owner__Bookings/PaymentPending"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                }}
              >
                Payment Pending
              </span>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link
              to="../Owner__Bookings/Approved"
              style={{ textDecoration: "none" }}
            >
              <span
                className="navbar__span"
                style={{
                  color: "white",
                  fontWeight: "bolder",
                }}
              >
                Approved
              </span>
            </Link>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid
          style={{
            background: "linear-gradient(45deg, black, transparent)",
            width: "80%",
            display: "flex",
            backgroundSize: "cover",
            flexDirection: "column",
            margin: "auto",
            align: "center",
          }}
        >
          {campDetails?.map((item, index) => (
            <Grid container xs={12}>
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid item xs={2}></Grid>
              <Grid item xs={2}>
                <img
                  className="Owner__Dashboard__photos"
                  src={item?.camp_images[0]}
                  style={{ marginLeft: "-6vw" }}
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
                        fontSize: "2rem",
                        color: "white",
                        textOverflow: "ellipsis",
                        overflowWrap: "anywhere",
                      }}
                    >
                      {item?.camp_name}
                    </span>
                  </Grid>
                  <Grid item xs={4} style={{ visibility: "hidden" }}>
                    ,
                  </Grid>
                  <Grid item xs={12} style={{ color: "White" }}>
                    <span>Lsocation (Maharashtra)</span>
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
                        fontSize: "2rem",
                        color: "white",
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
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      Camping Dates
                    </span>
                  </Grid>
                  <Grid item xs={4} style={{ visibility: "hidden" }}>
                    ,
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Check In Date: &emsp;&ensp;
                    </span>
                    <span>Dec 20 2020</span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
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
                        fontSize: "2rem",
                        color: "white",
                      }}
                    >
                      Selected Types
                    </span>
                  </Grid>
                  <Grid item xs={4} style={{ visibility: "hidden" }}>
                    ,
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                    </span>
                    <span>Farm Cottage </span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      No. Of People: &emsp; &ensp;
                    </span>
                    <span>2 </span>
                  </Grid>
                  <Grid item xs={12}>
                    <span style={{ fontWeight: "bolder", color: "white" }}>
                      Total Price:&emsp; &ensp; &ensp;&ensp;&ensp;
                    </span>
                    <span>7323</span>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Divider style={{ color: "black" }} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
