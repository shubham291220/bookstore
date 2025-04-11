// const express = require('express');
// const dotenv=require("dotenv");

//AFTER ADD TYPE MODULE IN PACKEGES WE CAN NOT USE OLD TYPE
//USE IMPORT VALUE OF ENV6


import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

import cors from "cors";


import bookRoute from "./route/book.route.js";

import userRoute from "./route/user.route.js"


const app = express();
// const port = 3000;
app.use(cors());

///midddle were for data  base //postman
app.use(express.json());

dotenv.config();
const PORT=process.env.PORT ||4000;
const URI=process.env.MongoDBURI;


//conect tto mongo db
try{
mongoose.connect(URI,{
  useNewUrlParser:true,
  useUnifiedTopology:true
});
console.log("concted to mongoDB")
}
catch(error){
console.log("error",error)
}


///define routes  BACKEnd code 
app.use("/book",bookRoute)

app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`)
})