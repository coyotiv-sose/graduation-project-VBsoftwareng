<script>
import { RouterLink } from 'vue-router'
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'

export default {
  name: 'DoctorsView',
  components: {},

  data() {
    return {
      allDoctors: []
    }
  },
  methods: {
    ...mapActions(useDoctorStore, ['fetchDoctors']),
    goToDetails(doctorId) {
      this.$router.push(`/doctors/${doctorId}`)
    }
  },
  async mounted() {
    this.allDoctors = await this.fetchDoctors()
  }
}
</script>
<template>
  <main>
    <h1>Doctors</h1>

    <ul>
      <li v-for="doctor in allDoctors" :key="doctor._id">
        <!--<router-link to="/doctors/:doctor._id">doctor.name</router-link>-->
        <p>{{ doctor.name }}</p>
        <p>{{ doctor._id }}</p>
        <button @click="goToDetails(doctor._id)">Doctor info</button>
      </li>
    </ul>
  </main>
</template>
