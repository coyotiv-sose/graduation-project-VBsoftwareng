class Doctor {
  appointments = []
  labResults = []
  //package =

  constructor(name, lastName, especialization) {
    this.name = name
    this.lastName = lastName
    this.especialization = especialization
  }
}

module.exports = Doctor
