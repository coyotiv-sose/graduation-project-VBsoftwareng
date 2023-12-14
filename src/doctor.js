const Appointment = require('./appointment')

class Doctor {
  appointments = []
  calendar = []
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

  isAvailable(date, time) {
    //if there are no appointments previously made then they are free
    const existingAppointment = this.appointments.find(
      appointment => appointment.date === date && appointment.time === time
    )

    return !existingAppointment
    // return existingAppointment ? false : true
  }
  createMedicalRecord(patient, diagnosis, prescription) {
    //create MedicalRecord instance
    //add the new medicalRecord instance to the patient medicalRecord
  }
}

module.exports = Doctor
