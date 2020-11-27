import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css";
import axios from "../axios";

function Index() {
  const handleClicks = () => {
    var blur = document.getElementById("blur");
    blur.classList.toggle("active");
    var popup = document.getElementById("popup");
    popup.classList.toggle("active");
  };

  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    address: "",
    mobile: "",
    eMail: "",
    Password: "",
  });

  const handleClick = (e, type) => {
    e.preventDefault();
    if (type === "signUp") {
      document.getElementById("container").classList.add("right-panel-active");
    } else if (type === "signIn") {
      document
        .getElementById("container")
        .classList.remove("right-panel-active");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e, type) => {
    e.preventDefault();
    if (type === "signUp") {
      await axios.post("/signup", input);
    }
    if (type === "signIn") {
      let { eMail, Password } = input;
      let res = await axios.post("/login", {
        email: eMail,
        password: Password,
      });
      console.log(res);
    }
    setInput({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      address: "",
      mobile: "",
    });
  };
  return (
    <div>
      <div class="button_container" id="blur">
        <div class="select__container">
          <h1 className="description">Sign In As</h1>
          <div className="liquid"></div>
          <br />
          <br />
          <br />
          <br />
          <button id="client" class="btn" onClick={handleClicks}>
            <span id="s1">Camp Visitor</span>
          </button>
          <br />
          <br />
          <button id="owner" class="btn" onClick={handleClicks}>
            <span id="s2">Camp Owner</span>
          </button>
        </div>
      </div>

      <div id="popup">
        <form>
          <div class="container" id="container">
            <div class="form-container sign-up-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                }}
                onClick={handleClicks}
              >
                X
              </span>
              <form action="#">
                <h1>Create Account</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="First Name"
                  name="firstname"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Last Name"
                  name="lastname"
                />
                <input
                  type="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  name="email"
                />
                <input
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  name="mobile"
                />
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Address"
                  name="address"
                />
                <button
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signUp")}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                }}
                onClick={handleClicks}
              >
                X
              </span>
              <form action="#">
                <h1>Sign in</h1>
                <div class="social-container">
                  <a href="#" class="social">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" class="social">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input
                  name="eMail"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  name="Password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <a href="#">Forgot your password?</a>
                <button
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signIn")}
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    class="ghost"
                    id="signIn"
                    onClick={(e) => {
                      handleClick(e, "signIn");
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    class="ghost"
                    id="signUp"
                    onClick={(e) => {
                      handleClick(e, "signUp");
                    }}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Index;
