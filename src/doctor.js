const Appointment = require('./appointment')

class Doctor {
  appointments = []
  labResults = []
  //package =

  constructor(name, lastName, especialization) {
    this.name = name
    this.lastName = lastName
    this.especialization = especialization
  }
  getsAppointment(patient, date, time) {
    const appointment = new Appointment(this, patient, date, time)

    this.appointments.push(appointment) //  add appointment to patient's appointments
  }
}

// MAYBE I HAVE TO WORK ON THE BOOK METHOD CREATE IF AVAILABLE METHOD SO I CAN USE IT. I
//METHOD = ISAVAILABLE

module.exports = Doctor
