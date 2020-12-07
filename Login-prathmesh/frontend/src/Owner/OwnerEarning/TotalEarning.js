import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Header/owner";
import OwnerNavbar from "../OwnerNavbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../axios";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

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
            Earnings
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
        <Grid item xs={4}></Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/Total__Earnings"
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
              Total Earning
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Owner__Bookings/Payment__History"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
              }}
            >
              Payment History
            </span>
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
      <Divider style={{ color: "black" }} />
      <Grid item xs={1}></Grid>{" "}
      <Grid container xs={12} style={{ background: "#f2f7f7", height: "65vh" }}>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={2}
          style={{
            background: "white",
            height: "27rem",
            borderRadius: "20px",
            boxShadow: "rgba(0,0,0,1) 1px 0px 10px -1px",
          }}
        >
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <span
            style={{
              fontWeight: "bolder",
              padding: "13px",
            }}
          >
            Booking Received
          </span>
          <Grid
            item
            xs={12}
            style={{
              padding: "13px",
            }}
          >
            This Month
          </Grid>
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid
            container
            xs={12}
            style={{
              paddingLeft: "13px",
            }}
          >
            <Grid item xs={8}>
              <FiberManualRecordIcon style={{ color: "green" }} /> Accepted
            </Grid>
            <Grid item xs={4}>
              <FiberManualRecordIcon style={{ color: "red" }} /> Rejected
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={2}
          style={{
            background: "white",
            height: "11rem",
            borderRadius: "20px",
            boxShadow: "rgba(0,0,0,1) 1px 0px 10px -1px",
          }}
        >
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container>
            <Grid item xs={1}></Grid>{" "}
            <span style={{ fontWeight: "bolder" }}>Revenue Earned</span>
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid> <span>This Month</span>
          </Grid>
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container>
            <Grid item xs={1}></Grid> <h4>Rs 0</h4>
          </Grid>{" "}
          <Grid container>
            <Grid item xs={1}></Grid> <span>From 0 Bookings</span>
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid
            item
            xs={12}
            style={{
              background: "white",
              height: "11rem",
              borderRadius: "20px",
              boxShadow: "rgba(0,0,0,1) 1px 0px 10px -1px",
            }}
          >
            <Grid container style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container>
              <Grid item xs={1}></Grid>{" "}
              <span style={{ fontWeight: "bolder" }}>Revenue Earned</span>
            </Grid>
            <Grid container>
              <Grid item xs={1}></Grid> <span>This Month</span>
            </Grid>
            <Grid container style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container>
              <Grid item xs={1}></Grid> <h4>Rs 0</h4>
            </Grid>{" "}
            <Grid container>
              <Grid item xs={1}></Grid> <span>From 0 Booking</span>
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
