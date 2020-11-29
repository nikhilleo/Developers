import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Form.css";
import axios from "../../axios";

function Index() {
  const history = useHistory();
  const handleClicks = () => {
    // var blur = document.getElementById("select__user__blur");
    // blur.classList.toggle("select__user__active");
    // var popup = document.getElementById("select__owner__popup");
    // popup.classList.toggle("select__user__active");
    history.push("/");
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
      document
        .getElementById("select__user__container")
        .classList.add("select__user__right-panel-active");
    } else if (type === "signIn") {
      document
        .getElementById("select__user__container")
        .classList.remove("select__user__right-panel-active");
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
      await axios
        .post("/signup", input)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
      <div id="Camp__Owner__popup">
        <form className="select__user__form">
          <div class="select__user__container" id="select__user__container">
            <div class="select__user__form-container select__user__sign-up-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                }}
                className="select__user__span"
                onClick={handleClicks}
              >
                X
              </span>
              <form className="select__user__form" action="#">
                <h1 className="select__user__h1">Create Account</h1>
                <div class="select__user__social-container">
                  <a
                    className="select__user__a"
                    href="#"
                    class="select__user__social"
                  >
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a
                    className="select__user__a"
                    href="#"
                    class="select__user__social"
                  >
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a
                    className="select__user__a"
                    href="#"
                    class="select__user__social"
                  >
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="select__user__span">
                  or use your email for registration
                </span>
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="First Name"
                  name="firstname"
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Last Name"
                  name="lastname"
                />
                <input
                  className="select__user__input"
                  type="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  name="email"
                />
                <input
                  className="select__user__input"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                  name="password"
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  name="mobile"
                />
                <input
                  className="select__user__input"
                  type="text"
                  onChange={handleChange}
                  placeholder="Address"
                  name="address"
                />
                <button
                  className="select__admin__button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signUp")}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <div class="select__user__form-container select__user__sign-in-container">
              <span
                style={{
                  fontSize: 20,
                  fontWeight: "bolder",
                  position: "relative",
                  top: 8,
                  cursor: "pointer",
                }}
                className="select__user__span"
                onClick={handleClicks}
              >
                X
              </span>
              <form className="select__user__form" action="#">
                <h1 className="select__user__h1">Sign in</h1>
                <div class="select__user__social-container">
                  <a className="select__user__a select__user__social" href="#">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a className="select__user__a select__user__social" href="#">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                  <a className="select__user__a select__user__social" href="#">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                </div>
                <span className="select__user__span">or use your account</span>
                <input
                  className="select__user__input"
                  name="eMail"
                  type="email"
                  onChange={handleChange}
                  placeholder="Email"
                />
                <input
                  className="select__user__input"
                  name="Password"
                  type="password"
                  onChange={handleChange}
                  placeholder="Password"
                />
                <a className="select__user__a" href="#">
                  Forgot your password?
                </a>
                <button
                  className="select__admin__button"
                  type="submit"
                  onClick={(e) => handleFormSubmit(e, "signIn")}
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="select__user__overlay-container">
              <div class="select__admin__overlay">
                <div class="select__user__overlay-panel select__user__overlay-left">
                  <h1 className="select__user__h1">Welcome Back!</h1>
                  <p className="select__user__p">
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    class="select__user__button select__user__ghost"
                    id="select__user__signIn"
                    onClick={(e) => {
                      handleClick(e, "signIn");
                    }}
                  >
                    Sign In
                  </button>
                </div>
                <div class="select__user__overlay-panel select__user__overlay-right">
                  <h1 className="select__user__h1">Hello, Friend!</h1>
                  <p className="select__user__p">
                    Enter your personal details and start journey with us
                  </p>
                  <button
                    class="select__user__button select__user__ghost"
                    id="select__user__signUp"
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
