import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/user";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";
import "../UserBooking/style.css";

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
                    to="/User__Booking__Sent"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Booking Sent</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link to="/User__Wishlist" style={{ textDecoration: "none" }}>
                    <span className="subHeader">Your WishList</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/User__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="mainHeader">Account Settings</span>
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
              Account Settings
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid className="ownerDashboardBody">
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid>
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

          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
