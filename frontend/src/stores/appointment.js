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
    }
  }
})
