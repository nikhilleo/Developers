import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "./index.css";
import SelectUser from "./SelectUser/";
import CampOwner from "./SelectUser/CampOwner";
import CampUser from "./SelectUser/CampUser";
import { connect } from "react-redux";
import actions from "./Redux/Action";
import AdminNavbar from "./Admin/Navbar/Navbar";
import UserBooking from "./User/UserBooking/";
import UserCampSites from "./User/UserCampSites";
import UserNavbar from "./User/UserNavbar";
import Footer from "./Admin/Footer/Footer";
import Booking__Admin from "./Admin/Home/Booking";
import Delete__Camp__Admin from "./Admin/Home/DeleteCamp";
import Account__Setting__Admin from "./Admin/Home/Account_setting";
import Form from "./Admin/Form/Form";
import VerifyOtp from "./Admin/Form/VerifyOtp";
import axios from "./axios";
import UserSetting from "./User/UserSetting";
import OwnerAccountSettings from "./Owner/OwnerAccountSettings";
import OwnerInteresteUser from "./Owner/OwnerIntrestedUser";
import OwnerNavbar from "./Owner/OwnerNavbar";
import OwnerOrganizedCamps from "./Owner/OwnerOrganizedCamps";
import CampUserForm1 from "./CampListForm/CampUserForm1";
import CampUserForm2 from "./CampListForm/CampUserForm2";
import CampUserForm3 from "./CampListForm/CampUserForm3";
import CampUserForm4 from "./CampListForm/campUserForm4";
import CampUserForm5 from "./CampListForm/CampUserForm5";
import Maps from "./GoogleMap";
import HomePage from "./HomePage";
import SpecificCamp from "./SpecificCampDetail";
import UserNavbarHome from "./HomePage/Navbar/userNavbar";
import Navbar from "./HomePage/Navbar/";

const { setUser, setOwner, setAdmin } = actions;

const App = (props) => {
  useEffect(() => {
    const checkLoggedIn = async () => {
      let type;
      let token = localStorage.getItem("auth-token");
      if (token) {
        let tokenRes = await axios.get("/auth", {
          headers: { Authorization: token },
        });
        console.log(tokenRes);

        if (tokenRes.data === "jwt expired") {
          localStorage.clear();
        }

        try {
          tokenRes = await axios.get("/auth", {
            headers: { Authorization: token },
          });
          type = "user";
        } catch {
          return null;
        }
        if (tokenRes.data === "") {
          tokenRes = await axios.get("/owner/auth", {
            headers: { Authorization: token },
          });
          type = "owner";
        } else if (tokenRes.data === "") {
          tokenRes = await axios.get("/admin/auth", {
            headers: { Authorization: token },
          });
          type = "admin";
        }

        console.log(type);
        console.log(type);
        if (type === "user") {
          await props.setUser(tokenRes.data);
        }
        if (type === "owner") {
          await props.setOwner(tokenRes.data);
        }
        if (type === "admin") {
          await props.setAdmin(tokenRes.data);
        }
      }
      console.log(props.user);
      console.log(props.owner);
    };
    checkLoggedIn();
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/CampUserForm1"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return <CampUserForm1 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route exact path="/SpecificCamp" component={SpecificCamp} />
          <Route
            exact
            path="/CampUserForm2"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return <CampUserForm2 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm3"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return <CampUserForm3 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm4"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return <CampUserForm4 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm5"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return <CampUserForm5 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
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
          <Route exact path="/maps">
            <Maps />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

function mapStateToProps(state) {
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
