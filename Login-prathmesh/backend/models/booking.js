

const mongoose = require('mongoose');
const Camper = require("../models/camper");
const Camp = require("../models/camps");

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
    camp:{
        type:mongoose.Schema.Types.ObjectId,
        trim:true,
        ref:"Camps"
    },
    camper_details:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Camper"
    },
    status:{
        type:String,
        trim:true,
        default:"Pending For Confirmation"
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