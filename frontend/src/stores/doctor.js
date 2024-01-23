// stores/counter.js
import { defineStore } from 'pinia'
import axios from 'axios'

export const useDoctorStore = defineStore('doctor', {
  state: () => {
    return {}
  },

  actions: {
    async fetchDoctors() {
      const doctors = (await axios.get('http://localhost:3000/doctors')).data

      return doctors
    }
  }
})
