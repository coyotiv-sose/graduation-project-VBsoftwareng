const mongoose = require('mongoose')

// const username = process.env.MONGODB_USERNAME
// const password = process.env.MONGODB_PASSWORD
// const dbName = process.env.MONGODB_DATABASE
// const port = process.env.MONGODB_PORT
//let connectionString = process.env.MONGODB_CONNECTION_STRING

// if (!connectionString){
//   connectionString = mongo
// }

mongoose.connect(process.env.MONGODB_CONNECTION_STRING).then(() => console.log('conected to mongodb'))

//const Cat = mongoose.model('Cat', { name: String })

// // const connectionString = process.env.MONGODB_REMOTE
// //   ? `mongodb+srv://${username}:${password}@${dbName}?retryWrites=true&w=majority`
// //   : `mongodb://localhost:27017/${dbName}`

// // mongoose.connect(conecctionString, {})

// const kitty = new Cat({ name: 'Zildjian', })
// kitty.save().then(() => console.log('meow'))
