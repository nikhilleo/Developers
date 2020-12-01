import React, { useState } from "react";
import "./Verfiy.css";
import axios from "../../axios";
import { connect } from "react-redux";
import actions from "../../Redux/Action";
import { useHistory } from "react-router";

const { setAdmin } = actions;

function VerifyOtp(props) {
  const history = useHistory();
  var [otp, setOtp] = useState();
  console.log(props.admin);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(otp);
    axios
      .post("/admin/verify", {
        email: props.admin.user.email,
        password: props.admin.user.password,
        otp_id: props.admin.user.otp_id,
        otp: otp,
      })
      .then((res) => {
        console.log(res);
        props.setAdmin(res.data.user);
        history.push("/Admin__Booking");
      })
      .catch((err) => {
        console.log("cata", err.response);
      });
  };

  const handleChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <div id="form__verify">
      <form type="submit" className="verfiy__form" onSubmit={handleSubmit}>
        <h1 className="verify__form__h1">Veification Code</h1>
        <label className="verify__form__label">
          Please type the verification code sent to +918454875487
        </label>
        <span>
          <input onChange={handleChange} name="otp" type="text" />
        </span>
        <button>submit</button>
        <button>Resend OTP</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    admin: state.admin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAdmin: (data) => {
      dispatch(setAdmin(data));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtp);
