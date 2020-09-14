const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const exerciseSchema=new Schema(
    {
        username:{type:String,rquired:true},
        task:{type:String,rquired:true},
        duration:{type:Number,rquired:true},
        date:{type:Date,rquired:true},
    },
    {
        timestamp:Date 
    }
);

const exercise=mongoose.model('Exercise',exerciseSchema);

module.exports=exercise;
