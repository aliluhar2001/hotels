const express = require('express')
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')
const { person, personSchema } = require('./model/person')
const { errorToJSON } = require('next/dist/server/render')
const { menu } = require('./model/menu')
const personRoute = require('./routes/personRoutes')
const menuRoute = require('./routes/menuRoutes')

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello World')
  console.log('server started')
})
app.get('/ali', function (req, res) {
    res.send('<h1>this is ALi<h1>')
    console.log('server started')
  })
app.get('/luhar', function (req, res) {
    res.send({name: "ali",
        lastname: "luhar",
        number: 7016443412,

    })
})

app.use('/person',personRoute)

app.use('/menu', menuRoute)


app.listen(3000, ()=>{console.log('listening on port 3000')})