// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDoctorStore = defineStore('doctor', {
  state: () => {
    return {}
  },

  actions: {
    async fetchDoctors() {
      const doctors = (await axios.get(import.meta.env.VITE_BACKEND_URL + '/doctors')).data

      return doctors
    }
  }
})
