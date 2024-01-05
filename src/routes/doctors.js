const express = require('express')
const router = express.Router()
const Doctor = require('../doctor')

/* GET doctors listing. */
router.get('/', function (req, res, next) {
  res.send(Doctor.list)
})
router.get('/:doctorName', function (req, res, next) {
  //find doctor instance inside of the doctor list array by doctorName
  //res.send(Doctor.list.doctorName)
  //what steps i need to retrive a doctor?
  //I need to look for an specific doctor in the list
  for (let i = 0; i < Doctor.list.length; i++) {
    // you see the doctor list

    // you look for the doctor name you are searching
    if (Doctor.list[i].name === req.params.doctorName) {
      // if the name is valid or the same you are looking for then is that one if not another one
      res.send(Doctor.list[i])
    }
  }
})

// Create a new Doctor using post
router.post('/', function (req, res, next) {
  const { name, lastName, especialization, location, address } = req.body
  // create a new doctor
  const newDoctor = Doctor.create({ name, lastName, especialization, location, address })
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
