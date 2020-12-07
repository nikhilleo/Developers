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
import UserBooking from "./User/UserBooking/";
import UserCampSites from "./User/UserCampSites";
import UserNavbar from "./User/UserNavbar";
import Footer from "./Admin/Footer/Footer";
import Booking__Admin from "./Admin/Home/Dashboard/Booking/Pending";
import Active__Camps from "./Admin/Home/Dashboard/DeleteCamps/ActiveCamps";
import Deleted__Camps from "./Admin/Home/Dashboard/DeleteCamps/DeletedCamps";
import Account__Setting__Admin from "./Admin/Home/Dashboard/AccountSetting";
import Form from "./Admin/Form/Form";
import VerifyOtp from "./Admin/Form/VerifyOtp";
import axios from "./axios";
import UserSetting from "./User/UserSetting";
import OwnerAccountSettings from "./Owner/OwnerAccountSettings/OwnerAccount";
import OwnerBankDetails from "./Owner/OwnerAccountSettings/OwnerBankDetails";
import OwnerPaymentPending from "./Owner/OwnerBookings/PaymentPending";
import OwnerBookingPending from "./Owner/OwnerBookings/BookingPending";
import OwnerApproved from "./Owner/OwnerBookings/Approved";
import OwnerEarning from "./Owner/OwnerEarning/TotalEarning";
import OwnerPaymentHistory from "./Owner/OwnerEarning/PaymentHistory";
import CampUserForm1 from "./CampListForm/CampUserForm1";
import CampUserForm2 from "./CampListForm/CampUserForm2";
import CampUserForm3 from "./CampListForm/CampUserForm3";
import CampUserForm4 from "./CampListForm/campUserForm4";
import CampUserForm5 from "./CampListForm/CampUserForm5";
import Maps from "./GoogleMap";
import HomePage from "./HomePage";
import SpecificCamp from "./SpecificCampDetail";
import Pending from "./Admin/Home/Dashboard/Booking/Pending";
import Accepted from "./Admin/Home/Dashboard/Booking/Accepted";
import Rejected from "./Admin/Home/Dashboard/Booking/Rejected";
import Icons from "./SpecificCampDetail/icons/icons";
import AdminHeader from "./Header/admin";
import UserHeader from "./Header/user";
import OwnerHeader from "./Header/owner";
import HomeNavbar from "./Header/home";

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
          <Route
            exact
            path="/"
            render={() => {
              if (props?.owner?.user) {
                return (
                  <>
                    <OwnerHeader />
                    <HomePage />
                  </>
                );
              } else if (props?.user?.user) {
                return (
                  <>
                    <UserHeader />
                    <HomePage />
                  </>
                );
              } else if (props?.admin?.user) {
                return (
                  <>
                    <AdminHeader />
                    <HomePage />
                  </>
                );
              } else {
                return (
                  <>
                    <HomeNavbar />
                    <HomePage />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/CampUserForm1"
            render={() => {
              if (props?.owner?.user) {
                return <CampUserForm1 />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route exact path="/icons" component={Icons} />
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
            path="/Owner__Bookings/Account__Settings"
            render={() => {
              return (
                <>
                  <OwnerAccountSettings />
                </>
              );
            }}
          />

          <Route
            exact
            path="/Owner__Bookings/Bank__Details"
            render={() => {
              return (
                <>
                  <OwnerBankDetails />
                </>
              );
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/PaymentPending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerPaymentPending />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/BookingPending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerBookingPending />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/Approved"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerApproved />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/Total__Earnings"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerEarning />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Owner__Bookings/Payment__History"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <OwnerPaymentHistory />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Pending"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Pending />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Accepted"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Accepted />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Admin__Booking/Rejected"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Rejected />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Delete__Admin__camp/Active__Camps"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Active__Camps />
                  </>
                );
              } else {
                return <SelectUser />;
              }
            }}
          />
          <Route
            exact
            path="/Delete__Admin__camp/Deleted__Camps"
            render={() => {
              if (props.user.user || props.owner.user || props.admin.user) {
                return (
                  <>
                    <Deleted__Camps />
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
