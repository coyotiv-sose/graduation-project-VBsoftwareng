var express = require('express')
var router = express.Router()
const User = require('../model/authUser')
const passport = require('passport')
const welcomeGenerator = require('../api/welcome-generator')
const Patient = require('../model/patient')
const Doctor = require('../model/doctor')

router.post('/newUser', async function (req, res, next) {
  const { name, lastName, email, password, role } = req.body
  const newUser = await User.register({ email }, password, function (err, user) {
    if (err) {
      console.log('Error on user auth creation' + err)
    }
  })

  if (role === 'patient') {
    await Patient.create({
      name,
      lastName,
      birthate,
      sex,
      insurance,
    })
  }
  if (role === 'doctor') {
    await Doctor.create({
      name,
      lastName,
      especialization,
      location,
      address,
    })
  }

  res.send(newUser)
})

router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  console.log('User is authenticated')
  res.send(req.user)
})
router.get('/session', function (req, res) {
  res.send(req.user)
})
router.delete('/session', function (req, res) {
  console.log('User is not logged in')
  req.logout(() => {
    console.log('User is logged out')
    res.send(200)
  })
})

router.post('/welcome', async function (req, res) {
  const { name, date, location } = req.body

  const msg = await welcomeGenerator({ name, date, location })

  res.send(msg.content)
})
// console.log('Message is: ', msg.content);

module.exports = router
