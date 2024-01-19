const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  date: String,
  time: String,
  location: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  reviewText: String,
  ratingNumber: Number,
})
class Appointment {
  // constructor(doctorId, patientId, date, time, location, address) {
  //   this.doctorId = doctorId
  //   this.patientId = patientId
  //   this.date = date
  //   this.time = time
  //   this.location = location
  //   this.address = address
  //   this.reviewText = undefined
  //   this.ratingNumber = undefined
  // }
}
appointmentSchema.loadClass(Appointment)
module.exports = mongoose.model('Appointment', appointmentSchema)
