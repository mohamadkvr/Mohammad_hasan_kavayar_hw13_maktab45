const express = require('express')
const router = express.Router();
const path = require('path');

router.use(express.static(path.join(__dirname, "public")))

router.get('/Alluser',(req, res) => {
     res.sendFile(path.join(__dirname, '../public', "usernames.json"))
})
module.exports= router;


