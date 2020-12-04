import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import Footer from "../Admin/Footer/Footer";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import axios from "../axios";
import "./style.css";
import Alert from "@material-ui/lab/Alert";

const { setCampDetails } = actions;

function Index(props) {
  var [select, setSelect] = useState();
  const history = useHistory();
  var [camp, setCamp] = useState();
  const handleChange = (e) => {
    setCamp((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  function handleValidation() {
    let fields = { ...camp };
    let errors = {};
    let formIsValid = true;

    if (
      !fields.accessibleBy ||
      !fields.campDescription ||
      !fields.interestingName ||
      !fields.landType ||
      !fields.location ||
      !fields.originalName ||
      !fields.state
    ) {
      formIsValid = false;
    }

    return formIsValid;
  }

  console.log(camp);

  useEffect(() => {
    const data = localStorage.getItem("campUserForm1");
    if (data) {
      setCamp(JSON.parse(data));
    }
  }, []);

  const handleSelectChange = (e) => {
    setSelect(e.target.value);
  };
  const handleSubmit = () => {
    if (handleValidation()) {
      alert("Basic Camp Details Updated");
    } else {
      alert("Please fill every field");
    }

    localStorage.setItem("campUserForm1", JSON.stringify(camp));

    props.setCampDetails(camp);
    history.push("/CampUserForm2");
  };
  return (
    <div className="CampUserForm">
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={3} justify="center">
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 1 </span>
        </Grid>
        <Grid container xs={3}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 2 </span>
        </Grid>
        <Grid container xs={3}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 3 </span>
        </Grid>
        <Grid container xs={3}>
          <span style={{ fontWeight: "bolder", fontSize: 20 }}> 4 </span>
        </Grid>
        <Grid container>
          <Grid item align="center" xs={12}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Enter Camp Details
            </p>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container spacing={8}>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>
                Give your campsite an interesting name
              </p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={10} sm={6}>
              <TextField
                onChange={handleChange}
                id="outlined-search"
                name="interestingName"
                type="search"
                variant="outlined"
                value={camp?.interestingName}
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>
                Type in your campsite's original name
              </p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={9} sm={6}>
              <TextField
                id="outlined-search"
                name="originalName"
                onChange={handleChange}
                value={camp?.originalName}
                type="search"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
              <p style={{ fontWeight: "bolder" }}>Campsite description</p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={9} sm={6}>
              <TextField
                id="outlined-search"
                value={camp?.campDescription}
                name="campDescription"
                onChange={handleChange}
                type="search"
                variant="outlined"
                fullWidth
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid container>
              <Grid item sm={3} xs={0}></Grid>
              <Grid item xs={2}>
                <p style={{ fontWeight: "bolder" }}>Select State</p>
              </Grid>
              <Grid item sm={2} xs={0}></Grid>
              <Grid item xs={4}>
                <p style={{ fontWeight: "bolder" }}>Select Location</p>
              </Grid>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  State
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={camp?.state}
                  name="state"
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
                  <MenuItem value="Andaman and Nicobar Islands">
                    Andaman and Nicobar Islands
                  </MenuItem>
                  <MenuItem value="Arunachal Pradesh">
                    Arunachal Pradesh
                  </MenuItem>
                  <MenuItem value="Assam">Assam</MenuItem>
                  <MenuItem value="Bihar">Bihar</MenuItem>
                  <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                  <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
                  <MenuItem value="Dadar and Nagar Haveli">
                    Dadar and Nagar Haveli
                  </MenuItem>
                  <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
                  <MenuItem value="Delhi">Delhi</MenuItem>
                  <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
                  <MenuItem value="Puducherry">Puducherry</MenuItem>
                  <MenuItem value="Goa">Goa</MenuItem>
                  <MenuItem value="Gujarat">Gujarat</MenuItem>
                  <MenuItem value="Haryana">Haryana</MenuItem>
                  <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
                  <MenuItem value="Jammu and Kashmir">
                    Jammu and Kashmir
                  </MenuItem>
                  <MenuItem value="Jharkhand">Jharkhand</MenuItem>
                  <MenuItem value="Karnataka">Karnataka</MenuItem>
                  <MenuItem value="Kerala">Kerala</MenuItem>
                  <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                  <MenuItem value="Maharashtra">Maharashtra</MenuItem>
                  <MenuItem value="Manipur">Manipur</MenuItem>
                  <MenuItem value="Meghalaya">Meghalaya</MenuItem>
                  <MenuItem value="Mizoram">Mizoram</MenuItem>
                  <MenuItem value="Nagaland">Nagaland</MenuItem>
                  <MenuItem value="Odisha">Odisha</MenuItem>
                  <MenuItem value="Punjab">Punjab</MenuItem>
                  <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                  <MenuItem value="Sikkim">Sikkim</MenuItem>
                  <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                  <MenuItem value="Telangana">Telangana</MenuItem>
                  <MenuItem value="Tripura">Tripura</MenuItem>
                  <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
                  <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
                  <MenuItem value="West Bengal">West Bengal</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                fullWidth
                id="outlined-search"
                name="location"
                value={camp?.location}
                onChange={handleChange}
                type="search"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={4}>
              <p style={{ fontWeight: "bolder" }}>Land type</p>
            </Grid>
            <Grid item xs={4}>
              <p style={{ fontWeight: "bolder" }}>Accessible By</p>
            </Grid>
            <Grid item sm={3} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={camp?.landType}
                  name="landType"
                  onChange={handleChange}
                  label="Age"
                >
                  <MenuItem value="Government">Government</MenuItem>
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="Public">Public</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2} xs={0}></Grid>
            <Grid item xs={12} sm={2}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">
                  Accessable by
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={camp?.accessibleBy}
                  name="accessibleBy"
                  onChange={handleChange}
                >
                  <MenuItem value="Road">Road</MenuItem>
                  <MenuItem value=">Rail-Way">Rail-Way</MenuItem>
                  <MenuItem value="Driv-I">Driv-In</MenuItem>
                  <MenuItem value="4*4 only">4*4 only</MenuItem>
                  <MenuItem value="Boat only">Boat only</MenuItem>
                  <MenuItem value="Hike">Hike</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
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
    campDetails: state.campDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setCampDetails: (data) => {
      dispatch(setCampDetails(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
