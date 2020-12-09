import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/user";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";

function Home() {
  var [campDetails, setCampDetails] = useState();
  useEffect(() => {
    axios
      .get("/camp/get_pending_camps")
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
      <div className="ownerMAinBody">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="navbar__container__home">
            <div className="navbar__menu__home">
              <li className="navbar__li">
                <Link
                  to="/User__Booking__Sent"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "#e43655",
                      borderRadius: "34px",
                    }}
                  >
                    BOOKING
                  </button>
                </Link>
              </li>
              <li className="navbar__li">
                <Link to="/User__Wishlist" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "transparent",
                      borderRadius: "34px",
                    }}
                  >
                    WishList
                  </button>
                </Link>
              </li>
              <li className="navbar__li">
                <Link
                  to="/User__Account__settings"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "transparent",
                      borderRadius: "34px",
                    }}
                  >
                    ACCOUNT SETTING
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <Grid
        className="ownerDashboardBody"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid>
          <Grid container xs={12} align="center">
            <Grid item xs={3}></Grid>
            <Grid item xs={2}>
              <Link
                to="/User__Booking__Sent"
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
                  Booking Sent
                </span>
              </Link>
            </Grid>
            <Grid item xs={2}>
              <Link
                to="/User__Payment__Pending"
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
                to="/User__Booking__Approved"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    cursor: "pointer",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Booking Approved
                </span>
              </Link>
            </Grid>
            <Grid container style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
          </Grid>
          <Divider style={{ color: "black" }} />
          <Grid>
            {campDetails?.map((item, index) => (
              <Grid container xs={12}>
                <Grid container xs={12} style={{ visibility: "hidden" }}>
                  .
                </Grid>{" "}
                <Grid item xs={1}></Grid>
                <Grid item xs={2}>
                  <img
                    className="Owner__Dashboard__photos"
                    src={item?.camp_images[0]}
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
                          color: "white",
                        }}
                      >
                        {item?.camp_name}
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
                          fontSize: "34px",
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
                          fontSize: "34px",
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
        </Grid>
        <Divider style={{ color: "black" }} />

        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
