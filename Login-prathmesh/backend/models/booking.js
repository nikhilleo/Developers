

const mongoose = require('mongoose');
const Camper = require("../models/camper");

const bookingSchema = new mongoose.Schema({
    a_details:{
        type:Array,
        required:true
    },
    total_amount:{
        type:String,
        trim:true,
        default:""
    },
    camper_details:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Camper"
    },
    payment_id:{
        type:String,
        trim:true,
        default:""
    },
    payment_status:{
        type:String,
        trim:true,
        default:"Pending"
    }
},{timestamps:true});

const Bookings = mongoose.model("Bookings",bookingSchema);
module.exports = Bookings;