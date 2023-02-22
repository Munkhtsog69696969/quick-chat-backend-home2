const express=require("express");

const userRouter=express.Router();

const { body, validationResult } = require('express-validator');

const {createNewUser}=require("../controller/user.controller");
const {loginUser}=require("../controller/user.controller");
const {authMiddleware}=require("../common/middleware/authMiddleware");
const {findFriends}=require("../controller/user.controller");
const {findFriendsUsername}=require("../controller/user.controller");
const {incomeFriendRequest}=require("../controller/user.controller");
const {getIncomeFriendRequest}=require("../controller/user.controller");
const {getUserData}=require("../controller/user.controller");
const {acceptRequest}=require("../controller/user.controller");
const {deleteRequest}=require("../controller/user.controller");

userRouter
    .post("/signup",
    body("email").isEmail(),
    body("password").isLength({min:6}),
    body("username").isLength({min:3}),
    createNewUser)

    .post("/login",loginUser,authMiddleware)

    .post("/findFriends",findFriends)

    .post("/findFriendsUsername",findFriendsUsername)

    .post("/acceptRequest/:id",acceptRequest)

    .post("/deleteRequest/:id",deleteRequest)

    .put("/incomeFriendRequest/:id",incomeFriendRequest)

    .get("/getIncomeFriendRequest/:id",getIncomeFriendRequest)

    .get("/getUserData/:id",getUserData)

module.exports=userRouter;