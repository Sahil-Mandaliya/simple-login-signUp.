const express=require('express');
const profile=require('../models/profiles.models');

const router=express.Router();

router.get('/',(req,res)=>{
    profile.find()
            .then(profiles=>res.json(profiles))
            .catch(err=>res.status(400).json('Error : '+err));
})

module.exports=router;