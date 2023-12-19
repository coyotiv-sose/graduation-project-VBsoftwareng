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
  console.log('Patient Pipo: ', patientPipo.data)
  console.log('Patient Thomas: ', patientThomas.data)
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
// const patientMakesAppointment = patientZero.book(doctor, '12.12.2023', '13:00')

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
