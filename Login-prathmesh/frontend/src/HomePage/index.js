import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import backImg1 from "../Assets/40041066-travel-landmark.jpg";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import actions from "../Redux/Action";
import Footer from "../Admin/Footer/Footer";
import Navbar from "./Navbar";
import "./style.css";
import axios from "../axios";

const { setCampAmenities, setSpecific } = actions;

function Index(props) {
  const history = useHistory();
  var [campDetails, setCampDetails] = useState([]);
  useEffect(() => {
    axios
      .get("/admin/get_pending_camps")
      .then((res) => {
        setCampDetails(res.data);
      })
      .catch((err) => {
        {
          console.log(err);
          console.log(err);
        }
      });
  }, []);

  const handleClick = async (campName) => {
    console.log(campName);
    let camp_name = campName;
    let token = localStorage.getItem("auth-token");

    axios
      .get("/get_a_camp", {
        method: "GET",
        headers: {
          Authorization: token,
          camp_name: campName,
        },
      })
      .then((res) => {
        console.log(res);
        props.setSpecific(res.data);
        history.push("/specificCamp");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  console.log(campDetails);
  return (
    <div>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={10}>
          <img src={backImg1} />
        </Grid>
      </Grid>
      <Grid container>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item sm={3} xs={12}>
            <h1 style={{ fontFamily: "sans-serif" }}>Recent Camps</h1>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          {campDetails.map((item, key) => (
            <>
              <Grid container xs={1}>
                <img src={item.camp_images[0]} className="photos" />
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
                    {item.camp_name}
                  </p>
                </Grid>
                <Grid item sm={1} xs={10}>
                  <Button
                    onClick={() => handleClick(item.camp_name)}
                    variant="contained"
                    color="secondary"
                  >
                    Details
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
                    {item.camp_location}
                  </p>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </>
          ))}
        </Grid>
      </Grid>
      <Grid container xs={12} style={{ visibility: "hidden" }}>
        .
      </Grid>
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item sm={3} xs={12}>
          <h1 style={{ fontFamily: "sans-serif" }}>POPULAR LOCATIONS</h1>
        </Grid>
      </Grid>
      <Grid container>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item sm={2} xs={10}>
            <img
              className="photos"
              src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </Grid>
          <Grid item sm={2} xs={10}>
            <img
              className="photos"
              src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </Grid>
          <Grid item sm={2} xs={10}>
            <img
              className="photos"
              src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </Grid>
          <Grid item sm={2} xs={10}>
            <img
              className="photos"
              src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            ></img>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item sm={1} xs={10}>
            <p style={{ fontWeight: "bolder" }}>Camp name</p>
          </Grid>
          <Grid item sm={1} xs={10}>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Grid>
          <Grid item sm={1} xs={10}>
            <p style={{ fontWeight: "bolder" }}>Camp name</p>
          </Grid>
          <Grid item sm={1} xs={10}>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Grid>
          <Grid item sm={1} xs={10}>
            <p style={{ fontWeight: "bolder" }}>Camp name</p>
          </Grid>
          <Grid item sm={1} xs={10}>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Grid>
          <Grid item sm={1} xs={10}>
            <p style={{ fontWeight: "bolder" }}>Camp name</p>
          </Grid>
          <Grid item sm={1} xs={10}>
            <Button variant="contained" color="secondary">
              Details
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item sm={2} xs={10}>
            <p style={{ fontSize: 13 }}>Camp Lcation</p>
          </Grid>
          <Grid item sm={2} xs={10}>
            <p style={{ fontSize: 13 }}>Camp Location</p>
          </Grid>
          <Grid item sm={2} xs={10}>
            <p style={{ fontSize: 13 }}>Camp Location</p>
          </Grid>
          <Grid item sm={2} xs={10}>
            <p style={{ fontSize: 13 }}>Camp Location</p>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
      </Grid>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campAmenities: state.campAmenities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampAmenities: (data) => {
      dispatch(setCampAmenities(data));
    },
    setSpecific: (data) => {
      dispatch(setSpecific(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
