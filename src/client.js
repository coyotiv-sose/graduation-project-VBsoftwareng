const Axios = require('axios')

const client = Axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' },
})

async function getUsers() {
  try {
    const response = await client.get('/users')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

getUsers()

async function getPatients() {
  try {
    const response = await client.get('/patients')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
getPatients()

async function getDoctors() {
  try {
    const response = await client.get('/doctors')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
getDoctors()

async function getAppointments() {
  try {
    const response = await client.get('/appointments')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
getAppointments()

async function getMedicalRecords() {
  try {
    const response = await client.get('/medicalRecords')

    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
getMedicalRecords()
