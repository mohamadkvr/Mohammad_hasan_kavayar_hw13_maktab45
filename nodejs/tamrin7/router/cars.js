const express = require('express');
const path = require('path');

let router = express.Router();
let list = ["corvette.html", "i8.html", "mersedes.html", "porche.html", "ford.html", "maclaren.html"] ;

router.use(express.static(path.join(__dirname,"public")));

router.use(express.static(path.join(__dirname,"public/asset")));

router.get("/:cars", (req, res) => {
    let param = `${req.params.cars}.html`;

    if (list.includes(param)) {

        res.sendFile(path.join(__dirname,"../public",param));

    } else{
        res.sendFile(path.join(__dirname,"../public","error.html")) 
    }

})



module.exports = router