const session = require("express-session")
const mongoose = require('mongoose')

module.exports = app => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
    }))
}
