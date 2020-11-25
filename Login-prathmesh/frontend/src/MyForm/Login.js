import React from "react";
import "./Login.css";
import image1 from "../Assests/image1.jpg";
import { Link } from "react-router-dom";
import Axios from "axios";

function login() {
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   let email = event.target[0].value;
  //   let password = event.target[1].value;
  //   try {
  //     const loginUser = { email, password };
  //     const loginRes = await Axios.post(
  //       "http://localhost:8080/login",
  //       loginUser
  //     );
  //     localStorage.setItem("auth-token", loginRes.data.token);
  //     console.log(loginRes);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <>
      <div className="root">
        <div className="root__img">
          <img src={image1} />
        </div>
        <form method="POST" action="http://localhost:8080/login">
          <div className="root__form">
            <p className="sub__para p">*E-MAIL</p>
            <input name="email" type="text" className="sub__inputs" />
            <p className="p">*PASSWORD</p>
            <input name="password" type="text" className="third__inputs" />
            <button type="submit">LOGIN</button>
            <Link to="/">
              <p id="alread">REGISTER?</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default login;
