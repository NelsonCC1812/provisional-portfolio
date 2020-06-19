const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const logger = require('morgan')


module.exports = app => {
    app.use(logger('dev'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cookieParser())
}
