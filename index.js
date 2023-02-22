const express=require("express");

const mongoose=require("mongoose")

const cors=require("cors");

// require("dotenv").config();

const app=express();

const port=process.env.PORT || 8080;

const connect=require("./config/dbConnector");

mongoose.set("strictQuery",true);

connect();

app.use(cors());

app.use(express.json());

const userRouter=require("./routes/user.router");

const roomRouter=require("./routes/room.router");

app.use("/",userRouter);
app.use("/",roomRouter);

app.listen(port,()=>{
    console.log("Server listening at:",port);
})