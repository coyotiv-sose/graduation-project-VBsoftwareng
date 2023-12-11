const Doctor = require('./doctor.js')
const Patient = require('./patient.js')

const doctor = new Doctor('Max', 'Thiele', 'Internist')
const anotherDoctor = new Doctor('Ole', 'Tamez', 'Surgeon')
const patient = new Patient('Laura', 'Sanchez', '01.11.1985', 'female')
const anotherPatient = new Patient('Niko', 'Sanchez', '01.11.1985', 'male')
// const patient = {
//   name: 'veronica',
//   lastName: 'barreda',
//   birthdate: '24.10.1990',
//   sex: 'female',
//   appointments: [],
//   book(doctor, date, time) {
//     const appointment = {
//       doctor: doctor,
//       date: date,
//       time: time,
//       patient: this,
//     }
//     this.appointments.push(appointment) //  add appointment to patient's appointments
//     doctor.appointments.push(appointment) //  add appointment to doctors appointments
//   },
// }
//const doctor = { name: 'Billy', lastName: 'Fizz', especialization: 'Orthopedic', appointments: [] }

patient.book(doctor, '12.12.2023', '13:00')
anotherPatient.book(doctor, '12.12.2023', '13:00') // shouldn't work because doctor is not available
patient.book(anotherDoctor, '15.12.2023', '11:00')
console.log('patient should have 2 appointments ', patient.appointments.length)
console.log('doctor should have 1 appointment ', doctor.appointments.length)
console.log('anotherDoctor should have 1 appointment ', anotherDoctor.appointments.length)
//console.log('patient should have all appointments ', patient.appointments)
// console.log(doctor.appointments)
