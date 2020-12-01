const Camp_Owner = require("../models/camp_owner");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("validator")
const Camps = require("../models/camps");


exports.signup = async (req, res) => {
  try {
    const pass = req.body.password;
    if(pass.length<7)
    {
      throw new Error("Password Invalid")
    }
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
    console.log(error);
    const msg = error.message;
    const msg_splitted = msg.split(" ");
    console.log("Conflict",msg_splitted[11]);
    if(msg_splitted[11]=="mobile:")
    {
      res.status(409).send("Mobile Number Already Exist Please Try New Credentials");
    }
    else if(msg_splitted[11]=="email:")
    {
      res.status(409).send("Email Already Exist Please Try New Credentials");
    }
    else if(error.message=="Password Invalid")
    {
      res.status(409).send("Password Length Must Be Atleast 7 Characters");
    }
    else{
      res.status(409).send(error.message);
    }
  }
};

exports.login = async (req, res) => {
  try {
    let eMail = req.body.email;
    let passWord = req.body.password;
    const user = await Camp_Owner.findByCredentials(eMail,passWord);
    if(!user)
    {
      throw new Error("No User Found");
    }
    const token = await user.genAuthToken();
    res.status(200).json({ Message: "Login Successfully", token });
  } catch (error) {
    if(error.message=="No User Found")
    {
      res.status(404).send(error.message + " With Given Credentials");
    }
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
      const email = req.body.email;
      if(email)
      {
        if (!validate.isEmail(email)) 
        {
          throw new Error("Invalid Email");
        }
      }
      const phone = req.body.mobile;
      if(phone)
      { 
        if(!validate.isMobilePhone(phone,"en-IN"))
        {
          throw new Error("Invalid Mobile Number");
        }
      }
      const mobile_already = await Camp_Owner.find({mobile:req.body.mobile});
      if(mobile_already[0])
      {
        console.log("-------------------------------------------------------",mobile_already);
        throw new Error("Mobile Number Already Exist")
      }
      const email_already = await Camp_Owner.find({email:req.body.email})
      {
        if(email_already[0])
        {
          console.log("-------------------------------------------------------",email_already);
          throw new Error("Email Already Exist")
        }
      }
      console.log("FrOM UPDATE",user)
      const u =  await Camp_Owner.findById({_id:user._id});//finding and updating
      console.log(u);
      await u.updateOne(req.body,{runValidators:true});
      await u.save();
     
      const updated = await Camp_Owner.findById({_id:user.id});//finding Updated User
      const token = await updated.genAuthToken();
      res.json({updated,token});
    }
    else{
      throw new Error("No User Found");
    }
  } catch (error) {
    if(error.message == "Invalid Mobile Number")
    {
      res.status(409).send(error.message);
    }
    else if(error.message == "Invalid Emai")
    {
      res.status(409).send(error.message); 
    }
    else if(error.message=="Mobile Number Already Exist")
    {
      res.status(409).send("Mobile Number Already Exist Try Other To Update");
    }
    else if(error.message =="Email Already Exist")
    {
      res.status(409).send("Email Already Exist Try Other To Update");
    }
    console.log(error);
    res.send(error.message);
  }
}

exports.updatePassword = async(req,res)=>{
  try {
    const user = req.profile;
    const pass = req.body.password;
    if(pass.length < 7)
    {
      throw new Error("Password Invalid")
    }
    if(user)
    {
      const newPassword = req.body.password;
      console.log(user.password);
      const u =  await Camp_Owner.findOneAndUpdate({_id:user._id},req.body);//finding and updating
      const updated = await Camp_Owner.findById({_id:user.id});//finding Updated User
      await updated.save();
      res.send(updated);
    }
    else
    {
      throw new Error("No user found")
    }
  }
   catch (error) {
    if(error.message="No User Found")
    {
      res.status(404).send(error.message);
    }
    else if(error.message=="Password Invalid")
    {
      res.status(409).send("Password Length Must Be Atleast 7 Characters");
    }
    else{
      res.status(500).send(error.message);
    }
  }
}


exports.delete_user = async(req,res)=>{
  try {
    const user = req.profile;
    if(user)
    {
      const del_user = await Camp_Owner.findByIdAndRemove({_id:user._id});
      console.log(del_user);
      res.json({
        message:"user deleted"
      })
    }
    else{
      res.send("No User Found")
    }
  } catch (error) {
    if(error.message="No User To Delete")
    {
      res.status(404).send(error.message);
    }
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
      throw new Error("No User Found")
    }
  } catch (error) {
    if(error.message="No User Found")
    {
      res.status(404).send(error.message);
    }
  }
}

exports.create_a_camp = async(req,res)=>{
  try {
    const camp_o = req.profile
    if(!camp_o)
    {
      throw new Error("No User Found")
    }
    req.body.camp_owner = camp_o._id
    const camp = await new Camps(req.body)
    await camp.save();
    res.status(201).json({
      message:"Camp Created",
      camp
    });
  } 
  catch (error) {
    if(error.message=="No User Found")
    {
      res.status(404).send("No Owner Found");
    }
    else if(error.message == "Camps validation failed: camp_desc: Path `camp_desc` (`aaaa`) is shorter than the minimum allowed length (50).")
    {
      res.status(409).send("Description Must Be Atleast 50 Characters")
    }
    else{
      res.status(409).send(error.message);
    }
  }
}