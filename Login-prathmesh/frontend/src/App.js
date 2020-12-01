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
import { connect } from "react-redux";
import actions from "./Redux/Action";
import AdminNavbar from "./Admin/Navbar/Navbar";
import UserBooking from "./HomePage/UserBooking/";
import UserCampSites from "./HomePage/UserCampSites";
import UserNavbar from "./HomePage/UserNavbar";
import Footer from "./Admin/Footer/Footer";
import Booking__Admin from "./Admin/Home/Booking";
import Delete__Camp__Admin from "./Admin/Home/DeleteCamp";
import Account__Setting__Admin from "./Admin/Home/Account_setting";
import Form from "./Admin/Form/Form";
import VerifyOtp from "./Admin/Form/VerifyOtp";
import axios from "./axios";
import UserSetting from "./HomePage/UserSetting";
import OwnerAccountSettings from "./Owner/OwnerAccountSettings";
import OwnerInteresteUser from "./Owner/OwnerIntrestedUser";
import OwnerNavbar from "./Owner/OwnerNavbar";
import OwnerOrganizedCamps from "./Owner/OwnerOrganizedCamps";
import Practice from "./Practice";

const { setUser, setOwner, setAdmin } = actions;

const App = (props) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      let type;
      let token = localStorage.getItem("auth-token");
      if (token) {
        console.log("executed user");
        let tokenRes = await axios.get("/auth", {
          headers: { Authorization: token },
        });

        if (tokenRes.data === "") {
          console.log("executed woner");
          tokenRes = await axios.get("/owner/auth", {
            headers: { Authorization: token },
          });
          type = "owner";
        }

        if (tokenRes.data === "") {
          console.log("executed admin");
          tokenRes = await axios.get("/admin/auth", {
            headers: { Authorization: token },
          });
          type = "admin";
        }
        console.log(type, "token", tokenRes);
        if (type === undefined) {
          await props.setUser(tokenRes.data);
        }
        if (type === "owner") {
          await props.setOwner(tokenRes.data);
        }
        if (type === "admin") {
          await props.setAdmin(tokenRes.data);
        }
      }
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                console.log(props);
                return <Redirect to="/User__Booking" />;
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route exact path="/practice">
            <Practice />
          </Route>
          <Route
            exact
            path="/User__Account__settings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserNavbar />
                    <UserSetting />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/User__Booking"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserNavbar />
                    <UserBooking />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/User__Camp__Sites"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <UserNavbar />
                    <UserCampSites />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Account__settings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerNavbar />
                    <OwnerAccountSettings />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Intrested__User"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerNavbar />
                    <OwnerInteresteUser />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Created__Camps"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerNavbar />
                    <OwnerOrganizedCamps />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <AdminNavbar />
                    <Booking__Admin />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Delete__Admin__camp"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <AdminNavbar />
                    <Delete__Camp__Admin />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Admin__Account__settings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <AdminNavbar />
                    <Account__Setting__Admin />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route exact path="/CampOwner">
            <CampOwner />
          </Route>
          <Route exact path="/CampUser">
            <CampUser />
          </Route>
          <Route exact path="/Verifying">
            <VerifyOtp />
          </Route>
          <Route exact path="/admin">
            <Form />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

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
    setOwner: (data) => {
      dispatch(setOwner(data));
    },
    setAdmin: (data) => {
      dispatch(setAdmin(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
