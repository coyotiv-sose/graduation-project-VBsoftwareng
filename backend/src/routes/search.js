const express = require('express')
const router = express.Router()
const Doctor = require('../model/doctor')

router.get('/:query', async function (req, res, next) {
  console.log('doctorType', req.params.query)
})

module.exports = router
