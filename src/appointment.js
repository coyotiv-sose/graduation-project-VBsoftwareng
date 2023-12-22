class Appointment {
  constructor(doctorId, patientId, date, time, location, address) {
    this.doctorId = doctorId
    this.patientId = patientId
    this.date = date
    this.time = time
    this.location = location
    this.address = address
    this.reviewText = undefined
    this.ratingNumber = undefined
  }
}
module.exports = Appointment
