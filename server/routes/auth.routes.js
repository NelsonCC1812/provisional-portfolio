const express = require("express")
const passport = require('passport')
const router = express.Router()
const User = require("../models/User")

const bcrypt = require("bcrypt")
const bcryptSalt = 10

//LOGIN route
router.post("/login", (req, res, next) => {

  if (!req.body.username) {
    res.json({ status: 'ko', message: 'Please, introduce an username' })
    return
  }

  if (!req.body.password) {
    res.json({ status: 'ko', message: 'Please, introduce a password' })
    return
  }

  passport.authenticate("local", (err, user, failureDetails) => {

    if (err) {
      res.json({ status: 'ko', message: 'Something went wrong' })
      return
    }

    if (!user) {
      res.json({ status: 'ko', message: failureDetails.message })
      return
    }

    req.login(user, err => {
      if (err) {
        res.json({ status: 'ko', message: 'Something went wrong with the login' })
        return
      }
    })

    res.json({ status: 'ok', user })
  })(req, res, next)
})

//SIGNUP route
router.post("/signup", (req, res) => {
  const username = req.body.username
  const password = req.body.password

  if (!username) {
    res.json({ status: 'ok', message: "Indicate an username" })
    return
  }

  if (!password) {
    res.json({ status: 'ok', message: 'Indicate a password' })
    return
  }

  User.findOne({ username })
    .then(user => {
      if (user) {
        res.json({ status: 'ok', message: 'The username already exists' })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(password, salt)

      const newUser = new User({ username, password: hashPass })

      return newUser
    })
    .then(newUser => newUser.save())
    .then(newUser => {
      req.login(newUser, err => {
        if (err) {
          res.json({ status: 'ko', message: 'Something went wrong creating the user' })
          return
        }
      })

      res.json({ status: 'ok', user: newUser })
    })
    .catch(() => res.json({ status: 'ko', message: 'Something went wrong creating the user' }))
})

//LOGOUT Route
router.get("/logout", (req, res) => {
  req.logout()
  res.json({ status: 'ok' })
})

//ISLOGGEDIN sends to the front the user if is logged, or not
router.get('/isLoggedIn', (req, res) => {
  if (!req.user) {
    res.json({ status: 'ok', user: false })
    return
  }

  res.json({ status: 'ok', user: req.user })
})

module.exports = router
