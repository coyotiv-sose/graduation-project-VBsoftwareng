const Appointment = require('./appointment')
const Review = require('./review')
const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')

const patientSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  birthdate: String,
  sex: String,
  insurance: String,
  appointments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', autopopulate: true }],
  medicalRecordHistory: [],
  authUser: { type: mongoose.Schema.Types.ObjectId, ref: 'AuthUser', required: true, autopopulate: true },
})

class Patient {
  // appointments = []
  // medicalRecordsHistory = []

  // constructor(name, lastName, birthdate, sex, insurance) {
  //   this.name = name
  //   this.lastName = lastName
  //   this.birthdate = birthdate
  //   this.sex = sex
  //   this.insurance = insurance
  // }
  async book(doctor, date, time) {

    if (doctor.isAvailable(date, time)) {
      
      const appointment = await Appointment.create({ doctor, patient: this, date, time })

      this.appointments.push(appointment) //  add appointment to patient's appointments
      doctor.appointments.push(appointment)

      await this.save()
      await doctor.save()

      return appointment
    }

    return
  }
  review(appointment, reviewText, ratingNumber) {
    // if the appointmnet took place (date in the past)
    // set appoitments review text to review text
    const review = new Review(appointment, reviewText, ratingNumber)

    appointment.doctor.reviews.push(review)

    return review
  }
  // static create({ name, lastName, birthdate, sex, insurance }) {
  //   // complete static create method
  //   const newPatient = new Patient(name, lastName, birthdate, sex, insurance)

  //   Patient.list.push(newPatient)

  //   return newPatient
  // }

  // static updatePatient(patient, newValues) {
  //   const updatedPatient = { ...patient, ...newValues }

  //   Object.assign(patient, newValues) //((this the same as line 48))
  //   return updatedPatient
  // }

  // static list = []
}
patientSchema.loadClass(Patient)
patientSchema.plugin(autopopulate)

module.exports = mongoose.model('Patient', patientSchema)
