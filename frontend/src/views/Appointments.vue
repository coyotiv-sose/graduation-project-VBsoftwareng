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
    ...mapActions(useAppointmentStore, ['fetchAppointments'])
  },
  async mounted() {
    this.appointments = await this.fetchAppointments()
  }
}
</script>
<template>
  <main>
    <h1>Appointments</h1>
    <ul>
      <li v-for="appointment in appointments" :key="appointment._id">
        <p>{{ appointment.doctor.name }}</p>
        <p>{{ appointment.patient.name }}</p>
        <p>{{ appointment.date }}</p>
        <p>{{ appointment.time }}</p>
      </li>
    </ul>
  </main>
</template>
