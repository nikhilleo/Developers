import React, { useState } from "react";
import "./style.css";
import { connect } from "react-redux";
import axios from "../../axios";

function Index(props) {
  const [input, setInput] = useState({
    firstname: "",
    password: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    axios
      .put("/update_profile", input, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const deleteAccount = () => {
    let token = localStorage.getItem("auth-token");
    axios
      .delete("/delete_user", {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  var [change, setChange] = useState("");
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
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };
  return (
    <div className="Account__setting">
      <div className="sub__setting" id="blur">
        <h1>Account Setting</h1>
        <br />
        <label>First Name</label>
        <br />
        <input
          value={props.user.firstname}
          name="firstname"
          onChange={handleChange}
          value={props.user.firstname}
        />
        <button onClick={(e) => handleClick(e, "firstname")}>change</button>
        <br />
        <label>Last Name</label>
        <br />
        <input
          value={props.user.lastname}
          name="lastname"
          onChange={handleChange}
          value={props.user.lastname}
        />
        <button onClick={(e) => handleClick(e, "lastname")}>change</button>
        <br />
        <label>Email</label>
        <br />
        <input
          value={props.user.email}
          name="email"
          onChange={handleChange}
          value={props.user.email}
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
          value={props.user.mobile}
          name="mobile"
          onChange={handleChange}
          value={props.user.mobile}
        />
        <button onClick={(e) => handleClick(e, "mobile")}>change</button>
        <br />
        <label>Address</label>
        <br />
        <input
          value={props.user.address}
          name="address"
          onChange={handleChange}
          value={props.user.address}
        />
        <button onClick={(e) => handleClick(e, "address")}>change</button>
        <br />
        <button id="delete" onClick={deleteAccount}>
          Delete My Account
        </button>
      </div>
      <div className="selected__input" id="popup">
        {change ? (
          <>
            <form onSubmit={handleSubmit}>
              <span onClick={handleClick}>X </span>
              <label>enter new {change}</label>
              <br />
              <input
                value={input.firstname}
                type="text"
                name="firstname"
                onChange={handleChange}
              />
              <br />
              <label>enter your password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
              />
              <br />
              <button type="submit">update</button>
            </form>
          </>
        ) : (
          <>
            <form onSubmit={handleSubmit}>
              <span onClick={handleClick}>X </span>
              <label>enter your old Password </label>
              <br />
              <input
                type="password"
                name="oldPassword"
                onChange={handleChange}
                value={input.oldPassword}
              />
              <br />
              <label>enter new Password</label>
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
              />
              <br />
              <label>confirm the password</label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={input.confirmPassword}
              />
              <br />

              <button type="submit">change password</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(Index);
