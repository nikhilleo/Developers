import { Container } from "@material-ui/core";
import React from "react";
import "./Main.css";
import image1 from "../Assests/image1.jpg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div className="root">
        <div className="root__img">
          <img src={image1} />
        </div>
        <div className="root__form">
          <p>*FIRST NAME</p>
          <input type="text" />
          <p id="last__p">*LAST NAME</p>
          <input id="last__input" type="text" />
          <p className="sub__para">*E-MAIL</p>
          <input type="text" className="sub__inputs" />
          <p>*PASSWORD</p>
          <input type="text" className="third__inputs" />
          <p>*CONFIRM PASSWORD</p>
          <input type="text" className="third__inputs" />
          <p>*ADDRESS</p>
          <input type="text" className="third__inputs" />
          <p>*MOBILE NUMBER</p>
          <input type="text" className="third__inputs" />
          <button>REGISTER</button>
          <Link to="/login__main">
            <p id="already">ALREADY HAVE AN ACCOUNT?</p>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Main;
