<script>
import axios from 'axios'
import { mapActions, mapState } from 'pinia'
import { useAuthenticationStore } from '../stores/authentication-store'

export default {
  name: 'LoginView',
  components: {},
  data() {
    return {
      username: '',
      password: '',
      status: ''
    }
  },

  methods: {
    ...mapActions(useAuthenticationStore, ['login']),
    async doLogin() {
      await this.login(this.username, this.password)
      this.$router.push('/')
    }

    //   const newUser = await axios.post('http://localhost:3000/authentication/session', {
    //     email: this.username,
    //     password: this.password
    //   })
    //   console.log(newUser.data)
    //   if (newUser.data) {
    //     this.status = 'Login successful'
    //     console.log('log in successful')
    //     this.$router.push('/')
    //   } else {
    //     this.status = 'Login failed'
    //   }
    //   console.log(newUser.data)
    // }
  }
}
</script>
<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="Username" v-model="username" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <button type="submit" @click="doLogin">Login</button>
    <label>{{ status }}</label>
  </form>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>
