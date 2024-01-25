<script>
import axios from 'axios'
export default {
  name: 'SignupView',
  components: {},
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      password: '',
      status: ''
    }
  },
  methods: {
    async signup() {
      const newUser = await axios.post('http://localhost:3000/authentication/newUser', {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password
      })
      if (newUser) {
        this.status = 'Login successful'
      } else {
        this.status = 'Login failed'
      }
      console.log(newUser.data)
    }
  }
}
</script>
<template>
  <form v-on:submit.prevent>
    <input type="text" placeholder="Name" v-model="name" required />
    <input type="text" placeholder="Lastname" v-model="lastName" required />
    <input type="text" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <button type="submit" @click="signup">Sign up</button>

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
