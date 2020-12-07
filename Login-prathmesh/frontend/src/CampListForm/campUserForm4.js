import React, { useState } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
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
import axios from "../axios";

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
  var [checkValue, setCheckValue] = useState(false);
  var [contactDetails, setContactDetails] = useState({
    email: "prathmeshKulkdarni@gmail.com",
    link: "Prathmesh",
    managerEmail: "",
    managerLandline: "",
    managerName: "",
    managerNumber: "",
    ownerLandline: "0241-2426325d",
    ownerName: "Prathmesh",
    ownerNumber: "8797857854",
  });

  console.log(props.campDetails);

  const handleChange = (e) => {
    setContactDetails((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

    props.setCampOwnerDetails(contactDetails);
  };

  const handleSubmit = async () => {
    console.log(props.campDetails);
    let token = localStorage.getItem("auth-token");
    console.log(token);

    axios
      .post("/owner/create_camp", props.campDetails, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });

    history.push("/CampUserForm5");
  };

  return (
    <div>
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={3} justify="center">
          <Link to="/CampUserForm1" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: 20,
                cursor: "pointer",
                color: "black",
              }}
            >
              {" "}
              1 Basic Details{" "}
            </span>
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm2" style={{ textDecoration: "none" }}>
            <span
              style={{
                fontSize: 20,
                cursor: "pointer",
                color: "black",
              }}
            >
              {" "}
              2.Activities{" "}
            </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm3" style={{ textDecoration: "none" }}>
            {" "}
            <span
              style={{
                fontSize: 20,
                cursor: "pointer",
                color: "black",
              }}
            >
              {" "}
              3.Accomodation{" "}
            </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm4" style={{ textDecoration: "none" }}>
            {" "}
            <span
              style={{
                fontSize: 20,
                cursor: "pointer",
                color: "black",
                fontWeight: "bolder",
              }}
            >
              {" "}
              4.Manager{" "}
            </span>{" "}
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm5" style={{ textDecoration: "none" }}>
            {" "}
            <span style={{ fontSize: 20, cursor: "pointer", color: "black" }}>
              {" "}
              5.Images{" "}
            </span>{" "}
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item align="center" xs={12}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Enter Camp Manager Details
            </p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Owner</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Email</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              defaultValue="Prathmesh"
              fullWidth
              type="search"
              variant="outlined"
              label="Owner Name"
              name="ownerName"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              defaultValue="prathmeshKulkarni@gmail.com"
              fullWidth
              type="search"
              onChange={handleChange}
              label="Email"
              name="email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Contact Number</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Landline Number</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              defaultValue="8797857854"
              name="ownerNumber"
              fullWidth
              onChange={handleChange}
              type="search"
              label="Contact Number"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              defaultValue="0241-2426325"
              onChange={handleChange}
              name="ownerLandline"
              fullWidth
              type="search"
              label="Landline Number"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={10}>
          <Grid item xs={0} sm={7} align="flex-end"></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Name</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Email</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              label="Camp Manager Name"
              fullWidth
              defaultValue={contactDetails.managerName}
              name="managerName"
              type="search"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              onChange={handleChange}
              defaultValue={contactDetails.managerEmail}
              label="Camp Manager Email"
              name="managerEmail"
              fullWidth
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp Manager Number</p>
          </Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Camp manager landline</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              onChange={handleChange}
              id="outlined-search"
              defaultValue={contactDetails.managerNumber}
              name="managerNumber"
              fullWidth
              label="Camp Manager Number"
              type="search"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={0} sm={3}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              name="managerLandline"
              defaultValue={contactDetails.managerLandline}
              id="outlined-search"
              onChange={handleChange}
              label="Camp Manager landline"
              fullWidth
              type="search"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={5}>
            <p style={{ fontWeight: "bolder" }}>Link / Website</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={0} sm={2}></Grid>
          <Grid item xs={12} sm={2}>
            <TextField
              id="outlined-search"
              name="link"
              onChange={handleChange}
              label="Link"
              fullWidth
              type="search"
              variant="outlined"
            />
          </Grid>
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
    campOwner: state.campOwner,
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
