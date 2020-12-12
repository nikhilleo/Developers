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
  Input,
} from "@material-ui/core";
import actions from "../Redux/Action";
import axios from "../axios";
import Footer from "../Admin/Footer/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const {
  setCampAmenities,
  setCampActivities,
  setCampAccomodation,
  setCampDetails,
  setCampOwnerDetails,
  setCampManagerDetails,
  setCampExtraDetails,
} = actions;

var imagePreview = [];

function CampUserForm5(props) {
  var campName = props?.campDetails?.campDetails?.originalName;
  const history = useHistory();
  var [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  var [files, setFiles] = useState([]);

  async function onImageChange(e) {
    console.log(e?.target?.result);
    const reader = new FileReader();
    reader?.addEventListener("load", (event) => {
      setImagePreviewUrl((imagePreviewUrl) => [
        ...imagePreviewUrl,
        event?.target?.result,
      ]);
    });
    reader?.readAsDataURL(e?.target?.files[0]);

    console.log(e?.target?.files[0]);
    let copy = [...files];
    copy.push(e?.target?.files[0]);
    console.log(copy);
    setFiles(copy);
  }

  const handleClick = () => {
    document.getElementById("selectFile").click();
  };

  if (imagePreviewUrl) {
    imagePreview.push(<img style={{ height: "7rem" }} src={imagePreviewUrl} />);
  }

  const handleSubmit = async () => {
    // console.log(imagePreviewUrl);
    // axios.post("/owner/upload/image", imagePreviewUrl);
    console.log();
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("image", files[x]);
    }
    await data.append("image", files);
    axios
      .post("/owner/upload/image", data, { headers: { camp_name: campName } })
      .then((res) => {
        console.log(res);
        toast.info("Camp Created Successfully", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        localStorage.removeItem("Manager");
        localStorage.removeItem("activities");
        localStorage.removeItem("priceDetails");
        localStorage.removeItem("Amenities");
        localStorage.removeItem("Accommodation");
        localStorage.removeItem("campUserForm1");
        localStorage.removeItem("bookingDetails");
        history.push("/");
      })
      .catch((err) => {
        console.log(err?.response);
        toast.error(`${err?.response?.message}`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      });
  };

  return (
    <div className="formBody">
      {" "}
      <Grid container className="Owner__Camp__Container" justify="center">
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={3} justify="center">
          <Link to="/CampUserForm1" style={{ textDecoration: "none" }}>
            <span className="subHeader"> 1 Basic Details </span>
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm2" style={{ textDecoration: "none" }}>
            <span className="subHeader"> 2.Activities </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm3" style={{ textDecoration: "none" }}>
            {" "}
            <span className="subHeader"> 3.Accomodation </span>
          </Link>{" "}
        </Grid>
        <Grid container xs={2}>
          <Link to="/CampUserForm4" style={{ textDecoration: "none" }}>
            {" "}
            <span className="subHeader"> 4.Manager </span>{" "}
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link
            to="/CampUserForm5"
            style={{ textDecoration: "none", fontWeight: "bolder" }}
          >
            {" "}
            <span className="mainHeader"> 5.Images </span>{" "}
          </Link>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container>
          <Grid item align="center" xs={12}>
            <p style={{ fontSize: 20, fontWeight: "bolder" }}>
              Upload Photos of Your Camps
            </p>
          </Grid>
        </Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={9}>
          <p style={{ fontSize: 20 }}>
            Add photographs ( NOTE: first image of the box will automatically
            selected as banner image of your camp )
          </p>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container>
          <Grid item xs={5}></Grid>
          <Grid item xs={10} sm={2}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={handleClick}
            >
              Upload
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid
          style={{
            minHeight: "14rem",
            minWidth: "58vw",
            height: "auto",
            width: "auto",
            border: "1px solid #ccc8c8",
          }}
        >
          <Input
            type="file"
            name="file"
            style={{ display: "none" }}
            id="selectFile"
            onChange={onImageChange}
          />

          <Grid container>
            <Grid item xs={1}></Grid>
            {imagePreviewUrl.map((img, index) => (
              <>
                <Grid item xs={2}>
                  <img
                    src={img}
                    key={index}
                    style={{
                      height: "7rem",
                      border: "1px solid",
                      minWidth: "6rem",
                      maxWidth: "6rem",
                      marginTop: "4vh",
                    }}
                    id="profilePic"
                  />
                </Grid>
                <Grid item xs={1}></Grid>
              </>
            ))}
            <Grid
              item
              xs={1}
              style={{
                height: "7rem",
                border: "1px solid",
                minWidth: "6rem",
                maxWidth: "6rem",
                textAlign: "center",
                marginTop: "4vh",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                document.getElementById("selectFile").click();
              }}
            >
              <span style={{ fontSize: "4rem" }}> +</span>{" "}
            </Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
          </Grid>
        </Grid>
      </Grid>
      <Grid container xs={12} style={{ visibility: "hidden" }}>
        .
      </Grid>{" "}
      <Grid container>
        <Grid item xs={0} sm={9} align="flex-end"></Grid>
        <Grid item xs={12} sm={1} align="flex-end">
          <Button variant="contained" color="secondary" onClick={handleSubmit}>
            Next
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item style={{ marginTop: "17vh" }}>
          <Footer />
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
    owner: state.owner,
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

export default connect(mapStateToProps, mapDispatchToProps)(CampUserForm5);
