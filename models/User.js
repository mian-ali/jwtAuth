import mongoose from "mongoose";


// Define Schema
const userSchema=new mongoose.Schema({

    name:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    password:{type:String,required:true,trim:true},
    
    // terms and conditions
    tc:{type:Boolean,required:true,}
})

const userModel=mongoose.model('authUser', userSchema)
export default userModel