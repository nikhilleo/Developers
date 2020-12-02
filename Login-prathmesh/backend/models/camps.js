

const mongoose = require('mongoose');
const Camp_Owner = require("../models/camp_owner")

const campSchema = new mongoose.Schema({
    camp_name: {
        type: String,
        required: true,
        trim: true
    },
    camp_desc: {
        type: String,
        required: true,
        trim: true,
        minlength: 50
    },
    camp_state: {
        type: String,
        required: true,
        trim: true
    },
    map_coordinates: {
        type: String,
        // required: true,
        trim: true
    },
    tags: {
        type: String,
        required: true,
        trim: true
    },
    land_type: {
        type: String,
        required: true,
        trim: true
    },
    accessibility_by: {
        type: String,
        required: true,
        trim: true
    },
    activities: {
        type: Array,
        required: true,
        default:[]

    },
    animities: {
        type: Array,
        required: true,
        default:[]

    },
    accomodations: {
        type:Array,
        default:[]
    },
    camp_owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Camp_Owner",
    },
    camp_images:{
        type:Array,
        default:[],
        // required:true
    },
    manger_name: {
        type: String,
        trim: true,
        required: true
    },
    manger_contact:{
        type:String,
        trim:true,
        required:true
    },
    status_of_camp:{
        type:String,
        trim:true,
        default:"Pending"
    }
})


const Camps = mongoose.model("Camps",campSchema);
module.exports = Camps;