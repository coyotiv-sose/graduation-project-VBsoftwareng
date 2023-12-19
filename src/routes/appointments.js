var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send({ title: 'SiDoctor' })
})

module.exports = router

// appointments => get all appointments
// appointments/appointmentId => get one specific appointment with id
// doctors/doctortName/reviews - get => get all reviews for that specific doctor
// doctors/doctortName/reviews - post => create a new review
