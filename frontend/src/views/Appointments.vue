<script>
import { useAppointmentStore } from '@/stores/appointment'
import { mapActions } from 'pinia'
import { mapState } from 'pinia'

export default {
  name: 'AppointmentsView',
  components: {},
  data() {
    return {}
  },
  methods: {
    ...mapActions(useAppointmentStore, ['fetchAppointments']),
    goToDetails(doctorId) {
      this.$router.push(`/doctors/${doctorId}`)
    },

    async cancelAppointment(appointmentId) {
      try {
        await axios.put(`/appointments/${appointmentId}`, { status: 'canceled' })
        // Update UI !!, maybe remove the appointment from the list or show it as canceled
        alert('Appointment canceled successfully')
      } catch (error) {
        console.error('Error canceling the appointment:', error)
      }
    }
  },
  async mounted() {
    await this.fetchAppointments()
  },
  computed: {
    ...mapState(useAppointmentStore, ['appointments'])
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

      <button class="button" @click="cancelAppointment(appointment.doctor._id)">Cancel</button>
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
  background-color: #cfdce4;
  border-radius: 25px;
}
.header {
  background-color: #35a1df;

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
