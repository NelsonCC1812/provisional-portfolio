const express = require('express')
const router = express.Router()

const Mail = require('../models/Email')

router.post('/sendMail', (req, res, next) => {
    const { email, subject, content } = req.body

    Mail.create({ email, subject, content })
        .then(mail => res.json({ status: 'ok' }))
        .catch(err => res.json({ status: 'ko' }))

})

module.exports = router