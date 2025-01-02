const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    price:{
        type: Number,
        required:true
    },
    taste:{type: String,
        enum: ['spicy','sweet',"sour"],
        required: true     }
        
        })

const menu = mongoose.model("menu",menuSchema);
module.exports={menu};