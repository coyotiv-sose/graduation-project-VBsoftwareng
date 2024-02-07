// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.withCredentials = true

export const useAppointmentStore = defineStore('appointment', {
  state: () => {
    return {}
  },

  actions: {
    async fetchAppointments() {
      const appointments = (await axios.get('/appointments')).data

      return appointments
    },
    async bookAppointment(doctorId, date, time) {
      const newAppointment = await axios.post('/appointments', {
        doctorId,
        date,
        time
      })

      return newAppointment
    }
  }
})
