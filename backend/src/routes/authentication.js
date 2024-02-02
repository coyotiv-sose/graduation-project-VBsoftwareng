var express = require('express')
var router = express.Router()
const User = require('../model/authUser')
const passport = require('passport')
const welcomeGenerator = require('../api/welcome-generator')
const Patient = require('../model/patient')
const Doctor = require('../model/doctor')
const Address = require('../model/address')

router.post('/newUser', async function (req, res, next) {
  const { name, lastName, email, password, role, birthdate, sex, especialization, location, address, insurance } =
    req.body

  const authUser = new User({ role, email })
  const newUser = await User.register(authUser, password, function (err, user) {
    if (err) {
      console.log('Error on user auth creation' + err)
    }
  })

  if (role === 'patient') {
    await Patient.create({
      name,
      lastName,
      birthdate,
      sex,
      insurance,
      authUser,
    })
  }
  if (role === 'doctor') {
    const newAddress = await Address.create({
      street: address.street,
      zipCode: address.zipCode,
      district: address.district,
      city: address.city,
    })
    await Doctor.create({
      name,
      lastName,
      especialization,
      location,
      address: newAddress,
      authUser,
    })
  }

  res.send(newUser)
})

router.post('/session', passport.authenticate('local', { failWithError: true }), async function (req, res) {
  console.log('User is authenticated')

  // if (req.user.role === 'patient') {
  //   req.user = await Patient.findOne({ authUser: req.user._id })
  // } else if (req.user.role === 'doctor') {
  //   req.user = await Doctor.findOne({ authUser: req.user._id })
  // }

  res.send(req.user)
})

router.get('/session', async function (req, res) {
  // console.log('show me user', req.user)
  // let user = req.user
  // if (req.user.role === 'patient') {
  //   user = await Patient.findOne({ authUser: req.user._id })
  // } else if (req.user.role === 'doctor') {
  //   user = await Doctor.findOne({ authUser: req.user._id })
  // }

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
