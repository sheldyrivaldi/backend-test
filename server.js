const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
app.use(express.json())

const application = require('./app')
app.use(application)

const PORT = process.env.PORT || 8080
app.listen(PORT, (err) => {
    if (err) throw err
    console.log('Server listening on port', PORT)
})