const express = require('express')
const router = express.Router()
const Doctor = require('../model/doctor')
const Address = require('../model/address')
const Appointment = require('../model/appointment')
const Patient = require('../model/patient')

/* GET doctors listing. */
router.get('/', async function (req, res, next) {
  res.send(await Doctor.find())
})

router.get('/patientsInfo', async function (req, res, next) {
  console.log('where are we')
  const doctor = await Doctor.findOne({ authUser: req.user._id })
  const appointments = await Appointment.find({ doctor: doctor._id })
  const patientsIds = appointments.map(appointment => appointment.patient)
  const patients = await Patient.find({ _id: { $in: patientsIds } })
  res.send(patients)
})

router.get('/:doctorId', async function (req, res, next) {
  try {
    const doctor = await Doctor.findById(req.params.doctorId)
    res.send(doctor)
  } catch (error) {
    res.sendStatus(404)
  }

  //find doctor instance inside of the doctor list array by doctorName
  //res.send(Doctor.list.doctorName)
  //what steps i need to retrive a doctor?
  //I need to look for an specific doctor in the list
  // //for (let i = 0; i < Doctor.list.length; i++) {
  //   // you see the doctor list

  //   // you look for the doctor name you are searching
  //   if (Doctor.list[i].name === req.params.doctorName) {
  //     // if the name is valid or the same you are looking for then is that one if not another one

  //     return res.send(Doctor.list[i])
  //   }
  // }
  // res.sendStatus(404)
})

// Create a new Doctor using post
router.post('/', async function (req, res, next) {
  const { name, lastName, especialization, location, address } = req.body
  const newAddress = await Address.create({
    street: address.street,
    zipCode: address.zipCode,
    district: address.district,
    city: address.city,
  })
  // create a new doctor
  const newDoctor = await Doctor.create({ name, lastName, especialization, location, address: newAddress })
  // send back that doctor
  res.send(newDoctor)
})
//  DELETE doctor
router.delete('/:doctor', function (req, res, next) {
  // this is to access the url for patient  req.params.patientId
  //find the index of the patient in the array
  const doctorIndex = Doctor.list.findIndex(doctor => doctor.name === req.params.doctor)
  // remove it from the array
  Doctor.list.splice(doctorIndex, 1)
  // send back a response if succesfull
  res.sendStatus(200)
  // when i am done commiting succesfull change i use git stash pop to get my changes back
})

module.exports = router
