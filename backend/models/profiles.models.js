const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const profileSchema=new Schema(

    {
        email:{
            type:String,
            required:true,
            unique:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
            unique:true,
        },
        confirmPassword:{
            type:String,
            required:true,
            unique:true,
        },

    },
    {
        timestamp : true,
    }
)

const profile=mongoose.model('Profile',profileSchema);

module.exports=profile;