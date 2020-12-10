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
    let token = localStorage.getItem("auth-token");
    axios
      .get("/owner/pending_camps", {
        method: "GET",
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        console.log(res);
        setCampDetails(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  console.log(campDetails);
  const accpetBooking = (camp) => {
    console.log(camp);
    axios
      .get("/booking/accept_a_booking", {
        method: "GET",
        headers: {
          booking_id: camp?._id,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  const rejectBooking = (camp) => {
    console.log(camp);
    axios
      .get("/booking/reject_a_booking", {
        method: "GET",
        headers: {
          booking_id: camp?._id,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  console.log(campDetails);
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
          minHeight: "100vh",
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
                    to="../Owner__Bookings/Payment__History"
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
              Booking Pending
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
                  fontWeight: "bolder",
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
          {campDetails?.camp_booking?.[0] == undefined || campDetails == [] ? (
            <Grid container xs={12} justify="center" alignItems="center">
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>{" "}
              <Grid item xs={12} align="center">
                <h1>No booking yet, stay tuned!</h1>
              </Grid>
            </Grid>
          ) : (
            campDetails?.camp_booking?.map?.((item, index) => {
              console.log(item);
              return (
                <Grid container xs={12}>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Grid item xs={2}>
                    <DoneIcon
                      style={{
                        cursor: "pointer",
                        color: "green",
                      }}
                      onClick={() => accpetBooking(item)}
                    />
                    <Grid item xs={1}></Grid>
                    <ClearIcon
                      style={{
                        cursor: "pointer",
                        color: "red",
                        border: "none !important",
                      }}
                      onClick={() => rejectBooking(item)}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <img
                      className="Owner__Dashboard__photos"
                      src={item?.camp?.camp_images?.[0]}
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
                          {item?.camp?.camp_name}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12} style={{ color: "White" }}>
                        <span>
                          {item?.camp?.camp_location} ({item?.camp?.camp_state})
                        </span>
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
                          {`${item?.camper_details?.firstname} ${item?.camper_details?.lastname}`}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>
                          {item?.camper_details?.address}
                        </span>
                      </Grid>
                      <Grid item xs={4} style={{ visibility: "hidden" }}>
                        ,
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ color: "white" }}>
                          {item?.camper_details?.mobile}
                        </span>
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
                        <span style={{ color: "white" }}>
                          {" "}
                          {item?.camp?.check_in}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <span style={{ fontWeight: "bolder", color: "white" }}>
                          Check Out Date: &ensp;
                        </span>
                        <span style={{ color: "white" }}>
                          {" "}
                          {item?.camp?.check_out}{" "}
                        </span>
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
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "10rem",
                          overflow: "hidden",
                          overflowY: "auto",
                        }}
                      >
                        <span className="div">
                          {item?.a_details?.map((item, index) => (
                            <>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  Type: &emsp; &emsp; &emsp; &emsp; &emsp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.name}{" "}
                                </span>
                              </Grid>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  No. Of People: &emsp; &ensp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.noOfPeople}{" "}
                                </span>
                              </Grid>
                              <Grid item xs={12}>
                                <span
                                  style={{
                                    fontWeight: "bolder",
                                    color: "white",
                                  }}
                                >
                                  Total Price:&emsp; &ensp; &ensp;&ensp;&ensp;
                                </span>
                                <span style={{ color: "white" }}>
                                  {item?.totalPrice}
                                </span>
                              </Grid>
                              <Grid
                                container
                                xs={12}
                                style={{ visibility: "hidden" }}
                              >
                                .
                              </Grid>{" "}
                            </>
                          ))}
                        </span>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>{" "}
                  <Divider style={{ color: "black" }} />
                </Grid>
              );
            })
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Home;
