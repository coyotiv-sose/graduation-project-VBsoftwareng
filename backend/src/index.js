const axios = require('axios')
axios.defaults.baseURL = 'http://localhost:3000'

async function main() {
  const patientThomas = await axios.post('/patients', {
    name: 'Thomas',
    lastName: 'ddd',
    birthdate: '12.12.1992',
    sex: 'male',
    insurance: 'tk',
  })
  const patientPipo = await axios.post('/patients', {
    name: 'Pipo',
    lastName: 'hix',
    birthdate: '10.12.1978',
    sex: 'male',
    insurance: 'aok',
  })
  await axios.delete(`/patients/${patientPipo.data._id}`)
  // const patientForUpdate = await axios.post('/patients', {
  //   name: 'Samuel',
  //   lastName: 'Lui',
  //   birthdate: '02.08.1979',
  //   sex: 'male',
  //   insurance: 'aok',
  // })
  // console.log('Patient Samuel: ', patientForUpdate.data)
  // console.log('Patient Thomas: ', patientThomas.data)
  // const updatedPatient = await axios.put('/patients/Thomas', {
  //   newValues: { insurance: 'baba' },
  // })
  // console.log('updated Patient Samuel', updatedPatient.data)

  // const doctorManuel = await axios.post('/doctors', {
  //   name: 'Manuel',
  //   lastName: 'Cruz',
  //   especialization: 'Intern',
  //   location: 'Caritas Hospital',
  //   address: { street: 'solmsstrasse', zipCode: '1760', district: 'Kreuzberg', city: 'Berlin' },
  // })
  // const doctorNuman = await axios.post('/doctors', {
  //   name: 'Numan',
  //   lastName: 'Fez',
  //   especialization: 'Cirujano',
  //   location: 'Estambul, Turquia',
  //   address: 'Muler 90',
  // })
  // //   console.log('Doctor Numan:', doctorNuman.data)
  // const doctor = await axios.get('/doctors/Numan')
  // console.log('Doctor name ', doctor.data.name)

  // const newAppointment = await axios.post('/appointments', {
  //   doctorName: 'Manuel',
  //   patientName: 'Samuel',
  //   date: '24.02.2024',
  //   time: '9:00',
  // })

  // console.log('newAppointment:', newAppointment.data)
  // await axios.delete('/patients/Pipo')

  // const patientChange = await axios.put('/patients/Samuel', {
  //   newValues: { insurance: 'axa' },
  // })
  // console.log(patientChange.data)
  // //await axios.delete('/patients/Digdem')
  // //   const newMedicalRecord = await axios.post('/medicalRecords', {
  // //     patient: 'Thomas',
  // //     diagnosis: 'Flue',
  // //     prescription: 'Ibu',
  // //     doctor: doctorManuel.data,
  // //   })

  // //   const allDoctors = await axios.get('/doctors')
  // const allPatients = await axios.get('/patients')
  // console.log('All patients: ', allPatients.data)
  // // console.log('All doctors', allDoctors.data)
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
