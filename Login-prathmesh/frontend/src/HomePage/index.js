import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import backImg1 from "../Assets/40041066-travel-landmark.jpg";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import actions from "../Redux/Action";
import Footer from "../Admin/Footer/Footer";
import Navbar from "../Header/user";
import "./style.css";
import axios from "../axios";
import ImageCombo from "./ImageCombo";
import SlideImage from "./SlideImage";

const { setCampAmenities, setSpecific } = actions;

function Index(props) {
  const history = useHistory();
  var [recentCamps, setRecentCamps] = useState([]);
  var [trendingCamps, setTrendingCamps] = useState([]);
  useEffect(() => {
    axios
      .get("/get_recent_camps")
      .then((res) => {
        console.log(res);
        setRecentCamps(res.data);
      })
      .catch((err) => {
        {
          console.log(err.response);
        }
      });
    axios
      .get("/get_trending_camps")
      .then((res) => {
        console.log(res);
        setTrendingCamps(res.data);
      })
      .catch((err) => {
        {
          console.log(err.response);
        }
      });
  }, []);
  console.log(trendingCamps);
  console.log(recentCamps);
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

  return (
    <div className="main">
      <div
        id="carousel-example-2"
        class="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-2" data-slide-to="1"></li>
          <li data-target="#carousel-example-2" data-slide-to="2"></li>
          <li data-target="#carousel-example-2" data-slide-to="3"></li>
          <li data-target="#carousel-example-2" data-slide-to="4"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <div class="view">
              <img
                class="d-block w-100"
                src={trendingCamps[1]?.camp_images[0]}
                alt="First slide"
              />
              <div class="mask rgba-black-light"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                {trendingCamps[1]?.interesting_name}
              </h3>
              <p>{trendingCamps[1]?.camp_name}</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src={trendingCamps[2]?.camp_images[0]}
                alt="Second slide"
              />
              <div class="mask rgba-black-strong"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                {" "}
                {trendingCamps[2]?.interesting_name}
              </h3>
              <p> {trendingCamps[2]?.camp_name}</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src={trendingCamps[3]?.camp_images[0]}
                alt="Third slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                {" "}
                {trendingCamps[3]?.interesting_name}
              </h3>
              <p>{trendingCamps[3]?.camp_name}</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="view">
              <img
                class="d-block w-100"
                src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Fourth slide"
              />
              <div class="mask rgba-black-slight"></div>
            </div>
            <div class="carousel-caption">
              <h3 class="h3-responsive">
                {" "}
                {trendingCamps[4]?.interesting_name}
              </h3>
              <p>{trendingCamps[4]?.camp_name}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <h1
                  style={{
                    marginLeft: "41vw",
                    fontSize: "48px",
                    marginBottom: "4vh",
                    color: "#e3e0f9",
                  }}
                >
                  Popular Camps
                </h1>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[0]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              {recentCamps[0]?.camp_name}
                            </h4>
                            <p class="card-text" style={{}}>
                              {recentCamps[0]?.camp_desc}
                            </p>
                            <button
                              type="button"
                              onClick={(e) =>
                                handleClick(recentCamps[0]?.camp_name)
                              }
                              class="btn btn-warning"
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[1]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              {" "}
                              {recentCamps[1]?.camp_name}
                            </h4>
                            <p class="card-text" style={{}}>
                              {recentCamps[1]?.camp_desc}
                            </p>
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={(e) =>
                                handleClick(recentCamps[1]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src={recentCamps[2]?.camp_images[0]}
                            class="card-img-top photos"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              {" "}
                              {recentCamps[2]?.camp_name}
                            </h4>
                            <p class="card-text" style={{}}>
                              {recentCamps[2]?.camp_desc}
                            </p>
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={(e) =>
                                handleClick(recentCamps[2]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button
                              type="button"
                              class="btn btn-warning"
                              onClick={(e) =>
                                handleClick(recentCamps[3]?.camp_name)
                              }
                            >
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam" class="carousel-control-prev " data-slide="prev">
                <span class="carousel-control-prev-icon mr-5"></span>
              </a>
              <a href="#inam" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon ml-5 "></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam2" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <h1
                  style={{
                    marginLeft: "41vw",
                    fontSize: "48px",
                    marginBottom: "4vh",
                    color: "#e3e0f9",
                  }}
                >
                  Popular Camps
                </h1>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">chennai camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">chennai camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">chennai camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam2" class="carousel-control-prev " data-slide="prev">
                <span class="carousel-control-prev-icon mr-5"></span>
              </a>
              <a href="#inam2" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon ml-5 "></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mt-5">
        <div class="row">
          <div class="col-sm-12">
            <div id="inam2" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <h1
                  style={{
                    marginLeft: "41vw",
                    fontSize: "48px",
                    marginBottom: "4vh",
                    color: "#e3e0f9",
                  }}
                >
                  Popular Camps
                </h1>
                <div class="carousel-item active">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">mumbai camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">delhi camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card">
                          <img
                            src="https://images.unsplash.com/photo-1529385101576-4e03aae38ffc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzF8fGNhbXBpbmd8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">chennai camp</h4>
                            <p class="card-text" style={{}}>
                              Mumbai is the best city,Mumbai is the best
                              city,Mumbai is Mumbai is the best city,Mumbai is
                              the best city,Mumbai is Mumbai is the best
                              city,Mumbai is the best city,Mumbai is Mumbai is
                              the best city,Mumbai is the best city,Mumbai is
                              Mumbai is the best city
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="container">
                    <div class="row">
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-12 col-lg-4">
                        <div class="card ">
                          <img
                            src="https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FtcGluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            class="card-img-top"
                          />
                          <div class="card-body">
                            <h4 class="card-title">
                              “Life is better by the camp fire”
                            </h4>
                            <p class="card-text">
                              Camping is an outdoor activity involving overnight
                              stays away from home in a shelter, such as a tent
                              or a recreational vehicle.
                            </p>
                            <button type="button" class="btn btn-warning">
                              Read More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#inam2" class="carousel-control-prev " data-slide="prev">
                <span class="carousel-control-prev-icon mr-5"></span>
              </a>
              <a href="#inam2" class="carousel-control-next" data-slide="next">
                <span class="carousel-control-next-icon ml-5 "></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <footer>
          <Footer />
        </footer>
      </div>
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

// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";

// import backImg1 from "../Assets/40041066-travel-landmark.jpg";
// import { Link, useHistory } from "react-router-dom";
// import { Button, Grid } from "@material-ui/core";
// import actions from "../Redux/Action";
// import Footer from "../Admin/Footer/Footer";
// import Navbar from "./Navbar";
// import "./style.css";
// import axios from "../axios";

// const { setCampAmenities, setSpecific } = actions;

// function Index(props) {
//   const history = useHistory();
//   var [campDetails, setCampDetails] = useState([]);
//   useEffect(() => {
//     axios
//       .get("/admin/get_pending_camps")
//       .then((res) => {
//         setCampDetails(res.data);
//       })
//       .catch((err) => {
//         {
//           console.log(err);
//           console.log(err);
//         }
//       });
//   }, []);

//   const handleClick = async (campName) => {
//     console.log(campName);
//     let camp_name = campName;
//     let token = localStorage.getItem("auth-token");

//     axios
//       .get("/get_a_camp", {
//         method: "GET",
//         headers: {
//           Authorization: token,
//           camp_name: campName,
//         },
//       })
//       .then((res) => {
//         console.log(res);
//         props.setSpecific(res.data);
//         history.push("/specificCamp");
//       })
//       .catch((err) => {
//         console.log(err.response);
//       });
//   };

//   console.log(campDetails);
//   return (
//     <div>
//       <Grid container>
//         <Grid item xs={2}></Grid>
//         <Grid item xs={10}>
//           <img src={backImg1} />
//         </Grid>
//       </Grid>
//       <Grid container>
//         <Grid container>
//           <Grid item xs={2}></Grid>
//           <Grid item sm={3} xs={12}>
//             <h1 style={{ fontFamily: "sans-serif" }}>Recent Camps</h1>
//           </Grid>
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         <Grid container>
//           <Grid item xs={2}></Grid>
//           {campDetails.map((item, key) => (
//             <>
//               <Grid container xs={1}>
//                 <img src={item.camp_images[0]} className="photos" />
//                 <Grid container xs={12} style={{ visibility: "hidden" }}>
//                   .
//                 </Grid>
//                 <Grid item sm={11} xs={10}>
//                   <p
//                     style={{
//                       overflow: "hidden",
//                       whiteSpace: "no-wrap",
//                       textOverflow: "ellipsis",
//                       fontWeight: "bolder",
//                     }}
//                   >
//                     {item.camp_name}
//                   </p>
//                 </Grid>
//                 <Grid item sm={1} xs={10}>
//                   <Button
//                     onClick={() => handleClick(item.camp_name)}
//                     variant="contained"
//                     color="secondary"
//                   >
//                     Details
//                   </Button>
//                 </Grid>
//                 <Grid item sm={11} xs={10}>
//                   <p
//                     style={{
//                       overflow: "hidden",
//                       whiteSpace: "no-wrap",
//                       textOverflow: "ellipsis",
//                     }}
//                   >
//                     {item.camp_location}
//                   </p>
//                 </Grid>
//               </Grid>
//               <Grid item xs={1}></Grid>
//             </>
//           ))}
//         </Grid>
//       </Grid>
//       <Grid container xs={12} style={{ visibility: "hidden" }}>
//         .
//       </Grid>
//       <Grid container>
//         <Grid item xs={2}></Grid>
//         <Grid item sm={3} xs={12}>
//           <h1 style={{ fontFamily: "sans-serif" }}>POPULAR LOCATIONS</h1>
//         </Grid>
//       </Grid>
//       <Grid container>
//         <Grid container>
//           <Grid item xs={2}></Grid>
//           <Grid item sm={2} xs={10}>
//             <img
//               className="photos"
//               src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             ></img>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <img
//               className="photos"
//               src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             ></img>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <img
//               className="photos"
//               src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             ></img>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <img
//               className="photos"
//               src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
//             ></img>
//           </Grid>
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         <Grid container>
//           <Grid item xs={2}></Grid>
//           <Grid item sm={1} xs={10}>
//             <p style={{ fontWeight: "bolder" }}>Camp name</p>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <Button variant="contained" color="secondary">
//               Details
//             </Button>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <p style={{ fontWeight: "bolder" }}>Camp name</p>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <Button variant="contained" color="secondary">
//               Details
//             </Button>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <p style={{ fontWeight: "bolder" }}>Camp name</p>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <Button variant="contained" color="secondary">
//               Details
//             </Button>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <p style={{ fontWeight: "bolder" }}>Camp name</p>
//           </Grid>
//           <Grid item sm={1} xs={10}>
//             <Button variant="contained" color="secondary">
//               Details
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid container>
//           <Grid item xs={2}></Grid>
//           <Grid item sm={2} xs={10}>
//             <p style={{ fontSize: 13 }}>Camp Lcation</p>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <p style={{ fontSize: 13 }}>Camp Location</p>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <p style={{ fontSize: 13 }}>Camp Location</p>
//           </Grid>
//           <Grid item sm={2} xs={10}>
//             <p style={{ fontSize: 13 }}>Camp Location</p>
//           </Grid>
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//         <Grid container xs={12} style={{ visibility: "hidden" }}>
//           .
//         </Grid>
//       </Grid>
//       <footer>
//         <Footer />
//       </footer>
//     </div>
//   );
// }

// function mapStateToProps(state) {
//   return {
//     campAmenities: state.campAmenities,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     setCampAmenities: (data) => {
//       dispatch(setCampAmenities(data));
//     },
//     setSpecific: (data) => {
//       dispatch(setSpecific(data));
//     },
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Index);
