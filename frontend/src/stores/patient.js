// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

export const usePatientStore = defineStore('patient', {
  state: () => {
    return {}
  },

  actions: {
    async fetchPatients() {
      const patients = (await axios.get('/patients')).data

      return patients
    },
    async fetchPatient(patientId) {
      const patient = (await axios.get(`/patients/${patientId}`)).data

      return patient
    }
  }
})
