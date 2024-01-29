<script>
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'

export default {
  name: 'doctorInfoView',
  data() {
    return {
      doctor: null,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(useDoctorStore, ['fetchDoctor'])
  },
  async created() {
    this.isLoading = true
    this.doctor = await this.fetchDoctor(this.$route.params.doctorId)
    this.isLoading = false
  }
}
</script>

<template>
  <p v-if="isLoading">loading...</p>
  <main v-if="!isLoading">
    <h1>Doctor</h1>
    <p>{{ doctor.name }} {{ doctor.lastName }}</p>
  </main>
</template>
