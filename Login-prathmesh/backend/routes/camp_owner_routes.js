const express = require("express");
const multer = require('multer');
const router = express.Router();
const owner_controllers = require("../controllers/camp_owner_controllers");
const auth = require("../middleware/camp_owner_auth");
const axios = require('axios');
var FormData = require('form-data');
var imgbbUploader = require('imgbb-uploader');
const storage = multer.diskStorage({         //multer storage
destination: function(req, file, cb) {
    cb(null, './uploads/');
},
filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname); 
}
});

const upload = multer({storage : storage});

router.post('/upload', upload.single('image'), (req, res, next) => {
    console.log(req.file);
    const path = req.file.path
    imgbbUploader('8e1a5ee3d30f2e8af9d9287346ba347e',path).
    then(result => {console.log(result)});
    res.send("upload")
  })


router.post('/signup',owner_controllers.signup)

router.post('/login', owner_controllers.login);

router.get('/auth', auth , owner_controllers.auth);

router.put('/updateuser', auth , owner_controllers.update);

router.put('/updatepassword', auth , owner_controllers.updatePassword);

router.delete('/delete_user', auth , owner_controllers.delete_user);

router.get('/getuser', auth , owner_controllers.find_specific_user);

router.post('/create_camp',auth , owner_controllers.create_a_camp);

module.exports = router;