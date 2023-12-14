const Appointment = require('./appointment')
class Patient {
  appointments = []
  medicalRecords = []

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
}

module.exports = Patient
