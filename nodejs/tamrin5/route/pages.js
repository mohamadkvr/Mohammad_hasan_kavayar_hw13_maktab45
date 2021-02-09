const express = require('express');
const path = require("path");
let router = express.Router();
router.use(express.static(path.join(__dirname, "../public")))

router.get("/page1", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "index1.html"))
})
router.get("/page2", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "index2.html"))
})
router.get("/page3", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "index3.html"))
})
router.get("/page4", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "index4.html"))
})
router.get("/page5", function(req, res){
    res.sendFile(path.join(__dirname, "../public", "index5.html"))
})


module.exports = router