import React from "react";
import "./Login.css";
import image1 from "../Assests/image1.jpg";
import { Link } from "react-router-dom";

function login() {
  return (
    <>
      <div className="root">
        <div className="root__img">
          <img src={image1} />
        </div>
        <div className="root__form">
          <p className="sub__para p">*E-MAIL</p>
          <input type="text" className="sub__inputs" />
          <p className="p">*PASSWORD</p>
          <input type="text" className="third__inputs" />
          <button>REGISTER</button>
          <Link to="/">
            <p id="alread">REGISTER?</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default login;
