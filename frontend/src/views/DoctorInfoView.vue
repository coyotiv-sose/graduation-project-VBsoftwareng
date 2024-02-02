<script>
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'doctorInfoView',
  components: {
    FullCalendar
  },
  data() {
    return {
      doctor: null,
      isLoading: false,
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: 'dayGridMonth',
        selectable: true,
        events: [
          { title: 'event 1', date: '2024-02-03' },
          { title: 'event 2', date: '2024-03-03' }
        ]
      }
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
    <FullCalendar :options="calendarOptions" />
  </main>
</template>
