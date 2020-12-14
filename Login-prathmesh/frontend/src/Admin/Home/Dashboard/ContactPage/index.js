import React, { useEffect, useState } from "react";
import "../../../style.css";
import { connect } from "react-redux";
import actions from "../../../../Redux/Action";
import axios from "../../../../axios";
import Navbar from "../../../../Header/admin";
import { Link } from "react-router-dom";
import AdminNavbar from "../../../Navbar/Navbar";
import { Divider, Grid } from "@material-ui/core";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const { clearUser, clearOwner, clearAdmin } = actions;

function Index(props) {
  const [input, setInput] = useState();
  const [confirm, setConfirm] = useState();
  var [change, setChange] = useState("");
  var [client, setClient] = useState();

  useEffect(() => {
    if (props.admin.user) {
      setClient(() => ({ type: "admin", user: props.admin.user }));
    } else if (props.user.user) {
      setClient(() => ({ type: "user", user: props.user.user }));
    } else if (props.owner.user) {
      setClient(() => ({ type: "owner", user: props.owner.user }));
    }
  }, []);

  const handleClick = (e, type) => {
    if (type === "password") {
      setChange(undefined);
    } else {
      setChange(type);
    }
    setInput({
      newDetail: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
    });
    var blur = document.getElementById("Account__setting__blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("Account__setting__popup");
    popup.classList.toggle("active");

    if (type == "delete") {
      var blur = document.getElementById("Account__setting__blur");
      blur.classList.toggle("active");
      var popup__delete = document.getElementById("confirm__delete__popup");
      popup__delete.classList.toggle("active__delete");
    }
  };
  const handleSubmit = (e, type) => {
    e.preventDefault();
    if (client.type == "user") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/update_profile", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
    if (client.type == "owner") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/owner/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
    if (client.type == "admin") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/admin/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          toast.info(`${change} updated`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
          });
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          toast.error(`Something Went Wrong`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false,
          });
        });
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();

    if (client.type == "user") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/update_password", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfullt`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
    if (client.type == "owner") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/owner/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfullt`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
    if (client.type == "admin") {
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/admin/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            toast.info(`Password Changed Successfullt`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 2000,
            });
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            toast.error(`Something Went Wrong`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: false,
            });
          });
      } else {
        toast.error(`Password didn't match`, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false,
        });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      [change]: value,
    });
  };

  const handlePasswordChange = (e, type) => {
    e.preventDefault();
    const { value } = e.target;

    if (type == 1) {
      setInput(value);
    }
    if (type == 2) {
      setConfirm(value);
    }
  };

  const deleteAccount = () => {
    if (client.type == "user") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/delete_user", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
    if (client.type == "owner") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/owner/updateuser", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
    if (client.type == "admin") {
      let token = localStorage.getItem("auth-token");
      axios
        .delete("/admin/updateuser", {
          headers: { Authorization: token },
        })
        .then((res) => {
          props.clearAdmin();
          props.clearOwner();
          props.clearUser();
        })
        .catch((err) => {});
    }
  };

  const handleDeleteClick = () => {
    var blur = document.getElementById("Account__setting__blur");
    blur.classList.toggle("active");
    var popup__delete = document.getElementById("confirm__delete__popup");
    popup__delete.classList.toggle("active__delete");
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          background:
            "url(https://images7.alphacoders.com/101/thumb-1920-1011523.jpg)",
          height: "auto",
          minHeight: "136vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div className="ownerMAinBody">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="navbar__container__home">
              <div className="navbar__menu__home">
                <li className="navbar__li">
                  <Link
                    to="/Admin__Booking/Pending"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">BOOKING</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Delete__Admin__camp/Active__Camps"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">Delete Camps</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link
                    to="/Admin__Account__settings"
                    style={{ textDecoration: "none" }}
                  >
                    <span className="subHeader">ACCOUNT</span>
                  </Link>
                </li>
                <li className="navbar__li">
                  <Link to="/Messages" style={{ textDecoration: "none" }}>
                    <span className="mainHeader">MESSAGES</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container xs={12} align="center">
          <Grid item xs={12}>
            <p
              style={{
                fontSize: "23px",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              User Messages
            </p>
          </Grid>
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>
        <Grid container style={{ visibility: "hidden" }}>
          .
        </Grid>{" "}
        <Divider style={{ color: "black" }} />
        <Grid container xs={12} style={{ visibility: "hidden" }}>
          .
        </Grid>
        <div
          className="message__admin"
          style={{
            background: "transparent",
            height: "auto",
            minHeight: "36rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            className="messages__sub__div"
            style={{
              background: "linear-gradient(45deg, black, transparent)",
              minHeight: "36rem",
              width: "30%",
              color: "white",
              fontWeight: "bolder",
              justifyContent: "center",
              align: "center",
              borderRadius: "20px",
            }}
          >
            <span
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span> Email:</span>
              <span> prathmeshKulkarni98882@gmail.com </span>
              <br />
              <span> Message:</span>
              <span> You are best in the world admin. </span>
              <Divider col />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    owner: state.owner,
    admin: state.admin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clearOwner: () => {
      dispatch(clearOwner());
    },
    clearAdmin: () => {
      dispatch(clearAdmin());
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
