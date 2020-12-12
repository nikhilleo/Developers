import React, { useEffect, useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import axios from "../axios";
import Icons from "./icons/icons";
import { useHistory } from "react-router";
import { Button, Grid, TextField } from "@material-ui/core";
import actions from "../Redux/Action";
import Calendar from "react-calendar";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const { setCampAmenities, setSpecific } = actions;

function Index(props) {
  var [images, setImages] = useState([]);
  const [checkOutvalue, onChangeCheckOut] = useState(new Date());
  const [checkInvalue, onChangeCheckIn] = useState(new Date());
  const [render, reRender] = useState();
  const history = useHistory();

  const handleCalenderCheckInClick = () => {
    document.getElementById("calenderCheckIn").classList.toggle("active");
  };

  const handleCalenderCheckOutClick = () => {
    document.getElementById("calenderCheckOut").classList.toggle("active");
  };

  useEffect(() => {
    let copy = [...images];
    localStorage.setItem(
      "camp_detail_select_name",
      props.specificCamp?.specificCamp?.camp_name
    );
    props.specificCamp?.specificCamp?.camp_images?.map((item, index) => {
      console.log(item, index, copy);
      copy[index] = { url: item };
      console.log(images);
    });
    setImages(copy);
    console.log(copy, images);
  }, []);

  console.log(props.specificCamp?.specificCamp);

  var dynamicAccomodation;

  try {
    dynamicAccomodation = Object.entries(
      props?.specificCamp?.specificCamp?.accomodations
    );
  } catch {
    let camp_name = localStorage.getItem("camp_detail_select_name");
    console.log(camp_name);
    axios
      .get("/get_a_camp", {
        method: "GET",
        headers: {
          camp_name: camp_name,
        },
      })
      .then((res) => {
        console.log(res);
        props.setSpecific(res.data);
        localStorage.setItem("camp_detail_select_name", props.specificCamp);
        history.push("/specificCamp");
        props.setSpecific(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  console.log(dynamicAccomodation);

  var handleClick = () => {
    let token = localStorage.getItem("auth-token");
    if (props.user.user) {
      axios
        .get("/add_to_wishlist", {
          headers: {
            Authorization: token,
            camp_name: props?.specificCamp?.specificCamp?._id,
          },
        })
        .then((res) => {
          console.log(res);
          toast.info("Added to WishList", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Sign In As User First", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
      return false;
    }
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTrimCheckOutDate);
    console.log(newTrimCheckInDate);
    reRender(0);
    console.log(props?.user?.user?._id);
    console.log(qty);
    let finalObj = qty.map((item, index) => Object.values(item));

    console.log(props?.user?.user);
    console.log(props?.owner?.user);

    var obj = [{}];
    let token = localStorage.getItem("auth-token");
    if (props.user.user) {
      finalObj.map((item, index) => {
        obj.push(new Object());
        obj[index].name = item[0];
        obj[index].qty = item[1];
        obj[index].noOfPeople = item[2];
        obj[index].totalPrice = item[3];
      });
    } else {
      toast.error("Sign In As User First", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: false,
      });
      return false;
    }

    console.log(obj);

    axios
      .post(
        "/booking/create_a_booking",
        {
          a_details: obj,
          c_name: props?.specificCamp?.specificCamp?.camp_name,
        },

        {
          headers: { Authorization: token },
        }
      )
      .then((res) => {
        console.log(res);
        toast.info("Booking Request Sent to Camp Managers", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });
        history.push("/User__Booking__Sent");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div>
      <div class="main1">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner" role="listbox">
            {props?.specificCamp?.specificCamp?.camp_images.map(
              (item, index) => {
                console.log(item);
                if (index == 0) {
                  return (
                    <div class="carousel-item active" key={index}>
                      <div class="view " className={index}>
                        <img class="d-block w-100 " src={item} />
                      </div>
                    </div>
                  );
                } else
                  return (
                    <div class="carousel-item" key={index}>
                      <div class="view " className={index}>
                        <img class="d-block w-100 " src={item} />
                      </div>
                    </div>
                  );
              }
            )}
          </div>

          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

        <section class="camp-about-section" ng-init="Campsite.setIsCamper('')">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-sm-7 col-xs-12">
                <div class="camp-block">
                  <div class="row camp-block-spacing">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <h2>
                        {props?.specificCamp?.specificCamp?.camp_name}
                        <span
                          ng-show="Campsite.campsite.campscout_verified === 1"
                          class="verified-camp verified-camp-single"
                          uib-tooltip="campmonk verified"
                          tooltip-class="ttc-verified"
                          tooltip-placement="right"
                          aria-hidden="false"
                        >
                          <i class="fa fa-check" aria-hidden="true"></i>
                        </span>
                      </h2>
                    </div>
                    <div class="col-md-7 col-sm-12 col-xs-12">
                      <p class="camp-block-address pdb-10">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        {props?.specificCamp?.specificCamp?.camp_location} (
                        {props?.specificCamp?.specificCamp?.camp_state})
                      </p>
                      <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                          <div class="facility-block">
                            {/* <!-- ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities --><!-- ngIf: activity.is_featured --><!-- end ngRepeat: activity in Campsite.campsite.camp_site_activities -->
                                                <!-- ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --><!-- ngIf: amenity.is_featured --><!-- end ngRepeat: amenity in Campsite.campsite.camp_site_amenities --> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="col-md-3 col-sm-8 col-xs-12"
                      ng-show="Campsite.campsite.ratingavg"
                      aria-hidden="false"
                    >
                      <div class="ratings-block">
                        <span class="rt-pt ng-binding">5.0/5</span>,
                        <span class="rating-no ng-binding">6 rating(s)</span>
                        <br />
                        <a id="review_source" href="" class="ng-binding">
                          10 Review(s)
                        </a>
                      </div>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-12">
                      <a
                        ng-class="{'like-bookmark': Campsite.campsite.userwishlist == 1 }"
                        ng-click="Campsite.addCampsiteWishlist()"
                      >
                        <i
                          class="fa fa-heart icon-heart"
                          aria-hidden="true"
                          id="hearts"
                          onClick={handleClick}
                        ></i>{" "}
                        Wishlist
                      </a>
                    </div>
                  </div>
                  <div class="row camp-block-spacing camp-block-info">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                      <p>
                        <strong>Known for: </strong>The view. The wild.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 col-sm-5 col-xs-12 ">
                <form
                  ng-submit="Campsite.bookCampsite()"
                  id="fixedTop"
                  class="ng-pristine ng-valid ng-valid-min ng-valid-max"
                  siq_id="autopick_1842"
                >
                  <div class="camp-booking-block work5 dd" id="book-campsite">
                    <div class="price-block ml-5 ">
                      <h5> Select camping dates</h5>
                    </div>
                    <div class="stay-details">
                      <div
                        class="stay-block"
                        ng-class="{'fullwidth': Campsite.stateParams.verify === 'yes' }"
                      >
                        <p>
                          <strong>Check In</strong>
                        </p>
                        <p class="input-group text-center">
                          <span onClick={handleCalenderCheckInClick}>
                            {newTrimCheckInDate}
                          </span>
                        </p>
                      </div>
                      <div
                        class="stay-block"
                        ng-hide="Campsite.stateParams.verify === 'yes' "
                        aria-hidden="false"
                      >
                        <p>
                          <strong>Check Out</strong>
                        </p>
                        <p class="input-group text-center">
                          <span onClick={handleCalenderCheckOutClick}>
                            {newTrimCheckOutDate}
                          </span>
                        </p>
                      </div>
                    </div>

                    <div class="acc-parent">
                      <div class="acc-child">
                        <Grid
                          container
                          xs={12}
                          justify="space-around"
                          style={{
                            background: "#E2C74C",
                            fontWeight: "bold",
                            padding: 10,
                            color: "black",
                          }}
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
                            <Grid
                              container
                              xs={12}
                              style={{ visibility: "hidden" }}
                            >
                              .
                            </Grid>
                            <Grid
                              container
                              xs={12}
                              justify="space-around"
                              alignItems="center"
                            >
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
                                    if (
                                      e.target.value > item[1].totalCapacity
                                    ) {
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
                                          qty[index]?.qty *
                                          item[1]?.numberOfPeopleAllowed;
                                        obj.totalPrice =
                                          qty[index]?.qty *
                                          item[1]?.pricePerNight;
                                        copy.push(obj);
                                        setQty(copy);
                                      } else {
                                        console.log("yes");
                                        let copy = [...qty];
                                        let obj = {};
                                        obj.name = e.target.name;
                                        obj.qty = e.target.value;
                                        obj.noOfPeople =
                                          qty[index]?.qty *
                                          item[1]?.numberOfPeopleAllowed;
                                        obj.totalPrice =
                                          qty[index]?.qty *
                                          item[1]?.pricePerNight;
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
                                {qty[index]?.qty *
                                  item[1]?.numberOfPeopleAllowed || 0}
                              </Grid>
                              <Grid item xs={2} align="center">
                                Rs.{" "}
                                {qty[index]?.qty * item[1]?.pricePerNight || 0}
                              </Grid>
                            </Grid>
                          </>
                        ))}
                      </div>
                    </div>
                    <div
                      ng-if="!Campsite.apiInprocess"
                      class="ng-scope"
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <div
                        ng-if="!Campsite.loadingCampDetails"
                        class="ng-scope"
                      >
                        <div ng-init="Campsite.campsiteService.is_ib=false">
                          <button
                            type="submit"
                            class="btn book-btn"
                            ng-disabled="Campsite.campsiteService.disableAction"
                            style={{
                              border: "1px solid",
                              borderRadius: "20px",
                              background: "rgb(226, 199, 76)",
                              color: "black",
                            }}
                            onClick={handleSubmit}
                          >
                            Book Camp
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="Sample__container" id="calenderCheckIn">
                {" "}
                <main
                  className="Sample__container__content"
                  style={{ position: "absolute", zIndex: "2" }}
                >
                  <Calendar onChange={onChangeCheckIn} value={checkInvalue} />
                </main>
              </div>
              <div className="Sample__container" id="calenderCheckOut">
                <main
                  className="Sample__container__content"
                  style={{ position: "absolute", zIndex: "2" }}
                >
                  {" "}
                  <Calendar
                    onChange={onChangeCheckOut}
                    value={checkOutvalue}
                  />{" "}
                </main>
              </div>
            </div>
            <div class="row all">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                <div class="camp-desc details-block detail-description">
                  <div class="row work2">
                    <div class="col-sm-3 col-xs-12">
                      <i class="fa fa-file-text-o s123" aria-hidden="true"></i>
                      <h4>Description</h4>
                    </div>
                    <div class="col-sm-9 col-xs-12">
                      <div
                        class="desc-content hide-content"
                        ng-class="{'hide-content': hideMore}"
                      >
                        <Grid item xs={12} align="left">
                          <Grid item xs={12}>
                            <p style={{ fontWeight: "bold" }}>
                              Please read the description carefully for
                              information -
                            </p>
                            <div
                              style={{
                                whiteSpace: "pre-wrap",
                              }}
                              dangerouslySetInnerHTML={{
                                __html: `${props.specificCamp?.specificCamp?.camp_desc}`,
                              }}
                            />
                          </Grid>
                        </Grid>

                        <div
                          ng-if="Campsite.campsite.description.length > 550"
                          class="ng-scope"
                        >
                          <div
                            ng-class="{'content-gradient': hideMore}"
                            class="content-gradient"
                          ></div>
                        </div>
                      </div>
                      <span
                        ng-show="Campsite.campsite.description.length > 250"
                        ng-click="hideMore = !hideMore"
                        href="#"
                        class="more-btn"
                        role="button"
                        tabindex="0"
                        aria-hidden="false"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="camp-details-section">
          <div class="container">
            <div class="row work">
              <div class="col-sm-12 col-xs-12">
                <div class="details-block details-spacing">
                  <div class="row">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                      <h4>Amenities</h4>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <div class="row">
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[0]
                                }
                              />
                              <span
                                trim-str="Drinking water"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[0].replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[1]
                                }
                              />
                              <span
                                trim-str="Charging points"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[1]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[2]
                                }
                              />
                              <span
                                trim-str="Covered Area"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[2]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[3]
                                }
                              />
                              <span
                                trim-str="Campfire"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[3]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[4]
                                }
                              />
                              <span
                                trim-str="Shower"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[4]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[5]
                                }
                              />
                              <span
                                trim-str="Toilet"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[5]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[6]
                                }
                              />
                              <span
                                trim-str="Pets allowed"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[6]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[7]
                                }
                              />
                              <span
                                trim-str="Barbeque grills"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[7]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[8]
                                }
                              />
                              <span
                                trim-str="Meals included"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[8]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[9]
                                }
                              />
                              <span
                                trim-str="Good for Groups"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[9]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[10]
                                }
                              />
                              <span
                                trim-str="Picnic Table"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding strikethrough"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[10]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[11]
                                }
                              />
                              <span
                                trim-str="Breakfast included"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding strikethrough"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[12]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[13]
                                }
                              />
                              <span
                                trim-str="Paid Meals"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding strikethrough"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[14]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[15]
                                }
                              />
                              <span
                                trim-str="Wifi"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding strikethrough"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[16]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="amenity in Campsite.campsite.camp_site_amenities"
                        >
                          <ul class="">
                            <li>
                              <Icons
                                name={
                                  props.specificCamp?.specificCamp
                                    ?.animities?.[17]
                                }
                              />
                              <span
                                trim-str="Dinner included"
                                trim-str-limit="15"
                                ng-class="{'strikethrough': !amenity.checked}"
                                class="ng-binding strikethrough"
                              >
                                {props.specificCamp?.specificCamp?.animities?.[18]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8 col-xs-12">
                <div class="details-block details-spacing">
                  <div class="row work1">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                      <h4 style={{ lineHeight: "28px" }}>Details</h4>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <p class="">
                            <strong>Type of land</strong>
                            <br />
                            <span class="text-capitalize">
                              {props.specificCamp?.specificCamp?.land_type}
                            </span>
                          </p>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <p>
                            <strong>Accessible By</strong>
                            <br />
                            {props.specificCamp?.specificCamp?.accessibility_by}
                          </p>
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <p class="ng-binding">
                            <strong>Check In</strong>
                            <br />
                            {props.specificCamp?.specificCamp?.check_in}
                          </p>
                        </div>
                        <div class="col-md-3 col-sm-4 col-xs-6">
                          <p class="ng-binding">
                            <strong>Check Out</strong>
                            <br />
                            {props.specificCamp?.specificCamp?.check_out}
                          </p>
                        </div>
                        <div class="col-md-6 col-sm-4 col-xs-12">
                          <p>
                            <strong>Cancellation Policy</strong>
                            <br />
                            <span>
                              {
                                props.specificCamp?.specificCamp
                                  ?.cancellation_policy
                              }
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8 col-xs-12">
                <div class="details-block details-spacing">
                  <div class="row work2">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                      <h4>Activities</h4>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <div class="row">
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul>
                            <li ng-if="activity.checked" class="ng-scope">
                              <span class="paid_or_unpaid">
                                <Icons
                                  name={
                                    props.specificCamp?.specificCamp
                                      ?.activities[0]
                                  }
                                />
                                {/* <strong
                                  ng-if="activity.paid_checked"
                                  class="fa fa-inr ng-scope"
                                  aria-hidden="true"
                                >
                                  {" "}
                                </strong>{" "} */}
                              </span>
                              <span
                                trim-str="Climbing"
                                trim-str-limit="15"
                                style={{ paddingLeft: "12px" }}
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.activities[0]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul>
                            <li ng-if="activity.checked" class="ng-scope">
                              <span class="paid_or_unpaid">
                                <Icons
                                  name={
                                    props.specificCamp?.specificCamp
                                      ?.activities[1]
                                  }
                                />
                              </span>
                              <span
                                trim-str="Trekking"
                                trim-str-limit="15"
                                style={{ paddingLeft: "12px" }}
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.activities[1]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul>
                            <li ng-if="activity.checked" class="ng-scope">
                              <span class="paid_or_unpaid">
                                <Icons
                                  name={
                                    props.specificCamp?.specificCamp
                                      ?.activities[2]
                                  }
                                />
                              </span>
                              <span
                                trim-str="Wildlife watching"
                                trim-str-limit="15"
                                style={{ paddingLeft: "12px" }}
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.activities[2]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul>
                            <li ng-if="activity.checked" class="ng-scope">
                              <span class="paid_or_unpaid">
                                <Icons
                                  name={
                                    props.specificCamp?.specificCamp
                                      ?.activities[3]
                                  }
                                />
                              </span>
                              <span
                                trim-str="Swimming"
                                trim-str-limit="15"
                                style={{ paddingLeft: "12px" }}
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.activities[3]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul>
                            <li ng-if="activity.checked" class="ng-scope">
                              <span class="paid_or_unpaid">
                                <Icons
                                  name={
                                    props.specificCamp?.specificCamp
                                      ?.activities[4]
                                  }
                                />
                              </span>
                              <span
                                trim-str="Cycling"
                                trim-str-limit="15"
                                style={{ paddingLeft: "12px" }}
                                class="ng-binding"
                              >
                                {props.specificCamp?.specificCamp?.activities[4]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-6 ng-scope"
                          ng-repeat="activity in Campsite.campsite.camp_site_activities"
                        >
                          <ul></ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-8 col-xs-12">
                <div class="details-block accomodation-detail details-spacing">
                  <div class="row work2">
                    <div class="col-md-3 col-sm-3 col-xs-12">
                      <h4>Accommodation</h4>
                    </div>
                    <div class="col-md-9 col-sm-9 col-xs-12">
                      <div class="row">
                        <div
                          class="col-md-6 col-sm-6 col-xs-12 ng-scope"
                          ng-repeat="accommodation in Campsite.campsite.camp_site_accommodations"
                          ng-if="accommodation.checked"
                        >
                          <ul>
                            <li>
                              <span
                                trim-str="Tent"
                                trim-str-limit="15"
                                class="ng-binding"
                              >
                                <Icons name={dynamicAccomodation?.[0]?.[0]} />
                                {dynamicAccomodation?.[0]?.[0]?.replace(
                                  "_",
                                  " "
                                )}
                              </span>
                              <span
                                ng-if="accommodation.name==='Tent'"
                                class="ng-scope"
                              >
                                {/* <a
                                  href="#"
                                  uib-tooltip="Shared between your friends/family"
                                  tooltip-class="ttc-verified"
                                  tooltip-placement="top"
                                >
                                  <strong
                                    class="fa fa-question-circle"
                                    aria-hidden="true"
                                  ></strong>
                                </a> */}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-12 ng-scope"
                          ng-repeat="accommodation in Campsite.campsite.camp_site_accommodations"
                          ng-if="accommodation.checked"
                        >
                          <ul>
                            <li>
                              <span
                                trim-str="BYOT"
                                trim-str-limit="15"
                                class="ng-binding"
                              >
                                <Icons name={dynamicAccomodation?.[1]?.[0]} />
                                {dynamicAccomodation?.[1]?.[0].replace(
                                  "_",
                                  " "
                                )}
                              </span>
                              <span
                                ng-if="accommodation.name==='BYOT'"
                                class="ng-scope"
                              >
                                {/* <a
                                  href="#"
                                  uib-tooltip="Bring Your Own Tent"
                                  tooltip-class="ttc-verified"
                                  tooltip-placement="top"
                                >
                                  <strong
                                    class="fa fa-question-circle"
                                    aria-hidden="true"
                                  ></strong>
                                </a> */}
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div
                          class="col-md-6 col-sm-6 col-xs-12 ng-scope"
                          ng-repeat="accommodation in Campsite.campsite.camp_site_accommodations"
                          ng-if="accommodation.checked"
                        >
                          <ul>
                            <li>
                              <span
                                trim-str="Farm Cottage"
                                trim-str-limit="15"
                                class="ng-binding"
                              >
                                {dynamicAccomodation?.[2]?.[0].replace(
                                  "_",
                                  " "
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  console.log(state);
  return {
    specificCamp: state.specificCampDetails,
    user: state.user,
    owner: state.owner,
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

// import React, { useEffect, useState } from "react";

// import SimpleImageSlider from "react-simple-image-slider";
// import { connect } from "react-redux";
// import Navbar from "../HomePage/Navbar/index";
// import {
//   TextField,
//   Button,
//   Checkbox,
//   FormControlLabel,
//   Divider,
//   Grid,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
// } from "@material-ui/core";
// import CheckCircleIcon from "@material-ui/icons/CheckCircle";
// import LocationOnIcon from "@material-ui/icons/LocationOn";
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
// import WhatshotIcon from "@material-ui/icons/Whatshot";
// import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
// import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
// import Calendar from "react-calendar";
// import DescriptionIcon from "@material-ui/icons/Description";
// import BatteryChargingFullIcon from "@material-ui/icons/BatteryChargingFull";
// import Footer from "../Admin/Footer/Footer";
// import Map from "../GoogleMap";
// import "./style.css";
// import axios from "../axios";
// import Icons from "./icons/icons";

// const Index = (props) => {
//   var [images, setImages] = useState([]);
//   const [checkOutvalue, onChangeCheckOut] = useState(new Date());
//   const [checkInvalue, onChangeCheckIn] = useState(new Date());
//   const [render, reRender] = useState();

//   const handleCalenderCheckInClick = () => {
//     document.getElementById("calenderCheckIn").classList.toggle("active");
//   };

//   const handleCalenderCheckOutClick = () => {
//     document.getElementById("calenderCheckOut").classList.toggle("active");
//   };

//   useEffect(() => {
//     let copy = [...images];
//     props.specificCamp?.specificCamp?.camp_images?.map((item, index) => {
//       console.log(item, index, copy);
//       copy[index] = { url: item };
//       console.log(images);
//     });
//     setImages(copy);
//     console.log(copy, images);
//   }, []);

//   console.log(props.specificCamp?.specificCamp);

//   var trimCheckInDate = String(checkInvalue);
//   var trimCheckOutDate = String(checkOutvalue);

//   var newTrimCheckInDate = trimCheckInDate.slice(4, 15);
//   var newTrimCheckOutDate = trimCheckOutDate.slice(4, 15);

//   var [qty, setQty] = useState([]);
//   var [pricePerCamp, setPricePerCamp] = useState(2275);
//   var [noOfPeople, setNoOfPeople] = useState(0);
//   var [totalPrice, setTotalPrice] = useState(0);

//   console.log(trimCheckInDate);
//   console.log(trimCheckOutDate);

//   const dynamicAccomodation = Object.entries(
//     props?.specificCamp?.specificCamp?.accomodations
//   );
//   console.log(dynamicAccomodation);

//   const handleSubmit = () => {
//     console.log(newTrimCheckOutDate);
//     console.log(newTrimCheckInDate);
//     reRender(0);
//     console.log(props?.user?.user?._id);
//     console.log(qty);
//     let finalObj = qty.map((item, index) => Object.values(item));

//     console.log(finalObj);
//     var obj = [{ finalTotal: 0 }];
//     finalObj.map((item, index) => {
//       obj.push(new Object());
//       obj[index].name = item[0];
//       obj[index].qty = item[1];
//       obj[index].noOfPeople = item[2];
//       obj[index].totalPrice = item[3];
//     });
//     console.log(obj);

//     axios
//       .post("/demo", obj)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

//   return (
//     <div>
//       <Navbar />
//       <Grid container>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         {images[0] ? (
//           <Grid container>
//             <SimpleImageSlider
//               style={{ margin: "auto" }}
//               width={896}
//               height={504}
//               images={images}
//               showBullets={true}
//               showNavs={true}
//               useGPURender={true}
//             />
//           </Grid>
//         ) : null}
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         <Grid
//           container
//           xs={12}
//           align="center"
//           style={{ background: "#f7f7f7" }}
//         >
//           <Grid item xs={1} sm={2} md={3}></Grid>
//           <Grid item xs={4}>
//             <CheckCircleIcon color="primary" />
//             <span style={{ fontSize: 24 }}>
//               {props.specificCamp?.specificCamp?.camp_name} (
//               {props.specificCamp?.specificCamp?.camp_state})
//             </span>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>{" "}
//           <Grid item xs={1} sm={2} md={3}></Grid>
//           <Grid item xs={4}>
//             <LocationOnIcon color="primary" />
//             <span>{props.specificCamp?.specificCamp?.camp_location}</span>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid item xs={1} sm={2} md={3}></Grid>
//           <Grid container xs={4} style={{ marginLeft: "7vw" }}>
//             <Grid>
//               <Grid item xs={12} align="center">
//                 <DirectionsBikeIcon fontSize="large" />
//               </Grid>
//               <Grid item xs={12}>
//                 <span>Trekking</span>
//               </Grid>
//             </Grid>
//             <Grid xs={1}></Grid>
//             <Grid>
//               <Grid item xs={12} align="center">
//                 <WhatshotIcon fontSize="large" />
//               </Grid>
//               <Grid item xs={12}>
//                 <span>CampFire</span>
//               </Grid>
//             </Grid>
//             <Grid xs={1}></Grid>
//             <Grid>
//               <Grid item xs={12} align="center">
//                 <LocalDrinkIcon fontSize="large" />
//               </Grid>
//               <Grid item xs={12}>
//                 <span>Drink</span>
//               </Grid>
//             </Grid>
//             <Grid xs={1}></Grid>
//             <Grid>
//               <Grid item xs={12} align="center">
//                 <FreeBreakfastIcon fontSize="large" />
//               </Grid>
//               <Grid item xs={12}>
//                 <span>BreakFast</span>
//               </Grid>
//             </Grid>
//             <Grid xs={1}></Grid>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid
//           container
//           xs={12}
//           align="center"
//           style={{ background: "#f7f7f7" }}
//         >
//           <Grid container xs={7}>
//             <Grid item xs={3}></Grid>
//             <Grid item xs={3} align="center">
//               <Grid>
//                 <Grid item xs={12}>
//                   <DescriptionIcon fontSize="large" />
//                 </Grid>
//                 <Grid item xs={12}>
//                   <span> Description</span>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid item xs={5} align="center">
//               <Grid item xs={12}>
//                 <p style={{ fontWeight: "bold", fontSize: "24px" }}>
//                   Please read the description carefully for information -
//                 </p>
//                 {props.specificCamp?.specificCamp?.camp_desc}
//               </Grid>
//             </Grid>
//           </Grid>{" "}
//           <Grid container xs={3}>
//             <Grid container>
//               <Grid
//                 align="center"
//                 xs={12}
//                 style={{ padding: 8, background: "#E2C74C" }}
//               >
//                 <span style={{ fontSize: 24 }}>Select camping dates</span>
//               </Grid>
//               <Grid container>
//                 <Grid item xs={5} align="center" style={{ marginTop: "2vh" }}>
//                   <p style={{ fontWeight: "bold" }}>check In</p>
//                   <span onClick={handleCalenderCheckInClick}>
//                     {newTrimCheckInDate}
//                   </span>
//                 </Grid>
//                 <Grid xs={1}></Grid>
//                 <Divider orientation="vertical" flexItem />
//                 <Grid item xs={5} align="center" style={{ marginTop: "2vh" }}>
//                   <p style={{ fontWeight: "bold" }}>check Out</p>
//                   <span onClick={handleCalenderCheckOutClick}>
//                     {newTrimCheckOutDate}
//                   </span>
//                   <Grid container xs={12} style={{ visibility: "hidden" }}>
//                     .
//                   </Grid>
//                 </Grid>
//               </Grid>
//             </Grid>
//             <Grid
//               container
//               xs={12}
//               justify="space-around"
//               style={{ background: "#E2C74C", fontWeight: "bold", padding: 10 }}
//             >
//               <Grid item xs={2} align="center">
//                 Type
//               </Grid>
//               <Grid item xs={2} align="center">
//                 Price per camper(s)
//               </Grid>
//               <Grid item xs={2} align="center">
//                 Qty
//               </Grid>
//               <Grid item xs={2} align="center">
//                 No of people
//               </Grid>
//               <Grid item xs={2} align="center">
//                 Total price
//               </Grid>
//             </Grid>

//             {dynamicAccomodation?.map((item, index) => (
//               <>
//                 <Grid container xs={12} style={{ visibility: "hidden" }}>
//                   .
//                 </Grid>
//                 <Grid container xs={12} justify="space-around">
//                   <Grid item xs={2} align="center">
//                     {item[0]}
//                   </Grid>
//                   <Grid item xs={2} align="center">
//                     {` ${item[1].pricePerNight}/${item[1].numberOfPeopleAllowed}`}
//                   </Grid>
//                   <Grid item xs={2} align="center">
//                     <TextField
//                       id={`outlined-number ${index}`}
//                       type="number"
//                       defaultValue="0"
//                       InputLabelProps={{
//                         shrink: true,
//                       }}
//                       onChange={(e) => {
//                         console.log(item);
//                         console.log(qty);
//                         if (e.target.value > item[1].totalCapacity) {
//                           console.log("yes");
//                           e.target.value = item[1].totalCapacity;
//                           return false;
//                         } else if (e.target.value < 0) {
//                           console.log("yes");
//                           e.target.value = 0;
//                           return false;
//                         } else {
//                           if (qty[index] === undefined) {
//                             console.log("yes");
//                             let copy = [...qty];
//                             let obj = {};
//                             obj.name = e.target.name;
//                             obj.qty = e.target.value;
//                             obj.noOfPeople =
//                               qty[index]?.qty * item[1]?.numberOfPeopleAllowed;
//                             obj.totalPrice =
//                               qty[index]?.qty * item[1]?.pricePerNight;
//                             copy.push(obj);
//                             setQty(copy);
//                           } else {
//                             console.log("yes");
//                             let copy = [...qty];
//                             let obj = {};
//                             obj.name = e.target.name;
//                             obj.qty = e.target.value;
//                             obj.noOfPeople =
//                               qty[index]?.qty * item[1]?.numberOfPeopleAllowed;
//                             obj.totalPrice =
//                               qty[index]?.qty * item[1]?.pricePerNight;
//                             copy[index] = obj;
//                             setQty(copy);
//                           }
//                         }
//                       }}
//                       name={item[0]}
//                       variant="outlined"
//                     />
//                   </Grid>
//                   <Grid item xs={2} align="center">
//                     {qty[index]?.qty * item[1]?.numberOfPeopleAllowed}
//                   </Grid>
//                   <Grid item xs={2} align="center">
//                     Rs. {qty[index]?.qty * item[1]?.pricePerNight}
//                   </Grid>
//                 </Grid>
//               </>
//             ))}
//             <Grid container xs={12} style={{ visibility: "hidden" }}>
//               .
//             </Grid>
//             <Grid item xs={3}></Grid>
//             <Grid item xs={6} align="center">
//               <Button
//                 style={{ width: "100%" }}
//                 variant="contained"
//                 color="primary"
//                 onClick={handleSubmit}
//               >
//                 Book Camp
//               </Button>
//             </Grid>
//             <Grid item xs={2}></Grid>
//           </Grid>
//           <div className="Sample__container" id="calenderCheckIn">
//             <main
//               className="Sample__container__content"
//               style={{ position: "absolute" }}
//             >
//               <Calendar onChange={onChangeCheckIn} value={checkInvalue} />
//             </main>
//           </div>
//           <div className="Sample__container" id="calenderCheckOut">
//             <main
//               className="Sample__container__content"
//               style={{ position: "absolute" }}
//             >
//               <Calendar onChange={onChangeCheckOut} value={checkOutvalue} />
//             </main>
//           </div>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid container xs={12} style={{ background: "#f7f7f7" }}>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>{" "}
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid container style={{ background: "#f7f7f7" }}>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid
//               item
//               xs={3}
//               align="center"
//               style={{ fontWeight: "bold", fontSize: 20 }}
//             >
//               Aminities
//             </Grid>
//             <Grid container>
//               {props.specificCamp?.specificCamp?.animities?.map(
//                 (item, index) => (
//                   <>
//                     <Grid item xs={6}></Grid>
//                     <Grid item xs={3} align="center">
//                       <Icons name={item} /> {item}
//                     </Grid>
//                     <Grid container xs={12} style={{ visibility: "hidden" }}>
//                       .
//                     </Grid>
//                   </>
//                 )
//               )}
//             </Grid>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid
//               item
//               xs={3}
//               align="center"
//               style={{ fontWeight: "bold" }}
//             ></Grid>
//             <Grid container xs={12} style={{ visibility: "hidden" }}>
//               .
//             </Grid>{" "}
//             <Grid container xs={12} style={{ visibility: "hidden" }}>
//               .
//             </Grid>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>{" "}
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Divider style={{ color: "black", width: "80vw" }} />
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid container style={{ background: "#f7f7f7" }}>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid
//               item
//               xs={3}
//               align="center"
//               style={{ fontWeight: "bold", fontSize: 20 }}
//             >
//               Details
//             </Grid>
//             <Grid item xs={3} align="center" style={{ fontWeight: "bold" }}>
//               Types of land
//             </Grid>
//             <Grid item xs={3} align="center" style={{ fontWeight: "bold" }}>
//               Accessible By
//             </Grid>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid item xs={3}></Grid>
//             <Grid item xs={3} align="center">
//               {props.specificCamp?.specificCamp?.land_type}
//             </Grid>
//             <Grid item xs={3} align="center">
//               {props.specificCamp?.specificCamp?.accessibility_by}
//             </Grid>
//             <Grid container xs={12} style={{ visibility: "hidden" }}>
//               .
//             </Grid>
//             <Grid container xs={12} style={{ visibility: "hidden" }}>
//               .
//             </Grid>
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Divider style={{ color: "black", width: "80vw" }} />
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid container style={{ background: "#f7f7f7" }}>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid
//               item
//               xs={3}
//               align="center"
//               style={{ fontWeight: "bold", fontSize: 20 }}
//             >
//               Activities
//             </Grid>
//             {props.specificCamp?.specificCamp?.activities.map((item, index) => (
//               <>
//                 <Grid item xs={3} align="center">
//                   <Icons name={item} /> {item}
//                 </Grid>
//                 <Grid container xs={12} style={{ visibility: "hidden" }}>
//                   .
//                 </Grid>
//                 <Grid item xs={6}></Grid>
//               </>
//             ))}
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>

//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Divider style={{ color: "black", width: "80vw" }} />
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>{" "}
//         <Grid container style={{ background: "#f7f7f7" }}>
//           <Grid container xs={7} style={{ fontSize: 20 }}>
//             <Grid item xs={3}></Grid>
//             <Grid
//               item
//               xs={3}
//               align="center"
//               style={{ fontWeight: "bold", fontSize: 20 }}
//             >
//               Accomodation
//             </Grid>
//             {dynamicAccomodation.map((item, index) => (
//               <>
//                 <Grid item xs={3} align="center">
//                   <Icons name={item[0]} /> {item[0]}
//                 </Grid>
//                 <Grid container xs={12} style={{ visibility: "hidden" }}>
//                   .
//                 </Grid>
//                 <Grid item xs={6}></Grid>
//               </>
//             ))}
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>

//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Divider style={{ color: "black", width: "80vw" }} />
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//           <Grid container xs={12} style={{ visibility: "hidden" }}>
//             .
//           </Grid>
//         </Grid>
//         <Grid container xs={12} align="center">
//           <Grid item xs={12} align="center">
//             <Map />
//           </Grid>
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>{" "}
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//       </Grid>{" "}
//       <Footer />
//     </div>
//   );
// };

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     specificCamp: state.specificCampDetails,
//     user: state.user,
//   };
// }

// export default connect(mapStateToProps)(Index);
