class Appointment {
  constructor(doctor, patient, date, time, location) {
    this.doctor = doctor
    this.patient = patient
    this.date = date
    this.time = time
    this.location = location
    this.reviewText = undefined
    this.ratingNumber = undefined
  }
}
module.exports = Appointment
