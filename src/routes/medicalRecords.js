var express = require('express')
var router = express.Router()
const MedicalRecord = require('../medicalRecord')
const Doctor = require('../doctor')
const Patient = require('../patient')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})
// Create a new Medical record using post
router.post('/', function (req, res, next) {
  const { diagnosis, prescription } = req.body
  const patient = Patient.list.find(patient => patient.name === req.body.patient)
  // find doctor instance
  const doctor = Doctor.list.find(doctor => doctor.name === req.body.doctor.name)
  // create new Medical record from the already already created medical record the doctor makes
  const newMedicalRecord = doctor.createMedicalRecord(patient, diagnosis, prescription)
  //send back that medical record
  res.send(newMedicalRecord)
})
module.exports = router
