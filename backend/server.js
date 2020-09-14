const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app=express();
const port=5001

app.use(cors());
app.use(express.json());

const uri=process.env.DB_CONNECTION;
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true});

const connection=mongoose.connection;
connection.once('open',()=>{console.log("connected to database successfully!")});

// const exerciseRouter=require('./routes/exercise');
// const userRouter=require('./routes/user');
  
// app.use('/exercise',exerciseRouter);
// app.use('/user',userRouter);

const profilesRouter=require('./routes/profiles');

console.log(typeof(profilesRouter));

app.use('/profiles',profilesRouter);
//app.use('/profiles/',profilesRouter);
  
app.listen(port,()=>console.log(`Server is running on port : ${port}`));