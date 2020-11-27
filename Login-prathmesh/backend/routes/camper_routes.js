

const express = require("express");
const router = express.Router();
const camper_controller = require("../controllers/camper_controllers")
const auth = require("../middleware/authorization");

router.post('/signup',camper_controller.signup)

router.post('/login', camper_controller.login);

router.get('/auth', auth , camper_controller.auth);

router.put('/update_profile', auth ,camper_controller.update);

router.put('/update_password',auth,camper_controller.updatePassword);

module.exports = router;