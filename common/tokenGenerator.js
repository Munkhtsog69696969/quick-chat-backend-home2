const jwt=require("jsonwebtoken");

exports.tokenGenerator=(payload)=>{
    const accessToken=jwt.sign(
        payload,
        process.env.SECRET_TOKEN || "defaultSecret",
        {expiresIn:"1h"},
    )

    return accessToken;
}