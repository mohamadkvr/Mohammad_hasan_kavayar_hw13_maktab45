const express = require('express');
const path = require('path');
const fs = require('fs');

let files =  fs.readdirSync("./public");
let app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.get("/:page", (req, res) => {

    let param = `${req.params.page}.html`
    
    if (files.includes(param)) {
        res.sendFile(path.join(__dirname, "./public", param ))
    } else {
        res.send("<h1 style='margin: 100px auto;'>Not found 404</h1>")
    }
   
})

app.listen(3000)
