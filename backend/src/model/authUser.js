const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')

const authUserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
})

class AuthUser {}

authUserSchema.plugin(passportLocalMongoose, { usernameField: 'email' })
authUserSchema.loadClass(AuthUser)
module.exports = mongoose.model('AuthUser', authUserSchema)
