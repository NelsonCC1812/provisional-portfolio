
require('dotenv').config()

const express = require('express')
const app = express()

require('./configs/mongoose.config')

// Middleware Setup
require('./configs/middleware.config')(app)

// Express View engine setup
require('./configs/viewEngine.config')(app)

//debug config
require('./configs/debug.config')

// default value for title local
require('./configs/locals.config')(app)

// Enable authentication using session + passport
require('./configs/session.config')(app)
require('./configs/passport')(app)
//cors config
require('./configs/cors.config')(app)

//base URLs
app.use('/api/auth', require('./routes/auth.routes'))

app.use((req, res) => res.sendFile(__dirname + '/public/index.html'))

module.exports = app
