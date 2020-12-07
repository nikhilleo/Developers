

const express = require('express');
const router = express.Router();
const auth = require("../middleware/authorization");
const booking_controllers = require("../controllers/booking_controllers");


router.post('/create_a_booking',auth,booking_controllers.create_a_booking);

router.get('/accept_a_booking',booking_controllers.accept_a_booking);

router.get("/reject_a_booking",booking_controllers.reject_a_booking);

router.get('/get_all_pending_bookings',auth,booking_controllers.get_all_pending_bookings);

router.get('/get_all_accepted_bookings',auth,booking_controllers.get_all_accepted_bookings);

router.get('/get_all_rejected_bookings',auth,booking_controllers.get_all_rejected_bookings);

module.exports = router;

