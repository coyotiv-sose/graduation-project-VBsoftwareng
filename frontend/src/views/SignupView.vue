<script>
import axios from 'axios'
import { useAuthenticationStore } from '@/stores/authentication-store'
import { mapActions } from 'pinia'

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
    ...mapActions(useAuthenticationStore, ['signup']),
    async doSignUp() {
      const newUser = await this.signup(
        this.name,
        this.lastName,
        this.email,
        this.password,
        this.role,
        this.birthdate,
        this.insurance,
        this.sex,
        this.especialization,
        this.location,
        this.address
      )
      if (newUser) {
        this.status = 'Sign up successful'
      } else {
        this.status = 'Sign up failed'
      }
      console.log(newUser)
      this.$router.push('/login')
    }
  }
}
</script>
<template>
  <form v-on:submit.prevent="doSignUp">
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
      <input type="text" placeholder="Especialization" v-model="especialization" required />
      <input type="text" placeholder="Name" v-model="name" required />
      <input type="text" placeholder="Lastname" v-model="lastName" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <input type="text" placeholder="Address" v-model="address.street" required />
      <input type="text" placeholder="ZipCode" v-model="address.zipCode" required />
      <input type="text" placeholder="State or District" v-model="address.district" required />
      <input type="text" placeholder="Location" v-model="location" required />
    </div>

    <button type="submit">Sign up</button>
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
