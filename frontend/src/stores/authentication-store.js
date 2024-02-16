import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthenticationStore = defineStore('authentication', {
  state: () => {
    return {
      user: null
    }
  },

  actions: {
    async signup(
      name,
      lastName,
      email,
      password,
      role,
      birthdate,
      insurance,
      sex,
      especialization,
      location,
      address
    ) {
      const newUser = await axios.post(
        import.meta.env.VITE_BACKEND_URL + '/authentication/newUser',
        {
          name,
          lastName,
          email,
          password,
          role,
          birthdate,
          insurance,
          sex,
          especialization,
          location,
          address
        },
        { withCredentials: true }
      ).data
      return newUser
    },
    async login(email, password) {
      const user = (
        await axios.post(
          import.meta.env.VITE_BACKEND_URL + '/authentication/session',
          {
            email,
            password
          },
          { withCredentials: true }
        )
      ).data
      this.user = user
    },
    async logout() {
      await axios.delete(import.meta.env.VITE_BACKEND_URL + '/authentication/session', {
        withCredentials: true
      })
      this.user = null
    },

    // async retrieveUser() {
    //   const user = (
    //     await axios.get(import.meta.env.VITE_BACKEND_URL + '/authentication/session', {
    //       withCredentials: true
    //     })
    //   ).data

    //   this.user = user
    //   return user
    // },
    async fetchUser() {
      const user = (
        await axios.get(import.meta.env.VITE_BACKEND_URL + '/authentication/session', {
          withCredentials: true
        })
      ).data
      console.log('what comes back?', user)
      this.user = user
      return user
    }
  }
})
//
