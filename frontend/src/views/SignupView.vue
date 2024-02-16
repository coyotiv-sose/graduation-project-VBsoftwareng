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
      role: '',
      birthdate: '',
      insurance: '',
      sex: '',
      especialization: '',
      location: '',
      address: { street: '', zipCode: '', district: '', city: '' }
    }
  },
  methods: {
    async signup() {
      const newUser = await axios.post('http://localhost:3000/authentication/newUser', {
        name: this.name,
        lastName: this.lastName,
        email: this.email,
        password: this.password,
        role: this.role,
        birthdate: this.birthdate,
        insurance: this.insurance,
        sex: this.sex,
        especialization: this.especialization,
        location: this.location,
        address: this.address
      })
      if (newUser) {
        this.status = 'Sign up successful'
      } else {
        this.status = 'Sign up failed'
      }
      console.log(newUser.data)
      this.$router.push('/login')
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

    <!-- Container for inputs shown only when 'patient' is selected -->
    <div v-if="role === 'patient'">
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="text" placeholder="Lastname" v-model="lastName" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <!-- Use type="email" for email validation -->
      <input type="password" placeholder="Password" v-model="password" required />
      <input type="text" placeholder="Sex" v-model="sex" required />
      <input type="text" placeholder="Insurance" v-model="insurance" required />
      <input type="date" placeholder="Birthdate" v-model="birthdate" required />
    </div>

    <div v-if="role === 'doctor'">
      <input type="specialization" placeholder="Specialization" v-model="Specialization" required />
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="text" placeholder="Lastname" v-model="lastName" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <input type="address" placeholder="Address" v-model="street" required />
      <input type="City" placeholder="City" v-model="city" required />
      <input type="District" placeholder="State or District" v-model="district" required />
      <input type="zipCode" placeholder="Post Code" v-model="zipCode" required />
      <input type="country" placeholder="Country" v-model="country" required />
      <!-- <label for="especialization">Especialization:</label>
      <input id="especialization" v-model="especialization" type="text" />
      <label for="location">Location:</label>
      <input id="location" v-model="location" type="text" />
      <label for="street">Street:</label>
      <input id="street" v-model="address.street" type="text" />
      <label for="zipCode">ZipCodes:</label>
      <input id="zipCode" v-model="address.zipCode" type="text" />
      <label for="district">District:</label>
      <input id="district" v-model="address.district" type="text" />
      <label for="city">City:</label>
      <input id="city" v-model="address.city" type="text" /> -->
    </div>

    <button type="submit" @click="signup">Sign up</button>
    <p>Do you already have a <a href="/login">login</a>?</p>
    <label>{{ status }}</label>
  </form>
</template>
<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  height: 50vh;
}
</style>
