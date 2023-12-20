const express = require('express')
const router = express.Router()
const Patient = require('../patient')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor yo soy el Paciente' })
})
// Create a new Patient using post
router.post('/', function (req, res, next) {
  const { name, lastName, birthdate, sex, insurance } = req.body
  // create a new patient
  const newPatient = new Patient(name, lastName, birthdate, sex, insurance)
  // send back that patient
  res.send(newPatient)
})
module.exports = router
