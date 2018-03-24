const express=require('express');
const router= express.Router();
const userModel=require('../models/user');

router.post('/login',(req,res)=>{
    const form=req.body;
    userModel.checkIfExists(res,form.login)
});

router.post('/register',(req,res)=>{
    const form=req.body;
    console.log(form)
    userModel.register(res,form);
});

module.exports=router;