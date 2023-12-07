class Patient {
  appointments = []
  labResults = []

  constructor(name, lastName, birthdate, sex) {
    this.name = name
    this.lastName = lastName
    this.birthdate = birthdate
    this.sex = sex
  }
  book(doctor, date, time) {
    const appointment = {
      doctor: doctor,
      date: date,
      time: time,
      patient: this,
    }
    this.appointments.push(appointment) //  add appointment to patient's appointments
    doctor.appointments.push(appointment)
  }
}

module.exports = Patient
