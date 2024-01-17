const express = require('express')
const router = express.Router()
const Patient = require('../model/patient')

/* GET patients listing. */
router.get('/', async function (req, res, next) {
  const patients = await Patient.findOne()
  // or you can also write an more simplified like res.send(await Patient.findOne())
  res.send(Patient.list)
})

// Create a new Patient using post
router.post('/', async function (req, res, next) {
  // const name = req.body.name
  // const lastName = req.body.lastName
  const { name, lastName, birthdate, sex, insurance } = req.body
  // create a new patient
  const patient = await Patient.create({ name, lastName, birthdate, sex, insurance })
  // patients.push(newPatient)

  // send back that patient
  res.send(patient)
})
router.get('/:patientName/appointments', function (req, res, next) {
  const patient = Patient.list.find(patient => patient.name === req.params.patientName)

  res.send(patient.appointments)
})

//  DELETE PATIENT
router.delete('/:patientId', async function (req, res, next) {
  // this is to access the url for patient  req.params.patientId
  //find the index of the patient in the array
  //const patientIndex = Patient.findIndex(patient => patient.name === req.params.patientId) I have to change it to put mongose
  await Patient.findByIdAndDelete(req.params.patientId)

  // if (patientIndex !== -1) {
  //   // remove it from the array
  //   Patient.list.splice(patientIndex, 1)
  //   // send back a response if succesfull
  //   res.sendStatus(200)
  // } else {
  //   res.sendStatus(404)
  // }
  // when i am done commiting succesfull change i use git stash pop to get my changes back
  res.sendStatus(200)
})
// when I need to change information I use the put handler :means dynamic
router.put('/:patientId', function (req, res, next) {
  console.log('---------we are here---')
  // find the patient
  const patient = Patient.list.find(patient => patient.name === req.params.patientId)

  const newValues = req.body.newValues

  const updatedPatient = Patient.updatePatient(patient, newValues)

  res.status(200).send(updatedPatient)
})

module.exports = router
