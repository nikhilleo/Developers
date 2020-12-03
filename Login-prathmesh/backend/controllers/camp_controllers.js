const  Camp = require('./../models/camps');

exports.accept_a_camp = async (req,res)=>{
    try {
        const accept_camp = await Camp.find({camp_name : req.body.camp_name})
        if(accept_camp.length >=1){
            if(accept_camp[0].status_of_camp == "Pending")
            {
                accept_camp[0].status_of_camp = "Accept";
                await accept_camp[0].save();
                res.send(accept_camp[0]);
            }
        }
        else{
            throw new Error('no camp found')
        }
    } catch (error) {
        res.send(error)
    }
}

exports.get_all_camps = async (req, res) => {
    try {
        const camps = await Camp.find({});
        res.send(camps);
    } catch (error) {
        res.send(error);
    }
}

exports.reject_a_camp = async (req,res)=>{
    try {
        const reject_camp = await Camp.find({camp_name : req.body.camp_name})
        if(reject_camp.length >=1){
            if(reject_camp[0].status_of_camp == "Pending")
            {
                reject_camp[0].status_of_camp = "Reject";
                await reject_camp[0].save();
                res.send(reject_camp[0]);
            }
            
        }
        else{
            res.send('no camp found')
        }
    } catch (error) {
        res.send(error)
    }
}

exports.get_accepted_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : "Accept"})
        if(camps.length >=1){
            res.send(camps);
        }
        else{
            res.send("no camp found")
        }
    } catch (error) {
        res.send(error);
    }
}

exports.get_rejected_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : "Reject"})
        if(camps.length >=1){
            res.send(camps);
        }
        else{
            res.send("no camp found")
        }
    } catch (error) {
        res.send(error);
    }
}

exports.get_pending_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : 'Pending'});
        if(camps.length >=1){
            res.send(camps)
        }
        else{
            res.send("no camp found")
        }
    } catch (error) {
        res.send(error);
    }
}