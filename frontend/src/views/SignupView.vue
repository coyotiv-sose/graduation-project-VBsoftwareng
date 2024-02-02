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

    <input type="text" placeholder="Name" v-model="name" required />
    <input type="text" placeholder="Lastname" v-model="lastName" required />
    <input type="text" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div v-if="role === 'patient'">
      <!-- <label for="name">Name:</label>
      <input id="name" v-model="patientName" type="text" />
      <label for="lastName">LastName:</label>
      <input id="lastname" v-model="patientLastName" type="text" /> -->
      <label for="sex">Sex:</label>
      <input id="sex" v-model="sex" type="text" />
      <label for="insurance">Insurance:</label>
      <input id="insurance" v-model="insurance" type="text" />
      <label for="birthdate">Birthdate:</label>
      <input id="birthdate" v-model="birthdate" type="text" />
    </div>

    <div v-if="role === 'doctor'">
      <!-- <label for="name">Name:</label>
      <input id="name" v-model="doctorName" type="text" />
      <label for="lastName">LastName:</label>
      <input id="lastName" v-model="doctorLastName" type="text" /> -->
      <label for="especialization">Especialization:</label>
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
      <input id="city" v-model="address.city" type="text" />
    </div>

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
