const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique:true
    },
    age:{
        type: Number,
        required:true
    },
    work:{type: String,
        enum: ['chef','manager',"owner"],
        required: true     }
        
        })

const person = mongoose.model("person",personSchema);
module.exports={person,personSchema};