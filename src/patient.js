const Appointment = require('./appointment')
const Review = require('./review')
class Patient {
  appointments = []
  medicalRecordsHistory = []

  constructor(name, lastName, birthdate, sex, insurance) {
    this.name = name
    this.lastName = lastName
    this.birthdate = birthdate
    this.sex = sex
    this.insurance = insurance
  }
  book(doctor, date, time) {
    console.log(doctor, date, time)
    if (doctor.isAvailable(date, time)) {
      console.log('Doctor is available')
      const appointment = new Appointment(doctor.name, this.name, date, time)

      this.appointments.push(appointment) //  add appointment to patient's appointments
      doctor.appointments.push(appointment)

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
  static create({ name, lastName, birthdate, sex, insurance }) {
    // complete static create method
    const newPatient = new Patient(name, lastName, birthdate, sex, insurance)

    Patient.list.push(newPatient)

    return newPatient
  }

  static updatePatient(patient, newValues) {
    const updatedPatient = { ...patient, ...newValues }

    Object.assign(patient, newValues) //((this the same as line 48))
    return updatedPatient
  }

  static list = []
}

module.exports = Patient
