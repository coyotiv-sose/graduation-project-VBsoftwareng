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
  const { doctorId, date, time } = req.body
  //find existing patient by id
  const patient = await Patient.findOne({ authUser: req.user._id })

  const doctor = await Doctor.findById(doctorId)

  const newAppointment = await patient.book(doctor, date, time)

  // send back that patient

  res.send(newAppointment)
})
// Update an existing appointment and cancel
router.put('/:appointmentId', async function (req, res, next) {
  try {
    const { appointmentId } = req.params
    const updateData = req.body

    const cancelAppointment = await Appointment.findByIdAndUpdate(appointmentId, updateData, { new: true })
    if (!cancelAppointment) {
      return res.status(404).send({ message: 'Appointment not found' })
    }
    res.send(cancelAppointment)
  } catch (error) {
    next(error)
  }
})
router.patch('/:appointmentId', async function (req, res, next) {
  try {
    const { appointmentId } = req.params
    const { status } = req.body

    const cancelAppointment = await Appointment.findByIdAndUpdate(appointmentId, updateData, { new: true })
    if (!cancelAppointment) {
      return res.status(404).send({ message: 'Appointment not found' })
    }
    res.send(cancelAppointment)
  } catch (error) {
    next(error)
  }
})
module.exports = router
