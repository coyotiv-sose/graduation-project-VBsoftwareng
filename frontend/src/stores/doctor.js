// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

export const useDoctorStore = defineStore('doctor', {
  state: () => {
    return {}
  },

  actions: {
    async fetchDoctors() {
      const doctors = (await axios.get('/doctors')).data

      return doctors
    },
    async fetchDoctor(doctorId) {
      const doctor = (await axios.get(`/doctors/${doctorId}`)).data

      return doctor
    },
    async fetchPatients() {
      const patients = (await axios.get('/doctors/patientsInfo')).data

      return patients
    }
  }
})
