import { Button, Divider, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../../HomePage/Navbar/index";
import AdminNavbar from "../../../Navbar/Navbar";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import axios from "../../../../axios";

function Home() {
  var [pendingCampData, setPendingCampData] = useState();
  useEffect(() => {
    axios
      .get("/admin/get_pending_camps")
      .then((res) => {
        console.log(res);
        setPendingCampData(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  console.log(pendingCampData);

  const handleAcceptCamp = (camp_name) => {
    console.log(camp_name);
    axios
      .post("/admin/accept_camp", { camp_name: camp_name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleRejectCamp = (camp_name) => {
    axios
      .post("/admin/reject_camp", { camp_name: camp_name })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <Navbar />
      <AdminNavbar />
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
          <Link to="/Admin__Booking/Pending" style={{ textDecoration: "none" }}>
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
                fontWeight: "bolder",
              }}
            >
              Pending For Approval
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Admin__Booking/Accepted"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "18px",
              }}
            >
              Accepted
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Admin__Booking/Rejected"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{ cursor: "pointer", color: "black", fontSize: "18px" }}
            >
              Rejected
            </span>
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
      </Grid>
      <Divider style={{ color: "black" }} />
      <Grid container xs={12} style={{ visibility: "hidden" }}>
        .
      </Grid>

      <Grid container>
        <Grid item xs={2}></Grid>
        {pendingCampData?.map((item, index) => (
          <>
            <Grid container xs={1}>
              <img src={item?.camp_images[0]} className="photos" />{" "}
              <Grid item xs={1} style={{ position: "absolute" }}>
                <HelpOutlineIcon style={{ cursor: "pointer" }} />
              </Grid>
              <Grid container xs={12} style={{ visibility: "hidden" }}>
                .
              </Grid>
              <Grid item sm={11} xs={10}>
                <p
                  style={{
                    overflow: "hidden",
                    whiteSpace: "no-wrap",
                    textOverflow: "ellipsis",
                    fontWeight: "bolder",
                  }}
                >
                  {item?.camp_name}
                </p>
              </Grid>
              <Grid item sm={1} xs={10}>
                <DoneIcon
                  style={{ cursor: "pointer", color: "green" }}
                  onClick={() => {
                    handleAcceptCamp(item.camp_name);
                  }}
                />
              </Grid>
              <Grid item sm={11} xs={10}>
                <p
                  style={{
                    overflow: "hidden",
                    whiteSpace: "no-wrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item?.camp_location}
                </p>
              </Grid>{" "}
              <Grid item sm={1} xs={10}>
                <ClearIcon
                  color="error"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleRejectCamp(item.camp_name);
                  }}
                />
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </>
        ))}
      </Grid>
      <Grid item xs={1}></Grid>
    </div>
  );
}

export default Home;
