var express = require('express')
var router = express.Router()
var Appointment = require('../model/appointment')
const Patient = require('../model/patient')
const Doctor = require('../model/doctor')

/* GET appointments listing. */

router.get('/', async function (req, res, next) {
  res.send(await Appointment.find())
})
// router.get('/:doctorId', async function (req, res, next) {
//   const doctor = await Doctor.findById(req.params.doctorId)
//   res.send(doctor)

// add put handler to change appoitnment TO DO: CREATE A ROOT HANDLER FOR APPOINTMENT

// router.put('/:date', function (req, res, next) {
//   const userEmail = req.body.userEmail

//   const user = User.list.find(user => user.email === userEmail)

//   const updatedStory = user.updateStoryByTitle(storyTitle, newStoryData)

//   res.status(200).send(updatedStory)
// })
// Create a new appointment using post
router.post('/', async function (req, res, next) {
  console.log('------------------------------ Create Appointment ---------')
  const { doctorId, patientId, date, time } = req.body
  //find existing patient by id
  const patient = await Patient.findById(patientId)
  //const patientInformation = Patient.list[patientIndex]

  const doctor = await Doctor.findById(doctorId)
  //const doctorInformation = Doctor.list[doctorIndex]
  //const doctorManuel = new Doctor('Manuel', 'Cruz', 'Intern', 'Berlin, Kreuzberg', 'Mullstrasse 30')

  const newAppointment = await patient.book(doctor, date, time)

  // send back that patient
  console.log('--------- Create Appointment ---------')
  res.send(newAppointment)
})
module.exports = router

// appointments => get all appointments
// appointments/appointmentId => get one specific appointment with id
// doctors/doctortName/reviews - get => get all reviews for that specific doctor
// doctors/doctortName/reviews - post => create a new review
