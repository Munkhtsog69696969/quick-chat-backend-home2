const Room=require("../models/room.model");
const randomstring=require("randomstring");

exports.createRoom=async(req,res)=>{

    const roomId=req.body.roomId;

    try{
        let code=randomstring.generate(10);

        let existingCode=true;
    
        while(existingCode==true){
            const existingRoom=await Room.find({code});
    
            if(existingRoom && existingRoom==""){
                existingCode==false;
                break;
            }
        }
    
        const newRoom=await (await Room.create({code:code , roomId:roomId})).save();
    
        res.send(newRoom);
    }catch(err){
        throw err
    }
}

exports.findByRoomId=async(req,res)=>{
    const roomId=req.body.roomId;

    const room=await Room.find({roomId:roomId});

    res.send(room);
}

exports.pushTextToRoom=async(req,res)=>{
    const roomId=req.params.id;

    const text=req.body.Text;

    const room=await Room.findById(roomId);

    room.texts.push(text);

    room.save();

    res.send(room)
}

exports.getRoomTexts=async(req,res)=>{
    const id=req.params.id;

    const room=await Room.findById(id);

    res.send(room.texts);
}