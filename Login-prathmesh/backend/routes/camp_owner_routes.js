const express = require("express");
const router = express.Router();
const owner_controllers = require("../controllers/camp_owner_controllers");
const auth = require("../middleware/camp_owner_auth");

router.post('/signup',owner_controllers.signup)

router.post('/login', owner_controllers.login);

router.get('/auth', auth , owner_controllers.auth);

router.post('/updateuser', owner_controllers.updateuser);

module.exports = router;