const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandel')
const asyncHandler = require('./middleware/asyncHandler')
const authRoutes =  require('./routes/auth')

require("dotenv").config();

const app = express()

//connect to MongoDB
connectDB()

// middleware
app.use(cors())
app.use(express.json())

// basic route
app.get('/',(req,res)=>{
    res.send('Welcome to the backend server!')
})

// Example route using asyncHandler
app.get('/test', asyncHandler(async (req, res) => {
  throw new Error("Test Error");
}));

// Use auth routes
app.use('/api/auth',authRoutes)

// 1️⃣ Add error handler at the very END (after routes)
app.use(errorHandler)

// start server
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})