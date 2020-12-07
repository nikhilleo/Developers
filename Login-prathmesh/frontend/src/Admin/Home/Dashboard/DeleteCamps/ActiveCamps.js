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
  var [activeCamps, setActiveCamps] = useState();
  useEffect(() => {
    axios
      .get("/admin/get_active_camps")
      .then((res) => {
        console.log(res);
        setActiveCamps(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
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
            Delete Camp
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
            to="/Delete__Admin__camp/Active__Camps"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{
                cursor: "pointer",
                color: "black",
                fontSize: "16px",
                fontWeight: "bolder",
              }}
            >
              Active Camps
            </span>
          </Link>
        </Grid>
        <Grid item xs={2}>
          <Link
            to="/Delete__Admin__camp/Deleted__Camps"
            style={{ textDecoration: "none" }}
          >
            <span
              style={{ cursor: "pointer", color: "black", fontSize: "16px" }}
            >
              Deleted Camps
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
        <Grid container xs={1}>
          <img
            src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            className="photos"
          />{" "}
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
              item.camp_name
            </p>
          </Grid>
          <Grid item sm={1} xs={10}>
            <Button variant="contained" color="secondary">
              Delete
            </Button>
          </Grid>
          <Grid item sm={11} xs={10}>
            <p
              style={{
                overflow: "hidden",
                whiteSpace: "no-wrap",
                textOverflow: "ellipsis",
              }}
            >
              location
            </p>
          </Grid>{" "}
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      <Grid item xs={1}></Grid>
    </div>
  );
}

export default Home;
