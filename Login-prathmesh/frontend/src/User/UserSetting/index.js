import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../../Header/owner";
import axios from "../../axios";
import "./style.css";

const { clearUser, clearOwner, clearAdmin } = actions;

function Index(props) {
  const [input, setInput] = useState();
  const [confirm, setConfirm] = useState();
  var [change, setChange] = useState("");
  var [client, setClient] = useState();

  const history = useHistory();

  useEffect(() => {
    if (props.admin.user) {
      setClient(() => ({ type: "admin", user: props.admin.user }));
    } else if (props.user.user) {
      setClient(() => ({ type: "user", user: props.user.user }));
    } else if (props.owner.user) {
      setClient(() => ({ type: "owner", user: props.owner.user }));
    }
  }, []);

  console.log(client);

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
          alert(`${change} updated`);
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    }
    if (client.type == "owner") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/owner/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          console.log(res);
          alert(`${change} updated`);
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    }
    if (client.type == "admin") {
      let token = localStorage.getItem("auth-token");

      axios
        .put("/admin/updateuser", input, {
          headers: { Authorization: token },
        })
        .then((res) => {
          console.log(res);
          alert(`${change} updated`);
          setChange("");
          setInput("");
          handleClick("e", "close__update__form");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    }
  };

  console.log(client);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    console.log(client);
    if (client.type == "user") {
      console.log(input, confirm);
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/update_password", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            alert("password changed successfully");
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            alert("something went wrong");
          });
      } else {
        alert(`password didn't match`);
      }
    }
    if (client.type == "owner") {
      console.log(input, confirm);
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/owner/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            alert("password changed successfully");
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            alert("something went wrong");
          });
      } else {
        alert(`password didn't match`);
      }
    }
    if (client.type == "admin") {
      console.log(input, confirm);
      if (input === confirm) {
        let pass = { password: input };
        let token = localStorage.getItem("auth-token");
        axios
          .put("/admin/updatepassword", pass, {
            headers: { Authorization: token },
          })
          .then((res) => {
            alert("password changed successfully");
            setChange("");
            setInput("");
            handleClick("e", "close__update__form");
          })
          .catch((err) => {
            alert("something went wrong");
          });
      } else {
        alert(`password didn't match`);
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
    console.log(value);
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
        .catch((err) => {
          console.log(err);
        });
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
        .catch((err) => {
          console.log(err);
        });
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
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleDeleteClick = () => {
    var blur = document.getElementById("Account__setting__blur");
    blur.classList.toggle("active");
    var popup__delete = document.getElementById("confirm__delete__popup");
    popup__delete.classList.toggle("active__delete");
  };

  const handleLogOut = () => {
    localStorage.setItem("auth-token", "");
    props.clearAdmin();
    props.clearOwner();
    props.clearUser();
    history.push("/");
  };

  return (
    <div>
      <Navbar />
      <div className="ownerMAinBody">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="navbar__container__home">
            <div className="navbar__menu__home">
              <li className="navbar__li">
                <Link
                  to="/User__Booking__Sent"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "transparent",
                      borderRadius: "34px",
                    }}
                  >
                    BOOKING
                  </button>
                </Link>
              </li>
              <li className="navbar__li">
                <Link to="/User__Wishlist" style={{ textDecoration: "none" }}>
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "transparent",
                      borderRadius: "34px",
                    }}
                  >
                    WishList
                  </button>
                </Link>
              </li>
              <li className="navbar__li">
                <Link
                  to="/User__Account__settings"
                  style={{ textDecoration: "none" }}
                >
                  <button
                    className="navbar__span"
                    style={{
                      height: "8vh",
                      width: "12vw",
                      background: "#e43655",
                      borderRadius: "34px",
                    }}
                  >
                    ACCOUNT SETTING
                  </button>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="Account__setting">
        <div className="sub__setting" id="Account__setting__blur">
          <span style={{ fontSize: 20, fontWeight: "bolder" }}>
            Account Setting
          </span>
          <button id="logout" onClick={handleLogOut}>
            logout
          </button>

          <br />
          <label>First Name</label>
          <br />
          <input
            value={client?.user?.firstname}
            name="firstname"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e, "firstname")}>change</button>
          <br />
          <label>Last Name</label>
          <br />
          <input
            value={client?.user?.lastname}
            name="lastname"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e, "lastname")}>change</button>
          <br />
          <label>Email</label>
          <br />
          <input
            value={client?.user?.email}
            name="email"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e, "email")}>change</button>
          <br />
          <label>Password</label>
          <br />
          <input type="password" value={"password"} />
          <button onClick={(e) => handleClick(e, "password")}>change</button>
          <br />
          <label>Mobile no</label>
          <br />
          <input
            value={client?.user?.mobile}
            name="mobile"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e, "mobile")}>change</button>
          <br />
          <label>Address</label>
          <br />
          <input
            value={client?.user?.address}
            name="address"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick(e, "address")}>change</button>
          <br />
          <button id="delete" onClick={handleDeleteClick}>
            Delete My Account
          </button>
        </div>
        <div className="selected__input" id="Account__setting__popup">
          {change ? (
            <>
              <form className="selected__input__form" onSubmit={handleSubmit}>
                <span
                  onClick={(e) => {
                    handleClick(e, "close__update__form");
                  }}
                  style={{ fontWeight: "bolder", fontSize: "20px" }}
                >
                  X{" "}
                </span>
                <label>enter new {change}</label>
                <br />
                <input
                  value={input.firstname}
                  type="text"
                  name="firstname"
                  onChange={handleChange}
                />
                <br />
                <br />
                <button className="selected__input__form__button" type="submit">
                  update
                </button>
              </form>
            </>
          ) : (
            <>
              <form
                className="selected__input__form"
                onSubmit={handlePasswordSubmit}
              >
                <span onClick={handleClick}>X </span>

                <br />
                <label>enter new Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => {
                    handlePasswordChange(e, 1);
                  }}
                  // value={input.password}
                />
                <br />
                <label>confirm the password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  onChange={(e) => {
                    handlePasswordChange(e, 2);
                  }}
                  // value={input.confirmPassword}
                />
                <br />

                <button className="selected__input__form__button" type="submit">
                  change password
                </button>
              </form>
            </>
          )}
        </div>
        <div className="confirm__delete" id="confirm__delete__popup">
          <span onClick={handleDeleteClick}>X </span>
          <h1>CONFIRM DELETE ACCOUNT</h1>
          <br />
          <label>This will erase all your data from our server, Confirm?</label>
          <button
            className="selected__input__form__button"
            onClick={deleteAccount}
            type="submit"
          >
            delete
          </button>
        </div>
      </div>
    </div>
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
