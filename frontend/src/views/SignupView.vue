<script>
import axios from 'axios'
import { vModelCheckbox } from 'vue'
export default {
  name: 'SignupView',
  components: { vModelCheckbox },
  data() {
    return {
      name: '',
      lastName: '',
      email: '',
      password: '',
      status: '',
      role: ''
    }
  },
  methods: {
    async signup() {
      const newUser = await axios.post('http://localhost:3000/authentication/newUser', {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        role: this.role
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
    <h2>I am a</h2>
    <select v-model="role">
      <option disabled value="">Please select one</option>
      <option value="doctor">Doctor</option>
      <option value="patient">Patient</option>
    </select>
    <div v-if="role === 'doctor'">
      <label for="name">Name:</label>
      <input id="name" v-model="doctorName" type="text" />
      <label for="lastName">LastName:</label>
      <input id="lastName" v-model="doctorLastName" type="text" />
      <label for="especialization">Especialization:</label>
      <input id="especialization" v-model="doctorEspecialization" type="text" />
      <label for="location">Location:</label>
      <input id="location" v-model="doctorLocation" type="text" />
      <label for="address">Address:</label>
      <input id="address" v-model="doctorAddress" type="text" />
    </div>

    <div v-if="role === 'patient'">
      <label for="name">Name:</label>
      <input id="name" v-model="patientName" type="date" />
      <label for="lastName">LastName:</label>
      <input id="lastname" v-model="patientLastName" type="date" />
      <label for="sex">Sex:</label>
      <input id="sex" v-model="patientSex" type="date" />
      <label for="insurance">Insurance:</label>
      <input id="insurance" v-model="patientInsurance" type="date" />
    </div>

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
