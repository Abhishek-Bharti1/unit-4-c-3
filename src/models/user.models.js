
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
firstName: {type: String, required:true},
lastName: {type: String, required:false},

age: {type: Number, required:true},

email: {type: String, required:true, unique: true},
profileImages:{type: String,required: true}

},{
    versionKey: false,
    timeStamps: true
});

const bookSchema = new mongoose.connect({
    likes: {type: Number,default:0,required: true},
    coverImage: {type: String,required: true},
    content:{ type: String,required: true},
},{
    versionKey: false,
    timestamps: true,
})

const commentSchema = new mongoose.Schema({
    body: {type: String, required: true},
},{
    versionKey:false,
    timestamps: true,
})

module.exports = mongoose.model("user",userSchema,commentSchema,bookSchema);