const cors = require('cors')

const whitelist = ['https://provisional-portfolio.herokuapp.com', 'http://provisional-portfolio.herokuapp.com']
const corsOptions = {
    origin: (origin, cb) => {
        const originWhitelisted = whitelist.includes(origin)
        cb(null, originWhitelisted)
    },
    credentials: true
}

module.exports = app => app.use(cors(corsOptions))