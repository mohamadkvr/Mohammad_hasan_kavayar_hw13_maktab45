const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const things = require('./router/things')

let app = express()
app.use(express.static(path.join(__dirname, "public")))


app.use("/things", things )
app.listen(3000)


