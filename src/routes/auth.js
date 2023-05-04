var express = require('express');
const route = express.Router();
var CryptoJS = require("crypto-js");
const User = require("../models/users/users");
const jwt = require("jsonwebtoken");

route.post("/register",async (req,res)=>{
    const newUser=new User({
        username:req.body.username,
        password:CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });
    try{
        const user=await newUser.save();
        res.status(200).json(user);
    }catch(e){
        console.log(e)
    }
})

//LOGIN
route.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.email });
      !user && res.status(401).json("Tài khoản không tồn tại!");
  
      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
  
      originalPassword !== req.body.password &&
        res.status(401).json("Sai mật khẩu!");
  
      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "90d" }
      );
  
      const { password, ...info } = user._doc;
  
      res.status(200).json({ ...info, accessToken });
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports=route;