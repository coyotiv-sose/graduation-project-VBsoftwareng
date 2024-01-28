<script>
import { usePatientStore } from '@/stores/patient'
import { mapActions } from 'pinia'

export default {
  name: 'PatientView',
  components: {},
  data() {
    return {
      patients: []
    }
  },
  methods: {
    ...mapActions(usePatientStore, ['fetchPatients'])
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
        <p>{{ patient.name }}</p>
      </li>
    </ul>
  </main>
</template>
