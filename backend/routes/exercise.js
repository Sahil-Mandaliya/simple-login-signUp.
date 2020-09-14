const express=require('express');
const exercise=require('../models/exercises.models');

const router=express.Router();

router.get('/',(req,res)=>{
    exercise.find()
            .then(exercises=>res.json(exercises))
            .catch(err=>res.status(400).json('Error : '+err));
})

router.post('/add',(req,res)=>{
    const username=req.body.username;
    const task=req.body.task;
    const duration=Number(req.body.duration);
    const date=Date.parse(req.body.date);
    
    const newExercise=new exercise({
        username,
        task,
        duration,
        date,
    })

    newExercise.save()
               .then(()=>res.json('Exercise added successfully'))
               .catch((err)=>res.status(400).json('Error : '+err));
})

router.get('/:id',(req,res)=>{
    exercise.findById(req.params.id)
            .then((result)=>res.json(result))
            .catch(err=>res.status(400).json('Error : '+err));
})

router.delete('/:id',(req,res)=>{
    const ID=req.params.id;
    exercise.findByIdAndDelete(ID)
            .then(()=>res.json('Deleted successfully ' + ID))
            .catch(err=>res.status(400).json('Error : '+err));
})

router.post('/update/:id',(req,res)=>{

    const bodyy=req.body;
    exercise.findById(req.params.id)
            .then(exer=>{
                exer.username=bodyy.username,
                exer.task=bodyy.task,
                exer.duration=Number(bodyy.duration),
                exer.date=Date.parse(bodyy.date),

                exer.save()
                    .then(()=>res.json('Updated successfully'))
                    .catch(err=>res.status(400).json('Error : '+err));
            })
            .catch(err=>res.status(400).json('Error : '+err));
})
module.exports=router;