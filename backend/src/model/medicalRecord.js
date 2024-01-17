class MedicalRecord {
  constructor(patient, diagnosis, prescription) {
    this.patient = patient.name
    this.diagnosis = diagnosis
    this.prescription = prescription
  }
}
module.exports = MedicalRecord
