const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.get("/", function(req, res){
    res.send("hello word")
})

app.listen("5000")