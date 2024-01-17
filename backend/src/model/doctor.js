const Appointment = require('./appointment.js')
const MedicalRecord = require('./medicalRecord.js')
const Address = require('./address.js')
const mongoose = require('mongoose')

const doctorSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  especialization: String,
  location: String,
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address',
  },
  appointments: [],
  calendar: [],
  reviews: [],
})
class Doctor {
  // appointments = []
  // calendar = []
  // reviews = []
  // //package =

  // constructor(name, lastName, especialization, location, address) {
  //   this.name = name
  //   this.lastName = lastName
  //   this.especialization = especialization
  //   this.location = location
  // this is another way to create the instance of address:
  // const {street, zipCode, district, city } = address
  // this.address = Address.create({ street, zipCode, district, city })

  //   this.address = Address.create({
  //     street: address.street,
  //     zipCode: address.zipCode,
  //     district: address.district,
  //     city: address.city,
  //   })
  // }

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
    const medicalRecord = new MedicalRecord(patient, diagnosis, prescription)

    //add the new medicalRecord instance to the patient medicalRecord
    patient.medicalRecordsHistory.push(medicalRecord)
    return medicalRecord
  }

  // static create({ name, lastName, especialization, location, address }) {
  //   // complete static create method
  //   const newDoctor = new Doctor(name, lastName, especialization, location, address)

  //   Doctor.list.push(newDoctor)

  //   return newDoctor
  // }

  // static list = []
}

module.exports = mongoose.model('Doctor', doctorSchema)
