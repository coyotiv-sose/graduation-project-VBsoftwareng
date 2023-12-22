const express = require('express')
const router = express.Router()
const Patient = require('../patient')

/* GET patients listing. */
router.get('/', function (req, res, next) {
  res.send(Patient.list)
})
// Create a new Patient using post
router.post('/', function (req, res, next) {
  const { name, lastName, birthdate, sex, insurance } = req.body
  // create a new patient
  Patient.create({ name, lastName, birthdate, sex, insurance })
  // patients.push(newPatient)

  // send back that patient
  res.send()
})
//  DELETE PATIENT
router.delete('/:patientId', function (req, res, next) {
  // this is to access the url for patient  req.params.patientId
  //find the index of the patient in the array
  const patientIndex = Patient.list.findIndex(patient => patient.name === req.params.patientId)
  // remove it from the array
  Patient.list.splice(patientIndex, 1)
  // send back a response if succesfull
  res.sendStatus(200)
  // when i am done commiting succesfull change i use git stash pop to get my changes back
})

module.exports = router
