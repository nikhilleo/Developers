const express = require("express");
const router = express.Router();
const admin_controllers = require("../controllers/admin_controllers");
const auth = require("../middleware/admin_auth");
const dual = require("../middleware/admin_2fa");

router.post('/signup',admin_controllers.signup)

router.post('/login',dual.admin_2fa);

router.post('/verify',dual.admin_2fa_verify, admin_controllers.login);

router.post('/resend_otp',dual.admin_2fa_resendOTP);

router.get('/auth', auth , admin_controllers.auth);

router.put('/updateuser', auth , admin_controllers.update);

router.put('/updatepassword', auth , admin_controllers.updatePassword);

router.delete('/delete_camp_owner', auth , admin_controllers.delete_camp_owner);

router.get('/getallcampowners', admin_controllers.getallcamp_owners);

module.exports = router
