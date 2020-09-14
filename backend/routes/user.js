const express=require('express');
let user=require('../models/users.models');

const router=express.Router();

router.get('/',(req,res)=>{
    user.find()
        .then(users=>res.json(users))
        .catch(err=>res.status(400).json('Error : '+err));
})

router.post('/add',(req,res)=>{
    const username=req.body.username;
    const newUser=new user({username});
    newUser.save()
           .then(()=>res.json('User added'))
           .catch(err=>res.status(400).json('Errrror : '+err));
})

module.exports=router;
