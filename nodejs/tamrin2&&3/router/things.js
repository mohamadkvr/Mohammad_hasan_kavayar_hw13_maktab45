const express = require('express');
const router = express.Router();


// router.use('/', (req, res, next) => {
    
//     next()
// })

router.get('/login', (req, res) => {
    res.send("Hello from things login")
})
router.get('/contact', (req, res) => {
    res.send("Hello from things contact")
})
router.get('/home', (req, res) => {
    res.send("Hello from things home ")
})

module.exports = router