const Bookings = require("../models/booking");

exports.crate_a_booking = async(req,res)=>{
    try {
        const user = req.profile;
        const a_details = req.body.a_details;
        var total=0;
        for(let i=0;i< a_details.length;i++)
        {
            total += a_details[i].totalPrice
        }
        camper_details = user._id;
        total_amount=total;
        const created_booking = await new Bookings({
            a_details,
            camper_details,
            total_amount
        });
        await created_booking.save();
        if(!created_booking)
        {
            throw new Error("Error In Creation")
        }
        else
        {
            res.status(201).send(created_booking);
        }
    } catch (error) {
        res.send(error.message);
    }
}