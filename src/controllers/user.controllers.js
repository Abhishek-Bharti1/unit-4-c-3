const express =require("express");
const { body, validationResult } = require('express-validator');
const User = require("../models/user.models");
const router = express.Router();


router.post("/",
body("firstName").not().isEmpty().isLength(({min: 3,max: 30})),
body("age").not().isEmpty().isNumeric().custom((value)=>{
if(value<1 || value>150){
    throw new Error("type valid image");
}
}),
body("email").not().isEmpty().isEmail(),



async (req,res)=>{
    try{
        const errors = validationResult(req);
    if (!errors.isEmpty()) {
  return res.status(400).json({ errors: errors.array() });
}
const user = await User.create(req.body);
return res.status(201).send(user);
}catch(err){
    return res.status(500).send({message: err.mesaage});
}


}

);