const { resolve6 } = require('dns');
const express = require('express');
const path = require("path");
const cars = require("./router/cars")

let app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "home.html"));
})
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "about.html"));
})
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "contact.html"));
})

app.use("/cars", cars)
app.listen(3000)