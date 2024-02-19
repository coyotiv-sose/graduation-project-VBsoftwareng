var express = require('express')
var router = express.Router()
const MedicalRecord = require('../model/medicalRecord')
const Doctor = require('../model/doctor')
const Patient = require('../model/patient')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})
// define route for creating a medical record
router.post('/', async (req, res, next) => {
  const { patientId, diagnosis, prescription } = req.body
  const doctor = await Doctor.findOne({ authUser: req.user._id })
  const patient = await Patient.findById(patientId)

  try {
    const newMedicalRecord = await doctor.createMedicalRecord(patient, diagnosis, prescription)
    // Respond with the Newly Created Medical Record
    res.send(newMedicalRecord)
  } catch (error) {
    console.error('Error creating medical record:', error)
    res.status(500).json({ error: 'Failed to create medical record' })
  }
})
// // Create a new Medical record using post
// router.post('/', async (req, res, next) => {
//   try {
//     const { patientId, doctorId, diagnosis, prescription } = req.body
//     // Create a new MedicalRecord document
//     const newMedicalRecord = await MedicalRecord.create({
//       patient: patientId,
//       diagnosis: diagnosis,
//       prescription: prescription,
//     })
//     // Update the Doctor document to include the new medical record
//     await Doctor.findByIdAndUpdate(doctorId, { $push: { medicalRecords: newMedicalRecord._id } })

//     // Update the Patient document to include the new medical record
//     await Patient.findByIdAndUpdate(patientId, { $push: { medicalRecords: newMedicalRecord._id } })

//     // Respond with the newly created medical record
//     res.status(201).send(newMedicalRecord)
//   } catch (error) {
//     console.error('Failed to create medical record:', error)
//     res.status(500).send({ error: 'Failed to create medical record' })
//   }
// })

module.exports = router

//   const patient = Patient.list.find(patient => patient.name === req.body.patient)
//   // find doctor instance
//   const doctor = Doctor.list.find(doctor => doctor.name === req.body.doctor.name)
//   // create new Medical record from the already already created medical record the doctor makes
//   const newMedicalRecord = doctor.createMedicalRecord(patientId, diagnosis, prescription)
//   //send back that medical record
//   res.send(newMedicalRecord)
// })
// module.exports = router
