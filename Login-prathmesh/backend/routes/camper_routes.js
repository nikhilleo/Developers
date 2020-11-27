

const express = require("express");
const router = express.Router();
const user_controllers = require("../controllers/camper_controllers")
const auth = require("../middleware/authorization");

router.post('/signup',user_controllers.signup)

router.post('/login', user_controllers.login);

router.get('/auth', auth , user_controllers.auth);

module.exports = router;