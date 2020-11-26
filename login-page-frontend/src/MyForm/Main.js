import React from "react";
import "./Main.css";

function Main() {
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

  return (
    <div>
      <div class="container" id="container">
        <div class="form-container sign-up-container">
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
            <input type="text" placeholder="First Name" name="firstname" />
            <input type="text" placeholder="Last Name" name="lastname" />
            <input type="email" placeholder="E-mail" name="email" />
            <input type="password" placeholder="Password" name="password" />
            <input type="text" placeholder="Mobile Number" name="mobile" />
            <input type="password" placeholder="Address" name="address" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
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
            <input name="email" type="email" placeholder="Email" />
            <input name="password" type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button
              onClick={(e) => {
                handleClick(e);
              }}
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
                To keep connected with us please login with your personal info
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
    </div>
  );
}

export default Main;
