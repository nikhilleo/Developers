import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Divider,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import actions from "../Redux/Action";

const {
  setCampAmenities,
  setCampActivities,
  setCampAccomodation,
  setCampDetails,
  setCampOwnerDetails,
  setCampManagerDetails,
  setCampExtraDetails,
} = actions;

function Index(props) {
  const history = useHistory();

  var [bookingDetails, setBookingDetails] = useState({
    policy: "",
  });

  var [priceDetails, setPriceDetails] = useState();
  console.log(props.campDetails);

  const handleChange = (e) => {
    console.log(e.target);
    setBookingDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    console.log(props.campDetails);
    console.log(props.campDetails);
  };

  const handlePriceChange = (e, itemName) => {
    let { name, value } = e.target;
    let copy = { ...priceDetails };
    copy = { ...copy, [name]: value };
    console.log(copy);
    setPriceDetails((prevState) => {
      console.log(prevState?.[itemName]);
      return {
        ...prevState,
        [itemName]: {
          ...prevState?.[itemName],
          [name]: value,
        },
      };
    });
  };

  const handleSubmit = () => {
    console.log(bookingDetails, priceDetails);

    props.setCampAccomodation(priceDetails);
    props.setCampExtraDetails(bookingDetails);

    history.push("/CampUserForm4");
  };

  return (
    <div>
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={3} justify="center">
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            1.Basic Details
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            2.Activities
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>
            3.Booking Details
          </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}>4.Manager </span>
        </Grid>
        <Grid container xs={2}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 5.Images </span>
        </Grid>
        <Grid container xs={1}></Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Please indicate when you’d like campers to check in and out{" "}
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Check in time (In 24 hour format)
            </p>
          </Grid>
          <Grid item xs={5}>
            <p style={{ fontSize: 14, color: "#a08c8c" }}>
              Check out time (In 24 hour format)
            </p>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              id="filled-basic"
              label="Like 11:00"
              variant="filled"
              fullWidth
              name="checkInTime"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <TextField
              id="filled-basic"
              label="Like 11:00"
              variant="filled"
              name="checkOutTime"
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>Price details</p>
          </Grid>
          <Grid item xs={2}></Grid>{" "}
          <Grid item xs={10}>
            <p>What would you like to charge campers?</p>
          </Grid>
          <Grid container>
            {props.campDetails.campAccomodation?.map((item, key) => (
              <Grid container key={key}>
                <Grid container>
                  <Grid item xs={2}></Grid>{" "}
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>Accommodation Type</p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>Total Capacity</p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>
                      Number of people allowed
                    </p>
                  </Grid>
                  <Grid item xs={2}>
                    <p style={{ fontWeight: "bolder" }}>
                      Price per night(in Rs)
                    </p>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}>
                    <p>{item}</p>
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="totalCapacity"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      name="numberOfPeopleAllowed"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      id="outlined-number"
                      label="Number"
                      type="number"
                      name="pricePerNight"
                      onChange={(e) => {
                        handlePriceChange(e, item);
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={10}>
              <p style={{ fontSize: 20, fontWeight: "bolder" }}>
                Cancellation policy
              </p>
            </Grid>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p>
              Please select the cancellation policy that applies to the
              campsite?
            </p>
          </Grid>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <FormControl variant="filled" style={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Select Policy
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={bookingDetails.policy}
                  name="policy"
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="Super Flexible">Super Flexible</MenuItem>
                  <MenuItem value="Super Flexible">Flexible</MenuItem>
                  <MenuItem value="Moderate">Moderate</MenuItem>
                  <MenuItem value="Strict">Strict</MenuItem>
                  <MenuItem value="Super Strict">Super Strict</MenuItem>
                  <MenuItem value="Super Strict(30 days)">
                    Super Strict(30 days)
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={10}>
            <p>
              If you cancel anytime before your check in day and time, you’ll
              receive a full refund (minus Campmonk fees).
            </p>
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
      </Grid>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    campActivities: state.campDetails.campActivities,
    campAccomodation: state.campDetails.campAccomodation,
    campAmenities: state.campDetails.campAmenities,
    campDetails: state.campDetails,
  };
}

function mapDispatchToProps(dispatch) {
  console.log(dispatch);
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
    setCampManagerDetails: (data) => {
      dispatch(setCampManagerDetails(data));
    },
    setCampExtraDetails: (data) => {
      dispatch(setCampExtraDetails(data));
    },
    setCampOwnerDetails: (data) => {
      dispatch(setCampOwnerDetails(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
