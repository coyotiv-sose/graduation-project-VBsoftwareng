<script>
import axios from 'axios'
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'

export default {
  name: 'DoctorsView',
  components: {},
  data() {
    return {
      doctors: []
    }
  },
  methods: {
    ...mapActions(useDoctorStore, ['fetchDoctors'])
    //   async fetchDoctors() {
    //     const doctors = (await axios.get('http://localhost:3000/doctors')).data
    //     this.doctors = doctors
    //   }
  },
  async mounted() {
    this.doctors = await this.fetchDoctors()
  }
}
</script>
<template>
  <main>
    <h1>Doctors</h1>
    <ul>
      <li v-for="doctor in doctors" :key="doctor._id">
        <p>{{ doctor.name }}</p>
      </li>
    </ul>
  </main>
</template>
