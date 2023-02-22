const {Schema,Types,model}=require("mongoose");

const userSchema=new Schema({
    username:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    rooms:[{type:Schema.Types.ObjectId , ref:"rooms"}],

    usercode:{
        type:String,
        required:true,
    },

    usernumber:{
        type:Number,
        required:true,
    },

    avatarImageUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36tS4TDKq99TbPbFcy5aYTy8mIcVbklzHbg&usqp=CAU"
    },

    incomeFriendRequest:[{type:Schema.Types.ObjectId , ref:"users"}],

    friends:[{type:Schema.Types.ObjectId , ref:"users"}],

});

const User=model("users",userSchema);

module.exports=User;