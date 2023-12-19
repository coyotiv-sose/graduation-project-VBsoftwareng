class Appointment {
  constructor(doctor, patient, date, time) {
    this.doctor = doctor
    this.patient = patient
    this.date = date
    this.time = time
    this.reviewText = undefined
    this.ratingNumber = undefined
  }
}
module.exports = Appointment
