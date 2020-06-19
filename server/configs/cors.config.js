const cors = require('cors')

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: (origin, cb) => {
        const originWhitelisted = whitelist.includes(origin)
        cb(null, originWhitelisted)
    },
    credentials: true
}

module.exports = app => app.use(cors(corsOptions))