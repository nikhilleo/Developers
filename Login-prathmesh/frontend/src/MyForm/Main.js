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
        <form method="POST" action="http://localhost:8080/signup">
          <div className="root__form">
            <p>*FIRST NAME</p>
            <input name="firstname" type="text" />
            <p id="last__p">*LAST NAME</p>
            <input name="lastname" id="last__input" type="text" />
            <p className="sub__para">*E-MAIL</p>
            <input type="text" name="email" className="sub__inputs" />
            <p>*PASSWORD</p>
            <input type="text" name="password" className="third__inputs" />
            <p>*CONFIRM PASSWORD</p>
            <input type="text" className="third__inputs" />
            <p>*ADDRESS</p>
            <input type="text" name="address" className="third__inputs" />
            <p>*MOBILE NUMBER</p>
            <input type="text" name="mobile" className="third__inputs" />
            <button type="submit">REGISTER</button>
            <Link to="/login__main">
              <p id="already">ALREADY HAVE AN ACCOUNT?</p>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Main;
