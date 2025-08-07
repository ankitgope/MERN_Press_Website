const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const env = require('dotenv')
const connectDB = require('./config/db')
require("dotenv").config();

const app = express()
connectDB()
// middleware
app.use(cors())
app.use(express.json())

// basic route
app.get('/',(req,res)=>{
    res.send('Welcome to the backend server!')
})

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})