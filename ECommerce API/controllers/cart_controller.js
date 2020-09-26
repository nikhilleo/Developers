


const Cart = require("./../models/cart")
const formidable = require("formidable");
const _ = require("lodash");

exports.createCart = (req,res) =>{

  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  
  form.parse(req, (err, fields) => {

  const { product,name, price, count } = fields;
  
  if (!name || !product || !price || !count) {
    return res.status(400).json({
    error: "Please include all fields"
    });
  }
  
  let cart = new Cart(fields);
  
  console.log(cart);

  cart.save((err, cart) => {
  if (err) {
        res.status(400).json({
        error: err.message
      });
  }
    res.json(cart);
  });

  });
}


// exports.getItemsFromCart =  (req,res) =>{
//   const cart = Cart.find({})
//   try {
//     res.send(cart);
//   } catch (error) {
//     res.send(error.message);
//   }
// }



exports.getItemsFromCart = (req, res) => {
  Cart.find().exec((err,cart) => {
    if (err) {
      return res.status(400).json({
        error: "NO Items In Cart"
      });
    }
    res.json(cart);
  });
};