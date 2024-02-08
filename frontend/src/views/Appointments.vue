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
    <div class="header">{{ appointment.time }} on {{ appointment.date }}</div>
    <div>
      You have an appointment with Doctor {{ appointment.doctor.name }}
      {{ appointment.doctor.lastName }}
    </div>

    <div class="button-box">
      <button class="button" @click="goToDetails(appointment.doctor._id)">Details</button>

      <button class="button" @click="">Cancel</button>
    </div>
  </div>

  <br />
</template>
<style scoped>
.appointment-box {
  /* border: 1px solid black; */
  width: 60vw;
  height: 20vh;
  /* padding: 10px; */
  display: inline-block;
  margin: 10px;
  background-color: #9fc2da;
  border-radius: 25px;
}
.header {
  background-color: #5195a0;

  border-radius: 25px 25px 0 0;
  padding-left: 20px;
}
.button {
  margin-left: 35px;
  border-radius: 5px;
}
.button-box {
  margin-bottom: 5px;
}
</style>
