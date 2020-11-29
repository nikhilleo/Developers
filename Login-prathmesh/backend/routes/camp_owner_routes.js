const express = require("express");
const router = express.Router();
const owner_controllers = require("../controllers/camp_owner_controllers");
const auth = require("../middleware/camp_owner_auth");

router.post('/signup',owner_controllers.signup)

router.post('/login', owner_controllers.login);

router.get('/auth', auth , owner_controllers.auth);

router.put('/updateuser', auth , owner_controllers.update);

router.put('/updatepassword', auth , owner_controllers.updatePassword);

router.delete('/delete_user', auth , owner_controllers.delete_user);

module.exports = router;