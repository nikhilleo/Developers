const axios = require("axios");
require("dotenv").config();
const Admin = require("../models/admin");

exports.admin_2fa = async (req, res, next) => {
  try {
    let eMail = req.body.email;
    let passWord = req.body.password;
    const admin_user = await Admin.findByCredentials(eMail, passWord);
    if (!admin_user) {
      throw new Error("No User Found");
    }
    const options = {
      method: "POST",
      url: "https://d7-verify.p.rapidapi.com/send",
      headers: {
        "content-type": process.env.content_type || application / json,
        authorization: process.env.authorization,
        "x-rapidapi-key": process.env.x_rapidapi_key,
        "x-rapidapi-host": process.env.x_rapidapi_host,
      },
      data: {
        expiry: 900,
        message: "Your otp code is {code}",
        mobile: req.body.mobile,
        sender_id: "LAMP_A_CAMP",
      },
    };
    var data = {};
    data = await sendOTP(options, next, res);
    console.log("IN REQ", data.data);
    res.send(data.data);
  } catch (error) {
    if (error.message == "No User Found") {
      res.status(404).send("No User Found");
    }
  }
};

async function sendOTP(options, next, res) {
  try {
    data = await axios.request(options);
    if (data) {
      return data;
    }
  } catch (error) {
    res.send(error.message);
  }
}

exports.admin_2fa_verify = async (req, res, next) => {
  const options = {
    method: "POST",
    url: "https://d7-verify.p.rapidapi.com/verify",
    headers: {
      "content-type": process.env.content_type || application / json,
      authorization: process.env.authorization,
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": process.env.x_rapidapi_host,
    },
    data: {
      otp_code: req.body.otp,
      otp_id: req.body.otp_id,
    },
  };
  var data = {};
  data = await verify_otp(options, next, res);
  console.log(data.data);
  if (data.data.status == "success") {
    console.log("IN REQ", data.data.status);
    // res.send(data.data);
    next();
  } else if (data.data.status == "failed") {
    res.status(409).send(data.data.error);
  }
};

async function verify_otp(options, next, res) {
  try {
    data = await axios.request(options);
    return data;
  } catch (error) {
    res.send(error.message);
  }
}

exports.admin_2fa_resendOTP = async (req, res, next) => {
  const options = {
    method: "POST",
    url: "https://d7-verify.p.rapidapi.com/resend",
    headers: {
      "content-type": process.env.content_type || application / json,
      authorization: process.env.authorization,
      "x-rapidapi-key": process.env.x_rapidapi_key,
      "x-rapidapi-host": process.env.x_rapidapi_host,
    },
    data: {
      otp_id: req.body.otp_id,
    },
  };
  var data = {};
  data = await resendOTP(options, next, res);
  console.log("IN REQ", data.data);
  res.send(data.data);
};

async function resendOTP(options, next, res) {
  try {
    data = await axios.request(options);
    console.log(data);
    return data;
  } catch (error) {
    res.send(error.message);
  }
}
