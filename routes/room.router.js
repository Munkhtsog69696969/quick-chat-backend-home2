const express=require("express");

const roomRouter=express.Router();

const {createRoom}=require("../controller/room.controller");
const {findByRoomId}=require("../controller/room.controller");
const {pushTextToRoom}=require("../controller/room.controller");
const {getRoomTexts}=require("../controller/room.controller");

roomRouter
    .post("/createRoom",createRoom)

    .post("/findByRoomId",findByRoomId)


    .put("/pushTextToRoom/:id",pushTextToRoom)
    

    .get("/getRoomTexts/:id",getRoomTexts)
module.exports=roomRouter;