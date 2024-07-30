const express = require('express');
const cors = require("cors");
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');


//allow request from client side
app.use(cors({
    origin:"*",
    credentials: true
}))

dotenv.config();

//db connect
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

//define new collection
const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
}) 

//set name for a new collection
const collection = mongoose.model("collection", newSchema); 

/*
//creating new collections
module.exports=collection; 
*/

/*
// data to insert to collection
const insert = new collection({
    email: "TraMyPhan",
    password: "18012007",
}); 
*/

/*
//save new data to collection
const result = insert.save(); 
*/

//send to homepage
app.get("/",cors(),(req,res)=>{
})

app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})
        const pass = await collection.findOne({email:email, password: password})

        if(pass){
            res.json("exist")
        }
        else{
            if(check){
                res.json("wrongpass")
            } else {
                res.json("notexist")
            }
        }

    }
    catch(e){
        res.json("fail")
    }

})


const PORT = process.env.PORT;
app.listen(PORT, () => console.log('Server is running'));
