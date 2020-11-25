const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    //prathmesh
    lastname: {
      type: String,
      required: true,
      maxlength: 50,
      trim: true,
    },
    // displayName:{
    //     type:String,
    //     unique:true,
    //     required:true,
    //     maxLength:50,
    //     trim:true
    // }, prathmesh
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid Email Address" });
        }
      },
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: 7,
    },
    // mobile: {
    //   type: String,
    //   unique: true,
    //   required: true,
    //   trim: true,
    //   validate: (value) => {
    //     if (!validator.isMobilePhone(value, "en-IN")) {
    //       throw new Error("Invalid Mobile Number");
    //     }
    //   },
    // }, prathmesh
    mobile: {
      type: Number,
      required: true,
      trim: true,
      minLength: 10,
    },
    address: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    // tokens: [
    //   {
    //     token: {
    //       type: String,
    //       required: true,
    //       trim: true,
    //     },
    //   },
    // ], prathmesh
  },
  { timestamp: true }
);

userSchema.pre("save", async function (next) {
  const user = this;
  console.log("HELLO", user);
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 14);
  }
  next();
});

// userSchema.methods.genAuthToken = async function () {
//   const user = this;
//   console.log(user);
//   const token = await jwt.sign(
//     { displayName: user.displayName },
//     process.env.JWT_KEY,
//     { expiresIn: 3600 }
//   );
//   user.tokens.push({ token });
//   await user.save();
//   return token;
// }; prathmesh

userSchema.methods.genAuthToken = async function () {
  const user = this;
  console.log(user);
  const token = await jwt.sign(
    { firstname: user.firstname },
    process.env.JWT_KEY,
    { expiresIn: 3600 }
  );
  await user.save();
  return token;
};

userSchema.statics.findByCredentials = async function (email, pass) {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("No User Found");
  }
  const match = bcrypt.compare(pass, user.password);
  if (!match) {
    throw new Error("Invalid Credentials");
  }
  return user;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
