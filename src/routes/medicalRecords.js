var express = require('express')
var router = express.Router()
const MedicalRecord = require('../medicalrecord')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})
// Create a new Medical record using post
router.post('/', function (req, res, next) {
  const { patient, diagnosis, prescription, history } = req.body
  // create new Medical record
  const newMedicalRecord = new MedicalRecord(patient, diagnosis, prescription, history)
  //send back that medical record
  res.send(newMedicalRecord)
})
module.exports = router
