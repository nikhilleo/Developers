import React, { useEffect, useState } from "react";

import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux";
import Navbar from "../HomePage/Navbar/index";
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
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import Calendar from "react-calendar";
import DescriptionIcon from "@material-ui/icons/Description";
import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
import Footer from "../Admin/Footer/Footer";
import Map from "../GoogleMap";
import "./style.css";
import axios from "../axios";
import Icons from "./icons/icons";

const Index = (props) => {
  var [images, setImages] = useState([]);
  const [checkOutvalue, onChangeCheckOut] = useState(new Date());
  const [checkInvalue, onChangeCheckIn] = useState(new Date());
  const [render, reRender] = useState();

  const handleCalenderCheckInClick = () => {
    document.getElementById("calenderCheckIn").classList.toggle("active");
  };

  const handleCalenderCheckOutClick = () => {
    document.getElementById("calenderCheckOut").classList.toggle("active");
  };

  useEffect(() => {
    let copy = [...images];
    props.specificCamp?.specificCamp?.camp_images?.map((item, index) => {
      console.log(item, index, copy);
      copy[index] = { url: item };
      console.log(images);
    });
    setImages(copy);
    console.log(copy, images);
  }, []);

  console.log(props.specificCamp?.specificCamp);

  var trimCheckInDate = String(checkInvalue);
  var trimCheckOutDate = String(checkOutvalue);

  var newTrimCheckInDate = trimCheckInDate.slice(4, 15);
  var newTrimCheckOutDate = trimCheckOutDate.slice(4, 15);

  var [qty, setQty] = useState([]);
  var [pricePerCamp, setPricePerCamp] = useState(2275);
  var [noOfPeople, setNoOfPeople] = useState(0);
  var [totalPrice, setTotalPrice] = useState(0);

  console.log(trimCheckInDate);
  console.log(trimCheckOutDate);

  const dynamicAccomodation = Object.entries(
    props?.specificCamp?.specificCamp?.accomodations
  );
  console.log(dynamicAccomodation);

  const handleSubmit = () => {
    console.log(newTrimCheckOutDate);
    console.log(newTrimCheckInDate);
    reRender(0);
    console.log(props?.user?.user?._id);
    console.log(qty);
    let finalObj = qty.map((item, index) => Object.values(item));

    console.log(finalObj);
    var obj = [{ finalTotal: 0 }];
    finalObj.map((item, index) => {
      obj.push(new Object());
      obj[index].name = item[0];
      obj[index].qty = item[1];
      obj[index].noOfPeople = item[2];
      obj[index].totalPrice = item[3];
    });
    console.log(obj);

    axios
      .post("/demo", obj)
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
      <Grid container>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        {images[0] ? (
          <Grid container>
            <SimpleImageSlider
              style={{ margin: "auto" }}
              width={896}
              height={504}
              images={images}
              showBullets={true}
              showNavs={true}
              useGPURender={true}
            />
          </Grid>
        ) : null}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid
          container
          xs={12}
          align="center"
          style={{ background: "#f7f7f7" }}
        >
          <Grid item xs={1} sm={2} md={3}></Grid>
          <Grid item xs={4}>
            <CheckCircleIcon color="primary" />
            <span style={{ fontSize: 24 }}>
              {props.specificCamp?.specificCamp?.camp_name} (
              {props.specificCamp?.specificCamp?.camp_state})
            </span>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid item xs={1} sm={2} md={3}></Grid>
          <Grid item xs={4}>
            <LocationOnIcon color="primary" />
            <span>{props.specificCamp?.specificCamp?.camp_location}</span>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid item xs={1} sm={2} md={3}></Grid>
          <Grid container xs={4} style={{ marginLeft: "7vw" }}>
            <Grid>
              <Grid item xs={12} align="center">
                <DirectionsBikeIcon fontSize="large" />
              </Grid>
              <Grid item xs={12}>
                <span>Trekking</span>
              </Grid>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid>
              <Grid item xs={12} align="center">
                <WhatshotIcon fontSize="large" />
              </Grid>
              <Grid item xs={12}>
                <span>CampFire</span>
              </Grid>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid>
              <Grid item xs={12} align="center">
                <LocalDrinkIcon fontSize="large" />
              </Grid>
              <Grid item xs={12}>
                <span>Drink</span>
              </Grid>
            </Grid>
            <Grid xs={1}></Grid>
            <Grid>
              <Grid item xs={12} align="center">
                <FreeBreakfastIcon fontSize="large" />
              </Grid>
              <Grid item xs={12}>
                <span>BreakFast</span>
              </Grid>
            </Grid>
            <Grid xs={1}></Grid>
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
        <Grid
          container
          xs={12}
          align="center"
          style={{ background: "#f7f7f7" }}
        >
          <Grid container xs={7}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} align="center">
              <Grid>
                <Grid item xs={12}>
                  <DescriptionIcon fontSize="large" />
                </Grid>
                <Grid item xs={12}>
                  <span> Description</span>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={5} align="center">
              <Grid item xs={12}>
                <p style={{ fontWeight: "bold", fontSize: "24px" }}>
                  Please read the description carefully for information -
                </p>
                {props.specificCamp?.specificCamp?.camp_desc}
              </Grid>
            </Grid>
          </Grid>{" "}
          <Grid container xs={3}>
            <Grid container>
              <Grid
                align="center"
                xs={12}
                style={{ padding: 8, background: "#E2C74C" }}
              >
                <span style={{ fontSize: 24 }}>Select camping dates</span>
              </Grid>
              <Grid container>
                <Grid item xs={5} align="center" style={{ marginTop: "2vh" }}>
                  <p style={{ fontWeight: "bold" }}>check In</p>
                  <span onClick={handleCalenderCheckInClick}>
                    {newTrimCheckInDate}
                  </span>
                </Grid>
                <Grid xs={1}></Grid>
                <Divider orientation="vertical" flexItem />
                <Grid item xs={5} align="center" style={{ marginTop: "2vh" }}>
                  <p style={{ fontWeight: "bold" }}>check Out</p>
                  <span onClick={handleCalenderCheckOutClick}>
                    {newTrimCheckOutDate}
                  </span>
                  <Grid container xs={12} style={{ visibility: "hidden" }}>
                    .
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              justify="space-around"
              style={{ background: "#E2C74C", fontWeight: "bold", padding: 10 }}
            >
              <Grid item xs={2} align="center">
                Type
              </Grid>
              <Grid item xs={2} align="center">
                Price per camper(s)
              </Grid>
              <Grid item xs={2} align="center">
                Qty
              </Grid>
              <Grid item xs={2} align="center">
                No of people
              </Grid>
              <Grid item xs={2} align="center">
                Total price
              </Grid>
            </Grid>

            {dynamicAccomodation?.map((item, index) => (
              <>
                <Grid container xs={12} style={{ visibility: "hidden" }}>
                  .
                </Grid>
                <Grid container xs={12} justify="space-around">
                  <Grid item xs={2} align="center">
                    {item[0]}
                  </Grid>
                  <Grid item xs={2} align="center">
                    {` ${item[1].pricePerNight}/${item[1].numberOfPeopleAllowed}`}
                  </Grid>
                  <Grid item xs={2} align="center">
                    <TextField
                      id={`outlined-number ${index}`}
                      type="number"
                      defaultValue="0"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={(e) => {
                        console.log(item);
                        console.log(qty);
                        if (e.target.value > item[1].totalCapacity) {
                          console.log("yes");
                          e.target.value = item[1].totalCapacity;
                          return false;
                        } else if (e.target.value < 0) {
                          console.log("yes");
                          e.target.value = 0;
                          return false;
                        } else {
                          if (qty[index] === undefined) {
                            console.log("yes");
                            let copy = [...qty];
                            let obj = {};
                            obj.name = e.target.name;
                            obj.qty = e.target.value;
                            obj.noOfPeople =
                              qty[index]?.qty * item[1]?.numberOfPeopleAllowed;
                            obj.totalPrice =
                              qty[index]?.qty * item[1]?.pricePerNight;
                            copy.push(obj);
                            setQty(copy);
                          } else {
                            console.log("yes");
                            let copy = [...qty];
                            let obj = {};
                            obj.name = e.target.name;
                            obj.qty = e.target.value;
                            obj.noOfPeople =
                              qty[index]?.qty * item[1]?.numberOfPeopleAllowed;
                            obj.totalPrice =
                              qty[index]?.qty * item[1]?.pricePerNight;
                            copy[index] = obj;
                            setQty(copy);
                          }
                        }
                      }}
                      name={item[0]}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={2} align="center">
                    {qty[index]?.qty * item[1]?.numberOfPeopleAllowed}
                  </Grid>
                  <Grid item xs={2} align="center">
                    Rs. {qty[index]?.qty * item[1]?.pricePerNight}
                  </Grid>
                </Grid>
              </>
            ))}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={6} align="center">
              <Button
                style={{ width: "100%" }}
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Book Camp
              </Button>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <div className="Sample__container" id="calenderCheckIn">
            <main
              className="Sample__container__content"
              style={{ position: "absolute" }}
            >
              <Calendar onChange={onChangeCheckIn} value={checkInvalue} />
            </main>
          </div>
          <div className="Sample__container" id="calenderCheckOut">
            <main
              className="Sample__container__content"
              style={{ position: "absolute" }}
            >
              <Calendar onChange={onChangeCheckOut} value={checkOutvalue} />
            </main>
          </div>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ background: "#f7f7f7" }}>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
        <Grid container style={{ background: "#f7f7f7" }}>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={3}
              align="center"
              style={{ fontWeight: "bold", fontSize: 20 }}
            >
              Aminities
            </Grid>
            <Grid container>
              {props.specificCamp?.specificCamp?.animities?.map(
                (item, index) => (
                  <>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={3} align="center">
                      <Icons name={item} /> {item}
                    </Grid>
                    <Grid container xs={12} style={{ visibility: "hidden" }}>
                      .
                    </Grid>
                  </>
                )
              )}
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={3}
              align="center"
              style={{ fontWeight: "bold" }}
            ></Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>{" "}
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>{" "}
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
        <Grid container style={{ background: "#f7f7f7" }}>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={3}
              align="center"
              style={{ fontWeight: "bold", fontSize: 20 }}
            >
              Details
            </Grid>
            <Grid item xs={3} align="center" style={{ fontWeight: "bold" }}>
              Types of land
            </Grid>
            <Grid item xs={3} align="center" style={{ fontWeight: "bold" }}>
              Accessible By
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid item xs={3}></Grid>
            <Grid item xs={3} align="center">
              {props.specificCamp?.specificCamp?.land_type}
            </Grid>
            <Grid item xs={3} align="center">
              {props.specificCamp?.specificCamp?.accessibility_by}
            </Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
            <Grid container xs={12} style={{ visibility: "hidden" }}>
              .
            </Grid>
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
        <Grid container style={{ background: "#f7f7f7" }}>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={3}
              align="center"
              style={{ fontWeight: "bold", fontSize: 20 }}
            >
              Activities
            </Grid>
            {props.specificCamp?.specificCamp?.activities.map((item, index) => (
              <>
                <Grid item xs={3} align="center">
                  <Icons name={item} /> {item}
                </Grid>
                <Grid container xs={12} style={{ visibility: "hidden" }}>
                  .
                </Grid>
                <Grid item xs={6}></Grid>
              </>
            ))}
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
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>{" "}
        <Grid container style={{ background: "#f7f7f7" }}>
          <Grid container xs={7} style={{ fontSize: 20 }}>
            <Grid item xs={3}></Grid>
            <Grid
              item
              xs={3}
              align="center"
              style={{ fontWeight: "bold", fontSize: 20 }}
            >
              Accomodation
            </Grid>
            {dynamicAccomodation.map((item, index) => (
              <>
                <Grid item xs={3} align="center">
                  <Icons name={item[0]} /> {item[0]}
                </Grid>
                <Grid container xs={12} style={{ visibility: "hidden" }}>
                  .
                </Grid>
                <Grid item xs={6}></Grid>
              </>
            ))}
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
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Divider style={{ color: "black", width: "80vw" }} />
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
          <Grid container xs={12} style={{ visibility: "hidden" }}>
            .
          </Grid>
        </Grid>
        <Grid container xs={12} align="center">
          <Grid item xs={12} align="center">
            <Map />
          </Grid>
        </Grid>
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
      </Grid>{" "}
      <Footer />
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    specificCamp: state.specificCampDetails,
    user: state.user,
  };
}

export default connect(mapStateToProps)(Index);
