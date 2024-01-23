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
        await axios.post('http://localhost:3000/authentication/login', {
          email,
          password
        })
      ).data
      this.user = user
    }
  }
})
