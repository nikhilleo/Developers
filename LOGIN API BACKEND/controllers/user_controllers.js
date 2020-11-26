const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  console.log("signup1");
  try {
    console.log("signup2");
    const user = await new User(req.body);
    const gentoken = await user.genAuthToken();
    console.log("gentoken", gentoken);
    res.status(201).json({
      message: "User Created",
      user: user,
      token: gentoken,
    });
  } catch (error) {
    res.send(error.message);
  }
};

// exports.login = async (req, res) => {
//   try {
//     const user = await User.findByCredentials(
//       req.body.email,
//       req.body.password
//     );
//     const token = await user.genAuthToken();
//     res.status(200).json({ Message: "Login Successfully", token });
//   } catch (error) {
//     res.send(error.message);
//   }
// };  prathmesh

exports.login = (req, res) => {
  console.log(req);
  let eMail = req.body.email;
  let passWord = req.body.password;
  User.find({ email: eMail })
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "login failed",
        });
      }
      bcrypt.compare(passWord, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "login failed",
          });
        }
        if (result) {
          const token = jwt.sign({ id: user[0]._id }, process.env.JWT_KEY);
          return res.status(200).json({
            token,
            user: {
              user: user[0]._id,
              email: user[0].email,
              name: user[0].firstname,
            },
          });
        }
        return res.status(401).json({
          message: "login failed",
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.auth = async (req, res) => {
  res.send(req.profile);
};
