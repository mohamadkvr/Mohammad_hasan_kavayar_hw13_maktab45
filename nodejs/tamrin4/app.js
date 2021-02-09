const express = require('express');
const app = express();
const adminRouter = require('./route/admin');
const userRouter = require('./route/users');

app.use("/admin", adminRouter)
app.use("/users", userRouter)

app.listen(3000)