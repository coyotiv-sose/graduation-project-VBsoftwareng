const Appointment = require('./appointment')
class Patient {
  appointments = []
  labResults = []

  constructor(name, lastName, birthdate, sex, insurance) {
    this.name = name
    this.lastName = lastName
    this.birthdate = birthdate
    this.sex = sex
    this.insurance = insurance
  }
  book(doctor, date, time) {
    const appointment = new Appointment(doctor, this, date, time)

    //const appointment = {
    //doctor: doctor,
    //date: date,
    //time: time,
    //patient: this,
    //}
    this.appointments.push(appointment) //  add appointment to patient's appointments
    doctor.appointments.push(appointment)
  }
}

module.exports = Patient
