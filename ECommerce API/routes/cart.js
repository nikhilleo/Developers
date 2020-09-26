var express = require("express");
var router = express.Router();


const {createCart,getItemsFromCart} = require("./../controllers/cart_controller")
const { isSignedIn, isAuthenticated} =require("./../controllers/auth");

router.post('/:userid/cart' , isSignedIn,isAuthenticated,createCart);

router.get('/:userid/getcart',isSignedIn,isAuthenticated,getItemsFromCart);

module.exports = router;