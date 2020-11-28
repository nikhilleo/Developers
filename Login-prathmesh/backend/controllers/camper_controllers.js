

const Camp_User = require("../models/camper");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findByIdAndRemove } = require("../models/camper");
const e = require("express");

exports.signup = async (req, res) => {
  try {
      const newUser = await new Camp_User(req.body);
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
    const user = await Camp_User.findByCredentials(eMail,passWord);
    const token = await user.genAuthToken();
    res.status(200).json({ Message: "Login Successfully", token });
  } catch (error) {
    res.send(error.message);
  }
};

exports.auth = async (req, res) => {
  res.send(req.profile);
};


exports.update = async (req,res)=>{
  try {
  const user = req.profile;
  if(user)
  {
    console.log("FrOM UPDATE",user)
    const u =  await Camp_User.findById({_id:user._id});//finding and updating
    await u.updateOne(req.body);
    await u.save();
    const updated = await Camp_User.findById({_id:user.id});//finding Updated User
    const token = await updated.genAuthToken();
    res.json({updated,token});
  }
  else{
    throw new Error("No User Found");
  }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
}

exports.updatePassword = async(req,res)=>{
  try {
    const user = req.profile;
    if(user)
    {
      const newPassword = req.body.password;
      console.log(user.password);
      const u =  await Camp_User.findOneAndUpdate({_id:user._id},req.body);
      const updated = await Camp_User.findById({_id:user.id});
      await updated.save();
      res.send(updated);
    }
    else{
      throw new Error("No User Found");
    }
  }
   catch (error) {
    res.send(error.message);
  }
}


exports.delete_user = async(req,res)=>{
  try {
    const user = req.profile;
    if(user)
    {
      const del_user = await Camp_User.findByIdAndRemove({_id:user._id});
      console.log(del_user);
      res.json({
        message:"user deleted"
      })
    }
    else{
      res.send("No User Found")
    }
  } catch (error) {
    res.send(error.message);
  }
}

exports.find_specific_user = async function(req,res){
  try {
    const user = req.profile;
    if(user){
      res.send(user);
    }
    else{
      res.send({
        message:'user not exits'
      })
    }
  } catch (error) {
    res.send(error.message);
  }
}