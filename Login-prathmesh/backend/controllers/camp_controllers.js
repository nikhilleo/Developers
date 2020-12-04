const e = require('express');
const  Camp = require('./../models/camps');

exports.accept_a_camp = async (req,res)=>{
    try {
        if(!req.body.camp_name)
        {
            throw new Error("Enter Camp Name")
        }
        const accept_camp = await Camp.find({camp_name : req.body.camp_name})
        if(accept_camp.length >=1){
            if(accept_camp[0].status_of_camp == "Pending")
            {
                accept_camp[0].status_of_camp = "Accepted";
                await accept_camp[0].save();
                res.send(accept_camp[0]);
            }
        }
        else{
            throw new Error('no camp found')
        }
    } catch (error) {
        if(error.message=="no camp found")
        {
            res.status(404).send(error.message)
        }
        else if(error.message=="Enter Camp Name")
        {
            res.status(409).send("Enter Camp Name To Accept A Camp")
        }
        else
        {
            res.status(400).send(error.message)
        }
    }
}

exports.get_all_camps = async (req, res) => {
    try {
        const camps = await Camp.find({});
        if(!camps)
        {
            throw new Error("No Camps Found")
        }
        res.send(camps);
    } catch (error) {
        if(error.message=="No Camps Found")
        {
            res.status(404).send(error.message);
        }
        else{
            res.status(400).send(error.message)
        }
    }
}

exports.reject_a_camp = async (req,res)=>{
    try {
        if(!req.body.camp_name)
        {
            throw new Error("Enter Camp Name")
        }
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
            throw new Error('no camp found') 
        }  
    } catch (error) {
        if(error.message=="no camp found")
        {
            res.status(404).send(error.message);
        }
        else if(error.message=="Enter Camp Name")
        {
            res.status(409).send("Enter Camp Name To Reject A Camp")
        }
        else{
            res.status(400).send(error.message)
        }
    }
}

exports.get_accepted_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : "Accepted"})
        if(camps.length >=1){
            res.send(camps);
        }
        else{
            throw new Error('no camp found') 
        }
    } catch (error) {
        if(error.message=="no camp found")
        {
            res.status(404).send(error.message);
        }
        else{
            res.status(400).send(error.message)
        }
    }
}

exports.get_rejected_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : "Reject"})
        if(camps.length >=1){
            res.send(camps);
        }
        else{
            throw new Error('no camp found') 
        }
    } catch (error) {
        if(error.message=="no camp found")
        {
            res.status(404).send(error.message);
        }
        else{
            res.status(400).send(error.message)
        }
    }
}

exports.get_pending_camps = async (req, res) => {
    try {
        const camps = await Camp.find({status_of_camp : 'Pending'});
        if(camps.length >=1){
            res.send(camps)
        }
        else{
            throw new Error('no camp found') 
        }
    } catch (error) {
        if(error.message=="no camp found")
        {
            res.status(404).send(error.message);
        }
        else{
            res.status(400).send(error.message)
        }
    }
}