import React from "react";
import { Link, useHistory } from "react-router-dom";
import actions from "../Redux/Action";
import { connect } from "react-redux";

const { clearCurrentUser, clearUser } = actions;

function Navbar(props) {
  const history = useHistory();

  const handleClick = () => {
    props.clearUser();
    props.clearCurrentUser();
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light"
        style={{ padding: "2vh" }}
      >
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mr-2">
              <a class="nav-link " href="#">
                Blog <span class="sr-only">(current)</span>
              </a>
            </li>

            <li class="nav-item active mr-2 ">
              <Link to="/CampUserForm1" class="nav-link">
                Create Camp
              </Link>
            </li>

            <li class="nav-item active mr-5">
              <Link to="/Owner__Bookings/BookingPending" class="nav-link">
                Dashboard
              </Link>
            </li>
            <li class="nav-item dropdown mr-5  active">
              <a
                class="nav-link dropdown mr-5"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {props?.user?.user?.firstname}
              </a>
              <div
                class="dropdown-menu  "
                style={{ marginRight: 10 }}
                aria-labelledby="navbarDropdownMenuLink"
              >
                <span
                  class="dropdown-item  "
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  Logout
                </span>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.user);
  return {
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearCurrentUser: () => {
      dispatch(clearCurrentUser());
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
