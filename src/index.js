const axios = require('axios')

async function main() {
  const patientThomas = await axios.post('http://localhost:3000/patients', {
    name: 'Thomas',
    lastName: 'ddd',
    birthdate: '12.12.1992',
    sex: 'male',
    insurance: 'tk',
  })
  const patientPipo = await axios.post('http://localhost:3000/patients', {
    name: 'Pipo',
    lastName: 'hix',
    birthdate: '10.12.1978',
    sex: 'male',
    insurance: 'aok',
  })
  //await axios.delete('http://localhost:3000/patients/Pipo')

  console.log('Patient Pipo: ', patientPipo.data)
  console.log('Patient Thomas: ', patientThomas.data)

  const doctorManuel = await axios.post('http://localhost:3000/doctors', {
    name: 'Manuel',
    lastName: 'Cruz',
    especialization: 'Intern',
    location: 'Berlin, Kreuzberg',
    address: 'Mulstrasse 30',
  })
  console.log('Doctor Manuel:', doctorManuel.data)

  const newAppointment = await axios.post('http://localhost:3000/appointments', {
    doctor: 'Jessica',
    patient: 'Ingrid',
    date: '24.02.1980',
    time: '9:00',
    location: 'Hospital los Angeles',
    address: 'calle las lomas 23',
  })
  console.log('newAppointment:', newAppointment.data)
  const allPatients = await axios.get('http://localhost:3000/patients')
  console.log('All patients: ', allPatients.data)
}
main()

// const Doctor = require('./doctor.js')
// const Patient = require('./patient.js')

// const doctor = new Doctor('Max', 'Thiele', 'Internist')
// const anotherDoctor = new Doctor('Ole', 'Tamez', 'Surgeon')
// const patientZero = new Patient('Laura', 'Sanchez', '01.11.1985', 'female')
// const anotherPatient = new Patient('Niko', 'Sanchez', '01.11.1985', 'male')
// // const patient = {
// //   name: 'veronica',
// //   lastName: 'barreda',
// //   birthdate: '24.10.1990',
// //   sex: 'female',
// //   appointments: [],
// //   book(doctor, date, time) {
// //     const appointment = {
// //       doctor: doctor,
// //       date: date,
// //       time: time,
// //       patient: this,
// //     }
// //     this.appointments.push(appointment) //  add appointment to patient's appointments
// //     doctor.appointments.push(appointment) //  add appointment to doctors appointments
// //   },
// // }
// //const doctor = { name: 'Billy', lastName: 'Fizz', especialization: 'Orthopedic', appointments: [] }
// const diagnosisForPatientZero = ['flue', 'migraine']
// const prescriptionForPatientZero = ['nasal spray', 'paracetamol']
// const patientMakesAppointment = patientZero.book(doctor, '12.12.2023', '13:00', 'Hospital orthopedico')

// patientZero.review(patientMakesAppointment, 'doctor was amazing', 5)
// doctor.createMedicalRecord(patientZero, diagnosisForPatientZero, prescriptionForPatientZero)
// anotherPatient.book(doctor, '12.12.2023', '13:00') // shouldn't work because doctor is not available
// patientZero.book(anotherDoctor, '15.12.2023', '11:00')
// console.log('patient should have 2 appointments ', patientZero.appointments.length)
// console.log('doctor should have 1 appointment ', doctor.appointments.length)
// console.log('anotherDoctor should have 1 appointment ', anotherDoctor.appointments.length)
// //console.log('patientZero should have all appointments ', patientZero.appointments)
// // console.log(doctor.appointments)
// console.log(patientMakesAppointment)
// console.log(doctor)
// console.log(patientZero.review)

//create patient
