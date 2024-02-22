<script>
import { useDoctorStore } from '@/stores/doctor'
import { mapActions } from 'pinia'

export default {
  name: 'MedicalRecordsView',
  components: {},
  data() {
    return {
      medicalRecords: [],
      patient: ''
    }
  },
  methods: {
    // add findPatientMedicalRecord(patient) action in the related store and map it here
    ...mapActions(useDoctorStore, ['findPatientMedicalRecord']),
    ...mapActions(useDoctorStore, ['createMedicalRecord'])
  }
}
</script>
<template>
  <main>
    <h1>Medical Records</h1>
    <div>
      <h2>Search for patient medical record</h2>
      <input type="text" v-model="patient" placeholder="Search for patient medical record" />
      <button @click="findPatientMedicalRecord(this.patient)">Search</button>
    </div>
    <div>
      <h2>Create a new medical record</h2>
      <input type="text" v-model="patient" placeholder=" Create a new Medical record for patient" />
      <input type="text" v-model="createMedicalRecord" placeholder="Medical Record" />
      <button @click="createMedicalRecord(patient, createMedicalRecord)">Create</button>
    </div>
    <div>
      <h2>Show this patient's medical records</h2>
      <ul>
        <li v-for="medicalRecord in medicalRecords" :key="medicalRecord._id">
          <p>{{ medicalRecord.name }} {{ medicalRecord.lastName }}</p>
          <p>{{ medicalRecord.medicalRecord }}</p>
        </li>
      </ul>
    </div>
  </main>
  ``
  <!-- create a new medical record need to add 2more divs -->
  <!-- show patient's medical records -->
</template>
<style scoped></style>
