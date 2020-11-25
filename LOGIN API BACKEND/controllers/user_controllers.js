

const User = require("../models/user")

exports.signup = async(req,res) =>
{
    try {
        const user = await new User(req.body)
        const gentoken = await user.genAuthToken();
        await user.save();
        // console.log(user);
        res.status(201).json({
            message:"User Created",
            user : user,
            token:gentoken
        })
    } catch (error) {
        res.send(error.message);
    }    
}


exports.login = async(req,res) =>{
    try {
        const user = await User.findByCredentials(req.body.email,req.body.password);
        const token = await user.genAuthToken();
        res.status(200).json({"Message":"Login Successfully",token});
    } catch (error) {
        res.send(error.message);
    }
}

exports.auth = async(req,res)=>{
    res.send(req.profile);
}