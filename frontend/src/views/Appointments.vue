<script>
import { useAppointmentStore } from '@/stores/appointment'
import { mapActions } from 'pinia'

export default {
  name: 'AppointmentsView',
  components: {},
  data() {
    return {
      appointments: []
    }
  },
  methods: {
    ...mapActions(useAppointmentStore, ['fetchAppointments']),
    goToDetails(doctorId) {
      this.$router.push(`/doctors/${doctorId}`)
    }
  },
  async mounted() {
    this.appointments = await this.fetchAppointments()
  }
}
</script>
<template>
  <!-- <Header>Header</Header> -->
  <!-- Welcome on Board <this class="user">{{ user.name }}</this> -->
  <!-- <h1>Your Appointments</h1> -->

  <div class="appointment-box" v-for="appointment in this.appointments" :key="appointment._id">
    <text>
      You have an appointment with Doctor {{ appointment.doctor.name }}
      {{ appointment.doctor.lastName }} at {{ appointment.time }} on {{ appointment.date }}
    </text>

    <br />
    <button @click="goToDetails(appointment.doctor._id)">Details</button>

    <button @click="">Cancel</button>
  </div>

  <br />
</template>
<style scoped>
.appointment-box {
  border: 1px solid black;
  width: 50vw;
  height: 20vh;
  padding: 10px;
  display: inline-block;
  margin: 10px;
  background-color: darkgray;
}
</style>
