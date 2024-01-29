import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthenticationStore = defineStore('authentication', {
  state: () => {
    return {
      user: null
    }
  },
  actions: {
    async login(email, password) {
      const user = (
        await axios.post(import.meta.env.VITE_BACKEND_URL + '/authentication/login', {
          email,
          password
        })
      ).data
      this.user = user
    },
    async retrieveUser() {
      const user = (
        await axios.get(import.meta.env.VITE_BACKEND_URL + '/authentication/session', {
          withCredentials: true
        })
      ).data

      this.user = user
      return user
    },
    async fetchUser() {
      const user = (
        await axios.get(import.meta.env.VITE_BACKEND_URL + '/authentication/session', {
          withCredentials: true
        })
      ).data
      this.user = user
      return user
    }
  }
})
//
