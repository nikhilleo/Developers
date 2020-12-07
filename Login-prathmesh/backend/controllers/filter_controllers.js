const e = require("express");
const Camp = require("../models/camps");

exports.filter_by_price = async (req, res) => {
    const min_price = req.body.min;
    const max_price = req.body.max;
    console.log(camps)
    res.send("Done");
}

exports.filter_by_activities = async (req, res) => {
    try {
        const activit = req.body.activity;
        if (!activit) {
            throw new Error("Empty")
        }
        const camps = await Camp.find({
            activities: activit
        });
        console.log(camps);
        res.status(200).send(camps)
        // res.send("Done");
    } catch (error) 
    {
        if(error.message=="Empty")
        {
            res.status(404).send("Select Proper Activity To Sort")
        }
    }
}


exports.filter_by_accommodations = async(req,res)=>{
    const camp = await Camp.find({accomodations:req.body.type});
    console.log(Object.keys(camp[0].accomodations));
    console.log(camp)
    res.send(camp)
}