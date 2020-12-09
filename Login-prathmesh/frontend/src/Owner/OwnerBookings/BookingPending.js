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
            "url(https://cdn.pixabay.com/photo/2020/02/11/04/00/moon-4838249_960_720.jpg)",
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
                    <button
                      style={{
                        height: "5rem",
                        width: "12rem",
                        backgroundImage:
                          "url(https://cdn.pixabay.com/photo/2016/11/22/21/33/bonfire-1850646_960_720.jpg)",
                        borderRadius: "34px",
                        backgroundSize: "cover",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        fontWeight: "bolder",
                        fontSize: "1.8rem",
                      }}
                    >
                      BOOKING
                    </button>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Total__Earnings"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        height: "5rem",
                        width: "12rem",
                        backgroundImage:
                          "url(https://papers.co/wallpaper/papers.co-an56-apple-color-rainbow-dark-spark-ios9-iphone6s-34-iphone6-plus-wallpaper.jpg)",
                        borderRadius: "34px",
                        backgroundSize: "cover",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        fontWeight: "bolder",
                        fontSize: "1.8rem",
                      }}
                    >
                      EARNINGS
                    </button>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="../Owner__Bookings/Account__Settings"
                    style={{ textDecoration: "none" }}
                  >
                    <button
                      style={{
                        height: "5rem",
                        width: "12rem",
                        backgroundImage:
                          "url(https://i.pinimg.com/originals/b9/fd/8c/b9fd8c988fd7004861abfb0a342660c6.jpg)",
                        borderRadius: "34px",
                        backgroundSize: "cover",
                        color: "white",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        fontWeight: "bolder",
                        fontSize: "1.8rem",
                      }}
                    >
                      ACCOUNT
                    </button>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid
          className="ownerDashboardBodys"
          style={{
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Grid>
            <Link
              to="/Owner__Bookings/BookingPending"
              style={{ textDecoration: "none" }}
            >
              <button
                className="navbar__span"
                style={{
                  height: "5rem",
                  width: "12rem",
                  color: "white",
                  background: "transparent",
                }}
              >
                Booking
              </button>
            </Link>
            <Link
              to="../Owner__Bookings/Total__Earnings"
              style={{ textDecoration: "none" }}
            >
              <button
                className="navbar__span"
                style={{
                  height: "5rem",
                  width: "12rem",
                  color: "white",
                  background: "transparent",
                }}
              >
                Earning
              </button>
            </Link>
            <Link
              to="../Owner__Bookings/Account__Settings"
              style={{ textDecoration: "none" }}
            >
              <button
                className="navbar__span"
                style={{
                  height: "5rem",
                  width: "12rem",
                  background: "transparent",
                  color: "white",
                }}
              >
                Account Settings
              </button>
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
