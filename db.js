const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/local'

mongoose.connect( mongoUrl  );
const db = mongoose.connection;

db.on('connected', ()=>{
    console.log("connected")
})

db.on('error', ()=>{
    console.log("error connecting")
})

db.on('disconnected', ()=>{
    console.log("disconnected")
})

module.exports = {
    db
}