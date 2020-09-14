// import signUp from "../../src/Components/signUp";

const express=require('express');

const profile=require('../models/profiles.models');

const router=express.Router();

router.get('/',(req,res)=>{
    profile.find()
            .then(profiles=>res.json(profiles))
            .catch(err=>res.status(400).json('Error : '+err));
})

router.post('/fetch',(req,res)=>{

    const email=req.body.email;
    const password=req.body.password;
    const curErrors=[];

    if(!email||!password)
    {
        curErrors.push("Please,Fill All fields");
    }  
    if(curErrors.length>0)
    {
        res.json(curErrors);
    }
    else
    {

        profile.findOne({email:req.body.email})
                .then(profiles=>{
                    if(profiles===null)
                    {
                        curErrors.push("Enter correct Email");
                        res.json(curErrors);
                    }
                    else if(profiles.password!==req.body.password)
                    {
                        curErrors.push("Enter correct password");
                        res.json(curErrors);
                    }
                    else
                    {
                        res.json(profiles)};
                    }
                )
                .catch(err=>res.status(400).json('Error : '+err));
    }
})

router.post('/add',(req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const confirmPassword=req.body.confirmPassword;
    const date=Date.parse(req.body.date);
   // const errors=req.body.errors;

    const newProfile=new profile({
                                email,
                                password,
                                confirmPassword,
                                date,
                            })
    const curErrors=[];

    if(!email||!password||!confirmPassword)
    {
        curErrors.push("Please,Fill All fields");
    }  
    
    if(password!==confirmPassword)
    {
        curErrors.push("Passwords Do Not Match");
    }

    if(curErrors.length>0)
    {
        res.json(curErrors);
    }
    else
    {
        profile.findOne({email:email})
            .then(profile=>{
               if(profile)
               {
                   curErrors.push("Profile Already Exists");
                   res.json(curErrors);
               }
               else
               {
                    console.log("Your profile Is new");
                    newProfile.save()
                            .then(()=>res.json(newProfile))
                            .catch((err)=>res.status(400).json('Error : '+err));

               }
           })
           .catch(err=>console.log(err))
    }
})

module.exports=router;