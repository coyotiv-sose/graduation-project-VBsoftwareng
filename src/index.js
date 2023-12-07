const Patient = require('./patient.js')

const patient = new Patient('Laura', 'Sanchez', '01.11.1985', 'female')
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
const doctor = { name: 'Billy', lastName: 'Fizz', especialization: 'Orthopedic', appointments: [] }

patient.book(doctor, '12.12.2023', '13:00')
console.log('patient should have 1 appointment ', patient.appointments.length)
console.log('doctor should have 1 appointment ', doctor.appointments.length)
