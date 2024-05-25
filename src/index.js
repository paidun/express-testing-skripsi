require('dotenv').config()
const express = require('express')
const PORT = process.env.PORT || 5000
const reviewRoutes = require('./routes/review')
const middlewareLogRequest = require('./middleware/logs')
const app = express()
const path = require('path')


// app.use('/assets', express.static('public/images'))
app.use('/assets', express.static('public/images'))
app.use('/assets', express.static('public/videos'))
app.use(middlewareLogRequest)
app.use(express.json())

app.use('/', reviewRoutes)


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})