var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
require('dotenv').config()
require('./database-connection')
console.log(process.env.MONGODB_CONNECTION_STRING)

var indexRouter = require('./routes/index')
var patientsRouter = require('./routes/patients.js')
var doctorsRouter = require('./routes/doctors.js')
var appointmentsRouter = require('./routes/appointments.js')
var medicalRecordsRouter = require('./routes/medicalRecords.js')
var authenticationRouter = require('./routes/authentication.js')

// communication to the frontend
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

var app = express()

// requires the model with Passport-Local Mongoose plugged in

const passport = require('passport')
const User = require('./model/authUser')

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
console.log(process.env.ENVIRONMENT === 'production')

let connectionPromise = mongoose.connection.asPromise().then(connection => (connectionPromise = connection.getClient()))

app.use(cors())
app.use(
  session({
    secret: 'SuperSecureSecretNobodyKnows', // is required to enrcypt your session specifically to you like
    resave: false, // Forces the session to be saved back to the session store, even if the session was never modified
    saveUninitialized: true,
    cookie: {
      secure: process.env.ENVIRONMENT === 'production', // TODO: set to true when using https
      httpOnly: process.env.ENVIRONMENT === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 14, // how long the cookie is valid in ms
    },
    store: MongoStore.create({
      clientPromise: connectionPromise,
      stringify: false,
    }),
  })
)
passport.use(User.createStrategy())

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())
// intercept any http request to the backend
app.use((req, res, next) => {
  const numberOfVisits = req.session.numberOfVisits || 0
  req.session.numberOfVisits = numberOfVisits + 1
  req.session.blubb = 'blubb'
  req.session.history = req.session.history || []
  req.session.history.push(req.url)
  req.session.ip = req.ip
  req.session.userName = 'Pipo'

  //console.log('Show me my request:', req.session)

  next()
})

app.use(passport.session())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/patients', patientsRouter)
app.use('/doctors', doctorsRouter)
app.use('/appointments', appointmentsRouter)
app.use('/medicalRecords', medicalRecordsRouter)
app.use('/authentication', authenticationRouter)

// intercept any http request to the backend

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

app.createSocketServer = function (server) {
  const io = require('socket.io')(server, {
    cors: {
      origin: true,
      credentrials: true,
    },
  })

  console.log('Server side socket connection open')

  io.on('connection', socket => {
    console.log('a user connected')

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

console.log(`i am alive!`)

module.exports = app
