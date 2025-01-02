const mongoose = require('mongoose');
require('dotenv').config
const onlineurl = process.env.onlineUrl || 'mongodb+srv://aliluhar:Luhar123@cluster0.gji0j.mongodb.net/'
//constmongoUrl = 'mongodb://localhost:27017/local'
const mongoUrl = 'mongodb+srv://aliluhar:Luhar123@cluster0.gji0j.mongodb.net/'

mongoose.connect( onlineurl );
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