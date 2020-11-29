import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import SelectUser from "./SelectUser/";
import CampOwner from "./SelectUser/CampOwner";
import CampUser from "./SelectUser/CampUser";
import Home from "./HomePage";
import { connect } from "react-redux";
import actions from "./Redux/Action";
import Navbar from "./Admin/Navbar/Navbar";
import Footer from "./Admin/Footer/Footer";
import Booking__Admin from "./Admin/Home/Booking";
import Delete__Camp__Admin from "./Admin/Home/DeleteCamp";
import Account__Setting__Admin from "./Admin/Home/Account_setting";
import Form from "./Admin/Form/Form";

const { setUser } = actions;

function App(props) {
  console.log(props.user);
  console.log(props.user);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <SelectUser />
          </Route>
          <Route exact path="/CampOwner">
            <CampOwner />
          </Route>
          <Route exact path="/CampUser">
            <CampUser />
          </Route>
          <Route exact path="/admin">
            <Form />
          </Route>
          <Route exact path="/Booking">
            <Navbar />
            <Booking__Admin />
            <Footer />
          </Route>
          <Route exact path="/Delete__camp">
            <Navbar />
            <Delete__Camp__Admin />
          </Route>
          <Route exact path="/Account__settings">
            <Navbar />
            <Account__Setting__Admin />
          </Route>
          <Route
            exact
            path="/loggedInUser"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                console.log(props);
                return <Home />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
        </Switch>
      </Router>
    </>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
    admin: state.admin,
    owner: state.owner,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUser: (data) => {
      dispatch(setUser(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
