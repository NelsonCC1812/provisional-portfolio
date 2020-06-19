const session = require("express-session")
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)

module.exports = app => {
    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    }))
}
