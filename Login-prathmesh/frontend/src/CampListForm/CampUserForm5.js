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

var imagePreview = [];

function CampUserForm5() {
  var [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  var [files, setFiles] = useState([]);

  async function onImageChange(e) {
    console.log(e.target.result);
    const reader = new FileReader();
    reader.addEventListener("load", (event) => {
      setImagePreviewUrl((imagePreviewUrl) => [
        ...imagePreviewUrl,
        event.target.result,
      ]);
    });
    reader.readAsDataURL(e.target.files[0]);

    console.log(e.target.files[0]);
    let copy = [...files];
    copy.push(e.target.files[0]);
    console.log(copy);
    setFiles(copy);
  }

  const handleClick = () => {
    document.getElementById("selectFile").click();
  };

  if (imagePreviewUrl) {
    imagePreview.push(<img style={{ height: "9vh" }} src={imagePreviewUrl} />);
  }

  const handleSubmit = async () => {
    // console.log(imagePreviewUrl);
    // axios.post("/owner/upload/image", imagePreviewUrl);
    const data = new FormData();
    for (var x = 0; x < files.length; x++) {
      data.append("image", files[x]);
    }
    await data.append("image", files);
    axios.post("/owner/upload/image", data);
  };

  return (
    <div>
      {" "}
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
              }}
            >
              {" "}
              4.Manager{" "}
            </span>{" "}
          </Link>
        </Grid>
        <Grid container xs={2}>
          <Link
            to="/CampUserForm5"
            style={{ textDecoration: "none", fontWeight: "bolder" }}
          >
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
            height: "14rem",
            width: "58vw",
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
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
          </Grid>
          <Grid container>
            <Grid item xs={1}></Grid>
            {imagePreviewUrl.map((img, index) => (
              <>
                <Grid item xs={2}>
                  <img
                    src={img}
                    key={index}
                    style={{
                      height: "12rem",
                      border: "1px solid",
                      minWidth: "5vw",
                      maxWidth: "5vw",
                    }}
                    id="profilePic"
                  />
                </Grid>
              </>
            ))}
            <Grid
              item
              xs={1}
              style={{
                height: "7rem",
                border: "1px solid",
                minWidth: "5vw",
                maxWidth: "5vw",
                textAlign: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                document.getElementById("selectFile").click();
              }}
            >
              <span style={{ fontSize: "4rem" }}> +</span>{" "}
            </Grid>
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

export default CampUserForm5;
