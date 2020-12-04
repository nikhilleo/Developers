import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
} from "@material-ui/core";
import Footer from "../Admin/Footer/Footer";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import axios from "../axios";
import "./style.css";

const {
  setCampAmenities,
  setCampActivities,
  setCampAccomodation,
  setCampDetails,
} = actions;

function Index(props) {
  const history = useHistory();

  var [activities, setActivities] = useState({
    Trekking: false,
    off_Roading: false,
    Climbing: false,
    White_water_rafting: false,
    Wildlife_Watching: false,
    Swimming: false,
    Cycling: false,
  });

  var [Amenities, setAmenities] = useState({
    Pets_allowed: false,
    Toilet: false,
    Shower: false,
    Campfire: false,
    Covered_Area: false,
    Charging_points: false,
    Drinking_water: false,
  });

  var [Accommodation, setAccommodation] = useState({
    Dorm: false,
    Farm_Cottage: false,
    Mud_House: false,
    Villas: false,
    Tree_House: false,
    Tent: false,
    Park_N_Camp: false,
  });

  useEffect(() => {
    const data = localStorage.getItem("campUserForm2");
    if (data) {
      setActivities(JSON.parse(data));
      setAmenities(JSON.parse(data));
      setAccommodation(JSON.parse(data));
    }
  });

  console.log(Accommodation);
  console.log(activities);
  console.log(Amenities);
  console.log(Amenities);

  const handleChange = (e) => {
    setActivities((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleAmenitiesChange = (e) => {
    setAmenities((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleAccommodationChange = (e) => {
    setAccommodation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSubmit = () => {
    localStorage.setItem("activities", JSON.stringify(activities));
    localStorage.setItem("Accommodation", JSON.stringify(Accommodation));
    localStorage.setItem("Amenities", JSON.stringify(Amenities));

    const final__activities = Object.keys(activities).filter(
      (k) => activities[k]
    );
    const final__accommodation = Object.keys(Accommodation).filter(
      (k) => Accommodation[k]
    );
    const final__amenities = Object.keys(Amenities).filter((k) => Amenities[k]);
    console.log(props.final__accommodation);
    props.setCampAccomodation(final__accommodation);
    props.setCampActivities(final__activities);
    props.setCampAmenities(final__amenities);
    console.log(props.campDetails);

    history.push("/CampUserForm3");
  };
  return (
    <div className="CampUserForm">
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={3} justify="center">
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            1.Basic Details
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            2.Activities{" "}
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            3.Accomodation{" "}
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>4.Manager </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 4.Images </span>
        </Grid>
        <Grid container xs={1}></Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20 }}>Check all fun things to do </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Please check all the activities available/apply in your campsite
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontWeight: "bolder", color: "#01A2A6" }}>Activities</p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Trekking}
                  onChange={handleChange}
                  name="Trekking"
                />
              }
              label="Trekking"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.off_Roading}
                  onChange={handleChange}
                  name="off_Roading"
                />
              }
              label="Off-roading"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Climbing}
                  onChange={handleChange}
                  name="Climbing"
                />
              }
              label="Climbing"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.White_water_rafting}
                  onChange={handleChange}
                  name="White_water_rafting"
                />
              }
              label="White-water-rafting"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Wildlife_Watching}
                  onChange={handleChange}
                  name="Wildlife_Watching"
                />
              }
              label="Wildlife-Watching"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Swimming}
                  onChange={handleChange}
                  name="Swimming"
                />
              }
              label="Swimming"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={activities.Cycling}
                  onChange={handleChange}
                  name="Cycling"
                />
              }
              label="Cycling"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder", color: "#01A2A6" }}>
              Select camp amenities{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Check all the available equipment or resources
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Drinking_water}
                  onChange={handleAmenitiesChange}
                  name="Drinking_water"
                />
              }
              label="Drinking water"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Charging_points}
                  onChange={handleAmenitiesChange}
                  name="Charging_points"
                />
              }
              label="Charging points"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Covered_Area}
                  onChange={handleAmenitiesChange}
                  name="Covered_Area"
                />
              }
              label="Covered Area"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Campfire}
                  onChange={handleAmenitiesChange}
                  name="Campfire"
                />
              }
              label="Campfire"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Shower}
                  onChange={handleAmenitiesChange}
                  name="Shower"
                />
              }
              label="Shower"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Toilet}
                  onChange={handleAmenitiesChange}
                  name="Toilet"
                />
              }
              label="Toilet"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Amenities.Pets_allowed}
                  onChange={handleAmenitiesChange}
                  name="Pets_allowed"
                />
              }
              label="Pets allowed"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder", color: "#01A2A6" }}>
              Check all the types of accommodation you will provide{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Please check all the accommodations available/apply in your
              campsite
            </p>
          </Grid>
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Tent}
                  onChange={handleAccommodationChange}
                  name="Tent"
                />
              }
              label="Tent"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Tree_House}
                  onChange={handleAccommodationChange}
                  name="Tree_House"
                />
              }
              label="Tree House"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Villas}
                  onChange={handleAccommodationChange}
                  name="Villas"
                />
              }
              label="Villas"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Mud_House}
                  onChange={handleAccommodationChange}
                  name="Mud_House"
                />
              }
              label="Mud House"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Dorm}
                  onChange={handleAccommodationChange}
                  name="Dorm"
                />
              }
              label="Dorm"
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Farm_Cottage}
                  onChange={handleAccommodationChange}
                  name="Farm_Cottage"
                />
              }
              label="Farm Cottage"
            />
          </Grid>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Accommodation.Park_N_Camp}
                  onChange={handleAccommodationChange}
                  name="Park_N_Camp"
                />
              }
              label="Park N Camp"
            />
          </Grid>
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20 }}>What makes your campsite awesome?</p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Do you have cool features that we have not already listed?
            </p>
          </Grid>
          <Grid item xs={2} sm={0}></Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item sm={2}></Grid>
          <Grid item xs={6} sm={3}>
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Divider style={{ color: "black", width: "80vw" }} />
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={0} sm={9} align="flex-end"></Grid>
          <Grid item xs={12} sm={1} align="flex-end">
            <Button
              variant="contained"
              color="secondary"
              onClick={handleSubmit}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    campActivities: state.campActivities,
    campAccomodation: state.campAccomodation,
    campAmenities: state.campAmenities,
    campDetails: state.campDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampActivities: (data) => {
      dispatch(setCampActivities(data));
    },
    setCampAccomodation: (data) => {
      dispatch(setCampAccomodation(data));
    },
    setCampAmenities: (data) => {
      dispatch(setCampAmenities(data));
    },
    setCampDetails: (data) => {
      dispatch(setCampDetails(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
