<script>
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'

export default {
  name: 'DoctorsPatientsView',
  components: {},
  data() {
    return {
      patients: []
    }
  },
  methods: {
    ...mapActions(useDoctorStore, ['fetchPatients'])
  },
  async mounted() {
    this.patients = await this.fetchPatients()
  }
}
</script>
<template>
  <main>
    <h1>Patients</h1>

    <ul>
      <li v-for="patient in patients" :key="patient._id">
        <p>{{ patient.name }} {{ patient.lastName }}</p>
        <RouterLink to="/">Medical Records</RouterLink>
      </li>
    </ul>
  </main>
</template>
<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50vh;
}
</style>
