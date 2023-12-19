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
    if (doctor.isAvailable(date, time)) {
      const appointment = new Appointment(doctor, this, date, time)

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
}

module.exports = Patient
