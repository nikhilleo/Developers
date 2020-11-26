

const Camp_User = require("../models/camper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
      const newUser = await new Camp_User(req.body);
      const gentoken = await newUser.genAuthToken();
      console.log("gentoken", gentoken);
      res.status(201).json({
        message: "User Created",
        user: newUser,
        token: gentoken,
      });
    }
  catch (error) {
    res.status(500).send(error.message);
  }
};

exports.login = async (req, res) => {
  try {
    let eMail = req.body.email;
    let passWord = req.body.password;
    const user = await Camp_User.findByCredentials(eMail,passWord);
    const token = await user.genAuthToken();
    res.status(200).json({ Message: "Login Successfully", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.auth = async (req, res) => {
  res.send(req.profile);
};
