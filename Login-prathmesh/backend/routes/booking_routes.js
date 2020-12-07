

const express = require('express');
const router = express.Router();
const auth = require("../middleware/authorization");
const booking_controllers = require("../controllers/booking_controllers");


router.post('/create_a_booking',auth,booking_controllers.crate_a_booking);

module.exports = router;

