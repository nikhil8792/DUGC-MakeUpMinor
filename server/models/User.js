// Import Dependencies
import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { strict } from "assert";


const userSchema=new mongoose.Schema({
    studentName:{
        type:String,
        maxleght:20,
        required:true
    },
    usn:{
        type:String,
        unique:true,
        maxleght:13,
        required:true
    },
    sem:{
        type:Number,
        required:true
    },
    courses:[{
        course:{type:String},
        code:{type:String},
        approval:{type:Boolean,
        default: false},
        remark:{type:String}
    }],
    reason:{
        type:String
    }
}
)


const User = mongoose.model("User",userSchema);
export default User;