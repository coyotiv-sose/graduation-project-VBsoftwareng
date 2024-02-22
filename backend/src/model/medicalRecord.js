const mongoose = require('mongoose')

const medicalRecordSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
      autopopulate: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    prescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

medicalRecordSchema.plugin(require('mongoose-autopopulate'))
module.exports = mongoose.model('MedicalRecord', medicalRecordSchema)

//convert to mongoose
// update models doctor and patient
//update routes handlers mediacl record creation

//update
