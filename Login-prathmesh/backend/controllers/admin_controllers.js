const Admin = require("../models/admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Camp_Owner = require("../models/camp_owner");

exports.signup = async (req, res) => {
  try {
      const newUser = await new Admin(req.body);
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
    const user = await Admin.findByCredentials(eMail,passWord);
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
    const u =  await Admin.findById({_id:user._id});//finding and updating
    await u.updateOne(req.body);
    await u.save();
    const updated = await Admin.findById({_id:user.id});//finding Updated User
    const token = await updated.genAuthToken();
    res.json({updated,token}); 
  }
  else
  {
    throw new Error("No user Found");
  }
  } catch (error) {
    res.send(error.message);
  }
}

exports.updatePassword = async(req,res)=>{
  try {
    const user = req.profile;
    if(user)
    {
      const newPassword = req.body.password;
      console.log(user.password);
      const u =  await Admin.findOneAndUpdate({_id:user._id},req.body);//finding and updating
      const updated = await Admin.findById({_id:user.id});//finding Updated User
      await updated.save();
      res.send(updated);
    }
    else
    {
      throw new Error("No user found")
    }
  }
   catch (error) {
    res.send(error.message);
  }
}

exports.getallcamp_owners = async function(req, res){
    try {
        const users = await Camp_Owner.find({});
        res.send(users);        
    } catch (error) {
        res.send(error.message);
    }
}

exports.delete_camp_owner = async function(req, res){
    try {
        const _id = req.body._id;
        const deleted = await Camp_Owner.findByIdAndRemove(_id);
        deleted.save();
        res.json({
            message:"camp owner deleted"
        })
    } catch (error) {
        res.send(error.message);
    }
}