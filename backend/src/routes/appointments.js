var express = require('express')
var router = express.Router()
var Appointment = require('../model/appointment')
const Patient = require('../model/patient')
const Doctor = require('../model/doctor')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})
// add put handler to change appoitnment TO DO: CREATE A ROOT HANDLER FOR APPOINTMENT

// router.put('/:date', function (req, res, next) {
//   const userEmail = req.body.userEmail

//   const user = User.list.find(user => user.email === userEmail)

//   const updatedStory = user.updateStoryByTitle(storyTitle, newStoryData)

//   res.status(200).send(updatedStory)
// })
// Create a new appointment using post
router.post('/', function (req, res, next) {
  console.log('------------------------------ Create Appointment ---------')
  const { doctorName, patientName, date, time } = req.body
  // create a new patient
  const patientIndex = Patient.list.findIndex(patient => patient.name === patientName)
  const patientInformation = Patient.list[patientIndex]

  const doctorIndex = Doctor.list.findIndex(doctor => doctor.name === doctorName)
  const doctorInformation = Doctor.list[doctorIndex]

  //const doctorManuel = new Doctor('Manuel', 'Cruz', 'Intern', 'Berlin, Kreuzberg', 'Mullstrasse 30')

  //HOW DO I GET ACCESS TO A RETURN APPOINTMENT
  const newAppointment = patientInformation.book(doctorInformation, date, time)

  // send back that patient
  console.log('------------------------------ Created Appointment ---------')
  res.send(newAppointment)
})
module.exports = router

// appointments => get all appointments
// appointments/appointmentId => get one specific appointment with id
// doctors/doctortName/reviews - get => get all reviews for that specific doctor
// doctors/doctortName/reviews - post => create a new review
