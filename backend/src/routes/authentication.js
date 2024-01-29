var express = require('express')
var router = express.Router()
const User = require('../model/authUser')
const passport = require('passport')
const welcomeGenerator = require('../api/welcome-generator')

router.post('/newUser', async function (req, res, next) {
  const { name, lastName, email, password } = req.body
  const newUser = await User.register({ name, lastName, email }, password, function (err, user) {
    if (err) {
      console.log('Error on user auth creation' + err)
    }
    //res.send(user)
  })

  //fetch session user
  router.get('/session', async function (req, res) {
    console.log('fetch session user')
    res.send(req.user)
  })
  // const newUser = new User({ username: req.body.email, nickName: req.body.nickName });
  // await newUser.setPassword(req.body.password);
  // await newUser.save();

  res.send(newUser)
})

router.post('/session', passport.authenticate('local', { failWithError: true }), function (req, res) {
  console.log('User is authenticated')
  res.send(req.user)
})
router.get('/session', function (req, res) {
  res.send(req.user)
})

router.post('/welcome', async function (req, res) {
  const { name, date, location } = req.body

  const msg = await welcomeGenerator({ name, date, location })

  res.send(msg.content)
})
// console.log('Message is: ', msg.content);

module.exports = router
