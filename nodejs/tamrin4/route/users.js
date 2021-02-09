const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

let obj =JSON.parse( fs.readFileSync("./public/usernames.json", "utf8"));




router.use(express.static(path.join(__dirname, "public")))
router.use(bodyParser.urlencoded({ extended: true }))

router.post("/getUser",(req,res) => {
    let find = obj.find(a => a.first_name === req.body.first_name);
     if (find) {
         res.status(200).send(find)
     } else{
        res.status(400).send("not found")
     }
})



module.exports= router;


