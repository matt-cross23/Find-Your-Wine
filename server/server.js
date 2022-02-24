const path = require('path')
const express = require('express');
const colors = require('colors')
const { message } = require('statuses');
const dotenv = require('dotenv').config()
const {errorHandler} =require('./midleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT =process.env.PORT || 5000

// Connect to dtatbase
connectDB()

const app = express();

app.use(express.json())
app.use(express.urlencoded ({ extended: true}))


app.get('/', (req, res) => {
    res.status(200).json({message:'Welcome to suport desk API'})
})
//  Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

// Serve Frontend
if (process.env.NODE_ENV === 'production') {
    // Set build folder as static
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    // FIX: below code fixes app crashing on refresh in deployment
    app.get('*', (_, res) => {
      res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
  } else {
    app.get('/', (req, res) => {
      res.status(200).json({ message: 'Welcome to the Support Desk API' })
    })
  }

app.listen(PORT, () => console.log(`Server started on ${PORT}`))