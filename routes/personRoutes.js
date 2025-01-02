const express = require('express')
const router = express.Router()
const { person, personSchema } = require('../model/person')

//send data to database
router.post('/',async (req,res)=>{
    try{
     const data = req.body;
 
     const newPerson = new person(data)
 
     const response = await newPerson.save()
     console.log('data saved')
     res.json(response)
 
     
    }
    catch(error){
     console.log(error)
     res.json(error)
    }
 })

 //get data from database

router.get('/', async (req, res)=>{
    try{
        const data = await person.find()
        res.status(200).json(data)
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
})

//parameterized API calls
 router.get('/:worktype',async (req,res)=>{
    try{
        
            
            const worktype = req.params.worktype;
            const response = await person.find({work:worktype})
            console.log("record fetched")
            res.status(200).json(response)
        
        
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
 })

 // update data
 router.put('/:id',async (req, res)=>{
try{
    const personId = req.params.id //id sent by client in paramterers
    const newData = req.body // data in json by client

    const response = await person.findByIdAndUpdate(personId,newData,{
        new:true, // return updated data
        runValidators:true

    })

    console.log("data updated")
    res.status(500).json(response)


}
catch(error){
    console.log(error)
    res.status(500).send(error)
}
})

// delete data
router.delete('/:id',async (req, res)=>{
    try{
        const personId = req.params.id //id sent by client in paramterers
       
    
        const response = await person.findByIdAndDelete(personId)
        
        if(!response){
            res.status(404).json({x:"person not found person", id: personId})
        }
    
        console.log("data deleted")
        res.status(200).json({x:"person deleted succesfully"})
    
    
    }
    catch(error){
        console.log(error)
        res.status(500).send(error)
    }
    })

module.exports = router

