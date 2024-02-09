<script>
import { usePatientStore } from '@/stores/patient'
import { mapActions } from 'pinia'

export default {
  name: 'PatientProfileView',
  components: {},
  data() {
    return {
      patient: null,
      isLoading: false
    }
  },

  methods: {
    ...mapActions(usePatientStore, ['fetchPatient'])
  },
  async created() {
    this.isLoading = true
    this.patient = await this.fetchPatient(this.$route.params.patientId)
    this.isLoading = false
  }
}
</script>

<template>
  <p v-if="isLoading">loading...</p>
  <main v-if="!isLoading">
    <h1>Patient</h1>
    <p>{{ patient.name }} {{ patient.lastName }}</p>
  </main>
</template>
