const express = require('express');
const pages = require("./route/pages");

let app = express();
app.use("/pages", pages);
app.listen(3000)
