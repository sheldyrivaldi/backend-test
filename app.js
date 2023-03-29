const express = require('express');
const app = express();
const userRouters = require('./routers/users.routes')


app.use(userRouters)


module.exports = app;