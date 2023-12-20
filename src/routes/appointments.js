var express = require('express')
var router = express.Router()
var Appointment = require('../appointment')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})
// Create a new appointment using post
router.post('/', function (req, res, next) {
  const { doctor, patient, date, time, location, address } = req.body
  // create a new patient
  const newAppointment = new Appointment(doctor, patient, date, time, location, address)
  // send back that patient
  res.send(newAppointment)
})
module.exports = router

// appointments => get all appointments
// appointments/appointmentId => get one specific appointment with id
// doctors/doctortName/reviews - get => get all reviews for that specific doctor
// doctors/doctortName/reviews - post => create a new review
