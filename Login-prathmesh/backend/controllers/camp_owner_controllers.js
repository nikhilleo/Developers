const Camp_Owner = require("../models/camp_owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
      const newUser = await new Camp_Owner(req.body);
      const gentoken = await newUser.genAuthToken();
      console.log("gentoken", gentoken);
      await newUser.save();
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
    const user = await Camp_Owner.findByCredentials(eMail,passWord);
    const token = await user.genAuthToken();
    res.status(200).json({ Message: "Login Successfully", token });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.auth = async (req, res) => {
  res.send(req.profile);
};


exports.updateuser = async (req, res) =>{
  try {
    const user = await Camp_Owner.findByIdAndUpdate(req.body);
    await user.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
}