<script>
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'
import VueMeetingSelector from 'vue-meeting-selector'
import 'vue-meeting-selector/dist/style.css'
// Function used to generate slots, use your own function
import slotsGenerator from '@/components/slotsGenerator'

// import FullCalendar from '@fullcalendar/vue3'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import interactionPlugin from '@fullcalendar/interaction'

export default {
  name: 'doctorInfoView',
  components: {
    // FullCalendar
    VueMeetingSelector
  },
  data() {
    return {
      doctor: null,
      isLoading: false,
      meeting: null,
      meetingsDays: [],
      date: new Date(),
      loading: true

      // calendarOptions: {
      //   plugins: [dayGridPlugin, interactionPlugin],
      //   initialView: 'dayGridMonth',
      //   selectable: true,
      //   events: [
      //     { title: 'event 1', date: '2024-02-03' },
      //     { title: 'event 2', date: '2024-03-03' }
      //   ]
      // }
    }
  },
  computed: {
    nbDaysToDisplay() {
      return 5
    },
    classNames() {
      return {
        tabLoading: 'loading-div'
      }
    }
  },
  methods: {
    ...mapActions(useDoctorStore, ['fetchDoctor']),
    bookAppointment() {},
    async slotsGeneratorAsync(
      // date
      d,
      // nbDaysToDisplay
      n,
      start,
      end,
      timesBetween
    ) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(slotsGenerator(d, n, start, end, timesBetween))
        }, 1000)
      })
    },

    async nextDate() {
      this.loading = true
      const start = {
        hours: 8,
        minutes: 0
      }
      const end = {
        hours: 16,
        minutes: 0
      }
      const dateCopy = new Date(this.date)
      const newDate = new Date(dateCopy.setDate(dateCopy.getDate() + 7))
      this.date = newDate
      this.meetingsDays = await this.slotsGeneratorAsync(
        newDate,
        this.nbDaysToDisplay,
        start,
        end,
        30
      )
      this.loading = false
    },
    async previousDate() {
      this.loading = true
      const start = {
        hours: 8,
        minutes: 0
      }
      const end = {
        hours: 16,
        minutes: 0
      }
      const dateCopy = new Date(this.date)
      dateCopy.setDate(dateCopy.getDate() - 7)
      const formatingDate = (dateToFormat) => {
        const d = new Date(dateToFormat)
        const day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        const month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
        const year = d.getFullYear()
        return `${year}-${month}-${day}`
      }
      const newDate =
        formatingDate(new Date()) >= formatingDate(dateCopy) ? new Date() : new Date(dateCopy)
      this.date = newDate
      this.meetingsDays = await this.slotsGeneratorAsync(
        newDate,
        this.nbDaysToDisplay,
        start,
        end,
        30
      )
      this.loading = false
    }
  },
  async created() {
    this.isLoading = true
    this.doctor = await this.fetchDoctor(this.$route.params.doctorId)
    this.isLoading = false
  },
  async mounted() {
    const start = {
      hours: 8,
      minutes: 0
    }
    const end = {
      hours: 16,
      minutes: 0
    }
    this.meetingsDays = await this.slotsGeneratorAsync(
      this.date,
      this.nbDaysToDisplay,
      start,
      end,
      30
    )
    this.loading = false
  }
}
</script>

<template>
  <p v-if="isLoading">loading...</p>
  <main v-if="!isLoading">
    <h1>Doctor</h1>
    <p>{{ doctor.name }} {{ doctor.lastName }}</p>
    <button>Book Appointment</button>
    <button @click="goToDetails(doctor._id)">Details</button>
    <p>{{ doctor.specialty }}</p>

    <div class="simple-example">
      <vue-meeting-selector
        class="simple-example__meeting-selector"
        v-model="meeting"
        :date="date"
        :loading="loading"
        :class-names="classNames"
        :meetings-days="meetingsDays"
        @next-date="nextDate"
        @previous-date="previousDate"
      />

      <p>meeting Selected: {{ meeting ? meeting : 'No Meeting selected' }}</p>
    </div>
  </main>
</template>
<style scoped lang="scss">
.simple-example {
  &__meeting-selector {
    max-width: 542px;
  }
}
// since our scss is scoped we need to use ::v-deep
:deep(.loading-div) {
  top: 58px !important;
  meeting-selector {
    top: 58px !important;
  }
}
</style>
