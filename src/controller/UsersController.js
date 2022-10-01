const UsersModel = require("../models/UsersModel");

exports.registration=(req, res)=>{
    let reqBody=req.body
    UsersModel.create(reqBody,(err,data)=>{
        if(err){
            res.status(200).json({status:"fail",data:err})
        }
        else{
            res.status(200).json({status:"success",data:data})
        }
    })
}

exports.profileUpdate=(req, res)=>{
   
}