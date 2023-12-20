const express = require('express')
const router = express.Router()
const Doctor = require('../doctor')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor yo soy el Doctor' })
})

// Create a new Doctor using post
router.post('/', function (req, res, next) {
  const { name, lastName, especialization, location, address } = req.body
  // create a new doctor
  const newDoctor = new Doctor(name, lastName, especialization, location, address)
  // send back that doctor
  res.send(newDoctor)
})
module.exports = router
